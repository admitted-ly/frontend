<template>
    <div id="app">
        <NavbarComponent :hide_nav_brand="hide_nav_brand" />

        <router-view />

        <FooterComponent />
    </div>
</template>

<script>
import NavbarComponent from "@/components/Navigation/Navbar.vue";
import FooterComponent from "@/components/Navigation/Footer.vue";

// import { apiService } from "@/common/api.service.js";

export default {
    name: "App",
    components: {
        NavbarComponent,
        FooterComponent
    },

    data() {
        return {
            hide_nav_brand: false,
            title: null
        };
    }
};
</script>

<style>
#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
