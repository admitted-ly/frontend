<template>
  <div class="row  px-5 text-center mb-5">
      <div class="col-12 px-5 col-md-6 ml-md-auto mr-md-auto">
        <div class="hero-text-first">
		
		  <div class="mt-5 mb-5">
			<i class="fa fa-question-circle mt-5" aria-hidden="true"></i>
          	<h1 class="sub-heading text-muted mt-3">Discover Colleges Now !</h1>
			<h3 class="mt-2 text-muted text-justify">
				Submit your SAT score, Zip code and 10 colleges will be recommended to you.
          	</h3>
		  </div>

		  <div class="mt-5 pt-5 border p-5">
			<form  @submit.prevent="onSubmit">
				
				<div class="form-group mt-3">
					<label for="sat">SAT Score</label>
					<input type="number" class="form-control" placeholder="Enter SAT score" id="sat">
				</div>
				<div class="form-group mt-5">
					<label for="zip">Zip Code</label>
					<input type="number" class="form-control" placeholder="Enter Zip code" id="sat">
				</div>
				<button type="submit" class="btn mt-4 py-3 green-btn">Submit</button>
			</form>
		   </div>
    
        </div>
      </div>    
  </div>
</template>

<script>
import SearchIcon from "@/components/Icons/SearchIcon.vue";
import { apiService } from "@/utils/api.service.js"

export default {
  name: "Search",

  data() {
    return {
      
      student_details_form: {
        sat_score: null,
        zip_code: null
	  },
	  
    };
  },
  
  methods: {
	onSubmit() {
      let colleges_lis_url = `api/v1/users/recommendations`;

      let formData = new FormData();

      formData.append("sat_score", this.student_details_form.sat_score);
      formData.append("zip_code", this.student_details_form.zip_code);

	  let method = "POST";
	  
	  //will use the code below when our endpoint is ready

    //   apiService(colleges_list_url, method, formData)
    //     .then(data => {

				// this.$router.push(
              	// 	{
                //   		name: 'colleges',
                //   		params: { colleges_list: data }
              	// 	}
          		// )
          
    //     })
    //     .catch(error => {
    //       this.error = error;
    //     });
    },
  },

  mounted: function() {
    document.title = "Admittedly | Search";
    
  }

};

</script>

<style scoped>

.fa-question-circle{
	color: #10D48E;
	font-size: 5rem;
}

</style>
