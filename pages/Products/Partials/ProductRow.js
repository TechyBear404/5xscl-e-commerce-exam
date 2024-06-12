import { RoleBadge } from "./RoleBadge";

/**
 * @typedef {Object} Product
 * @property {number} id - L'identifiant de l'utilisateur.
 * @property {string} name - Le nom de l'utilisateur.
 * @property {string} email - L'adresse email de l'utilisateur.
 * @property {string} role - Le rôle de l'utilisateur.
 */

/**
 * Affiche une ligne d'un tableau d'utilisateurs
 *
 * @param {Product} product
 * @returns {string} HTML string
 */
export const ProductRow = (product) => {
  return `
    <tr>
      <td>${product.name}</td>
      <td>${product.price}</td>
      // <td>${RoleBadge(product.role)}</td>
      <td><a class="btn btn-primary btn-sm" href="/utilisateur?id=${
        product.id
      }"><i class="ri-search-eye-line"></i></a></td>
    </tr>
    `;
};
