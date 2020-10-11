<template>
  <div class="row  px-5 txt-center">
      <div class="col-12 col-md-6">
        <div class="hero-text-first">
          <p class="color-blue mb-3 ml-1 typewrite " data-period="2000" 
                                data-type='[ " Hi there😊 welcome to ..." ]'>
                                        
            <span class="wrap"></span>
            
          </p>
          <h1 class="heading nunito mt-3">Admittedly </h1>
          <h1 class="sub-heading text-muted mt-3">Discover colleges in the US that might accept you</h1>
          <h3 class="mt-5 text-muted text-justify">

           All you need to do is click on the search icon at the bottom right section of the page. You will then be asked to submit your SAT score and zip code. In the end a list of institutions will be returned to you.

          </h3>

          <router-link :to="{ name: 'home' }">
            <button class="btn mt-4 py-3 green-btn">Search</button>
          </router-link>
    
        </div>
      </div>  

      <div class="col-12 col-md-6 hero-text-second text-center px-5">
        <img src="../../assets/college.jpg" alt="College Students" class="img-fluid rounded float-md-right img-home">

        <p class="hide-on-desktop text-muted mt-3"> College Students </p>
      </div>
      <SearchIcon/>  
  </div>
</template>

<script>
import { TxtType } from "@/utils/helper.js";

import SearchIcon from "@/components/Icons/SearchIcon.vue";

export default {
  name: "home",

  components: {
   SearchIcon,
  },
    
  mounted: function() {
    document.title = "Admittedly | Home";
    
  }

};
</script>

<style scoped>

</style>
