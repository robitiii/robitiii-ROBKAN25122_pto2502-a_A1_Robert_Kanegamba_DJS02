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
   * Renders the modal's HTML structure
   */
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: none;
          justify-content: center;
          align-items: center;
          z-index: 100;
        }
        
        :host([open]) {
          display: flex;
        }
        
        .modal-content {
          background: white;
          max-width: 900px;
          width: 90%;
          padding: 2rem;
          border-radius: 8px;
          position: relative;
          overflow-y: auto;
          max-height: 90vh;
        }
        
        .title-section {
          display: flex;
        }
        
        .title-section h2 {
          margin-top: 0px;
        }
        
        .banner {
          display: flex;
        }
        
        .info-section {
          margin-left: 10px;
        }
        
        .info-section h3 {
          margin: 0px;
        }
        
        .info-section p {
          color: #555;
        }
        
        .modal-img {
          width: 45%;
          border-radius: 6px;
          align-self: flex-start;
          height: auto;
        }
        
        .modal-updated-text {
          font-size: 0.8rem;
          color: #555;
          margin-top: 25px;
        }
        
        .season-list {
          padding-left: 0px;
        }
        
        .season-item {
          list-style: none;
          display: flex;
          justify-content: space-between;
          border: 1px solid rgb(223, 218, 218);
          border-radius: 6px;
          padding: 20px 12px;
          margin-bottom: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
        
        .episodes {
          color: #555;
          font-size: 0.75rem;
        }
        
        .close-btn {
          position: absolute;
          right: 1rem;
          top: 1rem;
          background: transparent;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        
        .close-btn:hover {
          color: red;
          transform: scale(1.2);
        }
        
        .tags {
          margin: 0.5rem 0;
        }
        
        .tag {
          background: #eee;
          padding: 0.3rem 0.6rem;
          margin-right: 0.5rem;
          margin-top: 0.5rem;
          border-radius: 4px;
          display: inline-block;
          font-size: 0.8rem;
        }
        
        @media (max-width: 480px) {
          .banner {
            flex-direction: column;
          }
          .modal-img {
            width: 100%;
            border-radius: 6px;
          }
          .info-section {
            margin-left: 0px;
          }
          .info-section p {
            font-size: 0.75rem;
          }
          .season-title {
            font-size: 0.8rem;
          }
        }
      </style>
      
      <div class="modal-content">
        <div class="title-section">
          <h2 id="modal-title"></h2>
          <button class="close-btn" id="close-btn">&times;</button>
        </div>
        <div class="banner">
          <img id="modal-image" class="modal-img" />
          <div class="info-section">
            <h3>Description</h3>
            <p id="modal-description"></p>
            <h3>Genres</h3>
            <div id="modal-genres" class="tags"></div>
            <p id="modal-updated" class="modal-updated-text"></p>
          </div>
        </div>
        <h3>Seasons</h3>
        <ul id="season-list" class="season-list"></ul>
      </div>
    `;
  }
}