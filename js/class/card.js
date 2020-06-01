const cardsDescription = {
    easy: [
        '2 Zombies',
        '1 Zombie ― Snatching Talons ― The active character must pass an evade roll or their Action Phase ends immediately',
        '1 Zombie - 1 Corpse',
        '1 Zombie',
        '1 Corpse',
        'Empty',
    ],
    medium: [
        '1 Licker',
        '2 Zombie Dogs',
        '1 Zombie ― Lurch Forward ― All enemies on this tile and linked tiles perform a move reaction',
        '2 Zombies at the closed <i class="fa fa-biohasard"/>',
        '1 Zombie',
        '1 Corpse',
    ],
    hard: [
        '1 Evolved Licker',
        '1 Licker',
        '2 Evolved Zombies',
        '2 Zombie Dogs',
        'Replace each corpse on this tile with a Zombie',
        '1 Zombie ― Deepening Unease ― The active character draws two extra cards during the Tension Phase',
    ],
};

const __cardRegister = {};

class Card {
    /**
     * Create a Card.
     * @param {number} index - It's the card number, from 1 to 6.
     * @param {string} encounterLevel could be easy, medium or hard.
     */
    constructor (index, encounterLevel) {
        this.index = index;
        this.encounterLevel = encounterLevel;
        __cardRegister[index] = this;
    }

    get encounterChart () {
        if (this.encounterLevel) {
            return cardsDescription[this.encounterLevel];
        }
        return false;
    }
}

new Card(1, 'easy');
new Card(2, 'easy');
new Card(3, 'easy');
new Card(4, 'medium');
new Card(5, 'medium');
new Card(6, 'hard');
