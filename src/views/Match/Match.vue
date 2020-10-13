<template>
    <div class="container padding-top">
        <div class="row px-3">
            <div class="col-md">
                <div class="card user-info-card">
                    <div class="sub-heading text-center">
                        <i
                            aria-hidden="true"
                            class="fa fa-question-circle "
                        ></i>
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
                                />
                            </div>
                            <div class="form-group mt-5">
                                <input
                                    v-model="student_details_form.zip_code"
                                    class="form-control"
                                    placeholder="Zip code (optional)"
                                    type="number"
                                />
                            </div>
                            <button
                                class="search-button btn-block"
                                type="submit"
                            >
                                ✨ Search
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
}

.fa-question-circle {
    color: #6c63ff;
    font-size: 5rem;
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
                sat_score: null,
                zip_code: null,
                error: null
            }
        };
    },

    methods: {
        onSubmit() {
            let colleges_list_url = `api/v1/users/recommendations`;

            let formData = new FormData();

            formData.append(
                "sat_score",
                Number(this.student_details_form.sat_score)
            );
            formData.append("zip_code", this.student_details_form.zip_code);

            let method = "POST";

            apiService(colleges_list_url, method, formData)
                .then(data => {
                    this.$router.push({
                        name: "search-results"
                        // params: { colleges_list: data }
                    });
                })
                .catch(error => {
                    this.error = error;
                    this.$router.push({
                        name: "search-results"
                        // params: { colleges_list: data }
                    });
                });
        }
    },

    mounted: function() {
        document.title = "Admittedly | Match";
    }
};
</script>
