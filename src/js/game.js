const Character = require('./domain.js');
class Game {
    start() {
      console.log('game started');
    }
  };
  
  class GameSavingData {
  };
  
  function readGameSaving() {
  };
  
  function writeGameSaving() {
  };

  module.exports = {
    Character,
    Game,
    GameSavingData,
    readGameSaving,
    writeGameSaving,
  };
