document.addEventListener("DOMContentLoaded", function () {
    let timeLeft = 20;
    const timeDisplay = document.getElementById("time-left");
    const steps = document.querySelectorAll(".progress-step");

    function updateTracker() {
        if (timeLeft > 15) {
            steps[0].classList.add("active");
            document.querySelector(".order-status").textContent = "Ваше замовлення було підтверджено";
        } else if (timeLeft > 10) {
            steps[1].classList.add("active");
            document.querySelector(".order-status").textContent = "Піцамейкер додає інгредієнти";
        } else if (timeLeft > 5) {
            steps[2].classList.add("active");
            document.querySelector(".order-status").textContent = "Піца випікається";
        } else if (timeLeft > 1) {
            steps[3].classList.add("active");
            document.querySelector(".order-status").textContent = "Піца готова до доставки";
        } else {
            steps[4].classList.add("active");
            document.querySelector(".order-status").textContent = "Доставка розпочалася!";
        }

        timeDisplay.textContent = timeLeft;
        timeLeft--;

        if (timeLeft >= 0) {
            setTimeout(updateTracker, 1000);
        }
    }

    updateTracker();
});
