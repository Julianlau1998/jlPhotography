<template>
    <div>
        <div class="topImage">
            <img src="../../assets/macro/macro_header.png" alt="landscape" class="topImage">
        </div>
        <a>
            <div class="arrow" id="arrow">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </a>
        <a class="arrow-icon">
            <span class="left-bar"></span>
            <span class="right-bar"></span>
        </a>
        <p class="categoryText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ab libero repellat corporis repudiandae. Voluptatibus, ratione alias? Officiis accusamus, consequuntur nemo ullam iusto deleniti, magni doloremque ipsum error illum dignissimos.</p>
        <br><br>
        <ul>
            <li v-for="(image, imageKey) in images" :key=imageKey>
                <img :src="require(`../../assets/macro/${image}.jpg`)" alt="" class="listImage">
            </li>
        </ul>
        <br><br><br><br><br><br><br>
    </div>
</template>

<style scoped>
.topImage {
    margin-bottom: 3rem;
}
</style>

<script>
export default {
    data () {
        return {
            images: [
                'macro',
                'gb',
                'eating_fly',
                'flowers',
                'flower_pink',
                'bumblebee',
                'grasshopper',
                'insect'
            ]
        }
    }
}
</script>