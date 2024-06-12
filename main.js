import "./style.scss";
import * as bootstrap from "bootstrap";

import { app } from "./framework/app";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products/Products";
import { Product } from "./pages/Products/Product";

const routes = {
  "/": Home,
  "/product": Product,
  "/products": Products,
};

app("#app", routes);
