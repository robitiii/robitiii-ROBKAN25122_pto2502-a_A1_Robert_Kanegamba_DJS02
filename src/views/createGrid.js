import { PodcastModal } from "../components/PodcastModal.js";

/**
 * Grid Renderer - Responsible for rendering the grid of podcast cards using Web Components.
 *
 * @principle SRP - Manages layout and rendering only; delegates card creation and modal logic elsewhere.
 */
export const createGrid = () => {
  const container = document.getElementById("podcastGrid");
  let modal = null;

  /**
   * Gets or creates the modal instance.
   * @returns {PodcastModal} The modal Web Component instance.
   */
  const getModal = () => {
    if (!modal) {
      modal = document.querySelector("podcast-modal");
      if (!modal){
        modal = document.createElement("podcast-modal");
        document.body.appendChild(modal);
      }
      
    }
    return modal;
  };
   /**
   * Handles podcast card selection
   * @param {CustomEvent} event - The podcastSelected event
   */
  function handlePodcastSelected(event) {
    const podcastData = event.detail;
    const modal = getModal();
    modal.open(podcastData);
  }
  return{
    /**
     * Renders a list of podcast cards into the grid using Web Components.
     * @param {Object[]} podcastList - Array of podcast objects.
     */
    render(podcastList) {
      container.innerHTML = "";
      // Add event listener for podcast selection
      container.addEventListener('podcastSelected', handlePodcastSelected);
      
      podcastList.forEach((podcast) => {
        const card = document.createElement('podcast-card');
        
        // Set attributes for the Web Component
        card.setAttribute('data-id', podcast.id);
        card.setAttribute('data-title', podcast.title);
        card.setAttribute('data-image', podcast.image);
        card.setAttribute('data-seasons', podcast.seasons.toString());
        card.setAttribute('data-genres', JSON.stringify(podcast.genres));
        card.setAttribute('data-updated', podcast.updated);
        
        container.appendChild(card);
      });
    },
  }
};
