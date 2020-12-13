<template>
    <div>
        <navbar />
         <div class="wrapper">
             <h2 id="header">Thank You for visiting my website!</h2> <br>
             <h6> If You have any questions, feel free to contact me 
                 <a href="mailto: jlauapps@gmail.com"> here </a> 
                 </h6> 
             <h6> Or take a look at my 500px site 
                 <a href="https://500px.com/p/julianlau1?view=photos"> 
                    here 
                 </a>
                 </h6>
             <hr>
             <br>
             <h6>Other than photography, I also love building Apps and Websites.
                 You can look at them at 
                 <a href="https://julianlau1998.github.io"> 
                     Julianlau1998.github.io 
                 </a> 
            </h6>
        </div>
    </div>
</template>

<script>
import navbar from '../components/navbar'

export default {
    components: {
        navbar
    } 
}
</script>

<style scoped>
    .wrapper {
        padding-top: 11rem;
        margin: 0 1rem 0 1rem;
    }
   @media (max-width: 700px) {
       #header {
         margin-top: 3rem;
       }
   } 
</style>