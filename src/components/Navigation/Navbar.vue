<template>

  <nav  class="navbar navbar-expand-lg py-3 px-5 fixed-top" 
        id="header">

    <i  class="fa fa-long-arrow-left dynamic-brand navbar-brand py-3 pl-3" 
        aria-hidden="true" 
        @click="back" 
        v-if="hide_nav_brand"
    >
    </i>
    
    <router-link 
        :to="{ name: 'home' }" 
        class="dynamic-brand navbar-brand" 
        v-if="!hide_nav_brand"
    >
      <i class="fa fa-graduation-cap" 
         aria-hidden="true"
      >    
      </i>
      Admittedly
    </router-link>
      
  </nav>

</template>

<script>
export default {
    name: "Navbar",

    props: {
        hide_nav_brand: {
            type: Boolean,
            required: true
        },

        title: {
            type: String,
            required: false
        }
    },

    data() {
        return {};
    },

    methods: {
        back() {
            this.$router.back();
        }
    }
};
</script>

<style scoped>
a {
    text-decoration: none;
    color: white;
}

.navbar-brand {
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 3rem;
    color: #6c63ff ;
}



.fa-long-arrow-left{
		font-size: 2rem;
    font-weight: bold;	
}
  
#header.active{
     box-shadow: 0 0 10px rgba(0,0,0,0.4);  
     background-color: #10d48e;
     font-size: 3rem;
     font-weight: bold;
     color: white;
}

</style>
