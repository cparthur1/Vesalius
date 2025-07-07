// This script waits for the entire HTML document to be loaded before running.
document.addEventListener('DOMContentLoaded', () => {

  // Find the navigation and content elements in the document.
  const navElement = document.querySelector('.VerticalNav, .HorizontalNav');
  const contentElement = document.querySelector('.contentH, .contentV');

  /**
   * This function checks the window's aspect ratio and swaps classes to make the layout responsive.
   * It uses a vertical nav for landscape orientations and a horizontal nav for portrait orientations.
   */
  const handleResize = () => {
    // Check if the window's height is greater than its width (portrait orientation).
    const isPortrait = window.innerHeight > window.innerWidth;

    if (navElement && contentElement) {
      if (isPortrait) {
        // In portrait mode ("mobile"), switch to the horizontal navigation at the bottom.
        navElement.classList.replace('VerticalNav', 'HorizontalNav');
        // Adjust the content area for the horizontal nav layout.
        contentElement.classList.replace('contentH', 'contentV');
      } else {
        // In landscape mode ("desktop"), switch back to the vertical navigation on the side.
        navElement.classList.replace('HorizontalNav', 'VerticalNav');
        // Adjust the content area for the vertical nav layout.
        contentElement.classList.replace('contentV', 'contentH');
      }
    }
  };

  // Run the function once when the page first loads.
  handleResize();

  // Add an event listener to run the function again every time the window is resized.
  window.addEventListener('resize', handleResize);
});