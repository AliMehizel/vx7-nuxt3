<template>
    <div class="home-container">
        <div class="home-box">
            <div class="home-title">
                <h2>Search for articles here ..</h2>
            </div>
            <!---search-->
            <div class="search-bar">
                <div class="category-select">
                    <select id="category-dropdown">
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                        <option value="4">Category 4</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>
                <div class="input-search">
                    <input type="text" placeholder="Seach articles..">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>

            </div>
            <!---article list-->
            <div class="card-box">
                <div class="card-box-title">
                    <h2>Latest articles</h2>
                </div>

                <div class="card-box-list">
                    <div v-for="article in articles.articles" :key="article.id">
                        <ArticleCard :article="article"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="side-bar">
            <div class="tags">
                <strong>#PROGRAMMING</strong>
                <strong>#MACHINE LEARNING</strong>
                <strong>#TRAVEL</strong>
                <strong>#RECIPE</strong>
                <strong>#BLOG</strong>
                <strong>#FOOD</strong>
                <strong>#HTML</strong>
                <strong>#CSS</strong>
                <strong>#MOTIVATION</strong>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useArticle} from '~/store/article'
definePageMeta({
    layout: 'custom'
})



//get all base article 
const articles = useArticle()
articles.GetArticles()

</script>

<style  scoped>
.home-container {
    margin-top: 80px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 300px;
    

}


/*hoem title */
.home-title {
    padding: 30px 0;
    width: 100%;
    text-align: center;
}

/*home box */
.home-box {
    grid-column: 1 / span 2;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid #ddd;

}

/*home search  */

.search-bar {
    box-shadow: 0px 0px 14px 9px rgba(0, 0, 0, 0.1);
    padding: 5px;
    background-color: #fff;
    display: flex;
    align-items: center;
    border-radius: 4px;
    width: 100%;
}

.input-search {
    width: 100%;
}

.input-search input {
    padding: 10px;
    width: 85%;
    border: none;
    font-size: 18px;
}


.input-search svg {
    width: 35px;
    color: #000;
    vertical-align: middle;
    cursor: pointer;
}

/*category option */
#category-dropdown {
    padding: 10px;
    border: none;
    background-color: #fff;
    cursor: pointer;
    font-size: 16px;
}

/* Style the dropdown arrow */
#category-dropdown:after {
    content: "\25BC";
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
}


/* Style the options on hover */
#category-dropdown option:hover {
    background-color: #f5f5f5;
    cursor: pointer;
}

/* Style the options when selected */
#category-dropdown option:checked {
    background-color: #007BFF;
    color: #fff;

}




@media screen and (max-width:386px) {
    .input-search input {
        width: 80%;
    }
}

/*card box */
.card-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

.card-box-title {
    width: 100%;
    text-align: center;
    padding: 20px 0;
}

.card-box-list {
    margin-top: 20px;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    place-items: center;
    gap: 20px;

}

@media screen and (min-width:1700px) {
    .card-box-list {
        padding: 0 20px;
        width: 1380px;
        display: grid;
        width: auto;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        place-items: center;
        gap: 20px;
    }
    .search-bar {
   
    width: 50%;
}

}

@media screen and (max-width:1024px) {
    .card-box-list {
        padding: 0 20px;
        display: grid;
        grid-template-columns: 100%;
        justify-content: center;
        place-items: center;
        gap: 20px;
    }

}

@media screen and (max-width:680px) {
    .card-box-list {
        padding: 0 20px;
        width: 400px;
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        place-items: center;
        gap: 20px;
    }
    .home-container {
        grid-template-columns: 1fr 1fr 180px;
    }
}

@media screen and (max-width:588px) {
    .home-container {
        grid-template-columns: 1fr ;
        grid-template-rows: 200px 1fr 1fr ;
        place-items: center;
    }

    .home-box {
        border-top: 1px solid #ddd;
        grid-row: 2 / span 3;
        padding: 0 10px;
        width: 100%;
    }
    .side-bar{
        border-left: none;
        width: 100%;
        height: 200px;
    }
    .tags{
        margin-top: 0;
    }
}

/*sidebar */
.side-bar {
    width: 300px ;


}
.tags{
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.tags strong{
    border: 1px solid #ddd;
    padding: 5px;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
}

</style>