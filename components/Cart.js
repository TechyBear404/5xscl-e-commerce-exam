// a component that displays the cart items and total price of the cart you can add and delete products from the cart, or clean the cart. the cart must be saved in the local storage
import { CartItemTemplate } from "./CartItemTemplate.js";
import { UpdateCart } from "../utils/Cart.js";

export const Cart = () => {
  const cartElem = document.querySelector("#cart");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalPrice = 0;

  const id = `cart-${Math.random().toString(36).slice(2)}`;

  cartElem.innerHTML = `
  <div class="d-flex flex-column justify-content-end bg-white rounded overflow-hidden border border-primary">
    <div
      class="table-responsive"
    >
      <table
        id="${id}"
        class="table table-primary"
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
      <div class="d-flex justify-content-end">
        <h3>Total: <span id="total-price">0</span>€</h3>
      </div>
      <div class="d-flex justify-content-end">
        <button id="clean-cart" class="btn btn-danger">Vider le panier</button>
      </div>
    </div>
  </div>
    `;

  const listElement = cartElem.querySelector(`#${id} tbody`);
  const totalPriceElement = cartElem.querySelector("#total-price");
  const cleanCartButton = cartElem.querySelector("#clean-cart");

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

  cleanCartButton.addEventListener("click", () => {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
  });

  const increaseQuantityButtons =
    listElement.querySelectorAll(".increase-quantity");
  const decreaseQuantityButtons =
    listElement.querySelectorAll(".decrease-quantity");

  increaseQuantityButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      UpdateCart(event.target.dataset.itemId, "increase");
    });
  });
  decreaseQuantityButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      UpdateCart(event.target.dataset.itemId, "decrease");
    });
  });

  listElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-item")) {
      const index = cart.findIndex(
        (item) => item.id === event.target.dataset.itemId
      );

      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCart();
    }
  });
};
