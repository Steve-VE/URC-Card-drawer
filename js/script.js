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
            const cardIndex = deck.pop();
            lastCard = document.createElement('div');
            lastCard.dataset.cardIndex = cardIndex;
            lastCard.classList.add('card', 'small', `c-${cardIndex}`);
            tableHTLM.append(lastCard);

            // No more cards in the deck.
            if (deck.length === 0) {
                deckHTML.style.opacity = 0;
                deckHTML.classList.remove('clickable');
            }
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
        }
    });

    buttonDrawAll.addEventListener('click', () => {
        while (deck.length) {
            draw();
        }
    });
};

function shuffle (paramList) {
    const list = Array.from(paramList);
    const shuffledList = [];
    while(list.length) {
        const index = Math.floor(Math.random() * list.length);
        shuffledList.push(list.splice(index, 1)[0]);
    }
    return shuffledList;
}
