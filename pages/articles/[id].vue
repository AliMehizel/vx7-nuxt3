<template>
    <Navbar />
    <div class="article-container">
        <div class="article-details">
            <img :src="'http://127.0.0.1:8000/'+ article.article.image_art" :alt="article.article.title">
            <div class="d-content">
                <h1>{{ article.article.title }}</h1>
                <p>{{ article.article.content }}</p>
                <p><strong>{{ article.article.date_pub }}</strong></p>
                <p><strong style="color: #002a6d;">#{{ article.article.category }}</strong></p>
                <!-- <p class="like"><strong>{{ article.article.rating.reduce((a,b)=> {return a+b},10)}}</strong> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                    </svg>
                </p> -->
                <div class="d-auth">
                    <img src="/img/icon.png" alt="">
                    <p><strong><a href="#">@{{ article.article.author }}</a></strong></p>
                </div>
            </div>
        </div>
        <div class="comment-container">
            <div class="comment-list" v-for="c in comment.comment" :key="comment.id">
                <p>Commented by: <strong>@{{ c.user }}</strong></p>
                <p>{{ c.context }}</p>

            </div>
            <div class="comment-input">
                <form @submit.prevent="handleComment">
                    <input type="text" placeholder="Enter comment here.." v-model="context">
                     <button type="submit">Comment</button>
                </form>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import {useArticle} from '~/store/article'
import {useComment} from '~/store/comment'
definePageMeta({
    layout: false
})
const route = useRoute()
const article = useArticle()
article.GetArticle(route.params.id)

let context = ref('')
let comment = useComment()
comment.GetComment(route.params.id)

//handle create comment
async function handleComment (){
    
    await comment.createComment({
        article: route.params.id,
        context: context.value
    })
    await comment.GetComment(route.params.id)
    context.value =''
    
}
</script>

<style  scoped>
.article-container {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.article-details{
    width: 80%;
    border-radius: 4px;
    border: 1px solid #ddd;
}
.article-details img{
    width: 100%;
}
.d-content{
    padding: 15px;
}

.like {
    display: flex;
    align-items: center;
}

svg {
    margin-left: 5px;
    width: 30px;
    color: blue;
}
/*auth d */
.d-auth{
    padding: 15px;
    border-top: 1px solid #ddd;
    margin-top: 10px;
    display: flex;
    align-items: center;
}
.d-auth p{
    margin-left: 10px;
    text-transform: capitalize;
}
.d-auth img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid blue;
}

/*comment */
.comment-container{
    padding: 10px;
    margin-top: 50px;
    width: 80%;
    border-radius: 4px;
    border: 1px solid #ddd;
}

.comment-list{
    border: 1px solid #ddd;
    padding: 5px;
}

.comment-list p strong{
    text-transform: uppercase;
    text-decoration: underline;
    color: #002a6d;
}

.comment-input{
    margin-top: 20px;
}
.comment-input input{
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border: 1px solid #ddd;
}
.comment-input button{
    padding: 7px;
    font-size: 17px;
    font-weight: 700;
    margin: 5px 0;
    display: block;
    width: 100%;
    background-color: #002a6d;
    color: #fff;
    border-radius: 4px;
    border: none;
    cursor: pointer;
}

@media screen and (max-width:450px) {
    .article-details{
    width: 90%;
}

.comment-container{
    width: 90%;
}
}

@media screen and (min-width:1200px) {
    .article-details{
    width: 60%;
}

.comment-container{
    padding: 10px;
    margin-top: 50px;
    width: 60%;

}
}
</style>