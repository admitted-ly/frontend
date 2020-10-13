<template>
    <div class="container">
        <div class="card college-info-card px-3 mb-5">
            <div class="card-body">
                <div class="row px-2">
                    <div class="col-md-4 col-12 text-center">
                        <img  
                            src="../../assets/images/college.jpg" 
                            class="img-fluid"
                        >
                    </div>

                    <div class="col-md-8 col-12 text-left px-md-5 px-1">

                       <div class="mt-3 ">
                            <a :href="college_url">
                                <h3 class="blue-color">
                                {{ name }}
                                <i class="fa fa-external-link ml-1 blue-color" aria-hidden="true">
                                </i>
                                </h3>
                            </a>
                            <p> {{ state }} </p>
                       </div>
                       <div class="mt-5">
                        <p>
                        This school has been recommended to you because it has an average SAT score of <b> {{ avg_sat }} </b> and your SAT score is <b> {{ user_sat }}. {{ concludingSentence }} </b>
                        </p>
                       </div>

                       <div class="mt-3 text-muted border-top">
                        <p>
                            Highest Degree Offered: {{ highest_degree_offered }}
                        </p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SingleCollege",

    props: {
        name: {
            type: String,
            required: true,
        },

        state: {
            type: String,
            required: true,
        },

        avg_sat: {
            type: Number,
            required: true,
        },

        highest_degree_offered: {
           type: String,
           required: true 
        }
    },

    data(){
        return{
            name: this.name,
            state: this.state,
            avg_sat: this.avg_sat,
            highest_degree_offered: this.highest_degree_offered,
            user_sat: window.localStorage.getItem('sat_score'),
            college_url: `http://www.google.com/search?q=${this.name}&btnI`
        }
    },

    computed: {

        concludingSentence() {
            let points_difference = this.avg_sat - this.user_sat;
            let concluding_sentence = null

            if  (points_difference < 0){
                let points = Math.abs(points_difference)
                concluding_sentence = `You are just ${points} points below the average. That's not bad actually!`
            }else if  (points_difference > 0){

                concluding_sentence = `You are  ${points_difference} points above the average. That's really awesome!`
            }else{
                concluding_sentence = "Your score equals the average SAT score. That's that's really good!"
            }

            return concluding_sentence

        }
    }

    
};
</script>

<style scoped>
    .blue-color{
        color: #6c63ff;
        font-weight: bold;
    }
</style>
