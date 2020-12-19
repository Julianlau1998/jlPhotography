<template>
    <div>
        <div class="topImage">
            <img src="../../assets/landscape/landscape_header.jpg" alt="landscape" class="topImage">
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
        <p class="categoryText">This is a collection of my favorite Landscpe pictures. <br>Just click on one, to view it in fullscreen.</p>
        <br><br>
        <ul>
            <li v-for="(image, imageKey) in images" :key=imageKey>
                <img :src="require(`../../assets/landscape/${image}.jpg`)" @click="largerImage(image)" class="listImage">
            </li>
        </ul>
        <div v-if="largeImage">
            <div class="largeImageBackground" @click="largeImage = !largeImage"></div>
            <img :src="require(`../../assets/landscape/${images[currentImage]}.jpg`)" class="largeImage">
            <button class="close" @click="closeImage">x</button>
            <button class="arrowButton" id="arrowRight" @click="nextImage" @keyup.right="nextImage"><img src="../../assets/arrow.png" alt="arrow" class="arrowImage"></button>
            <button class="arrowButton" id="arrowLeft" @click="lastImage"><img src="../../assets/arrowLeft.png" alt="arrow" class="arrowImage"></button>
        </div>
        <br>
    </div>
</template>

<script>
export default {
    data () {
        return {
            test: '../../assets/landscape/landscape.jpg',
            images: [
                'landscape',
                'landscape2',
                'kaiserstuhl',
                'isar',
                'wald'
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

<style>
img{
    cursor: pointer;
}
    .topImage{
        width: 100vw;
        border-radius: 0px;
        position: relative;
        top: 5.5rem;
        left: 0vw;
        border-radius: 250px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 0px;
        z-index: -1;
    }
    .topMargin {
        margin-top: 10rem;
    }
    #titleLeft {
        position: absolute;
        left: 0rem;
        top: 10rem;
    } 
    #titleRight {
        position: absolute;
        right: -20rem;
        top: 10rem;
    } 
    .header{
        position: absolute;
        left: 15vw;
        font-size: 12vw;
        color: white;
        opacity: 0.5;
        top: 20rem;
    }
    .categoryText{
        width: 50vw;
        margin: auto;
    }
    .listImage{
        width: 35rem;
        margin: 2rem;
        cursor: pointer;
        border: 2px solid #acabab;
        border-radius: 25px;
         box-shadow:  1.5px 1.5px 3px #636161, 
                    -1.5px -1.5px 3px #e9e5e5; 
        cursor: pointer;
    }
    .largeImage{
        margin: auto;
        position: fixed;
        top: 0; left: 0; bottom: 0; right: 0;
        max-width: 100%;
        max-height: 100%;
    }
    .largeImageBackground{
        position: fixed;
        top: 0rem;
        left: 0vw;
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0.8;
        z-index: 11rem;
    }
    .arrowButton{
        position: fixed;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }
    .arrowButton :focus{
        outline: 0 !important;
        z-index: 15;
    }
    #arrowRight{
        right: -3.5rem;
        top: 45vh;
        outline: none;
        cursor: pointer;
    }
    #arrowLeft{
        left: -3.5rem;
        top: 45vh;
        outline: none;
        cursor: pointer;
    }
    .arrowImage{
        width: 10rem;
    }
    .close {
        position: fixed;
        top: 0.5rem;
        right: 1rem;
        color: white;
        font-size: 4rem;
        cursor: pointer;
        opacity: 1;
        padding:5rem;
        background-color: white;
        width: 2rem;
        margin-left: 10rem;
        margin-top: 2rem;
    }
    .close :focus{
        outline: none !important;
    }
    ul li {
        list-style-type: none;
        display: inline-block;
    }

.arrow-icon {
  height: 2.8em;
  width: 2.8em;
  display:block;
  padding: 0.5em;
  margin: 1em auto;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 14rem;
  z-index: -1;
}

.left-bar {
  position: absolute;
  background-color: transparent;
  top: 0;
  left:0;
  width: 40px;
  height: 10px;
  display: block;
  transform: rotate(35deg);
  float: right;
  border-radius: 2px;
}

.left-bar:after {
    content:"";
    background-color: white;
    width: 40px;
    height: 10px;
    display: block;
    float: right;
    border-radius: 6px 10px 10px 6px;
    transition: all 0.5s cubic-bezier(.25,1.7,.35,.8);
    z-index: -1;
}

.right-bar {
  position: absolute;
  background-color: transparent;
  top: 0px;
  left:26px;
  width: 40px;
  height: 10px;
  display: block;
  transform: rotate(-35deg);
  float: right;
  border-radius: 2px;
}
.right-bar:after {
    content:"";
    background-color: white;
    width: 40px;
    height: 10px;
    display: block;
    float: right;
    border-radius: 10px 6px 6px 10px;
    transition: all 0.5s cubic-bezier(.25,1.7,.35,.8);
    z-index: -1;
}
@media (max-width: 632px) {
    .close {
        width: 4rem;
        margin-top: 3rem;
    }
}

</style>