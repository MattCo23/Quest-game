const inquirer = require('inquirer');
require('colors');

const inquirerStart = async () => {
  console.clear();
  console.log('\n');
  console.log('                   ==========================================');
  console.log(
    '                ==============================================='
  );
  console.log(
    '              ==== ▄▀▀▄ █░░█ █▀▀ ▄▀▀ ▀█▀ . ▄▀▀ ▄▀▄ ██▄██ █▀▀ ===='
  );
  console.log(
    '            ====== █░▄█ █░░█ █▀▀ ░▀▄ ░█░ . █░█ █▄█ █░▀░█ █▀▀ ======'
  );
  console.log(
    '              ==== ░▀▀▀ ░▀▀░ ▀▀▀ ▀▀░ ░▀░ . ░▀▀ ▀░▀ ▀░░░▀ ▀▀▀ ===='
  );
  console.log(
    '                ==============================================='
  );
  console.log('                   ==========================================');
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
  console.log(begin);
  return begin;
};

module.exports = {
  inquirerStart,
};
