import { GenreService } from "../utils/GenreService.js";
import { DateUtils } from "../utils/DateUtils.js";
import { seasons }  from "../data.js";

/**
 * PodcastModal Web Component
 * 
 * A custom element that displays detailed podcast information in a modal overlay.
 * Encapsulates modal structure, styling, and behavior using Shadow DOM.
 * 
 * @customElement podcast-modal
 * @example
 * <podcast-modal></podcast-modal>
 */
class PodcastModal extends HTMLElement {
  constructor() {
    super();
    
    // Create shadow DOM
    this.attachShadow({ mode: 'open' });
    
    // Bind methods to preserve context
    this.handleClose = this.handleClose.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
}