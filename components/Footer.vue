<template>
    <footer>
        <div class="foo-intro">
            <p>Making the world a better place through constructing elegant hierarchies.</p>
        </div>
        <div class="foo-body">
            <div>
                <p><strong>Solutions</strong></p>
                <p>Marketing</p>
                <p>Analytics</p>
                <p>Commerce</p>
                <p>Insights</p>
            </div>  
            <div>
                <p><strong>Support</strong></p>
                <p>Pricing</p>
                <p>Documentation</p>
                <p>Guides</p>
                <p>API Status</p>
            </div>
            <div>
                <p><strong>Company</strong></p>
                <p>About</p>
                <p>Blog</p>
                <p>Jobs</p>
                <p>Press</p>
            </div>
            <div>
                <p><strong>Legal</strong></p>
                <p>Claim</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Rights</p>
            </div>         
        </div>
        <div class="foo-privacy">
            <p><p>&copy; 2023 Blogerr.com, All rights reserved.| <strong>coded by Ali Mehizel</strong></p></p>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
footer{
    background: #002a6d;
    color: #fff;
    margin-top: 40px;
    padding: 5px 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
footer > div {
    padding: 10px;
    width: 100%;
}

.foo-body{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
}

.foo-body > div{
    flex: 1;
}

.foo-privacy{
    border-top: 1px solid #ddd;
    text-align: center;
}
</style>