document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".dessert-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            card.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.3)";
            card.style.transform = "translateY(-10px)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
            card.style.transform = "translateY(0)";
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".dessert-card");

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            let boundingRect = card.getBoundingClientRect();
            let xAxis = (e.clientX - boundingRect.left - boundingRect.width / 2) / 10;
            let yAxis = (e.clientY - boundingRect.top - boundingRect.height / 2) / 10;

            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            card.style.boxShadow = `${-xAxis}px ${yAxis}px 20px rgba(0, 0, 0, 0.2)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateY(0deg) rotateX(0deg)";
            card.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)";
        });
    });
});
