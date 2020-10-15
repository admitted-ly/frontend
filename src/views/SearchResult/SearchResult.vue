<template>
    <div class="container">
        <div class="row " v-if="collegesNotEmpty">
            <div class="col-12 text-center padding-top mb-5">
                <h1 class="sub-heading text-muted ">
                    Colleges Recommended for You
                </h1>
            </div>
            <div
                v-for="(college, i) in colleges"
                :key="college"
                class="col-12 text-center"
            >
                <College
                    :counter="i + 1"
                    :avg_sat="college.SAT"
                    :college="college"
                />
            </div>
        </div>
        <div class="row px-5 py-5" v-else>
            <div class="col-12 text-center padding-top">
                <h1 class="sub-heading text-danger ">
                    We couldn't match you with any college!!
                </h1>
            </div>
            <div class="col-12 text-center mt-5">
                <img
                    alt="College Students"
                    class="img-fluid "
                    src="../../assets/images/404.jpg"
                />
            </div>
            <div class="col-12 text-center  mb-5">
                <router-link :to="{ name: 'match' }" class="btn call-to-action">
                    Search Again
                </router-link>
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
        return {
            colleges: null
        };
    },

    computed: {
        collegesNotEmpty() {
            if (typeof this.colleges == "string") {
                return false;
            } else {
                return true;
            }
        }
    },

    mounted: function() {
        document.title = "Admittedly | Search Results";
    },

    created: function() {
        this.colleges = JSON.parse(window.sessionStorage.getItem("colleges"));
    }
};
</script>

<style scoped></style>
