import { defineStore } from "pinia";
import useAxios from '~/store/useAxios'
import axios from 'axios'

export const useArticle = defineStore('article', {
    state: () => {
        return {
            articles: [],
            article: [],
            data: [],
            loading: false,
            error: null
        }
    },
    actions: {

        //get all articles on index base page
        async GetArticles() {
            try{
                this.loading= true
                const res = await fetch('http://127.0.0.1:8000/articles/')
                if(!res.ok){
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json()
                this.articles = data
                this.loading = false
            }catch(error){
                this.error= error.message
            }
        },
        //get one article details
        async GetArticle(id) {       
            try{
                this.loading = true 
                const res = await useAxios().get(`/article/${id}/`)
                if (res.status !== 200) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                this.article = res.data
                this.loading=false
            }catch (error){
                this.error = error.message
            }

        },
        //create an article
        async CreateArticle(data){
            let article = data
            try{
                this.loading = true 
                const res = await useAxios().post('/create-article/',article,{
                    headers:{
                        'Content-Type':  'multipart/form-data',
                    }
                })
                if (res.status !== 201) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
              
                this.data.push(res.data)
                this.loading=false
            }catch (error){

                this.error = error.message
            }
        },
        //edit article 
        async EditArticle(data){
            const {id, title, content, category,image_art}  = data
            try{
                this.loading = true 
                const res = await useAxios().put(`/update-article/${id}/`,{
                    title:title,
                    content:content,
                    category: category,
                    image_art: image_art,
                },{
                    headers:{
                        'Content-Type':  'multipart/form-data',
                    }
                })
                if (res.status !== 200) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                else if (res.status === 200){
                    const filtredData = this.data.filter(art => art.id != id)
                    this.data = [...filtredData, res.data]
                    this.loading=false
                }
            }catch (error){
                this.error = error.message
            }

        },
        //delete article
        async DeleteArticle(id){
            try{
                this.loading = true 
                const res = await useAxios().delete(`/delete-article/${id}/`)
                if (res.status !== 204) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                else if (res.status === 204){
                    const filtredData = this.data.filter(art => art.id != id)
                    this.data = filtredData
                    this.loading=false
                }
            }catch (error){
                this.error = error.message
            }

        },
        //get private user data
        async GetData(){
            try{
                this.loading = true 
                const res = await useAxios().get("/p-articles/")
                if (res.status !== 200) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                this.data = res.data
                this.loading=false
            }catch (error){
                this.error = error.message
            }

        },
        async addRating(data){
            let {id, title} = data
            try{
                this.loading = true 
                const res = await useAxios().post('/ratings/',{'title':title})
                if (res.status !== 201) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const filtredData = this.data.filter(art => art.id != id)
                this.data = [...filtredData, res.data]
                this.loading=false
            }catch (error){

                this.error = error.message
            }
        }
    }
})

//when we finish the crud we need to go intro component like loading and errror
//authenticaion afet comment add rating and private articles and custom user
