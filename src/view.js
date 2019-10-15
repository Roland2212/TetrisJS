export default class View {
    static colors = {
        '1': 'red',
        '2': 'orange',
        '3': 'yellow',
        '4': 'green',
        '5': 'blue',
        '6': 'purple',
        '7': 'red',
    }

    constructor(element, width, height, rows, columns) {
        this.element = element;
        this.width = width;
        this.height = height;
        this.rows = rows;
        this.columns = columns;

        this.blockWidth = this.width / columns;
        this.blockHeight = this.height / rows;

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.contex = this.canvas.getContext('2d');

        this.element.appendChild(this.canvas);
    }

    render(playfield) {
        this.clearScreen();
        this.renderPlayField(playfield);
    }

    clearScreen() {
        this.contex.clearRect(0, 0, this.width, this.height);
    }

    renderStartScreen() {
        this.contex.fillStyle = '#27ae60';
        this.contex.font = '22px Arial';
        this.contex.textAlign = 'center';
        this.contex.textBaseline = 'middle';
        this.contex.fillText('Press Enter to start', this.width / 2, this.height / 2);
    }

    gameOverScreen() {
        this.contex.fillStyle = 'white';
        this.contex.font = 'bold 36px Arial';
        this.contex.textAlign = 'center';
        this.contex.textBaseline = 'middle';
        this.contex.fillText('GAMEOVER', this.width / 2, this.height / 2);
    }

    renderPlayField(playfield) {
        this.contex.clearRect(0, 0, this.width, this.height);

        for (let y = 0; y < playfield.length; y++) {
            const line = playfield[y];
            for (let x = 0; x < line.length; x++) {
                const block = line[x];

                if (block) {
                    this.renderBlock(x * this.blockWidth, y * this.blockHeight, this.blockWidth, this.blockHeight, View.colors[block]);
                } else {
                    this.contex.fillStyle = 'white';
                    this.contex.font = '8px Arial';
                    this.contex.fillText('.', x * this.blockWidth + 16, y * this.blockHeight + 16);
                }
            }
        }
    }

    renderBlock(x, y, width, height, color) {
        this.contex.fillStyle = color;
        this.contex.strokeStyle = 'black';
        this.contex.lineWidth = 2;

        this.contex.fillRect(x, y, width, height);
        this.contex.strokeRect(x, y, width, height);
    }

    // generateColor () {
    //     const randomIndex = Math.floor(Math.random() * 6);
    //     let color = '';

    //     switch(randomIndex) {
    //         case 1: 
    //             color = 'red';
    //             break;
    //         case 2:
    //             color = 'orange';
    //             break;
    //         case 3:
    //             color = 'yellow';
    //             break;
    //         case 4:
    //             color = 'green';
    //             break;
    //         case 5:
    //             color = 'blue';
    //             break;
    //         case 6:
    //             color = 'purple';
    //             break;
    //         default:
    //             throw new Error('No such color');
    //     }
    //     return color;
    // }
}