<template>
   <div class="card-form">
            <div class="card-form-title">
                <h2>Create new articles</h2>
            </div>
            <form @submit.prevent="handleCreate">
                <div>
                    <label for="title">Title</label>
                    <input type="text" id="title" v-model="title" placeholder="Title..">
                </div>
                <div>
                    <label for="content">Content</label>
                    <textarea id="content" cols="30" rows="10" v-model="content" placeholder="Content.."></textarea>
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
                <div class="form-btn">
                    <input type="submit" value="Create an article"/>
                </div>
            </form>
        </div>
</template>

<script setup>
import {useArticle} from '~/store/article'
//create article

//state
const title = ref('')
const content = ref('')
const image_art = ref('')
const category = ref('')
//handle image

function handleImage(event){
    image_art.value = event.target.files[0]
}
//handle create article
async function handleCreate(){
    //if not empty !
    const article = useArticle()
    await article.CreateArticle({
        title: title.value,
        content: content.value,
        image_art: image_art.value,
        category: category.value,
    })
    //then cleare state !
    title.value = ''
    content.value = ''
    category.value= ''
    image_art.value= ''
}
</script>

<style  scoped>
.card-form {
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
form{
    width: 70%;
    background-color: #fff;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 14px 9px rgba(0,0,0,0.1);
}
form > div{
    width: 90%;
    margin: 10px 0;
}

form > div input,
form > div textarea{
    width: 100%;
    padding: 7px;
    border-radius: 4px;
    border: 1px solid #ddd;
}

.form-btn input{
    width: 100%;
    padding: 10px 0;
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
    background: #002a6d;
    border-radius: 4px;
    border: none;
    color: #fff;
}

label {
    display: block;
    font-size: 17px;
}

input[type="file"]{
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
    form{
        width: 50%;
    }
}
@media screen and (max-width:768px) {
    form{
        width: 90%;
    }
}

@media screen and (max-width:450px) {
    form{
        width: 95%;
    }
    form > div{
    width: 100%;
    margin: 10px 0;
}
}

</style>