const inquirer = require('inquirer');

const { instructions } = require('./questions/instructions');

const game = async () => {
  await instructions();
};

module.exports = {
  game,
};
