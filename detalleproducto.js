let products = []; // Asegúrate de que esta variable esté aquí

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productIndex = params.get("product"); // Obtén el índice del producto

  // Aquí debes cargar los productos desde data.js
  parseDataToProducts(); // Asegúrate de que esta función esté definida y llene la lista de productos.

  if (productIndex !== null) {
    const product = products[productIndex]; // Obtén el producto correspondiente al índice

    if (product) {
      document.getElementById("main-img").src = product.Image; // Carga la imagen
      document.querySelector("h1").textContent = product.Title; // Carga el título
      document.querySelector(".price").textContent = `$${product.Price} USD`; // Carga el precio
      document.querySelector(".description").textContent = product.Description; // Carga la descripción

      const sizeSelect = document.getElementById("size");
      sizeSelect.innerHTML = ''; // Limpia el contenido anterior
      product.Size.forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option); // Añade las opciones de talla
      });

      const colorList = document.querySelector(".product-details");
      colorList.innerHTML = ''; // Limpia el contenido anterior
      product.Color.forEach(color => {
        const li = document.createElement("li");
        li.textContent = `Color: ${color}`;
        colorList.appendChild(li); // Añade los colores
      });
    } else {
      console.error("Producto no encontrado.");
    }
  } else {
    console.error("Índice de producto no proporcionado.");
  }
});

// Asegúrate de que esta función está definida y que llena la lista de productos.
function parseDataToProducts() {
  products = []; // Resetea la lista de productos
  data.forEach((item, index) => {
    let product = new Product(
      item.Title,
      item.Price,
      item.description || item.Description,
      item.Size,
      item.Color,
      item.Image
    );
    products.push(product);
  });
}
