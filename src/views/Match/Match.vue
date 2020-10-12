<template>
    <div class="container padding-top">
        <div class="row">
            <div class="col-md">
                <div class="card user-info-card">
                    <div class="sub-heading text-center">
                        👋 Tell us about yourself
                    </div>
                    <div class="card-body">
                        <input
                            type="number"
                            class="form-control"
                            placeholder="SAT score (300-1600)"
                        />
                        <input
                            type="number"
                            class="form-control"
                            placeholder="Zip code (optional)"
                        />
                        <button class="search-button btn-block">
                            ✨ Search
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-md">
                <img
                    class="illustration"
                    src="../../assets/svg/undraw_exams_g4ow.svg"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.illustration {
    width: 400px;
}
.card.user-info-card {
    margin-top: 20px;
    font-size: 18px;
    width: 100%;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    padding: 30px 20px;
}
.card.user-info-card .sub-heading {
    font-size: 26px;
}

input[type="text"],
input[type="number"] {
    font-size: 28px;
    padding: 5px 20px;
    margin: 20px 0 20px 0;
}
.col-md {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.search-button {
    font-size: 24px;
    padding-top: 15px;
    padding-bottom: 15px;
    background: linear-gradient(to top, #6c63ff, #7f78ff);
    box-shadow: 0 9px 10px rgba(0, 0, 0, 0.15);
    text-align: center;
    color: white;
    border: none;
    cursor: pointer;
}

@media screen and (max-width: 760px) {
    .illustration {
        width: 300px;
        padding-top: 80px;
    }
}
</style>

<script>
export default {
    name: "Match"
};
</script>
