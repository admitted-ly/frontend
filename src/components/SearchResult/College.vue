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
                            <h3 class="blue-color">
                            {{ name }}
                            <i class="fa fa-external-link ml-1 text-muted" aria-hidden="true">

                            </i>
                            </h3>
                            <p> {{ state }} </p>

                       </div>
                       <div class="mt-5">
                        <p>
                        This school has been recommend for you because it has an average SAT score of 1120 and your SAT score is 1130. You are 10 points above the average that's not bad 
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
        }
    },

    data(){
        return{
            name: this.name,
            state: this.state,
            avg_sat: this.avg_sat
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
