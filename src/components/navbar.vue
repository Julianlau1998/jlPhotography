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
            <li><router-link to="/" class="link"> Home </router-link></li>
            <li><router-link to="/categories" class="link"> Categories</router-link></li>
            <li><router-link to="/contact" class="link"> Contact</router-link></li>
        </ul>
        <ul v-else id="hamburger" @click="hamburgerClicked = !hamburgerClicked">
            <li v-if="!hamburgerClicked"><img src="../assets/hamburger.png" alt="hamburger icon" id=hamburgerIcon></li>
            <li v-if="hamburgerClicked" id="close">X</li>
        </ul>
        <div id="responsiveNavbar" v-if="hamburgerClicked">
            <ul>
                <li><router-link to="/" id="responsiveLink"> Home </router-link></li>
                <li><router-link to="/categories" id="responsiveLink"> Categories</router-link></li>
                <li><router-link to="/contact" id="responsiveLink"> Contact</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            windowWidth: window.innerWidth,
            yOffset: 0,
            hamburgerClicked: false
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
    .link{
        color: black;
    }
    .link:hover {
        color: white;
        text-decoration: none;
    }
    #hamburger {
        position: fixed;
        right: 0;
        z-index: 100;
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
    #responsiveNavbar{
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        opacity: 0.8;
        background-color: black;
        padding-top: 10rem;
    }
    #responsiveLink {
        color: white;
        display:table;
        margin: 0 auto 0 auto;
    }
    #close {
        color: white;
        margin-top: 0.5rem;
        font-size: 3rem;
    }
</style>
