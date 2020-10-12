<template>
    <div class="container padding-top">
        <div class="row px-3">
            <div class="col-md">
                <div class="card user-info-card">

                    <div class="sub-heading text-center">
                        <i class="fa fa-question-circle " aria-hidden="true"></i>
                       
                    </div>
                    <div class="sub-heading text-center">
                       
                        👋 Tell us about yourself
                    </div>
                    <div class="card-body">
                        <input
                            type="number"
                            class="form-control"
                            placeholder="SAT score (300-1600)"
                        />
                        <input
                            type="number"
                            class="form-control"
                            placeholder="Zip code (optional)"
                        />
                        <button class="search-button btn-block">
                            ✨ Search
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-md">
                <img
                    class="illustration"
                    src="../../assets/svg/undraw_exams_g4ow.svg"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.illustration {
    width: 400px;
}
.card.user-info-card {
    margin-top: 20px;
    font-size: 18px;
    width: 100%;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    padding: 30px 20px;
}
.card.user-info-card .sub-heading {
    font-size: 26px;
}

.col-md {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.search-button {
    font-size: 24px;
    padding-top: 15px;
    padding-bottom: 15px;
    background: linear-gradient(to top, #6c63ff, #7f78ff);
    box-shadow: 0 9px 10px rgba(0, 0, 0, 0.15);
    text-align: center;
    color: white;
    border: none;
    cursor: pointer;
}

.fa-question-circle{
	color: #6c63ff;
	font-size: 5rem;
}

@media screen and (max-width: 760px) {
    .illustration {
        width: 300px;
        padding-top: 80px;
    }
}
</style>

<script>
export default {
    name: "Match",

    data() {
        return {
        
        student_details_form: {
            sat_score: null,
            zip_code: null
        }
        
        }
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
        document.title = "Admittedly | Match";
        
    }

};
</script>
