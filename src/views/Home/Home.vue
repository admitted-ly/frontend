<template>
    <div>
        <Hero />
        <WideBlockFeatured />

        <ExperienceBlock />
    </div>
</template>

<script>
import Hero from "@/components/Home/Hero.vue";
import WideBlockFeatured from "@/components/Home/WideBlockFeatured";
import ExperienceBlock from "@/views/Home/ExperienceBlock";

export default {
    name: "home",

    components: {
        ExperienceBlock,
        WideBlockFeatured,
        Hero
    },

    mounted: function() {
        document.title = "Admittedly | Home";
    }
};
</script>
