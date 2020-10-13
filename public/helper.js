window.onscroll = () => {
    const header = document.querySelector("#header");
    const dynamicBrand = document.querySelector(".dynamic-brand");
    const headerHeight = header.clientHeight;

    if (
        document.body.scrollTop > headerHeight ||
        document.documentElement.scrollTop > headerHeight
    ) {
        header.classList.add("is-active");
        dynamicBrand.classList.remove("navbar-brand");
    } else {
        header.classList.remove("is-active");
        dynamicBrand.classList.add("navbar-brand");
    }
};
