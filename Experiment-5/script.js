const categorySelect = document.getElementById("category");
const products = document.querySelectorAll(".product");

categorySelect.addEventListener("change", function() {
  const selectedCategory = this.value;
  products.forEach(product => {
    if (selectedCategory === "All" || product.getAttribute("data-category") === selectedCategory) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
