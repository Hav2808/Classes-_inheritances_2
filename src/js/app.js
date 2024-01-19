const {Game,  GameSavingData, readGameSaving, writeGameSaving } = require('./game');

const game = new Game();
game.start();

console.log('worked');
