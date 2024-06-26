import { CartItemTemplate } from "./CartItemTemplate.js";
import {
  UpdateCart,
  DeleteProduct,
  EmptyCart,
  UpdateCartBadge,
} from "../utils/Cart.js";

export const Cart = () => {
  const cartElem = document.querySelector("#cart");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalPrice = 0;

  UpdateCartBadge(cart);

  const id = `cart-${Math.random().toString(36).slice(2)}`;

  // On affiche le panier
  cartElem.innerHTML = `
  <div class="d-flex flex-column justify-content-end bg-white rounded overflow-hidden border border-primary min-w-500px">
    <div
      class="table-responsive"
    >
      <table
        id="${id}"
        class="table "
      >
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prix</th>
            <th scope="col">Quantité</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
      ${cart.length === 0 ? "<p class='p-2'>Le panier est vide</p>" : ""}
      <div class="d-flex justify-content-end pe-2">
        <h3>Total: <span id="total-price">0</span>€</h3>
      </div>
      <div class="d-flex justify-content-between align-items-end p-2 gap-2">
        <button id="clean-cart" class="btn btn-sm btn-outline-danger">Vider le panier</button>
        <button id="validate-cart" class="btn btn-lg btn-success">Passer la commande</button>
      </div>
    </div>
  </div>
    `;

  const listElement = cartElem.querySelector(`#${id} tbody`);
  const totalPriceElement = cartElem.querySelector("#total-price");
  const cleanCartButton = cartElem.querySelector("#clean-cart");
  const validateCartButton = cartElem.querySelector("#validate-cart");

  // Fonction pour mettre à jour le panier
  const updateCart = () => {
    totalPrice = 0;
    listElement.innerHTML = `
      ${cart.map(CartItemTemplate).join("")}
    `;
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    totalPriceElement.textContent = totalPrice.toFixed(2);
  };

  updateCart();

  // On vide le panier
  cleanCartButton.addEventListener("click", () => {
    EmptyCart();
  });

  // On valide le panier
  validateCartButton.addEventListener("click", () => {
    EmptyCart();
  });

  // On ajoute les écouteurs d'événements pour les boutons d'ajout de quantité
  const increaseQuantityButtons =
    listElement.querySelectorAll(".increase-quantity");

  increaseQuantityButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      UpdateCart(event.target.dataset.itemId, "increase");
    });
  });

  // On ajoute les écouteurs d'événements pour les boutons de diminution de quantité
  const decreaseQuantityButtons =
    listElement.querySelectorAll(".decrease-quantity");

  decreaseQuantityButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      UpdateCart(event.target.dataset.itemId, "decrease");
    });
  });

  // On ajoute les écouteurs d'événements pour les boutons de suppression d'item
  listElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-item")) {
      DeleteProduct(event.target.dataset.itemId);
    }
  });
};
