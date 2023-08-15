<template>
    <Navbar />
    <div class="card-form">
        <div class="card-form-title">
            <h2>Edit your article</h2>
        </div>
        <form @submit.prevent="handleEdit">
            <div>
                <label for="title">Title</label>
                <input type="text" id="title" v-model="title" >
            </div>
            <div>
                <label for="content">Content</label>
                <textarea id="content" cols="30" rows="10" v-model="content"  ></textarea>
            </div>
            <div class="box">
                <label for="option">Category</label>
                <select id="option" v-model="category">
                    <option value="FOOD">Food</option>
                    <option value="TRAVEL">Travel</option>
                    <option value="TECHNOLOGY">Technology</option>
                </select>
            </div>
            <div>
                <label for="img">Upload image</label>
                <input type="file" id="img" accept="image/jpeg,image/png,image/gif" @change="handleImage"/>
            </div>
            <div>
                 <button class="edit" type="submit">
                    Edit
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>

                </button>
            </div>
        </form>
    </div>

    <Footer />
</template>
 
<script setup>

import {useArticle} from '~/store/article'
definePageMeta({
    layout: false
})



//state
let title = ref('')
let content = ref('')
let category = ref('')
const image_art = ref('')
let article
//get the art with id
const route = useRoute()

article = useArticle()
await article.GetArticle(route.params.id)

title.value = article.article.title
content.value = article.article.content
category.value = article.article.category
function handleImage(event){
    image_art.value = event.target.files[0]
}
async function handleEdit(post){
    article.GetArticle(route.params.id)
    if(title && content && category){
       await  article.EditArticle({
        id: route.params.id,
        title:title.value,
        content: content.value,
        category:category.value,
        image_art: image_art.value
    })
    navigateTo('/profile')
    }
}




</script>
 
<style  scoped>
.card-form {
    margin-top: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

/*card form input */
.card-form-title {
    padding: 20px 0;
    text-align: center;
}

form {
    width: 70%;
    background-color: #fff;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 14px 9px rgba(0, 0, 0, 0.1);
}

form>div {
    width: 90%;
    margin: 10px 0;
}

form>div input,
form>div textarea {
    width: 100%;
    padding: 7px;
    border-radius: 4px;
    border: 1px solid #ddd;
}



.edit {
    background-color: #0ead69;
    width: 100%;
    padding: 10px 0;
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: none;
    color: #fff;
}
button svg{
    width: 20px;
    margin-left: 10px;
}

label {
    display: block;
    font-size: 17px;
}

input[type="file"] {
    color: #000;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 20px;
    -webkit-appearance: button;
    appearance: button;
    cursor: pointer;

}


/*select option style */
.box select {
    color: #000;
    padding: 12px;
    width: 250px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 20px;
    -webkit-appearance: button;
    appearance: button;
    cursor: pointer;

}

.box::before {
    content: "\f13a";
    font-family: FontAwesome;
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: 100%;
    text-align: center;
    font-size: 28px;
    line-height: 45px;
    color: rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.1);
    pointer-events: none;
}

.box:hover::before {
    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.2);
}

.box select option {
    padding: 30px;
}

@media screen and (min-width:1200px) {
    form {
        width: 50%;
    }
}

@media screen and (max-width:768px) {
    form {
        width: 90%;
    }
}

@media screen and (max-width:450px) {
    form {
        width: 95%;
    }

    form>div {
        width: 100%;
        margin: 10px 0;
    }
}</style>