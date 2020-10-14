window.onscroll = () => {
    const header = document.querySelector("#header");
    const dynamicBrand = document.querySelector(".dynamic-brand");
    const heroHeight = document.querySelector("#hero").clientHeight;

    if (
        document.body.scrollTop > heroHeight ||
        document.documentElement.scrollTop > heroHeight
    ) {
        header.classList.add("is-active");
        dynamicBrand.classList.remove("navbar-brand");
    } else {
        header.classList.remove("is-active");
        dynamicBrand.classList.add("navbar-brand");
    }
};
