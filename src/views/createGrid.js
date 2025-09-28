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
};
