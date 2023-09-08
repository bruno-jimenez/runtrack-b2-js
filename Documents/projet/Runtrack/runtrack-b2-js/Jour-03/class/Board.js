export default class Board {
    constructor() {
        this.grid = [];
        this.hasWinner = false;
        this.currentPlayer = 'X'; // Le joueur X commence
    }

    initializeBoard() {
        this.grid = [
            ["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"]
        ];
        this.hasWinner = false;
        this.currentPlayer = 'X';
    }
}