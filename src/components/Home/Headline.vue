<template>
    <div class="headline row px-5 txt-center">
        <div class="col-12 col-md-6">
            <div class="hero-text-first">
                <h1 class="heading mt-3">
                    Personalized college matching in the US.
                </h1>
                <h2 class="md-3 font-weight-bold ">
                    With high chance of approval
                </h2>
                <h3 class="mt-5 text-muted text-justify">
                    Provide us your SAT score and your ZIP code. Let our
                    algorithms do the heavy lifting. ✨
                </h3>

                <router-link :to="{ name: 'home' }">
                    <button class="btn mt-4 py-3 green-btn">Search</button>
                </router-link>
            </div>
        </div>

        <div class="col-12 col-md-6 hero-text-second text-center px-5">
            <img
                alt="College Students"
                class="img-fluid rounded float-md-right img-home"
                src="../../assets/college.jpg"
            />
        </div>
    </div>
</template>

<script>
import SearchIcon from "@/components/Icons/SearchIcon.vue";
export default {
    name: "Headline",
    components: {}
};
</script>

<style scoped></style>
