import { Carousel } from "../components/Carousel";
import products from "../data/products.json";

// get 5 random images form products "img" property
const images = products.map((product) => ({
  src: product.img,
  title: product.name,
  desc: product.desc,
}));

for (let i = images.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [images[i], images[j]] = [images[j], images[i]];
}

/**
 * Page d'accueil
 *
 * @param {HTMLElement} element
 * @returns {void}
 */
export const Home = (element) => {
  element.innerHTML = `
    ${Carousel(images.slice(0, 5))}
    `;
};
