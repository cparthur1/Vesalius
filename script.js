// This script waits for the entire HTML document to be loaded before running.
document.addEventListener('DOMContentLoaded', () => {

  // Find all the elements that need to be changed.
  const navElement = document.querySelector('.VerticalNav, .HorizontalNav');
  const contentElement = document.querySelector('.contentH, .contentV');
  const textElements = document.querySelectorAll('p, h1, h2'); // Select all text elements
  const buttons = document.querySelectorAll('.MainButton, .SecondaryButton, .call2action'); // Select all buttons
  const infoCards = document.querySelectorAll('.infoCard'); // Select all info cards
  const titleCards = document.querySelectorAll('.titleCard'); // Select all title cards

  // --- Store Original Sizes ---
  // Store the initial font size for each text element.
  textElements.forEach(el => {
    const originalSize = window.getComputedStyle(el).fontSize;
    el.setAttribute('data-original-font-size', originalSize);
  });

  // Store the initial width and height for each button.
  buttons.forEach(button => {
    const originalWidth = window.getComputedStyle(button).width;
    const originalHeight = window.getComputedStyle(button).height;
    button.setAttribute('data-original-width', originalWidth);
    button.setAttribute('data-original-height', originalHeight);
  });

  // Store the initial width for each info card.
  infoCards.forEach(icard => {
      const originalWidth = window.getComputedStyle(icard).width;
      icard.setAttribute('data-original-width', originalWidth);
  });
  titleCards.forEach(tcard => {
      const originalWidth = window.getComputedStyle(tcard).width;
      tcard.setAttribute('data-original-width', originalWidth);
  });
  // --- End of Storing Original Sizes ---


  /**
   * This function checks the window's aspect ratio and swaps classes to make the layout responsive.
   * It also adjusts font, button, and card sizes for the mobile view.
   */
  const handleResize = () => {
    // Check if the window's height is greater than its width (portrait orientation).
    const isPortrait = window.innerHeight > window.innerWidth;

    // --- 1. Swap Layout Classes ---
    if (navElement && contentElement) {
      if (isPortrait) {
        // In portrait mode ("mobile"), switch to the horizontal navigation at the bottom.
        navElement.classList.replace('VerticalNav', 'HorizontalNav');
        contentElement.classList.replace('contentH', 'contentV');
      } else {
        // In landscape mode ("desktop"), switch back to the vertical navigation on the side.
        navElement.classList.replace('HorizontalNav', 'VerticalNav');
        contentElement.classList.replace('contentV', 'contentH');
      }
    }
    // --- End of Swapping Layout Classes ---


    // --- 2. Adjust Element Sizes ---
    if (isPortrait) {
      // Apply mobile sizes
      textElements.forEach(el => {
        const originalSize = parseFloat(el.getAttribute('data-original-font-size'));
        el.style.fontSize = `${originalSize + 4}px`;
      });
      buttons.forEach(button => {
        const originalWidth = parseFloat(button.getAttribute('data-original-width'));
        const originalHeight = parseFloat(button.getAttribute('data-original-height'));
        button.style.width = `${originalWidth + 20}px`;
        button.style.height = `${originalHeight + 20}px`;
      });
      infoCards.forEach(icard => {
        icard.style.width = '40%';
      });
      titleCards.forEach(tcard => {
        tcard.style.width = '60%';
      });
    } else {
      // Revert to original desktop sizes by removing the inline styles
      textElements.forEach(el => {
        el.style.fontSize = ''; // Reverts to the CSS stylesheet value
      });
      buttons.forEach(button => {
        button.style.width = ''; // Reverts to the CSS stylesheet value
        button.style.height = ''; // Reverts to the CSS stylesheet value
      });
      infoCards.forEach(icard => {
        icard.style.width = ''; // Reverts to the CSS stylesheet value
      });
      titleCards.forEach(tcard => {
        tcard.style.width = ''; // Reverts to the CSS stylesheet value
      });
    }
    // --- End of Adjusting Sizes ---
  };

  // Run the function once when the page first loads.
  handleResize();

  // Add an event listener to run the function again every time the window is resized.
  window.addEventListener('resize', handleResize);
});
