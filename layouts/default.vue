<template>
    <div class="app-container">
        <!---header-->
        <header>
            <!---navbar-->
            <Navbar />
            <!--hero intro-->
            <div class="hero-container">
                <div class="hero-intro">
                    <h1>Welcome to our Blog Website!</h1>
                    <h2>Discover, Learn, and Connect</h2>
                    <!---search bar-->
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
                </div>
            </div>
        </header>
        <!---body-->
        <div class="container">
            <slot />
        </div>

        <!---foooter-->
        <Footer />
    </div>
</template>

<script setup>


</script>

<style scoped>
header {
    width: 100%;
}

.container {
    width: 100%;
}


/*hero container */
.hero-container {
    width: 100%;
    height: 70vh;
    background-image: url('/img/hero.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-container .hero-intro {
    text-align: center;
    color: #fff;
    padding: 10px;
}

.hero-intro h1 {
    font-size: 45px;
    font-weight: 800;
}

.hero-intro h2 {
    font-size: 35px;
}
/*searchbar */
.search-bar {
    margin-top: 10px;
    padding: 5px;
    background-color: #fff;
    display: flex;
    align-items: center;
    border-radius: 4px;
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


/* Style the select dropdown */
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
    .hero-intro h1 {
        font-size: 38px;
    }

    .hero-intro h2 {
        font-size: 28px;
    }

    .input-search input {
        width: 80%;
    }
}



@media screen and (max-width:386px) {
    .hero-intro h1 {
        font-size: 38px;
    }

    .hero-intro h2 {
        font-size: 28px;
    }

    .input-search input {
        width: 80%;
    }
}
</style>