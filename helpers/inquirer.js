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

const wrongAnswer = async () => {
  console.clear();
  console.log(
    '\n\n\n      ---------------------------------------------------------------------'
  );
  console.log(
    '      |                                                                   |'
  );
  console.log(
    `      |                           ¯|_( ͡❛ ͜ʖ ͡❛)_/¯                          |`
  );
  console.log(
    '      |                                                                   |'
  );
  console.log(
    `      |                             ${
      'HAS FALLADO'.red
    }                           |`
  );
  console.log(
    '      |                                                                   |'
  );
  console.log(
    '      |           Lo siento, no podemos hacer el juego más fácil          |'
  );
  console.log(
    '      |                                                                   |'
  );
  console.log(
    '      |                      Pero no te irás de vacío                     |'
  );
  console.log(
    '      |          Podrás escoger entre una de estas experiencias:          |'
  );
  console.log(
    '      |                                                                   |'
  );
  console.log(
    '      |        --> Bono de 10 trepidantes sesiones en el Senado           |'
  );
  console.log(
    '      |        --> Grabación de un videoclip con Leticia Sabater          |'
  );
  console.log(
    `      |        --> Tour turístico Mutante D'Or: Ciudad de los Tumores     |`
  );
  console.log(
    `      |                   (Chernobyl, Fukushima y Wuhan)                  |`
  );
  console.log(
    `      |        --> Conducción extrema con K.Benzemà, Farruquito           |`
  );
  console.log(
    `      |                           y Ortega Cano                           |`
  );
  console.log(
    '      |                                                                   |'
  );
  console.log(
    `      |                        ${
      'PRUEBA SUERTE OTRA VEZ'.green
    }                     |`
  );
  console.log(
    '      ---------------------------------------------------------------------'
  );
};

const correctAnswer = async () => {
  console.clear();
  console.log(
    '\n\n      ---------------------------------------------------------------------'
  );
  console.log(
    '      |                                                                   |'
  );
  console.log(
    '      |',
    ' ░░░░░░░░░░░░░░░░░░░░░░█████████'.yellow,
    '                                 |'
  );
  console.log(
    '      |',
    ' ░░███████░░░░░░░░░░███▒▒▒▒▒▒▒▒███'.yellow,
    '           ¡HAS ACERTADO!  '.green,
    '   |'
  );
  console.log(
    '      |',
    ' ░░░█▒▒▒▒▒▒█░░░░██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██                         '.yellow,
    ' |'
  );
  console.log(
    '      |',
    ' ░░░░█▒▒▒▒▒█░░░██▒▒▒▒▒██▒▒▒▒▒▒██▒▒▒▒▒███                         '.yellow,
    '|'
  );
  console.log(
    '      |',
    ' ░░░░░█▒▒▒█░░░█▒▒▒▒▒▒████▒▒▒▒████▒▒▒▒▒▒██'.yellow,
    '    ¡MÁQUINA!   '.rainbow,
    '       |'
  );
  console.log(
    '      |',
    ' ░░░█████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██'.yellow,
    '                        |'
  );
  console.log(
    '      |',
    ' ░░░█▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒██'.yellow,
    '          ¡MONSTRUO! '.rainbow,
    '  |'
  );
  console.log(
    '      |',
    ' ░██▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒██▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██'.yellow,
    '                        | '
  );
  console.log(
    '      |',
    ' ██▒▒▒███████████▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒██'.yellow,
    '     ¡TITÁN!   '.rainbow,
    '        |'
  );
  console.log(
    '      |',
    ' █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒████████▒▒▒▒▒▒▒██'.yellow,
    '                        |  '
  );
  console.log(
    '      |',
    ' ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██'.yellow,
    '              ¡PUMA!'.rainbow,
    '    |'
  );
  console.log(
    '      |',
    ' ░█▒▒▒███████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██'.yellow,
    '                           |    '
  );
  console.log(
    '      |',
    ' ░██▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█'.yellow,
    '                             |      '
  );
  console.log(
    '      |',
    '  ░░████████████░░░█████████████████'.yellow,
    '   Contesta a la siguiente   |     '
  );
  console.log(
    '      |                                                cerebrito...       |'
  );

  console.log(
    '      ---------------------------------------------------------------------'
  );
};

module.exports = {
  inquirerStart,
  pause,
  wrongAnswer,
  correctAnswer,
};
