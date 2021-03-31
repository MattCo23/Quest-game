'use strict';

const inquirer = require('inquirer');
const { pause } = require('../helpers/inquirer');
const { q1 } = require('../data/questions/question-controller');
const data = require('./templates/v1.json');

const { instructions } = require('./questions/instructions');

const game = async () => {
  await instructions();

  await pause();

  for (const [id, question] of data.entries()) {
    let check = await q1(question, id);
    if (check[0] !== check[1]) {
      console.error(
        'Oooooooh que peeeena, has fallado y por eso tenemos que matarte, gracias por haber jugado'
      );
      break;
    } else {
      console.log(
        '\n\n     Muy bien, has acertado la pregunta más fácil que teníamos, enhorabuena!'
      );
    }
  }
};

module.exports = {
  game,
};
