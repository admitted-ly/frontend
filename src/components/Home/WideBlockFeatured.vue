<template>
    <div class="wide-block">
        As featured in
        <div class="featured-logo-row">
            <img src="../../assets/images/bbc.png" alt="" />
            <img src="../../assets/images/the-new-york-times-logo.png" alt="" />
            <img src="../../assets/images/cnn.png" alt="" />
            <img
                src="../../assets/images/Independent_logo_logotype.png"
                alt=""
            />
            <img
                src="../../assets/images/1200px-The_Logo_of_The_Washington_Post_Newspaper.svg.png"
                alt=""
            />
        </div>
    </div>
</template>
<script>
export default {
    name: "WideBlockFeatured"
};
</script>
<style scoped>
.wide-block {
    width: 100vw;
    height: 200px;
    background: rgba(0, 0, 0, 0.03);
    margin-top: 85px;
    display: flex;
    font-size: 2rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.wide-block .featured-logo-row {
    display: inline-flex;
    flex-direction: row;
    margin-top: 40px;
    gap: 50px;
}
.featured-logo-row img {
    height: 30px;
    filter: grayscale(100%);
}
.featured-logo-row img:hover {
    filter: none;
}

@media screen and (max-width: 640px) {
    .featured-logo-row {
        animation: scroll 20s linear infinite alternate;
    }
}

@keyframes scroll {
    0% {
        transform: translateX(-50%);
    }
    100% {
        transform: translateX(50%);
    }
}
</style>
