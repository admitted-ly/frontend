<template>
    <div class="container">
        <div class="my-footer text-center">
            <div class="row m-4">
                <div class="col-12">
                    <p>
                        Made with
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        by Team Admittedly 2020
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterComponent"
};
</script>

<style scoped>
.my-footer {
    font-size: 1.4rem;
    letter-spacing: 1px;
    width: 100%;
    margin-top: 10rem;
    position: relative;
    bottom: 0;
}

.fa-heart {
    font-size: 1.4rem;
    color: #10d48e;
}
</style>
