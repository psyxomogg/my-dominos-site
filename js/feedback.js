document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".feedback-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Дякуємо за ваш відгук! Ми розглянемо його якнайшвидше.");
        form.reset();
    });
});
