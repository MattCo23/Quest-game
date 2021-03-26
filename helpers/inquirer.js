const inquirer = require('inquirer');
require('colors');

const inquirerStart = async () => {
  console.clear();
  console.log('\n');
  console.log(
    '                   =========================================='.blue
  );
  console.log(
    '                ==============================================='.blue
  );
  console.log(
    '              ===='.blue,
    '▄▀▀▄ █░░█ █▀▀ ▄▀▀ ▀█▀ . ▄▀▀ ▄▀▄ ██▄██ █▀▀'.yellow,
    '===='.blue
  );
  console.log(
    '            ======'.blue,
    '█░▄█ █░░█ █▀▀ ░▀▄ ░█░ . █░█ █▄█ █░▀░█ █▀▀'.yellow,
    '======'.blue
  );
  console.log(
    '              ===='.blue,
    '░▀▀▀ ░▀▀░ ▀▀▀ ▀▀░ ░▀░ . ░▀▀ ▀░▀ ▀░░░▀ ▀▀▀'.yellow,
    '===='.blue
  );
  console.log(
    '                ==============================================='.blue
  );
  console.log(
    '                   =========================================='.blue
  );
  console.log('\n');

  const menu = [
    {
      type: 'list',
      name: 'begin',
      message: '                            ¿Qué quieres hacer?\n\n',
      choices: [
        {
          value: '1',
          name: '                              Iniciar partida\n',
        },
        {
          value: '0',
          name: '                                   Salir',
        },
      ],
    },
  ];

  const { begin } = await inquirer.prompt(menu);
  return begin;
};

const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `                        Presione ${
        'ENTER'.green
      } para continuar`,
    },
  ];
  console.log('\n');

  await inquirer.prompt(question);
};

module.exports = {
  inquirerStart,
  pause,
};
