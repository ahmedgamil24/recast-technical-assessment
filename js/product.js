// console.log(productData)

class Product {
  constructor(data) {
    this.images = data.images;
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.description = data.description;
    this.specTitle = data.specTitle;
    this.pieceSpecification = data.pieceSpecification;
    this.specs = data.specs;
    this.colors = data.colors;
    this.sizes = data.sizes;
  }

  renderSpecs() {
    return this.specs.map(
      (spec) =>
        `<div class="spec">
                <span class="label">${spec.label}</span>
                <span class="value">${spec.value}</span>
                <span class="desc">${spec.desc}</span>
            </div>`,
    ).join("");
  }

  renderColors() {
    return this.colors.map(
      (color) =>
        `<button class="color-option" data-color=${color}>
                ${color}
            </button>`,
    ).join("");
  }

  renderSizes() {
    return this.sizes
      .map(
        (size) =>
          `<button class="size-option" data-size="${size}">
                ${size}
            </button>`,
      )
      .join("");
  }

  renderGallery() {
    return `<div class="gallery">
        <img class="main-image" src="assets/images/product/${this.images[0]}" />
        <div class="thumbnails">
            ${this.images[1].map((img) => `<img class="thumb" src="assets/images/product/thumbnails/${img}" data-img="${img}" />`).join("")}
        </div>
    </div>`;
  }

  renderInfo() {
    return `<div class="product-info">
            <h1>${this.name}</h1>
            <p class="price">$${this.price}</p>
            <p class="description">${this.description}</p>
            <p class="specTitle">${this.specTitle}</p>
            <p class="pieceSpecification">${this.pieceSpecification}</p>

            <div class="specs">
                ${this.renderSpecs()}
            </div>

            <div class="colors">
                <h4>Color</h4>
                ${this.renderColors()}
            </div>

            <div class="sizes">
                <h4>Sizes</h4>
                ${this.renderSizes()}
            </div>

            <button id="add-to-cart">Add To Cart</button>
        </div>`;
  }

  render() {
    return `<div class="product-details-wrapper">
        ${this.renderGallery()}
        ${this.renderInfo()}
    </div>`;
  }
}
