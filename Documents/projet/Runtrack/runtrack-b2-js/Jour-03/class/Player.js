class Player {
    constructor(symbol, isCurrentPlayer) {
        this.symbol = symbol;
        this.isCurrentPlayer = isCurrentPlayer;
    }
}

const playerX = new Player('X', true);
const playerO = new Player('O', false);