// import { RoleBadge } from "./RoleBadge";

/**
 * @typedef {Object} product
 * @property {number} id - L'identifiant de l'utilisateur.
 * @property {string} name - Le nom de l'utilisateur.
 * @property {string} email - L'adresse email de l'utilisateur.
 * @property {string} role - Le rôle de l'utilisateur.
 */

/**
 * Affiche une carte d'un produit
 *
 * @param {Product} product
 * @returns {string} HTML string
 */
export const ProductCard = (product) => {
  return `
    <div class="col p-2">
      <a class="card product-link" href="/product?id=${product.id}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price}</p>
        </div>
      </a>
    </div>
    `;
};
