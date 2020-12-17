<template>
    <div>
        <navbar />
        <landscape v-if="currentPage==='landscape'"/>
        <macro v-if="currentPage==='macro'"/>
        <city v-if="currentPage==='city'"/>
        <astro v-if="currentPage==='astro'"/>
        <abstract v-if="currentPage==='abstract'"/>
    </div>
</template>

<style>
    @media (max-width: 600px) {
        .listImage{
            width: 90vw;
            margin-left: -1.2rem;
        }
        .topImage{
            width: 100vw;
            border-radius: 0;
        }
        #arrowRight{
            right: -4.5rem;
            top: 40vh;
            outline: none;
            cursor: pointer;
        }
        #arrowLeft{
            left: -8.5rem;
            top: 40vh;
            outline: none;
            cursor: pointer;
        }
        .arrowImage{
            width: 12rem;
            margin-left: 4rem;
        }
        .arrow-icon{
            width: 4.1rem;
        }
    }
</style>

<script>
import landscape from '../components/categories/landscape'
import macro from '../components/categories/macro'
import city from '../components/categories/city'
import astro from '../components/categories/astro'
import abstract from '../components/categories/abstract'
import navbar from '../components/navbar'

export default {
    components: {
        landscape,
        macro,
        city,
        astro,
        abstract,
        navbar
    } ,
    data () {
        return {
            currentPage: this.$route.params.name
        } 
    }
}
</script>