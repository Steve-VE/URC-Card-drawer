const DEFAULT_DECK = [1, 1, 2, 3, 4, 4, 5, 5, 6];
const config = {
    avoidEarlyExit: true,
};
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
const cards = {
    1: 'easy',
    2: 'easy',
    3: 'easy',
    4: 'medium',
    5: 'medium',
    6: 'hard',
};
