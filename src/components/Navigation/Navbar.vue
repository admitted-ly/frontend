<template>

  <nav class="navbar navbar-expand-lg py-4 my-navbar fixed-top" id="header">

    <i class="fa fa-long-arrow-left dynamic-brand pl-3" id="back-arrow" aria-hidden="true" @click="back" v-if="hide_nav_brand">
    </i>
       
    <i class="pl-md-5 dynamic-brand" v-if="hide_nav_brand">
      {{ title }}
    </i>

    
    <router-link :to="{ name: 'home' }" class="nunito dynamic-brand" v-if="!hide_nav_brand">
      <i class="fa fa-graduation-cap" aria-hidden="true">
        Admittedly
      </i>
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
    font-weight: bold;
    font-size: 2rem;
    color: #10d48e;
}

.logo {
    font-size: 2.3rem;
    margin-left: 10px;
}
.logo i + span {
    margin-left: 10px;
}

  #back-arrow{
		font-size: 2rem;
    font-weight: bold;	
   
  }
  
  #header.active {
     box-shadow: 0 0 10px rgba(0,0,0,0.4);  
     background-color: #10D48E !important;
     color: white !important;
     font-size: 3rem;
     font-weight: bold;
}

.navbar {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    background-color: #10d48e;
    color: white;
    font-size: 3rem;
    font-weight: bold;
}
</style>
