import defualtData from './domain.js';

//Экспорт из модуля game класса Game в качестве дефолтного, класса GameSavingData и функций readGameSaving и writeGameSaving

export default class Game {
    start() {
      console.log('game started');
    }
  }
  
const defaultGame = new Game();

//export default defaultGame;

  export class GameSavingData {
  }
  
  export function readGameSaving() {
  }
  
  export function writeGameSaving() {
  }