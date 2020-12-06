<template>
    <div>
        <div class="topImage">
            <img src="../../assets/landscape/landscape_header.png" alt="landscape" class="topImage">
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
                <img :src="require(`../../assets/landscape/${image}.jpg`)" alt="" class="listImage">
            </li>
        </ul>
        <br><br><br><br><br><br><br>
    </div>
</template>

<style>
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

</style>

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
            ]
        }
    },
    created () {
    }
}
</script>