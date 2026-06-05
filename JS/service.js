// Side Mobile Menu Toggler
let menu = document.getElementById("menu");
function Menu() {
    menu.classList.toggle("active");
}

// Left Nav Tabs Operations Matrix
const cards = document.querySelectorAll(".service-card");
const contents = document.querySelectorAll(".content-box");

cards.forEach(card => {
    card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        card.classList.add("active");
        const target = card.dataset.target;
        document.getElementById(target).classList.add("active");
    });
});

// Dynamic Gallery Fleet Grid Filter Function
function filterBikes(category, buttonElement) {
    const bikeCards = document.querySelectorAll(".bike-card");
    const filterButtons = document.querySelectorAll(".filter-tab");
    
    // Toggle active state visualization on buttons
    filterButtons.forEach(btn => btn.classList.remove("active-filter"));
    if (buttonElement) {
        buttonElement.classList.add("active-filter");
    }

    // Filter bike cards
    bikeCards.forEach((card) => {
        if (category === "all") {
            card.style.display = "flex";
        } else if (card.dataset.category === category) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

// Modal Checkout Open/Close Logic
let rentForm = document.getElementById("rentForm");
let buyForm = document.getElementById("buyForm");
let backdrop = document.getElementById("formBackdrop");

function showRentForm() {
    backdrop.style.display = "block";
    rentForm.style.display = "block";
    buyForm.style.display = "none";
}

function showBuyForm() {
    backdrop.style.display = "block";
    buyForm.style.display = "block";
    rentForm.style.display = "none";
}

function closeForms() {
    backdrop.style.display = "none";
    rentForm.style.display = "none";
    buyForm.style.display = "none";
}

// Intercept Submit Alerts
document.getElementById("rentBikeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Rental Request Sent Successfully!");
    closeForms();
    this.reset();
});

document.getElementById("buyBikeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Purchase Order Sheet Received!");
    closeForms();
    this.reset();
});