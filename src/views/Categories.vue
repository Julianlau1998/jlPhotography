<template>
<div>
    <navbar />
        <div id="listWrapper" class="row">
            <div class="column">
                    <router-link to="/category/landscape">
                        <button id="imageButton" class="landscape"></button>
                    </router-link>
                    <h3 class="categoryText">Landscape</h3>
            </div>
            <div class="column">
                    <router-link to="/category/macro">
                        <button id="imageButton" class="macro"></button>
                    </router-link>
                    <h3 class="categoryText">Macro</h3>
            </div>
            <div class="column">
                    <router-link to="/category/city">
                        <button id="imageButton" class="city"></button>
                    </router-link>
                    <h3 class="categoryText">City</h3>
            </div>
            <div class="column">
                    <router-link to="/category/astro">
                        <button id="imageButton" class="astro"></button>
                    </router-link>
                    <h3 class="categoryText">Astro</h3>
            </div>
            <div class="column">
                    <router-link to="/category/abstract">
                        <button id="imageButton" class="abstract"></button>
                    </router-link>
                    <h3 class="categoryText">Abstract</h3>
            </div>
        </div>
</div>
</template>

<script>
import navbar from '../components/navbar.vue'
export default {
    components: {
        navbar
    },
}
</script>

<style>
.column {
  float: left;
  width: 50%;
  margin-bottom: 3.5rem;
}

.row {
    margin-left: 15rem;
    margin-right: 15rem;
}

.categoryText{
    width: 37vw;
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}

#listWrapper {
  padding-top: 13rem;
}

#imageButton{
    width: 35rem;
    height: 23rem;
    border: 1px solid #acabab;
    outline: none;
    border-radius: 25px;
    box-shadow:  1.5px 1.5px 3px #636161, 
                -1.5px -1.5px 3px #ffffff; 
}
.landscape{
    background:url('../assets/landscape/1.jpg') center no-repeat; background-size: 100% 100%;
}
.macro{
    background:url('../assets/macro/1.jpg') center no-repeat; background-size: 100% 100%;
}
.city{
    background:url('../assets/city/1.jpg') center no-repeat; background-size: 100% 100%;
}
.astro{
    background:url('../assets/astro/1.jpg') center no-repeat; background-size: 100% 100%;
}
.abstract{
    background:url('../assets/abstract/1.jpg') center no-repeat; background-size: 100% 100%;
}
@media (max-width: 1690px) {
    .row {
        margin-left: 10rem;
        margin-right: 10rem;
}

    .categoryText{
        width: 39vw !important;
    }
}    
@media (max-width: 1530px) {
    .row {
        margin-left: 5rem;
        margin-right: 5rem;
    }
    .categoryText{
        width: 43vw !important;
    }
} 
@media (max-width: 1340px) {
    .row {
        margin-left: 2rem;
        margin-right: 2rem;
    }
    .categoryText{
        width: 46vw !important;
    }
} 
@media (max-width: 1230px) {
    .column {
        width: 100%;
    }
    .row {
        margin-left: 0rem;
        margin-right: 0rem;
    }
    .categoryText{
        width: 100vw !important;
    }
}
@media (max-width: 632px) {
    #listWrapper{
        margin: none;
    }
    #imageButton{
        width: 20em;
        height: 13.2rem;
    }
    ul li{
        margin: 0;
        padding: 0;
    }
    .categoryText{
        margin-left: 2rem;
    }
    .categoryText{
        width: 85vw !important;
    }
}
@media (max-width: 632px) {
    ul li{
        margin-bottom: 1rem;
        margin-top: 2rem;
    }
}

</style>

<script>
import navbar from '../components/navbar.vue'
export default {
    components: {
        navbar
    },
    data () {
        return {
            yOffset: 0
        }
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