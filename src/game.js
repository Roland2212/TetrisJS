export default class Game {
    static points = {
        '1': 40,
        '2': 100,
        '3': 300,
        '4': 1200,
    };

    score = 0;
    lines = 0;
    endGame = false;
    playField = this.createPlayField();
    activePiece = this.createPiece();

    nextPiece = this.createPiece();

    get level() {
        return Math.floor(this.lines * 0.1);
    }

    getState() {
        const playField = this.createPlayField();

        for (let y = 0; y < this.playField.length; y++) {
            playField[y] = [];
            for (let x = 0; x < this.playField[y].length; x++) {
                playField[y][x] = this.playField[y][x];
            }
        }

        for (let y = 0; y < this.activePiece.rotations[this.activePiece.rotationIndex].length; y++) {
            for (let x = 0; x < this.activePiece.rotations[this.activePiece.rotationIndex][y].length; x++) {
                if (this.activePiece.rotations[this.activePiece.rotationIndex][y][x]) {
                    playField[this.activePiece.y + y][this.activePiece.x + x] = this.activePiece.rotations[this.activePiece.rotationIndex][y][x];
                }
            }
        }

        return playField;
    }

    createPlayField() {
        const playField = [];

        for (let y = 0; y < 20; y++) {
            playField[y] = [];
            for (let x = 0; x < 10; x++) {
                playField[y][x] = 0;
            }
        }
        return playField;
    }

    createPiece() {
        const randomIndex = Math.floor(Math.random() * 7);
        const type = 'IJLOSTZ'[randomIndex];
        let rotationFigure = [];

        switch (type) {
            case 'I':
                rotationFigure = [
                    [
                        [0, 0, 0, 0],
                        [1, 1, 1, 1],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                    ],
                    [
                        [0, 1, 0, 0],
                        [0, 1, 0, 0],
                        [0, 1, 0, 0],
                        [0, 1, 0, 0],
                    ],
                    [
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [1, 1, 1, 1],
                        [0, 0, 0, 0],
                    ],
                    [
                        [0, 0, 1, 0],
                        [0, 0, 1, 0],
                        [0, 0, 1, 0],
                        [0, 0, 1, 0],
                    ],
                ];
                break;
            case 'J':
                rotationFigure = [
                    [
                        [2, 2, 0],
                        [0, 2, 0],
                        [0, 2, 0],
                    ],
                    [
                        [0, 0, 2],
                        [2, 2, 2],
                        [0, 0, 0],
                    ],
                    [
                        [0, 2, 0],
                        [0, 2, 0],
                        [0, 2, 2],
                    ],
                    [
                        [0, 0, 0],
                        [2, 2, 2],
                        [2, 0, 0],
                    ],
                ];
                break;
            case 'L':
                rotationFigure = [
                    [
                        [3, 0, 0],
                        [3, 0, 0],
                        [3, 3, 0],
                    ],
                    [
                        [0, 0, 0],
                        [3, 3, 3],
                        [3, 0, 0],
                    ],
                    [
                        [0, 3, 3],
                        [0, 0, 3],
                        [0, 0, 3],
                    ],
                    [
                        [0, 0, 3],
                        [3, 3, 3],
                        [0, 0, 0],
                    ],
                ];
                break;
            case 'O':
                rotationFigure = [
                    [
                        [0, 0, 0],
                        [4, 4, 0],
                        [4, 4, 0],
                    ],
                    [
                        [4, 4, 0],
                        [4, 4, 0],
                        [0, 0, 0],
                    ],
                    [
                        [0, 4, 4],
                        [0, 4, 4],
                        [0, 0, 0],
                    ],
                    [
                        [0, 0, 0],
                        [0, 4, 4],
                        [0, 4, 4],
                    ],
                ];
                break;
            case 'S':
                rotationFigure = [
                    [
                        [0, 0, 0],
                        [0, 5, 5],
                        [5, 5, 0],
                    ],
                    [
                        [5, 0, 0],
                        [5, 5, 0],
                        [0, 5, 0],
                    ],
                    [
                        [0, 5, 5],
                        [5, 5, 0],
                        [0, 0, 0],
                    ],
                    [
                        [0, 5, 0],
                        [0, 5, 5],
                        [0, 0, 5],
                    ],
                ];
                break;
            case 'T':
                rotationFigure = [
                    [
                        [0, 6, 0],
                        [6, 6, 6],
                        [0, 0, 0],
                    ],
                    [
                        [0, 6, 0],
                        [0, 6, 6],
                        [0, 6, 0],
                    ],
                    [
                        [0, 0, 0],
                        [6, 6, 6],
                        [0, 6, 0],
                    ],
                    [
                        [0, 6, 0],
                        [6, 6, 0],
                        [0, 6, 0],
                    ],
                ];
                break;
            case 'Z':
                rotationFigure = [
                    [
                        [0, 0, 0],
                        [7, 7, 0],
                        [0, 7, 7],
                    ],
                    [
                        [0, 7, 0],
                        [7, 7, 0],
                        [7, 0, 0],
                    ],
                    [
                        [7, 7, 0],
                        [0, 7, 7],
                        [0, 0, 0],
                    ],
                    [
                        [0, 0, 7],
                        [0, 7, 7],
                        [0, 7, 0],
                    ],
                ];
                break;
            default:
                throw new Error('no such figure');
        }

        return {
            x: 4,
            y: 0,
            get blocks() {
                return this.rotations[this.rotationIndex];
            },
            rotationIndex: 0,
            rotations: rotationFigure,
        }
    }

    rotateBlock() {
        this.activePiece.rotationIndex = (this.activePiece.rotationIndex + 1) % 4;
        if (this.isPieceOutOfPlayField()) {
            this.activePiece.rotationIndex = (4 - (this.activePiece.rotationIndex + 1)) % 4;
        }

        return this.activePiece.blocks;
    }

    movePieceLeft() {
        this.activePiece.x -= 1;

        if (this.isPieceOutOfPlayField()) {
            this.activePiece.x += 1;
        }
    }

    movePieceRight() {
        this.activePiece.x += 1;

        if (this.isPieceOutOfPlayField()) {
            this.activePiece.x -= 1;
        }
    }

    movePieceDown() {
        if(this.endGame) return;
        
        this.activePiece.y += 1;

        if (this.isPieceOutOfPlayField()) {
            this.activePiece.y -= 1;
            this.lockPieceInPlayField();
            const clearedLines = this.clearLines();
            this.updateScore(clearedLines);
            this.updatePieces();
        }

        if(this.isPieceOutOfPlayField()) {
            this.endGame = true;
        }
    }
    isPieceOutOfPlayField() {
        for (let y = 0; y < this.activePiece.blocks.length; y++) {
            for (let x = 0; x < this.activePiece.blocks[y].length; x++) {
                if (
                    this.activePiece.blocks[y][x] &&
                    ((this.playField[this.activePiece.y + y] === undefined || this.playField[this.activePiece.y + y][this.activePiece.x + x] === undefined) ||
                        (this.playField[this.activePiece.y + y][this.activePiece.x + x]))
                ) {
                    return true;
                }
            }
        }
        return false;
    }

    lockPieceInPlayField() {
        for (let y = 0; y < this.activePiece.blocks.length; y++) {
            for (let x = 0; x < this.activePiece.blocks[y].length; x++) {
                if (this.activePiece.blocks[y][x]) {
                    this.playField[this.activePiece.y + y][this.activePiece.x + x] = this.activePiece.blocks[y][x];
                }
            }
        }
    }

    clearLines() {
        const rows = 20;
        const columns = 10;
        const lines = [];
        for (let y = rows - 1; y >= 0; y--) {
            let numberOfBlocks = 0;
            for (let x = 0; x < columns; x++) {
                if (this.playField[y][x]) {
                    numberOfBlocks += 1;
                }
            }
            if (numberOfBlocks === 0) {
                break;
            } else if (numberOfBlocks < columns) {
                continue;
            } else if (numberOfBlocks === columns) {
                lines.unshift(y);
            }
        }

        for (let index of lines) {
            this.playField.splice(index, 1);
            this.playField.unshift(new Array(columns).fill(0));
        }
        return lines.length;
    }

    updateScore(clearLines) {
        if (clearLines > 0) {
            this.score += Game.points[clearLines] * (this.level + 1);
            this.lines += clearLines;
        }
        console.log(this.score);
    }

    updatePieces() {
        this.activePiece = this.nextPiece;
        this.nextPiece = this.createPiece();
    }

    showScore() {
        const resultScore = document.querySelector('.score-points');
        resultScore.innerHTML = `${this.score}`;
        const resultLevel = document.querySelector('.score-level');
        resultLevel.innerHTML = `${this.lines}`;
    }
}