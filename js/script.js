window.onload = () => {
    let lastCard;
    let deck = shuffle(DEFAULT_DECK);
    const deckHTML = document.querySelector('.deck .card');
    const tableHTLM = document.querySelector('.table');
    const buttonRefresh = document.querySelector('[data-role="shuffle-deck"]');
    const buttonRetry = document.querySelector('[data-role="shuffle-last-card"]');
    const buttonDrawAll = document.querySelector('[data-role="draw-all"]');

    function draw () {
        // Draw a card.
        if (deck.length) {
            let cardIndex = deck.pop();
            // Check if we haven't draw the exit too soon (if setting `avoidEarlyExit` is on).
            if (config.avoidEarlyExit && cardIndex === 6 && deck.length > 5) {
                // Draw the next card instead, then put the exit card in the deck and shuffle the deck.
                cardIndex = deck.pop();
                deck.push(6);
                deck = shuffle(deck);
            }
            lastCard = document.createElement('div');
            lastCard.dataset.cardIndex = cardIndex;
            lastCard.classList.add('card', 'small', `c-${cardIndex}`);
            tableHTLM.append(lastCard);

            // Add bigger card for zoom.
            const bigCard = document.createElement('div');
            bigCard.classList.add('card', 'large', `c-${cardIndex}`);
            lastCard.append(bigCard);

            // Hide the card back on the deck because there is no more cards in the deck.
            if (deck.length === 0) {
                deckHTML.style.opacity = 0;
                deckHTML.classList.remove('clickable');
            }
            updateButtons();
        }
    }

    function updateButtons () {
        if (deck.length === DEFAULT_DECK.length) {
            disable(buttonRefresh);
            disable(buttonRetry);
            enable(buttonDrawAll);
        } else if (deck.length > 0) {
            enable(buttonRefresh);
            enable(buttonRetry);
            enable(buttonDrawAll);
        } else {
            enable(buttonRefresh);
            enable(buttonRetry);
            disable(buttonDrawAll);
        }
    }

    deckHTML.classList.add('clickable');
    deckHTML.addEventListener('click', draw);

    putVisualBackOnDeck = function () {
        deckHTML.style.opacity = 1;
        deckHTML.classList.add('clickable');
    };

    buttonRefresh.addEventListener('click', () => {
        // Shuffle all cards in the deck.
        deck = shuffle(DEFAULT_DECK);
        if (lastCard) {
            // Add the card back on the deck.
            let cardBack = deckHTML.querySelector('.card.back');
            if (!cardBack) {
                putVisualBackOnDeck();
            }
            // Remove all cards on the table.
            while (tableHTLM.childNodes[0]) {
                tableHTLM.childNodes[0].remove();
            }
            lastCard = false;
            updateButtons();
        }
    });

    buttonRetry.addEventListener('click', () => {
        if (lastCard) {
            if (deck.length === 0) {
                putVisualBackOnDeck();
            }
            // Put the last card somewhere in the deck.
            const index = Math.floor(Math.random() * deck.length);
            deck.splice(index, 0, lastCard.dataset.cardIndex);

            previousCard = lastCard.previousSibling;
            lastCard.remove();
            lastCard = previousCard;
            updateButtons();
        }
    });

    buttonDrawAll.addEventListener('click', () => {
        while (deck.length) {
            draw();
        }
    });
};

function disable (button) {
    button.classList.add('inactive');
}
function enable (button) {
    button.classList.remove('inactive');
}

function shuffle (paramList) {
    const list = Array.from(paramList);
    const shuffledList = [];
    while(list.length) {
        const index = Math.floor(Math.random() * list.length);
        shuffledList.push(list.splice(index, 1)[0]);
    }
    return shuffledList;
}
