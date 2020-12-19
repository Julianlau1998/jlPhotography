<template>
    <div>
        <div class="topImage">
            <img src="../../assets/city/city_header2.jpg" alt="city" class="topImage">
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
        <p class="categoryText">This is a collection of my favorite City pictures. <br>Just click on one, to view it in fullscreen.</p>
        <br><br>
        <ul>
            <li v-for="(image, imageKey) in images" :key=imageKey>
                <img :src="require(`../../assets/city/${image}.jpg`)" @click="largerImage(image)" class="listImage">
            </li>
        </ul>
        <div v-if="largeImage">
            <div class="largeImageBackground" @click="largeImage = !largeImage"></div>
            <img :src="require(`../../assets/city/${images[currentImage]}.jpg`)" class="largeImage">
            <button class="close" @click="closeImage">x</button>
            <button class="arrowButton" id="arrowRight" @click="nextImage" ><img src="../../assets/arrow.png" alt="arrow" class="arrowImage"></button>
            <button class="arrowButton" id="arrowLeft" @click="lastImage"><img src="../../assets/arrowLeft.png" alt="arrow" class="arrowImage"></button>
        </div>
    </div>
</template>

<style scoped>
.topImage {
    margin-bottom: 0rem;
}
</style>

<script>
export default {
    data () {
        return {
            images: [
                'koeln',
                'suedstadt',
                'kranhaeuser',
                'zuelpicher',
                'bicycle',
            ],
            currentImage: 0,
            largeImage: false
        }
    },
    created () {
    },
    methods: {
        largerImage (image) {
            for (let i = 0; i < this.images.length; i++) {
                if(this.images[i] === image) {
                    this.currentImage = i
                }
            }
            this.largeImage = true
        },
        nextImage () {
            if( this.currentImage < this.images.length-1 ) {
                this.currentImage++
            } 
        },
        lastImage() {
            if( this.currentImage > 0 ) {
                this.currentImage--
            } 
        },
        closeImage() {
            this.largeImage = false
        }
    }
}
</script>