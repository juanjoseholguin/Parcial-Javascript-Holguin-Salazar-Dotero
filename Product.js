class Product {
  constructor(Title, Price, Description, Size, Color, Image, CategoryName) {
    this.Title = Title;
    this.Price = Price;
    this.Description = Description;
    this.Size = Size;
    this.Color = Color;
    this.Image = Image;
    this.CategoryName = CategoryName;
  }

  htmlCard(pos) {
    return `
      <div class="product-card">
        <a href="#">
          <img src="${this.Image}" alt="">
        </a>
        <div class="product-info">
          <h3>${this.Title}</h3>
          <p>$ ${this.Price} USD</p>
          <div class="actions">
            <div class="product-item" onclick="productselected(${pos})">
              <button>
                <img src="cart-icon.png" alt="Cart Icon">
              </button>
              <button>
                <img src="heart-icon.png" alt="Heart Icon">
              </button>
            </div>
            <div class="actions">
              <a href="#" onclick="productselected(${pos})" class="button-ver">Ver detalles</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
