require('colors');

const { inquirerStart } = require('./helpers/inquirer');

const main = async () => {
  let opt = '';

  do {
    opt = await inquirerStart();
  } while (opt !== '0');
};

main();
