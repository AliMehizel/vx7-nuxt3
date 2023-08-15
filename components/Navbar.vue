<template>
    <nav  v-if="!user.user.username">
        <div class="nav-title">
            <NuxtLink to='/'><h1>Blogerr</h1></NuxtLink>
        </div>
        <div class="nav-links" :id="show ? 'active' : ''">
           
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="#">Contact</a>
            </p>

            <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <a href="#">About</a>
            </p>

   
        </div>
        <div class="burger">
            <NuxtLink to="/auth/login">
            <div class="login" >
              
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
            </div>
           
            </NuxtLink>
            <div class="menu">

                <svg @click="handleLinks" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </div>
        </div>
    </nav>

        <!----nav custom-->
        <nav class="custom-nav" v-if="user.user.username">
            <div class="custom-title">
                <NuxtLink to="/"><h1>Blogerr</h1></NuxtLink>
            </div>
            <div class="nav-link">
                <NuxtLink to="/home">
                    Home
                </NuxtLink>
            </div>
            <div class="custom-menu">
                <img :src="user.user.avatar" alt="" @click="handleMenu">
                <NuxtLink to="/profile"><span><strong>@{{ user.user.username }}</strong></span></NuxtLink>
                <ul class="dropdown-menu" :id="showT ? 'animate' : ''">
                    <NuxtLink to="/profile">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Profile
                    </li>
                    </NuxtLink>
                    <NuxtLink to="/profile">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                        Settings
                    </li>
                    </NuxtLink>
                    <NuxtLink to="/auth/login">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        Logout
                    </li>
                </NuxtLink>
                </ul>
            </div>
        </nav>
</template>

<script setup>
import { useUser } from '~/store/user';
const show = ref(false)
function handleLinks(){
    show.value = !show.value
    console.log('hello')
}


const user = useUser()
user.GetUser()


const showT = ref(false)
function handleMenu() {
    showT.value = !showT.value
}




</script>

<style  scoped>
/*navbar*/
nav {
    background: #fff;
    padding: 15px 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
}
a{
    text-decoration: none;
    color: #000;
}
.nav-links a {
    display: block;
    color: #000;
    text-decoration: none;
    margin: 0 7px;
    font-size: 18px;
}

.nav-links {
    display:flex;
    flex-direction: row;
}

.nav-links svg {
    display: none;
}

.login {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
}


.login svg {
    width: 50px;
    height: 30px;
}

.burger {
    display: flex;
    align-items: center;
    justify-content: center;
}

.burger .menu svg {
    width: 50px;
    height: 30px;
    vertical-align: middle;

}

.menu {
    display: none;
}
/*reponsive nav */
@media screen and (max-width:768px) {
    .menu {
        display: block;
        cursor: pointer;
    }

    .nav-links {
        z-index: -10;
        transform: translateY(-200px);
        opacity: 1;
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        text-align: center;
        position: absolute;
        background-color: #fff;
        width: 100%;
        left: 0;
        right: 0;
        top: 70px;
        transition: all 0.6s ease-in-out;
    }

    .nav-links p {
        width: 120px;
        display: flex;
        align-items: center;
        margin: auto;
    }

    .nav-links svg {
        display: inline-block;
        width: 30px;
        
    }
    #active{
        transition: all 0.6s ease-in-out;
        opacity: 1;
        transform: translateY(0px);
    }
}
/*custom */
.custom-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #fff;
    padding: 10px 30px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
}
.nav-link{
    display: flex;
    align-items: center;

}

.nav-link a{
    text-decoration: underline;
}

a{
    text-decoration: none;
    color: #000;
}
.custom-menu img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #ced4dd;
    cursor: pointer;
    object-fit: cover;
}
.custom-menu span{
    margin-left: 10px;
}
.custom-menu span strong{
    color: #002a6d;
    text-decoration: underline;
    text-transform: uppercase;
}
.custom-menu {
    position: relative;
    display: flex;
    align-items: center;
}

.dropdown-menu {
    border-radius: 4px;
    position: absolute;
    top: 70px;
    left: -40px;
    width: 120px;
    height: 140px;
    background: #fff;
    display: none;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
}

#animate {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    opacity: 1;
    transition: all 1s ease-in;
}



ul li {
    list-style: none;
    display: flex;
    align-items: center;
    cursor: pointer;
}

li svg {
    margin: 0 5px;
    width: 30px;
}
</style>