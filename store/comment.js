import { defineStore } from "pinia";
import useAxios from '~/store/useAxios'
import axios from 'axios'

export const useComment = defineStore('comment', {
    state: () => {
        return {
            comment: [],
            loading: false,
            error: null
        }
    },
    actions: {
        async GetComment(id) {
            //http://127.0.0.1:8000/dj-rest-auth/user/
            try {
                this.loading = true
                const res = await axios.get(`/comments/${id}`)
                if (res.status !== 200) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                this.comment = res.data
                this.loading = false
            } catch (error) {
                this.error = error.message
            }

        },
        async createComment(data) {

            try {
                this.loading = true
                const res = await useAxios().post('/comments/',data )

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                this.comment.push(res.data)

                //this.user = data
                this.loading = false
            }
            catch (error) {
                this.error = error.message
            }
        }
    }
})