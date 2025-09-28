# DJS01 Web Components Podcast App

This project is a **modern vanilla JavaScript application** that displays a list of podcasts as cards and shows detailed information in a modal when a card is clicked. It uses **Web Components**, **Shadow DOM**, and **custom elements** to demonstrate modern web development practices.

> **Note:** This solution focuses on **Web Components architecture** and **encapsulation**. The styling is encapsulated within each component using Shadow DOM.  
> You are encouraged to **customise the look and feel** of the app by modifying the component styles.

## Project Structure

```
/src
│
├── /components
│ ├── PodcastCard.js // Web Component for podcast cards with Shadow DOM
│ └── PodcastModal.js // Web Component for modal with Shadow DOM
│
├── /utils
│ ├── DateUtils.js // Utility for formatting date strings
│ └── GenreService.js // Service to resolve genre IDs into names
│
├── /views
│ └── createGrid.js // Grid renderer that uses Web Components
│
├── data.js // Sample data: podcasts, genres, seasons
└── index.js // Application entry point and setup
```

## Features

- Renders podcast cards dynamically using Web Components
- Opens a modal with more information on click
- Uses genre and season data for display
- Formats dates cleanly and consistently
- Follows **Web Components architecture** with **Shadow DOM encapsulation**
- Custom events for component communication
- Responsive design with encapsulated styling

## Key Takeaways

### 1. **Web Components Architecture**

- Uses custom elements (`<podcast-card>`, `<podcast-modal>`) for component-based architecture.
- Each component encapsulates its own structure, styling, and behavior.

### 2. **Shadow DOM Encapsulation**

- Components use Shadow DOM to encapsulate styles and prevent CSS conflicts.
- Each component is self-contained with its own styling.

  Example:

  ```js
  const card = document.createElement('podcast-card');
  card.setAttribute('data-title', podcast.title);
  ```

### 3. **Custom Events**

- Components communicate through custom events (`podcastSelected`).
- This promotes loose coupling between components.

### 4. **Encapsulation**

- Each Web Component encapsulates its own:
  - HTML structure
  - CSS styling
  - JavaScript behavior
  - Event handling

### 5. **Modern Web Standards**

- Uses native Web Components API
- No external dependencies
- Future-proof architecture
- Reusable across different projects

## How to Run

1. Open `index.html` in your browser.
2. Browse through the podcast cards.
3. Click a card to view more information in the modal.
4. Click "Close" to return to the list.
