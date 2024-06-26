/**
 * CategoriesSelector component
 * @param {Object} props
 * @param {string[]} props.categories
 * @param {string} props.selectedCategory
 * @param {function} props.onSelect
 * @returns {string} HTML string
 */

export const CategoriesMenu = (element, categories, selectedCategory) => {
  element.innerHTML = `
  <div class="d-flex mb-2 gap-4 flex-wrap flex-md-nowrap">
    <div class="gap-1 justify-content-around d-flex flex-column">
      <!-- //add active class to selected category -->
      <button class="btn btn-sm  ${
        selectedCategory === "all" ? "btn-primary" : "btn-secondary"
      }" data-category="all">
        Tous
      </button>

      ${categories
        .map(
          (category) => `
        <button class="btn btn-sm ${
          selectedCategory == category.id ? "btn-primary" : "btn-secondary"
        }" data-category="${category.id}">
          ${category.name}
        </button>
      `
        )
        .join("")}
    </div>
  </div>
  `;
};
