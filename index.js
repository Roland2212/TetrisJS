import Game from './src/game.js';
import View from './src/view.js';

const root = document.querySelector('#root');
const click = 0;

const play = new Game();
const view = new View(root, 260, 520, 20, 10);

window.play = play;
window.view = view;

view.renderStartScreen();

addEventListener('keydown', event => {
    switch (event.keyCode) {
        case 13: //ENTER
            setInterval(() => {
                if (play.endGame) {
                    view.gameOverScreen();
                } else {
                    play.movePieceDown();
                    view.render(play.getState());
                }
            }, 1000);
            break;
        case 37: //ARROW LEFT
            play.movePieceLeft();
            view.render(play.getState());
            break;
        case 38: // ARROW UP
            play.rotateBlock();
            view.render(play.getState());
            break;
        case 39: //ARROW RIGHT
            play.movePieceRight();
            view.render(play.getState());
            break;
        case 40: //ARROW DOWN
            play.movePieceDown();
            view.render(play.getState());
            play.showScore();
            break;
    }
});

//view.renderStartScreen();
//view.gameOverScreen();

console.log(play);
