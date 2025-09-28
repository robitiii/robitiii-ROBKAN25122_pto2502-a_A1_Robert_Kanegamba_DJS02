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
