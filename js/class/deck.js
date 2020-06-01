
class Deck {
    constructor (list) {
        this._list = list;
        this.fetchCards();
        this.shuffle();
    }

    fetchCards () {
        this.cards = [];
        for (const cardIndex in this._list) {
            this.cards.push(__cardRegister[cardIndex]);
        }
    }

    shuffle () {
        this.shuffledCards = [];
        while (this.cards.length) {
            const index = Math.floor(Math.random() * this.cards.length);
            this.shuffledCards.push(this.cards.splice(index, 1)[0]);
        }
        this.cards = this.shuffledCards;
    }
}

const deck = new Deck(DEFAULT_DECK);
