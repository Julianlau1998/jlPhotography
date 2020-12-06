<template>
    <div id="wrapper">
        <div class="jumbotron">
             <img src="../assets/jlp.png" alt="jlpIcon" class="icon">
            <h1 class="display-4">
                JL Photography
                </h1>
            <p class="lead">
                Welcome to my website, I hope You have fun exploring my pictures!
            </p>
            <hr class="my-4">
            <!--
                <p>
                It uses utility classes for typography and spacing to space content out within the larger 
                container.
                </p>
            -->  
            <router-link
            class="btn btn-dark btn-lg button" 
            href="#" 
            role="button"
            to="/categories">
                My Pictures
            </router-link>  
            <br><br>
            <!--<img src="../assets/fly.jpg" alt="fly" class="headerImageMobile">-->
        </div>
    </div>
</template>

<style scoped>
    .jumbotron {
        padding-left: 35rem;
        padding-right: 3rem;
        padding-top: 10rem;
        background-image: url("../assets/jumbotron.png");
        background-size: cover;
        height: 100vh;
        width: 100vw;
    }
    .headerImageMobile {
        width: 0
    }
    .button {
        border: 1px solid #acabab;
        border-radius: 52px;
        background: #c5c1c2;
        box-shadow:  1.5px 1.5px 3px #636161, 
                    -1.5px -1.5px 3px #e9e5e5; 
        color: #2c3e50;     
        font-weight: 600;
    }
    .my-4{
        width: 30rem;
    }

    @media (max-width: 1000px) {
        .jumbotron {
            background-image: none;
            padding-left: 0;
            padding-right: 0;
            padding: 1rem;
            padding-top: 12rem;
            background-color: #c5c1c2;
        }
        .headerImageMobile {
            width: 100%;
            position: relative;   
            border-radius: 15px; 
        }
        .button {
            border: 1px solid #acabab;
            border-radius: 91px;
            background: #c5c1c2;   
            box-shadow:  1.5px 1.5px 3px #636161, 
                    -1.5px -1.5px 3px #e9e5e5; 
            color: #2c3e50;  
            font-weight: 450;   
        }
        .my-4{
        width: 90%;
    }
    }    
</style>

<script>
export default {
}
</script>