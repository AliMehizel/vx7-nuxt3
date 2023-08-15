<template>
    <div class="card-article">
        <img :src="'http://127.0.0.1:8000/'+ article.image_art" :alt="article.title">
        <div class="card-content">
            <NuxtLink :to="`/articles/${article.id}`">
                <h3>{{ article.title.substring(0,25)+ '...' }}</h3>
            </NuxtLink>
            <p>{{ article.content.substring(0,200)+ '...' }}</p>
            <p><strong>{{ article.date_pub }}</strong></p>
            <p class="ctgr"><strong>#{{ article.category }}</strong></p>
            <p><strong>{{article.rating.reduce((a,b)=> {return a+b},0)}}</strong> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
            </p>
        </div>
        <div class="card-btn">
           <!--  <NuxtLink :to="`/articles/edit/${id}`">     </NuxtLink> -->
           <NuxtLink :to="`/articles/edit/${article.id}`">   
           <button class="edit">
                Edit
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>

            </button>
        </NuxtLink> 
            <button class="remove" @click="handleDelete(article.id)">
                Remove
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>

            </button>
        </div>
    </div>
</template>

<script setup>
import { useArticle } from '~/store/article';
const {article} = defineProps(['article'])
//deletearticle
function handleDelete (id){
    const data = useArticle()
    data.DeleteArticle(id)
}

</script>

<style scoped>
.card-article {
    width: 320px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 0px 14px 9px rgba(0, 0, 0, 0.1);
}

/*img card */
.card-article>img {
    width: 320px;
    height: 320px;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
}

/*card content */
.card-content {
    padding: 10px;

}
 a{
    color: #000;
 }
.card-content p {
    display: flex;
    align-items: center;
}

.card-content svg {
    margin: 0 5px;
    width: 20px;
    color: #002a6d;
}

.ctgr {
    color: #00509c;
}

/*card auth*/
.card-btn {
    border-top: 1px solid #ddd;
    padding: 10px 5px;
    display: flex;
    align-items: center;
}

.card-btn .remove {
    margin: 0 15px;
    background-color: #ef233c;
}

.edit {
    background-color: #0ead69;
}

.card-btn button {
    font-weight: 700;
    border-radius: 4px;
    font-size: 16px;
    padding: 7px;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
}

button svg{
    width: 20px;
    margin-left: 5px;
}
@media screen and (max-width:400px) {
    .card-article {
        width: 300px;
    }

    .card-article>img {
        width: 300px;
    }
}</style>