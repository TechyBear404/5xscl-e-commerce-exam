import products from "../../data/products.json";
import { AddToCart } from "../../utils/Cart";
// import { RoleBadge } from "./Partials/RoleBadge";

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

  // si l'utilisateur n'existe pas, on affiche un message d'erreur
  if (!product) {
    element.innerHTML = `
      <h1>Produit non trouvé</h1>
      <p>Le produit avec l'identifiant ${productId} n'existe pas.</p>
      `;
    return;
  }

  element.innerHTML = `
    <img src="${product.img}" alt="${product.name}" class="w-100 h-auto">
    <div class="mt-3 d-flex align-items-lg-start justify-content-between">
      <div>
        <h1>${product.name}</h1>
        <p>${product.price}</p>
      </div>
      <button class="btn btn-primary add-to-cart" data-product="${product.id}">Ajouter au panier</button>
    </div>
    `;

  element.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      // on empêche le comportement par défaut du bouton
      event.preventDefault();
      AddToCart(event.target.dataset.product);
      console.log("Ajouté au panier");
    });
  });
};
