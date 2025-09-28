import { podcasts } from "./data.js";
import { PodcastModal } from "./components/createModal.js";
import { createGrid } from "./views/createGrid.js";

/**
 * Initializes the podcast application.
 *
 * @principle SRP - Only responsible for application startup logic like event binding and rendering initial grid.
 */
function init() {
  const grid = createGrid();
  grid.render(podcasts);
  const modal = new PodcastModal();
  document.body.appendChild(modal);
}

init();
