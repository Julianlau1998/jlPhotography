<template>
    <div id="wrapper">
        <div class="navBackground" v-if="yOffset>40"></div>
        <div class="logoWrapper" v-if="yOffset<40">
            <img src="../assets/jlp.png" alt="logo" class="logo">
            <h3 id="title">JLPhotography</h3>
        </div>
        <div class="logoWrapper" v-else>
            <h3 id="titleScrolledDown">JLPhotography</h3>
            <img src="../assets/jlp.png" alt="logo" class="logoSmall">
        </div>
        <ul id="navList" v-if="windowWidth>725">
            <li>Home</li>
            <li>Categories</li>
            <li>Contact</li>
        </ul>
        <ul v-else id="hamburger">
            <li><img src="../assets/hamburger.png" alt="hamburger icon" id=hamburgerIcon></li>
        </ul>
    </div>
</template>

<style scoped>
    #wrapper {
        text-align: left;
        margin-left: 2rem;
    }
    .logoWrapper {
        position: fixed;
    }
    .navBackground {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4rem;
        background-color: #c5c1c2;
        border-bottom: 2px solid black;
        border-radius: 15px;
    }
    .logo {
        margin-left: 2.7rem;
        margin-top: 0.2rem;
        width: 6rem;   
    }
    .logoSmall {
        width: 3rem;   
        position: fixed;
        top: 0.5rem;
        left: 1rem;
    }
    #navList{
        list-style-type: none;
        display: inline;
        position: fixed;
        top: 0.7rem;
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
    #hamburger {
        position: fixed;
        right: 0;
    }
    #hamburgerIcon{
        width: 2rem;
        margin-top: 1rem;
    }
    #titleScrolledDown {
        margin-top: 0.85rem;
    }
    #titleScrolledDown {
        margin-left: 2.8rem;
    }
</style>

<script>
export default {
    data () {
        return {
            windowWidth: window.innerWidth,
            yOffset: 0
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            this.yOffset = window.pageYOffset
        }
    }
}
</script>