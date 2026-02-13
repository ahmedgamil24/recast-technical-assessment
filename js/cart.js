class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push({
      id: product.id,
      name: product.name,
      price: product.price,
    });
  }

  getCount() {
    return this.items.length;
  }
}
