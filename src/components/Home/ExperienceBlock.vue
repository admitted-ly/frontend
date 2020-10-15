<template>
    <div class="container">
        <h1 class="container-header text-center">Easy as 1, 2, 3</h1>

        <div class="step step-1">
            <div class="row px-5 justify-content-md-center">
                <div class="col-md">
                    <div class="header">
                        Provide us your latest SAT score and your ZIP code.
                    </div>
                    <p class="sub-heading text-muted">
                        We use this data to match you with universities that
                        have a close average SAT score matching yours. The ZIP
                        code allows us to better personalize the results based
                        on your location
                    </p>
                </div>

                <div class="col-md col-center image">
                    <img
                        class="illustration "
                        src="../../assets/svg/undraw_home_screen_4n7s.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>

        <div class="step step-2">
            <div class="row px-5 justify-content-md-center">
                <div class="col-md col-center">
                    <img
                        class="illustration"
                        src="../../assets/svg/undraw_secure_data_0rwp.svg"
                        alt=""
                    />
                </div>
                <div class="col-md">
                    <div class="header">
                        Let us do the heavy lifting
                    </div>
                    <p class="sub-heading text-muted">
                        With the help of machine learning, we are able to
                        present you top-10 colleges that you have best chance of
                        admission.
                    </p>
                </div>
            </div>
        </div>
        <div class="step step-3">
            <div class="row px-5 justify-content-md-center">
                <div class="col-md">
                    <div class="header">
                        Explore your options.
                    </div>
                    <p class="sub-heading text-muted">
                        Enjoy the data we have already gathered for you. Take a
                        glimpse into your future college!
                    </p>
                </div>

                <div class="col-md col-center image">
                    <img
                        class="illustration"
                        src="../../assets/svg/undraw_data_xmfy.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ExperienceBlock"
};
</script>
<style scoped>
.container-header {
    font-size: 4rem;
    position: relative;
}
.container {
    padding: 40px 0 40px 0;
}
.step {
    padding: 50px 0 50px 0;
    width: 100%;
}
.step .header {
    font-size: 4rem;
}
.step .sub-heading {
    font-size: 2rem;
}
.step .illustration {
    width: 300px;
}
.step + .step {
    margin: 40px 0 40px 0;
}
.col-center {
    display: flex;
    justify-content: center;
}
</style>
