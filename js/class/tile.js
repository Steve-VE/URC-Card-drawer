
class Square {
    constructor () {
        this.space = [0, 0, 0, 0];
        this.spawnPoint = false;
    }
}

class Tile {
    constructor (map) {
        this.map = [];
        for (const row of map) {
            const mapRow = [];
            for (const i in row) {
                if (row[i] === 1) {
                    mapRow[i] = new Square();
                } else {
                    mapRow[i] = undefined;
                }
            }
            this.map.push(mapRow);
        }
    }

    setEntrance () {}

    setExit () {}

    setItemsA () {}

    setItemsB () {}

    setSpawnPoints () {
        console.log(arguments);
        if (Array.isArray(arguments[0])) {
            for (const pos of arguments) {
                const x = pos[0];
                const y = pos[1];
                const square = this.map[y][x];
                square.spawnPoint = true;
            }
        } else if (arguments.length === 2) {
            const x = arguments[0];
            const y = arguments[1];
            const square = this.map[y][x];
            square.spawnPoint = true;
        }
    }
}

const tiles = {
    littleSquare: new Tile([
        [1, 1],
        [1, 1],
    ]),
};


tiles.littleSquare.setEntrance(1, 1, 'bottom');
tiles.littleSquare.setExit(0, 1, 'left');
tiles.littleSquare.setItemsA(1, 0);
// tiles.littleSquare.setSpawnPoints(1, 0);
tiles.littleSquare.setSpawnPoints([1, 0], [0, 1]);