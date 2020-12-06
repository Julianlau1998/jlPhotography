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

<style scoped>
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