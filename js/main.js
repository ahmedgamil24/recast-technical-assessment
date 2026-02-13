const product = new Product(productData);
const cart = new Cart();

// console.log(product, cart)

UI.renderProduct(product);

document.addEventListener("click", function (e) {
  if (e.target.id === "add-to-cart") {
    const selectedColor = document.querySelector(".color-option.active")?.dataset.color;
    const selectedSize = document.querySelector(".size-option.active")?.dataset.size;

    // if (!selectedColor || !selectedSize) {

    // }

    cart.addItem(product, {
      color: selectedColor,
      size: selectedSize
    });

    UI.updateCartCount(cart.getCount());
  }

//   if (e.target.classList.contains("thumb")){
//     this.documentElement.querySelector(".main-image").src = e.target.dataset.img
//   }

  if (e.target.classList.contains("color-option")) {
    document.querySelectorAll(".color-option").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
  }

  if (e.target.classList.contains("size-option")) {
    document.querySelectorAll(".size-option").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
  }
});


UI.renderCollection(relatedProducts);