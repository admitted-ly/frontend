<template>
    <nav class="navbar navbar-expand-lg py-4 my-navbar fixed-top">
        <div class="container">
            <i
                class="fa fa-long-arrow-left  pl-3"
                id="back-arrow"
                aria-hidden="true"
                @click="back"
                v-if="hide_nav_brand"
            ></i>

            <router-link
                :to="{ name: 'home' }"
                class="nunito dynamic-brand"
                v-if="!hide_nav_brand"
            >
                <div class="logo">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    <span>Admittedly</span>
                </div>
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",

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
    color: white;
}

.navbar-brand {
    font-weight: bold;
    font-size: 2rem;
    color: #10d48e;
}

.logo {
    font-size: 2.3rem;
}
.logo i + span {
    margin-left: 10px;
}

#back-arrow {
    font-size: 2rem;
    color: white;
}

.navbar {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    background-color: #10d48e;
    color: white;
    font-size: 3rem;
    font-weight: bold;
}
</style>
