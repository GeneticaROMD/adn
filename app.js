window.addEventListener('load', () => {
    let list = document.getElementsByTagName("img");
    Array.from(list).forEach(element => {
        element.classList.add("img-fluid");
    });
});
