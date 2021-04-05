require('colors');

const { inquirerStart, pause, selectTheme } = require('./helpers/inquirer');
const { game } = require('./data/game');

const main = async () => {
  let opt = '';
  let cat = '';

  do {
    opt = await inquirerStart();

    switch (opt) {
      case '1':
        cat = await selectTheme();
        console.log(cat);

        if (cat === '1') {
          await game('1');
        } else if (cat === '2') {
          await game('2');
        }
        break;
    }

    await pause();
  } while (opt !== '0');
};

main();
