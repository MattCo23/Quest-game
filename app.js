require('colors');

const { inquirerStart, pause } = require('./helpers/inquirer');

const main = async () => {
  let opt = '';

  do {
    opt = await inquirerStart();
    if (opt !== '0') {
    }

    await pause();
  } while (opt !== '0');
};

main();
