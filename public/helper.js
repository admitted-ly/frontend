window.onscroll = () => {
    const header = document.querySelector("#header");
    const dynamicBrand = document.querySelector(".dynamic-brand");

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        header.classList.add("active");
        dynamicBrand.classList.remove("navbar-brand");
    } else {
        header.classList.remove("active");
        dynamicBrand.classList.add("navbar-brand");
    }
};
