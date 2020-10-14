<template>
    <nav
        class="navbar navbar-expand-lg py-3 px-5"
        :class="{ 'force-active': forceActive }"
        id="header"
    >
        <a href="#" @click="back">
            <img
                src="../../assets/svg/icons/arrow-left-solid.svg"
                class="nav-back-button"
                alt="Back"
                v-if="hide_nav_brand"
            />
        </a>

        <router-link
            :to="{ name: 'home' }"
            class="dynamic-brand navbar-brand"
            v-if="!hide_nav_brand"
        >
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            Admittedly
        </router-link>
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
        },
        forceActive: {
            type: Boolean,
            required: false,
            default: false
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
.nav-back-button {
    width: 20px;
    color: white;
    filter: invert(1);
    margin-top: -6px;
}
.navbar-brand {
    font-weight: bold;
    font-size: 3rem;
    color: white;
}

.fa-long-arrow-left {
    font-size: 1rem;
    cursor: pointer;
}

#header {
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    will-change: background-color, box-shadow;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1000;
    justify-content: flex-start;
}
#header.is-active,
#header.force-active {
    animation: topFixate 0.4s ease;
    position: fixed;
    top: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    background-color: rgba(108, 99, 255, 0.9);
    backdrop-filter: blur(8px);
    /* #10d48e; */
    font-size: 30px;
    font-weight: bold;
    color: white;
}
@keyframes topFixate {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0);
    }
}
</style>
