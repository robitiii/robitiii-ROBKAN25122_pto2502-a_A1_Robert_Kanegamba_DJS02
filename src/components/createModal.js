import { GenreService } from "../utils/GenreService.js";
import { DateUtils } from "../utils/DateUtils.js";

/**
 * PodcastCard Web Component
 * 
 * A custom element that displays podcast information in a card format.
 * Encapsulates structure, style, and behavior using Shadow DOM.
 * 
 * @customElement podcast-card
 * @example
 * <podcast-card 
 *   data-id="123" 
 *   data-title="Podcast Title" 
 *   data-image="image.jpg" 
 *   data-seasons="5" 
 *   data-genres="[1,2]" 
 *   data-updated="2022-11-01T07:00:00.000Z">
 * </podcast-card>
 */
class PodcastCard extends HTMLElement {
  constructor() {
    super();
    
    // Create shadow DOM
    this.attachShadow({ mode: 'open' });
    
    // Bind methods to preserve context
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Called when the element is connected to the DOM
   */
  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  /**
   * Called when the element is disconnected from the DOM
   */
  disconnectedCallback() {
    this.removeEventListeners();
  }

  /**
   * Called when observed attributes change
   * @param {string} name - The attribute name that changed
   * @param {string} oldValue - The previous value
   * @param {string} newValue - The new value
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }
}
