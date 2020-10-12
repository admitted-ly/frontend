import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/Home.vue";
import Search from "@/views/Search/Search.vue";
import Match from "@/views/Match/Match.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "Admittedly" },
    },

    {
      path: "/search",
      name: "search",
      component: Search,
      meta: { hideFooter: true, hideBrand: true, title: "Explore" },
    },

    {
      path: "/match",
      name: "match",
      component: Match,
      meta: { hideFooter: true, hideBrand: true, title: "Match Colleges" }
    }
    
  ]
});
