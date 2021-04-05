'use strict';

const inquirer = require('inquirer');
const {
  pause,
  wrongAnswer,
  correctAnswer,
  finishGame,
} = require('../helpers/inquirer');
const { q1 } = require('../data/questions/question-controller');
const data = require('./templates/v1.json');

const { instructions } = require('./questions/instructions');

const game = async () => {
  await instructions();

  await pause();

  for (const [id, question] of data.entries()) {
    let check = await q1(question, id);
    if (check[0] !== check[1]) {
      await wrongAnswer();
      break;
    } else {
      await finishGame();
      await correctAnswer();
      await pause();
    }
  }
  await finishGame();
};

module.exports = {
  game,
};
