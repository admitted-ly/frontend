<template>
    <Headline></Headline>
</template>

<script>
import Headline from "@/components/Home/Headline.vue";

export default {
    name: "home",

    components: {
        Headline
    },

    mounted: function() {
        document.title = "Admittedly | Home";
    }
};
</script>

<style scoped></style>
