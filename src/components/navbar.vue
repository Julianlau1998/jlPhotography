<template>
    <div id="wrapper">
        <div class="logoWrapper">
            <img src="../assets/jlp.png" alt="logo" class="logo">
            <h3 id="title">JLPhotography</h3>
        </div>
        <ul id="navList">
            <li>Home</li>
            <li>Categories</li>
            <li>Contact</li>
        </ul>
    </div>
</template>

<style scoped>
    #wrapper {
        text-align: left;
        margin-left: 2rem;
    }
    .logoWrapper {
    }
    .logo {
        margin-left: 2.7rem;
        width: 6rem;   
    }
    #navList{
        list-style-type: none;
        display: inline;
        position: fixed;
        top: 1rem;
        right: 1rem;        
    }
    ul li{
        display: inline;
        padding: 2rem;
        font-size: 1.8rem;
    }
    li:hover{
        color: white;
        border-radius: 30px;
        padding: -10px;
        cursor: pointer;
    }
</style>

<script>
export default {
}
</script>