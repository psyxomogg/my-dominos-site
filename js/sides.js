
 const sidesData = [
    {
        id: 1,
        category: "курка",
        name: "Курячі крильця",
        description: "Соковиті курячі крильця з пікантним соусом.",
        price: 208.00,
        img: "images/chicken-teriyaki-website-main.avif"
    },
    {
        id: 2,
        category: "курка",
        name: "Ребра BBQ",
        description: "Апетитні свинячі реберця в соусі BBQ.",
        price: 220.00,
        img: "images/ribs-teriyaki-website-main.avif"
    },
    {
        id: 3,
        category: "картофель",
        name: "Картопля Фрі",
        description: "Хрустка картопля фрі з ароматними спеціями.",
        price: 99.00,
        img: "images/box-frenchfries-nosauce-withsticker-ukr.avif"
    },
    {
        id: 4,
        category: "соусы",
        name: "Соус Барбекю",
        description: "Ароматний соус для страв.",
        price: 27.00,
        img: "images/sauce-40g-bbq.avif"
    },
    {
        id: 5,
        category: "курка",
        name: "Гострі курячі крильця",
        description: "Крильця в гострому соусі.",
        price: 215.00,
        img: "images/box-buffalowings-nosauce-withsticker-ukr.avif"
    },
    {
        id: 6,
        category: "бурито",
        name: "Цибулеві кільця",
        description: "Смажені кільця цибулі.",
        price: 85.00,
        img: "images/burritochicken-website-main.avif"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".sides-grid");
    
    function renderProducts(category = "all") {
        container.innerHTML = ""; 

        let filteredProducts = sidesData;

        if (category !== "all") {
            filteredProducts = sidesData.filter(item => item.category === category);
        }
        filteredProducts.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("sides-card");
            card.dataset.category = item.category;
            card.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p class="price">${item.price} грн</p>
                <button class="add-to-cart">В кошик</button>
            `;
            container.appendChild(card);
        });
    }
    renderProducts();
    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            renderProducts(category);
        });
    });
    document.getElementById("sort").addEventListener("change", function () {
        let sortedProducts = [...sidesData];

        if (this.value === "price-asc") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (this.value === "price-desc") {
            sortedProducts.sort((a, b) => b.price - a.price);
        }

        renderProducts();
    });
});



