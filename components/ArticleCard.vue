<template>
    <div class="card-article" >
        <img :src="'http://127.0.0.1:8000/'+ article.image_art" :alt="article.title">
        <div class="card-content">
            <NuxtLink :to="`/articles/${article.id}`"> <h3>{{ article.title.substring(0,25)+ '...' }}</h3></NuxtLink>
            <p>{{ article.content.substring(0,150)+ '...' }}</p>
            <p><strong>{{ article.date_pub }}</strong></p>
            <p class="ctgr"><strong>#{{article.category}}</strong></p>
            <p><strong>{{ article.rating.reduce((a,b)=> {return a+b},0) }}</strong> 
                <svg @click="handleRating(article.id, article.title)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
            </p>
        </div>
        <div class="card-auth">
            <img src="/img/icon.png" alt="">
            <p><strong>@{{ article.author }}</strong></p>
        </div>
    </div>
</template>

<script setup>
import {useArticle} from '~/store/article'
const {article} = defineProps(['article'])
async function handleRating(art_id,art_title){
    const articles = useArticle()
    await articles.addRating({
        id:art_id,
        title:art_title,
    })
     await articles.GetArticles()
}


</script>

<style scoped>
.card-article{
    width: 320px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 0px 14px 9px rgba(0,0,0,0.1);
}

/*img card */
.card-article > img{
    height: 280px;
    width: 320px;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
}
/*card content */
.card-content{
    padding: 10px;

}
.card-content a{
    color: #000;
}
.card-content p{
    display: flex;
    align-items: center;
}
.card-content svg{
    margin: 0 5px;
    width: 20px;
    color: #002a6d;
    cursor: pointer;
}
.ctgr{
    color: #00509c;
}
/*card auth*/
.card-auth{
    border-top: 1px solid #ddd;
    padding: 10px;
    display: flex;
    align-items: center;
}
.card-auth p{
    margin: 0 15px;
    text-transform: uppercase;
    text-decoration: underline;
    color: #002a6d;
}
.card-auth img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #00509c;
    object-fit: cover;
    object-position: center;
}

@media screen and (max-width:400px) {
    .card-article{
    width: 300px;
    }
    .card-article > img{
    width: 300px;
    }
}
</style>