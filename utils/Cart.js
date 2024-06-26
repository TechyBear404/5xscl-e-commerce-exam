import products from "../data/products.json";
import { Cart } from "../components/Cart";

export const AddToCart = (id) => {
  const product = products.find((product) => product.id == id);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find((item) => item.id == id);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  Cart(cart);
};

export const UpdateCart = (id, action) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find((item) => item.id == id);

  if (action === "increase") {
    item.quantity++;
  } else if (action === "decrease") {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      cart.splice(cart.indexOf(item), 1);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  Cart(cart);
};
