<template>
    <Navbar/>
    <div class="login-container">
        <div class="login-title">
            <h2>Login to your account</h2>
        </div>
        <form @submit.prevent="handleAuth">
            <div>
                <label for="username">Username</label>
                <input type="text" id="username" v-model="username" placeholder="username..">
            </div>
            <div>
                <label for="username">Email</label>
                <input type="email" id="username" v-model="email" placeholder="email..">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" placeholder="password..">
            </div>
            <div>
                <input type="submit" class="button" value="Login" />
            </div>
            <div class="social">
                <p>register <a href="#">here !</a> or use</p>
                <GoogleSignInButton @click="()=> login()"></GoogleSignInButton>
            </div>
            <br>
            <div class="test">
                <p>for testing:</p>
                <p>username: test</p>
                <p>email: test@test.com</p>
                <p>password: test12345</p>
            </div>
        </form>
    </div>
    <Footer/>
</template>

<script setup>
import { useUser } from '~/store/user';
import {
  GoogleSignInButton,
  useTokenClient,
} from "vue3-google-signin";

definePageMeta({
    layout: false
})
//state
const username = ref('')
const email = ref('')
const password = ref('')

//handle auth
function handleAuth(){
    const user = useUser()
    user.Authenticate({
        username:username.value,
        email: email.value,
        password:password.value
    })
}







async function handleOnSuccess (response) {
 console.log("Access Token: ", response.access_token);
};

const handleOnError = (errorResponse) => {
  console.log("Error: ", errorResponse);
};

const { login } = useTokenClient({
  onSuccess: handleOnSuccess,
  onError: handleOnError,
  // other options
});
</script>

<style  scoped>
.login-container{
    margin-top: 100px;
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

.login-title{
    margin-bottom: 20px;
}
form{
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    width: 60%;
}
form div{
    width: 100%;
    padding: 0 5px;
}
form input{
    padding: 5px;
    font-size: 18px;
    width: 100%;
}

label{
    display: block;
    font-size: 18px;
    margin: 5px 0;
}
.button{
    width: 100%;
    padding: 5px;
    font-size: 18px;
    font-weight: 800;
    margin-top: 25px;
    border: none;
    background-color: #002a6d;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
}
.social{
    text-align: center;
}

.social p {
    margin-top: 20px;
}

.test{
    border-radius: 4px;
    padding: 5px;
    background: #14792a;
    font-weight: 800;
}

@media screen and (max-width:768px) {
    form{
        width: 85%;
    }
}

@media screen and (min-width:1200px) {
    form{
        width: 30%;
    }
}
</style>