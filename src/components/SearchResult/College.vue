<template>
    <div class="container">
        <div class="card college-info-card px-3 mb-5">
            <div class="card-body">
                <div class="overlay">
                    <img
                        class="overlay-img"
                        :src="generateImageUrl(college.Name, 'jpg')"
                        alt=""
                    />
                </div>
                <div class="row px-2">
                    <div class="col-md-4 col-12 text-center pic-column">
                        <img
                            :alt="college.name"
                            :src="generateImageUrl(college.Name, 'jpg')"
                            @load="imageFound = true"
                            onerror="this.style.display = 'none'"
                        />
                        <div v-if="!imageFound" class="noImageFoundFallback">
                            <i class="fa fa-graduation-cap"></i>
                        </div>
                    </div>

                    <div class="col-md-8 col-12 text-left px-md-5 px-1">
                        <div class="mt-3 ">
                            <a target="_blank" :href="college_url">
                                <h3 class="college-name">
                                    {{ counter }}. {{ college.Name }}
                                    <i
                                        aria-hidden="true"
                                        class="fa fa-external-link ml-1 college-name"
                                    ></i>
                                </h3>
                            </a>
                            <p class="font-weight-bold state-name">
                                📍 {{ college.County_name }},
                                {{ college.FIPS_state_code }}
                            </p>
                        </div>
                        <div class="mt-5">
                            <CollegeStats
                                :user_sat="user_sat"
                                :college="college"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CollegeStats from "@/components/SearchResult/CollegeStats";
export default {
    name: "College",
    components: { CollegeStats },
    props: {
        counter: {
            type: Number,
            required: true
        },
        avg_sat: {
            type: Number,
            required: true
        },
        college: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            user_sat: window.localStorage.getItem("sat_score"),
            college_url: `http://www.google.com/search?q=${this.college.Name}&btnI`,
            imageFound: false
        };
    },
    methods: {
        generateImageUrl(collegeName, extension) {
            const sanitizedCollegeName = collegeName.replace(/[ ]/g, "-");
            return `https://storage.googleapis.com/admittedly.appspot.com/colleges%2F${sanitizedCollegeName}_500x500.${extension}`;
        }
    }
};
</script>

<style scoped>
.state-name {
    font-size: 18px;
}
.card {
    overflow: hidden;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
.card .card-body {
    padding: 20px 30px;
}
.college-name {
    color: #6c63ff;
    font-weight: bold;
    font-size: 29px;
}

.noImageFoundFallback {
    font-size: 13rem;
}

.pic-column {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    overflow: hidden;
    height: 500px;
}

.pic-column img {
    max-height: 500px;
    max-width: 400px;
    filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.09));
}

img.overlay-img {
    position: absolute;
    left: 0;
    top: -50%;
    width: 100%;
    filter: blur(50px) brightness(1.4);
    animation: burn 2s ease 1 normal forwards;
    will-change: filter;
}
@keyframes burn {
    0% {
        filter: blur(30px) brightness(1.5) saturate(1.4) hue-rotate(0deg);
        opacity: 0.8;
    }
    100% {
        filter: blur(80px) brightness(4) saturate(3) hue-rotate(360deg);
        opacity: 0;
    }
}
</style>
