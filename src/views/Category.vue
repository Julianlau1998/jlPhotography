<template>
    <div>
        <navbar />
        <gallery :title="currentPage" />
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
            top: 42vh;
            outline: none;
            cursor: pointer;
        }
        #arrowLeft{
            left: -8.5rem;
            top: 42vh;
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
import navbar from '../components/navbar.vue'
import gallery from '../components/gallery.vue'
export default {
    components: {
        navbar,
        gallery
    },
    data () {
        return {
            currentPage: this.$route.params.name
        } 
    }
}
</script>