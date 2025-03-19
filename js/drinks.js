
 
document.addEventListener("DOMContentLoaded"), function () { 
  const menuLinks = document.querySelectorAll(".main-menu a");
    
    menuLinks.forEach(link => {
        link.addEventListener("mouseenter", function () {
            if (this.getAttribute("href") === "drinks.html") {
                this.style.boxShadow = "0px 4px 15px rgba(227, 24, 55, 0.8)";
                this.style.transition = "box-shadow 0.3s ease";
            }
        });

        link.addEventListener("mouseleave", function () {
            this.style.boxShadow = "none";
        });
    });
    const filterButtons = document.querySelectorAll(".filter-btn");
    const drinksGrid = document.querySelector(".drinks-grid");

    const drinksData = [
        { category: "water", name: "Мінеральна вода", price: "30 грн", img: "images/ng-min.avif" },
        { category: "juice", name: "Апельсиновий сік", price: "50 грн", img: "images/ekzotyk-1l.avif" },
        { category: "tea", name: "Зелений чай", price: "40 грн", img: "images/fuze-tea.webp" }
    ];
    function renderDrinks(category) {
        drinksGrid.innerHTML = "";
        let filteredDrinks = drinksData.filter(drink => category === "all" || drink.category === category);
        filteredDrinks.forEach(drink => {
            const drinkCard = document.createElement("div");
            drinkCard.classList.add("drink-card");
            const img = document.createElement("img");
            img.src = drink.img;
            img.alt = drink.name;
            img.style.maxWidth = "100%";
            img.style.height = "200px";
            img.style.objectFit = "contain";

            const title = document.createElement("h2");
            title.textContent = drink.name;

            const price = document.createElement("p");
            price.classList.add("price");
            price.textContent = drink.price;

            drinkCard.appendChild(img);
            drinkCard.appendChild(title);
            drinkCard.appendChild(price);
            drinksGrid.appendChild(drinkCard);
        });
    }
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            renderDrinks(this.getAttribute("data-category"));
        });
    });

    renderDrinks("all"); 
}