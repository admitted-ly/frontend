<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center padding-top mb-5">
                <h1 class="sub-heading text-muted ">
                    Colleges Recommended for You
                </h1>
            </div>
            <div class="col-12 text-center" v-for="college in colleges" :key="college">
                <College 
                    :name='college.Name'
                    :state='college.State_abbreviation'
                    :avg_sat='college.SAT' 
                    :highest_degree_offered='college.Highest_degree_offered'
                />
                
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
    data() {
        return{
            colleges: null
        }
    },

    mounted: function() {
        document.title = "Admittedly | Search Results";
    },

    created: function(){
        this.colleges = JSON.parse(window.sessionStorage.getItem('colleges'))
    }
};
</script>

<style scoped></style>
