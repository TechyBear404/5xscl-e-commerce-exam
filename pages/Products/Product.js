import products from "../../data/products.json";
import categories from "../../data/categories.json";
import { AddToCart } from "../../utils/Cart";

/**
 * Page des détails d'un produit
 *
 * @param {HTMLElement} element
 * @returns {void}
 */
export const Product = (element) => {
  // on récupère l'identifiant du produits depuis l'URL
  const url = new URL(window.location.href);
  const productId = parseInt(url.searchParams.get("id"));
  // on récupère l'utilisateur correspondant à l'identifiant
  const product = products.find((product) => product.id === productId);
  let qty = 1;

  const category = categories.find(
    (category) => category.id === product.category
  );

  // si l'utilisateur n'existe pas, on affiche un message d'erreur
  if (!product) {
    element.innerHTML = `
      <h1>Produit non trouvé</h1>
      <p>Le produit avec l'identifiant ${productId} n'existe pas.</p>
      `;
    return;
  }

  element.innerHTML = `
  <div id="product" class="d-flex flex-column gap-1 relative overflow-y-auto overflow-x-hidden p-3 ">
    <img src="${product.img}" alt="${product.name}" class="w-100 h-auto">
    <div class="mt-3 d-flex align-items-lg-center justify-content-between">
      <div class="col-6">
        <h1>${product.name}</h1>
        <h3 class="card-subtitle text-muted fs-6 mb-4">${category.name}</h3>
        <p>${product.desc}</p>
      </div>
      <div class="d-flex flex-column align-items-end gap-2 col-3">
        <h3>${product.price} €</h3>
        <div class="d-flex gap-3 align-items-center">
          <h4 className="">Qté</h4>
          <div class="d-flex">
            <button class="btn btn-sm btn-primary decrease-product-quantity" data-product="${product.id}">-</button>
            <div class="px-2 bg-body-secondary product-qty">${qty}</div>
            <button class="btn btn-sm btn-primary increase-product-quantity" data-product="${product.id}">+</button>
          </div>
          <button class="btn btn-primary add-to-cart" data-product="${product.id}">Ajouter au panier</button>
        </div>
      </div>
    </div>
  </div>
    `;

  const productQty = element.querySelector(".product-qty");

  element.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      AddToCart(event.target.dataset.product, qty);
      console.log("Ajouté au panier");
    });
  });

  document.querySelectorAll(".decrease-product-quantity").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      qty > 1 ? qty-- : qty;
      productQty.textContent = qty;
    });
  });
  document.querySelectorAll(".increase-product-quantity").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      qty++;
      productQty.textContent = qty;
    });
  });
};
