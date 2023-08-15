<template>
    <div class="card-container">
        <!---build article-->
        <CardForm/>
        <!--articles list-->
        <div>
            <div class="card-title">
                <h2>Your artciles</h2>
            </div>
            <div class="card-box">
            <div v-for="article in data.data" :key="article.id">
                <CustomCard :article="article"/>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import { useArticle } from '~/store/article';
import { useUser } from '~/store/user';

definePageMeta({
    layout: 'custom'
})

//get data
let data = useArticle()
data.GetData()



</script>

<style scoped>
.card-container {
    width: 100%;
    margin-top: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

/*card box */
.card-title{
    padding: 50px 0;
    text-align: center;
}

.card-box{
    padding: 0 20px;
    width: 1000px;
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    place-items: center;
    gap: 20px;
}

.card-box > div {
    width: 320px;
}

@media screen and (min-width:1380px) {
    .card-box{
    padding: 0 20px;
    width: 1380px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
}

}

@media screen and (max-width:1024px) {
    .card-box{
    padding: 10px 20px;
    width: 700px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

}

@media screen and (max-width:680px) {
    .card-box{
    padding: 0 20px;
    width: 400px;
    display: grid;
    grid-template-columns:  1fr;
    gap: 20px;
}

}


</style>