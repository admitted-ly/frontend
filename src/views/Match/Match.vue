<template>
    <div class="container padding-top">
        <div class="row px-3">
            <div class="col-md">
                <div class="card user-info-card">
                    <div class="sub-heading text-center">
                        <i aria-hidden="true" class="fa fa-graduation-cap"></i>
                    </div>
                    <div class="sub-heading text-center">
                        👋 Tell us about yourself
                    </div>
                    <div class="card-body mb-5">
                        <form @submit.prevent="onSubmit">
                            <div class="form-group mt-3">
                                <input
                                    v-model="student_details_form.sat_score"
                                    class="form-control"
                                    placeholder="SAT score (300-1600)"
                                    type="number"
                                    max="1600"
                                    min="300"
                                    required
                                />
                            </div>
                            <div class="form-group mt-5">
                                <input
                                    v-model="student_details_form.zip_code"
                                    class="form-control"
                                    placeholder="Zip code (optional)"
                                    type="number"
                                    max="999999"
                                />
                            </div>
                            <button
                                class="search-button btn-block"
                                :class="{ 'is-loading': isLoading }"
                                type="submit"
                            >
                                <div class="text">
                                    ✨ Search
                                </div>
                                <div class="loading-icon">
                                    <i class="fa fa-cog fa-spin"></i>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md">
                <img
                    alt=""
                    class="illustration"
                    src="../../assets/svg/undraw_exams_g4ow.svg"
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
    overflow: hidden;
}

.fa-question-circle {
    color: #6c63ff;
    font-size: 5rem;
}

button > .text {
    will-change: transform, opacity;
    transition: all 0.3s ease-in-out;
    opacity: 1;
}
button > .loading-icon {
    position: absolute;
    left: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
    will-change: transform, opacity;
    opacity: 0;
}
button.is-loading > .text {
    transform: translateY(-100px);
    opacity: 0;
}
button.is-loading > .loading-icon {
    transform: translateY(-100%);
    opacity: 1;
}

@media screen and (max-width: 760px) {
    .illustration {
        width: 300px;
        padding-top: 80px;
    }
}
</style>

<script>
import { apiService } from "@/utils/api.service.js";

export default {
    name: "Match",

    data() {
        return {
            student_details_form: {
                sat_score: window.localStorage.getItem("sat_score"),
                zip_code: window.localStorage.getItem("zip_code"),
                error: null
            },
            isLoading: false
        };
    },

    methods: {
        async onSubmit() {
            this.isLoading = true;

            let colleges_list_url = `api/v1/user/recommendations`;

            let formData = new FormData();

            let zipcode = this.student_details_form.zip_code;
            if (!zipcode) zipcode = 0;

            formData.append("sat_score", this.student_details_form.sat_score);
            formData.append("zip_code", zipcode);

            try {
                const data = await apiService(
                    colleges_list_url,
                    "POST",
                    formData
                );

                //stores data in session to be accessed in the results component

                window.sessionStorage.setItem("colleges", JSON.stringify(data));

                //stores data in localstorage to be accessed next time the user visits
                window.localStorage.setItem(
                    "sat_score",
                    this.student_details_form.sat_score
                );
                window.localStorage.setItem(
                    "zip_code",
                    this.student_details_form.zip_code
                );

                this.isLoading = false;
                await this.$router.push({
                    name: "search-results"
                });
            } catch {
                console.error("Something bad happened during the API call");
            } finally {
                this.isLoading = false;
            }
        }
    },

    mounted: function() {
        document.title = "Admittedly | Match";
    }
};
</script>
