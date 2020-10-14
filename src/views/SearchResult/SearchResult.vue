<template>
    <div class="container">
        <div class="row">
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

    mounted: function() {
        document.title = "Admittedly | Search Results";
    },

    created: function() {
        this.colleges = JSON.parse(window.sessionStorage.getItem("colleges"));
    }
};
</script>

<style scoped></style>
