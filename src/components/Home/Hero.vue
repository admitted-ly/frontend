<template>
    <div>
        <div class="hero-wrapper" id="hero">
            <div class="container">
                <div class="headline row px-5 txt-center">
                    <div class="col-12 col-md-6">
                        <div class="hero-text-first">
                            <h1 class="heading mt-3">
                                Personalized college matching in the US.
                            </h1>
                            <h2 class="md-3 font-weight-bold">
                                With high chance of approval
                            </h2>
                            <h3 class="mt-5 text-justify text-faded">
                                Provide us your SAT score and your ZIP code. Let
                                our algorithms do the heavy lifting. ✨
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

                    <div
                        class="col-12 col-md-6 image text-left text-md-center "
                    >
                        <div class="round-illustration">
                            <img
                                alt="College Students"
                                class="img-fluid is-rounded float-left img-home"
                                src="../../assets/svg/undraw_agreement_aajr.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fancy-blob-border">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#6c63ff"
                    fill-opacity="1"
                    d="M0,96L60,85.3C120,75,240,53,360,64C480,75,600,117,720,122.7C840,128,960,96,1080,96C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                ></path>
            </svg>
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
.hero-wrapper {
    background: var(--primary);
    color: white;
}

.hero-wrapper > .container {
    padding: 20rem 0 20rem 0;
}
.round-illustration {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.round-illustration img.is-rounded {
    width: 400px;
    border-radius: 100%;
}

.text-faded {
    color: rgba(255, 255, 255, 0.8);
}

.fancy-blob-border {
    height: 202px;
}
</style>
