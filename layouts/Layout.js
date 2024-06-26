import { Toast } from "../components/Toast";

/**
 * Layout
 * @returns {string} HTML string
 */
export const Layout = () => {
  const year = new Date().getFullYear();

  return `
    <div class="d-flex flex-column vh-100 overflow-hidden">
      ${Toast()}
      <header class="sticky-top">
      </header>
      <main class="container mt-5 ">
      </main>
      <footer class="text-center mt-auto">
        <p>&copy; ${year} - Tous droits réservés</p>
      </footer>
    </div>
    `;
};
