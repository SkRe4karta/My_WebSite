document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Убираем активный класс у всех вкладок и ссылок
            tabLinks.forEach(link => link.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Добавляем активный класс к текущей вкладке и ссылке
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).classList.add("active");
            this.classList.add("active");
        });
    });

    // Анимация появления элементов
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, index * 200); // Задержка для каждого элемента
    });

    const zoomElements = document.querySelectorAll(".zoom-in");
    zoomElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "scale(1)";
        }, index * 200); // Задержка для каждого элемента
    });
});