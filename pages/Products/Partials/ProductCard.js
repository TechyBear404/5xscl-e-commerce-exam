import categories from "../../../data/categories.json";
import { AddToCart } from "../../../utils/Cart";

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {string} desc
 * @property {string} price
 * @property {string} category
 * @property {string} brand
 * @property {string} img
 */

/**
 * Affiche une carte d'un produit
 *
 * @param {Product} product
 * @returns {string} HTML string
 */
export const ProductCard = (product) => {
  // on récupère le nom de la catégorie du produit via l id de la catégorie
  const category = categories.find(
    (category) => category.id === product.category
  );

  return `
    <div class="col p-2 card product-card ">
      <a class=" text-decoration-none" href="/product?id=${product.id}">
        <div class="card-body">
          <img src="${product.img}" class="card-img-top mb-2" alt="${product.name}">
          <h3 class="card-subtitle mb-1 text-muted fs-6">${category.name}</h3>
          <h2 class="card-title fs-4 text-black">${product.name}</h2>
          <p class="card-text">${product.price} €</p>
        </div>
      </a>
      <button class="btn btn-primary add-to-cart" data-product="${product.id}">Ajouter au panier</button>
    </div>
    `;
};
