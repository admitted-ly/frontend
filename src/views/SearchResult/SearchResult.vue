<template>
  <div class="container">
    <div class="row">

      <div class="col-12 text-center padding-top mb-5">
         <h1 class="sub-heading text-muted ">Colleges Recommended for You</h1>

      </div>
      <div class="col-12 text-center">
          <College />
          <College />
          <College />
          <College />
          <College />
          <College />
          <College />
          <College />
          <College />
          <College />
      </div>
    </div>		
  </div>
</template>

<script>
// import SearchIcon from "@/components/Icons/SearchIcon.vue";
import College from "@/components/SearchResult/College.vue";


export default {
  name: "SearchResult",

  components: {
    College
  },

  mounted: function() {
    document.title = "Admittedly | Search Results";
    
  }

};

</script>

<style scoped>


</style>
