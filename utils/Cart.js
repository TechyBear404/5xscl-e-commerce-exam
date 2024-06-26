import products from "../data/products.json";
import { Cart } from "../components/Cart";
import { showToast } from "../utils/Toast";

export const UpdateCartBadge = (cart) => {
  const cartContentQty = document.querySelector("#cart-content-qty");
  // console.log(cart);
  // if (cart.length === 0) {
  //   cartContentQty.classList.add("d-none");
  //   return;
  // }
  // cartContentQty.classList.remove("d-none");
  const qty = cart.reduce((acc, item) => acc + item.quantity, 0);
  cartContentQty.textContent = qty;
};

// Ajoute un produit au panier
export const AddToCart = (id, qty = 1) => {
  const product = products.find((product) => product.id == id);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find((item) => item.id == id);

  if (item) {
    item.quantity += qty;
  } else {
    cart.push({ ...product, quantity: qty });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  Cart(cart);
  UpdateCartBadge(cart);
  showToast("Produit ajouté au panier", "success");
};

// Met à jour un produit du panier
export const UpdateCart = (id, action) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find((item) => item.id == id);

  if (action === "increase") {
    item.quantity++;
  } else if (action === "decrease") {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  Cart(cart);
  UpdateCartBadge(cart);
  showToast("Le panier a été mis à jour", "success");
};

export const DeleteProduct = (id) => {
  console.log("delete product");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cart.findIndex((item) => item.id === id);

  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  Cart(cart);
  UpdateCartBadge(cart);
  showToast("Produit supprimé du panier");
};

export const EmptyCart = () => {
  localStorage.removeItem("cart");
  Cart([]);
  UpdateCartBadge([]);
  showToast("Le panier a été vidé", "success");
};
