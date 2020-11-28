<template>
    <div>
        <div class="jumbotron">
             <img src="../assets/jlp.png" alt="jlpIcon" class="icon">
            <h1 class="display-4">
                JL Photography
                </h1>
            <p class="lead">
                Welcome to my page, I hope You have fun exploring my pictures!
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
            <img src="../assets/fly.jpg" alt="fly" class="headerImageMobile">
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
        height: 45rem;
        height: 100vh;
    }
    .headerImageMobile {
        width: 0
    }
    .button {
        border: 1px solid #636161;
        border-radius: 52px;
        background: #c5c1c2;
        box-shadow:  2px 2px 4px #636161, 
                    -2px -2px 4px #ffffff; 
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
            padding-top: 4rem;
        }
        .headerImageMobile {
            width: 100%;
            position: relative;   
            border-radius: 15px; 
        }
        .button {
            border: 1px solid #898b8d;
            border-radius: 91px;
            background: #e9ecef;   
            box-shadow:  5px 5px 6px #898b8d, 
                -5px -5px 6px #ffffff;
            color: #2c3e50;  
            font-weight: 350;   
        }
    }    
</style>

<script>
export default {
}
</script>