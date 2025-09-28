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

/**
   * Define which attributes to observe for changes
   */
  static get observedAttributes() {
    return ['data-id', 'data-title', 'data-image', 'data-seasons', 'data-genres', 'data-updated'];
  }

  /**
   * Renders the component's HTML structure
   */
  render() {
    const id = this.getAttribute('data-id') || '';
    const title = this.getAttribute('data-title') || '';
    const image = this.getAttribute('data-image') || '';
    const seasons = this.getAttribute('data-seasons') || '0';
    const genres = this.getAttribute('data-genres') || '[]';
    const updated = this.getAttribute('data-updated') || '';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        
        .card {
          background: white;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.2s;
        }
        
        .card:hover {
          transform: scale(1.02);
        }
        
        .card img {
          width: 100%;
          border-radius: 6px;
        }
        
        .card h3 {
          margin: 0.5rem 0;
        }
        
        .card p {
          margin: 0px;
          font-size: 0.8rem;
          color: #555;
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
        
        .updated-text {
          font-size: 0.8rem;
          color: #555;
        }
      </style>
      
      <div class="card" data-id="${id}">
        <img src="${image}" alt="${title} cover"/>
        <h3>${title}</h3>
        <p>${seasons} season${seasons > 1 ? 's' : ''}</p>
        <div class="tags" id="genre-tags"></div>
        <p class="updated-text" id="updated-text"></p>
      </div>
    `;

    // Set up genre tags and updated text after initial render
    this.updateGenres(genres);
    this.updateUpdatedText(updated);
  }

   /**
   * Updates the genre tags display
   * @param {string} genresJson - JSON string of genre IDs
   */
  updateGenres(genresJson) {
    try {
      const genreIds = JSON.parse(genresJson);
      const genreTags = this.shadowRoot.getElementById('genre-tags');
      if (genreTags) {
        const genreNames = GenreService.getNames(genreIds);
        genreTags.innerHTML = genreNames.map(name => `<span class="tag">${name}</span>`).join('');
      }
    } catch (error) {
      console.warn('Invalid genres JSON:', genresJson);
    }
  }