<template>
    <div class="card-container">
        <div class="card-title">
            <h2>Latest <span>articles</span></h2>
        </div>
        <div class="card-box">
            <div v-for="article in articles.articles" :key="article.id">
                <ArticleCard :article="article"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useArticle} from '~/store/article'

//get all base article 
const articles = useArticle()
await articles.GetArticles()


//handle ratings

</script>

<style  scoped>
/*Card container */
.card-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
/*card title */
.card-title{
    padding: 20px 0;
    text-align: center;
    width: 100%;
}
.card-title span{
    color: #00509c;
}
/*card box */
.card-box{
    margin-top: 20px;
    padding: 0 20px;
    width: 1000px;
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    justify-content: center;
    place-items: center;
    gap: 20px;
}

@media screen and (min-width:1380px) {
    .card-box{
    padding: 0 20px;
    width: 1380px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    place-items: center;
    gap: 20px;
}

}

@media screen and (max-width:1024px) {
    .card-box{
    padding: 0 20px;
    width: 700px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    place-items: center;
    gap: 20px;
}

}

@media screen and (max-width:680px) {
    .card-box{
    padding: 0 20px;
    width: 400px;
    display: grid;
    grid-template-columns:  1fr;
    justify-content: center;
    place-items: center;
    gap: 20px;
}

}
</style>