<template>
    <nav class="navbar navbar-expand-lg py-4 my-navbar fixed-top" id="header">
        <i
            class="fa fa-long-arrow-left  pl-3"
            id="back-arrow"
            aria-hidden="true"
            @click="back"
            v-if="hide_nav_brand"
        ></i>

        <i class="pl-md-5 dynamic-brand" v-if="hide_nav_brand">
            {{ title }}
        </i>

        <router-link
            :to="{ name: 'home' }"
            class="nunito dynamic-brand"
            v-if="!hide_nav_brand"
        >
            <i class="fa fa-graduation-cap" aria-hidden="true">
                Admittedly
            </i>
        </router-link>
    </nav>
</template>

<script>
export default {
    name: "NavbarComponent",

    props: {
        hide_nav_brand: {
            type: Boolean,
            required: true
        },

        title: {
            type: String,
            required: false
        }
    },

    data() {
        return {};
    },

    methods: {
        back() {
            this.$router.back();
        }
    }
};
</script>

<style scoped>
a {
    text-decoration: none;
    color: white !important;
}

.my-navbar {
    font-size: 1.4rem;
    background-color: white !important;
    color: #10d48e !important;
}

.navbar-brand {
    font-weight: bold;
    font-size: 3rem;
    color: #10d48e !important;
}

fa-graduation-cap {
    font-size: 4rem;
    color: white !important;
}

/* .navbar-brand
  {
        position: absolute;
        left: 50%;
  } */

#back-arrow {
    font-size: 2rem;
    color: white;
}

#header.active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    background-color: #10d48e !important;
    color: white !important;
    font-size: 3rem;
    font-weight: bold;
}
</style>
