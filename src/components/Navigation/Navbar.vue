<template>

  <nav class="navbar navbar-expand-lg py-3 my-navbar fixed-top">

    <i class="fa fa-long-arrow-left  pl-3" id="back-arrow" aria-hidden="true" @click="back" v-if="hide_nav_brand">
    </i>
       
    <i class="navbar-brand  pl-md-5" v-if="hide_nav_brand">
      {{ title }}
    </i>

    
    <router-link :to="{ name: 'home' }" class="navbar-brand nunito" v-if="!hide_nav_brand">
      <i class="fa fa-graduation-cap" aria-hidden="true">
        Admittedly
      </i>
    </router-link>
      
  </nav>

</template>


<script>
 
  export default {
    name: "NavbarComponent",

    props: {
      hide_nav_brand: {
        type: Boolean,
        required: true,
      },

      title: {
        type: String,
        required: false,
      },
    },

    data() {
      return {
        
        hide_nav_brand: this.hide_nav_brand,
        title: this.title,
      
      };
    },

    methods: {

			back () {
				this.$router.back()
			}
  
    }

  };
</script>

<style scoped>

  .my-navbar {
    font-size: 1.4rem;
    background-color: #10D48E;
    color: white !important;
  }

  .navbar-brand {
    font-weight: bold;
    font-size: 2rem;
    color: white !important;
  }

  fa-graduation-cap{
    font-size: 4rem;
    color: white !important;
  }

  /* .navbar-brand
  {
        position: absolute;
        left: 50%;
  } */

  #back-arrow{
		font-size: 2rem;	
    color: white;
  }
  
  #header.active {
     box-shadow: 0 0 10px rgba(0,0,0,0.4);  
     background-color: white;
     color: #10D48E;
}

</style>
