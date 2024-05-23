document.addEventListener("DOMContentLoaded", function() {
    // Get all the plus and minus icons
    const plusIcons = document.querySelectorAll(".fa-plus-circle");
    const minusIcons = document.querySelectorAll(".fa-minus-circle");
    const trashIcons = document.querySelectorAll(".fa-trash-alt");

    // Add event listeners to the plus icons
    plusIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            const quantityElement = this.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotal();
        });
    });

    // Add event listeners to the minus icons
    minusIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            const quantityElement = this.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotal();
            }
        });
    });

    // Add event listeners to the trash icons
    trashIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            const card = this.closest(".card");
            card.remove();
            updateTotal();
        });
    });

    function updateTotal() {
        const prices = document.querySelectorAll(".unit-price");
        const quantities = document.querySelectorAll(".quantity");
        let total = 0;
        for (let i = 0; i < prices.length; i++) {
            const price = parseFloat(prices[i].textContent.replace("$", ""));
            const quantity = parseInt(quantities[i].textContent);
            total += price * quantity;
        }
        document.querySelector(".total").textContent = `${total} $`;
    }
});
