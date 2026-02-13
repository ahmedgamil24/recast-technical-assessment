// console.log(Product)

class UI {
  static renderProduct(product) {
    const container = document.getElementById("product-details");
    container.innerHTML = product.render();
  }

  static updateCartCount(count) {
    const cartCount = document.querySelector(".cart-count");
    cartCount.textContent = count;
  }

  static renderCollection(products) {
    const container = document.getElementById("ring-collection");
    container.innerHTML = 
        `<h2>Ring Collection</h2>
        <div class="collection-grid">
            ${products.map(product => 
                `<article class="product-card">
                    <img src="assets/images/${product.image}" alt="${product.name}">
                    <h4>${product.name}</h4>
                    <p>$${product.price}</p> 
                </article>`
            ).join("")}
        </div>
        <button class="shop-rings-btn">Shop Rings</button>`
  }
}
