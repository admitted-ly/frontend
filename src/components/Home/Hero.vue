<template>
    <div class="container padding-top">
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
                        <router-link
                            :to="{ name: 'match' }"
                            class="btn call-to-action"
                        >
                            Get Started
                        </router-link>
                    </router-link>
                </div>
            </div>

            <div class="col-12 col-md-6 hero-text-second text-center px-5">
                <img
                    alt="College Students"
                    class="img-fluid rounded float-md-right img-home"
                    src="../../assets/images/college.jpg"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Hero",
    components: {}
};
</script>

<style scoped>
.btn.call-to-action {
    background-color: #6c63ff;
    color: white;
    width: auto;
    padding: 1.3rem 4rem 1.3rem 4rem;
    border-radius: 5px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    margin-top: 25px;
    font-size: 2rem;
    letter-spacing: 1px;
}
</style>
