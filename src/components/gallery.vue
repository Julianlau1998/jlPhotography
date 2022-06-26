<template>
    <div>
        <div class="topImage">
            <img :src="require(`../assets/${title}/header.jpg`)" :alt="title" class="topImage">
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
        <p class="categoryText">
            This is a collection of my favorite {{ title }} pictures. <br>Just click on one, to view it in fullscreen.
        </p>
        <br><br>
        <div class="columns">
            <div class="column" v-for="(image, imageKey) in images" :key=imageKey>
                 <img
                    :src="`https://jlphotography.netlify.app/img/${title}/${image}.jpg`"
                    @click="largerImage(image)"
                    class="listImage"
                    onerror="this.style.display='none'"
                >
            </div>
        </div>
        <div v-if="largeImage">
            <div class="largeImageBackground" @click="largeImage = !largeImage"></div>
            <img :src="`https://jlphotography.netlify.app/img/${title}/${images[currentImage]}.jpg`" class="largeImage">
            <button class="close" @click="closeImage">x</button>
            <button
                v-if="currentImage !== images.length-1"
                class="arrowButton"
                id="arrowRight"
                @click="nextImage"
            >
                <img
                    src="../assets/arrow.png"
                    alt="arrow"
                    class="arrowImage"
                    onerror="this.style.display='none'"
                ></button>
            <button
                v-if="currentImage!==0"
                class="arrowButton"
                id="arrowLeft"
                @click="lastImage"
            >
                <img
                    src="../assets/arrowLeft.png"
                    alt="arrow"
                    class="arrowImage"
                >
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            images: ['1','2','3','4','5'],
            currentImage: 0,
            largeImage: false,
            currentImageAvailable: true
        }
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
        // imageAvailable () {
        //     let available = this.currentImage !== this.images.length-1
        //     let img = new Image()
        //     img.src = `https://jlphotography.netlify.app/img/${this.title}/${this.currentImage}.jpg`
        //     img.onload = () => {
        //         available = true
        //         this.currentImageAvailable = true
        //     }
        //     img.onerror = () => {
        //         available = false
        //         this.currentImageAvailable = false
        //     }
        //     return available
        // }
    }
}
</script>

<style scoped>
.topImage {
    margin-bottom: 3rem;
}
.listImage {
    width: 35rem;
    margin: 1rem;
    border: 2px solid #acabab;
    border-radius: 25px;
    box-shadow: 1.5px 1.5px 3px #636161, -1.5px -1.5px 3px #e9e5e5;
    cursor: pointer;
}
.topImage {
    width: 100vw;
    border-radius: 0;
    position: relative;
    top: 5.5rem;
    left: 0;
    border-radius: 250px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 0;
    z-index: -1;
}
.largeImage {
    margin: auto;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    max-width: 100%;
    max-height: 100%;
}
.largeImageBackground {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: .8;
    z-index: 11rem;
}
button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
#arrowLeft {
    left: -3.5rem;
}
#arrowRight {
    right: -3.5rem;
}
#arrowLeft, #arrowRight {
    top: 45vh;
    outline: none;
    cursor: pointer;
}
.arrowImage {
    width: 10rem;
}
.arrowButton {
    position: fixed;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
}
img {
    cursor: pointer;
}
.categoryText {
    width: 50vw;
    margin: auto;
}
.arrow-icon {
    height: 2.8em;
    width: 2.8em;
    display: block;
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
    left: 0;
    transform: rotate(35deg);
    border-radius: 2px;
}

.right-bar {
    position: absolute;
    background-color: transparent;
    top: 0;
    left: 26px;
    transform: rotate(-35deg);
}

.right-bar, .left-bar {
    width: 40px;
    height: 10px;
    display: block;
    float: right;
    background-color: white;
    border-radius: 10px;
}

.left-bar:after {
    content: "";
    background-color: #fff;
    border-radius: 6px 10px 10px 6px;
    transition: all .5s cubic-bezier(.25,1.7,.35,.8);
    z-index: -1;
}
.right-bar:after {
    content: "";
    background-color: #fff;
    border-radius: 10px 6px 6px 10px;
    transition: all .5s cubic-bezier(.25,1.7,.35,.8);
    z-index: -1;
}

.columns {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

    @media (max-width: 600px) {
        .listImage{
            width: 90vw;
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