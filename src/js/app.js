
import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from './game.js';


import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

import './domain.js';

const game = new Game();
game.start();

console.log('app execute')