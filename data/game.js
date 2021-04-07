'use strict';

const inquirer = require('inquirer');
const {
  pause,
  wrongAnswer,
  correctAnswer,
  finishGame,
} = require('../helpers/inquirer');
const { q1 } = require('../data/questions/question-controller');

const { instructions } = require('./questions/instructions');

const game = async (cathegory) => {
  let data = '';
  if (cathegory === '1') {
    data = require('./templates/sports.json');
  } else if (cathegory === '2') {
    data = require('./templates/tv.json');
  }

  await instructions();

  await pause();

  for (const [id, question] of data.entries()) {
    await pause();
    let check = await q1(question, id);
    if (check[0] !== check[1]) {
      await wrongAnswer();
      break;
    } else {
      await correctAnswer();
      await pause();
      if (id === 9) {
        await finishGame();
      }
    }
  }
};

module.exports = {
  game,
};
