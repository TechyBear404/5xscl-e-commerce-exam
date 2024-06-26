import { CardsList } from "../../components/CardsList";
import products from "../../data/products.json";
import categories from "../../data/categories.json";
import { ProductCard } from "./Partials/ProductCard";
import { CategoriesMenu } from "./Partials/CategoriesMenu";

/**
 * Page de la liste des produits
 *
 * @param {HTMLElement} element
 * @returns {void}
 */
export const Products = (element) => {
  // on récupère la categorie depuis l'URL
  const url = new URL(window.location.href);
  const categoryFromQueryString = url.searchParams.get("category");
  let selectedCategory = categoryFromQueryString || "all";

  element.innerHTML = `
  <div class="d-flex gap-5 relative">
    <div class="" id="categories-menu"></div>
    <div id="products-list" class="overflow-y-auto overflow-x-hidden p-3"></div>
  </div>
    `;

  const productsList = element.querySelector("#products-list");
  const categoriesMenu = element.querySelector("#categories-menu");

  // Fonction pour afficher les produits en fonction de la catégorie sélectionnée
  const render = () => {
    CardsList(
      productsList,
      filterProductsByCategory(products, selectedCategory),
      ProductCard,
      ["name"]
    );
  };

  // Met à jour la categorie dans l'URL
  const putCategoryInQueryString = () => {
    const url = new URL(window.location.href);
    // on reset la page de l'url
    url.searchParams.delete("page");
    url.searchParams.set("category", selectedCategory);
    window.history.pushState({}, "", url);
  };

  // Filtrer les produits par catégorie sélectionnée
  const filterProductsByCategory = (products, category) => {
    if (category === "all") {
      return products;
    }
    return products.filter((product) => product.category == category);
  };

  // Met en surbrillance la catégorie sélectionnée
  const markActiveCategory = () => {
    const buttons = categoriesMenu.querySelectorAll("button");
    buttons.forEach((button) => {
      if (button.dataset.category === selectedCategory) {
        button.classList.remove("btn-secondary");
        button.classList.add("btn-primary");
      } else {
        button.classList.remove("btn-primary");
        button.classList.add("btn-secondary");
      }
    });
  };

  // Initialisation de la page
  CategoriesMenu(categoriesMenu, categories, selectedCategory);
  render();

  // Ajout des écouteurs d'événements pour les catégories
  categoriesMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      selectedCategory = event.target.dataset.category;
      putCategoryInQueryString();
      markActiveCategory();
      render();
    }
  });

  // Ajout d'un écouteur d'événement sur le bouton de retour arrière du navigateur
  window.addEventListener("popstate", () => {
    const url = new URL(window.location.href);
    selectedCategory = url.searchParams.get("category") || "all";
    render();
    markActiveCategory();
  });
};
