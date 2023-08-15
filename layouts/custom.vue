<template>
    <div class="app-container">
        <!----nav custom-->
        <nav>
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
                <ul class="dropdown-menu" :id="show ? 'animate' : ''">
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
        <!---body-->
        <div class="container">
            <slot />
        </div>

        <!---foooter-->
        <Footer />
    </div>
</template>

<script setup>
import { useUser } from '~/store/user';
const show = ref(false)
function handleMenu() {
    show.value = !show.value
}
const user = useUser()
user.GetUser()
console.log(user.user)
</script>

<style scoped>
.container{
    width: 100%;
}
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #fff;
    padding: 15px 30px;
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