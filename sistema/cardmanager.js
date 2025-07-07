// Wait until the entire page is loaded
        document.addEventListener('DOMContentLoaded', function () {

            // Get all the pins and all the cards
            const pins = document.querySelectorAll('.pin');
            const cards = document.querySelectorAll('.piececard');

            // Add a click listener to every pin
            pins.forEach(pin => {
                pin.addEventListener('click', function () {
                    
                    // 1. Get the ID of the target card from the pin's 'data-target'
                    const targetId = this.dataset.target;
                    const targetCard = document.getElementById(targetId);

                    // 2. Hide all cards first
                    cards.forEach(card => {
                        card.classList.add('hidden');
                    });

                    // 3. Show only the target card
                    if (targetCard) {
                        targetCard.classList.remove('hidden');
                    }
                });
            });
        });