import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/Home.vue";
import SearchResult from "@/views/SearchResult/SearchResult.vue";
import Match from "@/views/Match/Match.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },

        {
            path: "/results",
            name: "search-results",
            component: SearchResult,
            props: true,
            meta: {
                hideFooter: true,
                hideBrand: true,
                title: "Search Results"
            }
        },

        {
            path: "/match",
            name: "match",
            component: Match,
            meta: {
                hideFooter: true,
                hideBrand: true,
                title: "Search Colleges"
            }
        }
    ]
});
