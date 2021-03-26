require('colors');

const { inquirerStart, pause } = require('./helpers/inquirer');
const { game } = require('./data/game');

const main = async () => {
  let opt = '';

  do {
    opt = await inquirerStart();

    switch (opt) {
      case '1':
        await game();
        break;
    }

    await pause();
  } while (opt !== '0');
};

main();
