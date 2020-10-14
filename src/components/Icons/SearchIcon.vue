<template>
    <div class="">
        <div class="search-icon-wrapper text-center">
            <router-link :to="{ name: 'search' }">
                <i class="fa fa-search mt-3" aria-hidden="true"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchIcon"
};
</script>

<style scoped>
.search-icon-wrapper {
    border-radius: 50%;
    background-color: #10d48e;
    width: 60px;
    height: 60px;
    position: fixed;
    bottom: 20px;
    right: 30px;
}

.fa-search {
    color: white;
    font-size: 3rem;
}
</style>
