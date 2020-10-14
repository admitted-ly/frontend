<template>
    <div>
        <h1>
            ⭐️ Percent admitted:
            {{ college.Percent_admitted___total }}%
        </h1>
        <h2>⭐️ Highest degree: {{ college.Highest_degree_offered }}</h2>
        <div class="progress-bar-wrapper">
            <div class="progress-bar">
                <div
                    class="pin college-sat"
                    :data-score="Math.round((1600 * sat) / 100)"
                    :style="{ left: sat + '%' }"
                >
                    <div class="range-marker"></div>
                    <i class="fa fa-graduation-cap"></i>
                </div>
                <div
                    class="pin my-sat"
                    :data-score="user_sat"
                    :style="{ left: user_sat_normalized + '%' }"
                >
                    <i class="fa fa-map-marker"></i>
                    <div class="range-marker"></div>
                </div>
            </div>
        </div>
        <div class="chance-of-admission">{{ matchRate }}% Match</div>
    </div>
</template>

<style scoped>
.chance-of-admission {
    font-size: 40px;
    margin-top: 20px;
    font-weight: bold;
    text-align: center;
}
.progress-bar-wrapper {
    width: 100%;
    height: 120px;
}
.progress-bar {
    width: 100%;
    height: 20px;
    border-radius: 20px;
    margin-top: 70px;
    background: linear-gradient(
        to right,
        red 20%,
        yellow 50%,
        yellow 80%,
        lime 100%
    );
    position: relative;
}
.progress-bar:before {
    position: absolute;
    left: 10px;
    top: 25px;
    font-size: 17px;
    content: "0";
    color: black;
    opacity: 0.5;
}
.progress-bar:after {
    position: absolute;
    right: 10px;
    top: 25px;
    font-size: 17px;
    content: "1600";
    color: black;
    opacity: 0.5;
}
.progress-bar .pin {
    position: absolute;
    left: 0%;
    bottom: 15px;
    width: 20px;
    font-size: 29px;
    color: black;
}
.progress-bar .pin.college-sat {
    position: absolute;
    left: 0%;
    bottom: 15px;
    width: 20px;
    font-size: 29px;
    color: black;
}
.progress-bar .pin.college-sat:before {
    top: unset;
    bottom: -72px;
    left: -2px;
}
.progress-bar .pin.college-sat i {
    position: absolute;
    bottom: -48px;
    font-size: 23px;
    left: 2px;
}
.progress-bar .pin:before {
    content: attr(data-score);
    position: absolute;
    top: -16px;
    left: -50%;
    font-size: 17px;
}
.pin .range-marker {
    width: 2px;
    height: 20px;
    position: absolute;
    top: 38px;
    left: 8px;
    background: black;
    opacity: 0.3;
}
.pin.college-sat .range-marker {
    top: -5px;
    left: 14px;
}
</style>

<script>
export default {
    name: "CollegeStats",
    props: {
        college: {
            type: Object,
            required: true
        },
        user_sat: {
            type: Number,
            required: true
        }
    },
    computed: {
        user_sat_normalized() {
            return Math.min(1600, Math.max(0, this.user_sat / 1600)) * 100;
        },
        sat() {
            return (this.college.SAT / 1600) * 100;
        },
        matchRate() {
            let rate = Number(
                ((1600 - Math.abs(this.college.SAT - this.user_sat)) / 1600) *
                    100
            ).toFixed(2);
            if (rate === "100.00") return 100;
            return rate;
        }
    }
};
</script>
