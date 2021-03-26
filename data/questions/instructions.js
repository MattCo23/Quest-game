const inquirer = require('inquirer');

const instructions = async () => {
  console.clear();
  console.log('\n');
  console.log(
    '             --------------------------------------------------------'
  );
  console.log(
    '            |                                                        |'
  );
  console.log(
    '            |                 BIENVENIDO A QUEST GAME                |'
  );
  console.log(
    '            |                                                        |'
  );
  console.log(
    '            |                                                        |'
  );
  console.log(
    '            |     A continuación se te plantearán 10 preguntas       |'
  );
  console.log(
    '            |                                                        |'
  );
  console.log(
    '            |          Tendrás 4 opciones para contestar             |'
  );
  console.log(
    '            |                                                        |'
  );
  console.log(
    '            |     Si aciertas una pregunta, automáticamente podrás   |'
  );
  console.log(
    '            |                 acceder a la siguiente                 |'
  );
  console.log(
    '            |                                                        |'
  );
  console.log(
    '            |        Si fallas, morirá un gatito y tendrás que       |'
  );
  console.log(
    '            |                     volver a empezar                   |'
  );
  console.log(
    '            |                                                        |'
  );
  console.log(
    '            |                     ¡MUCHA SUERTE!                     |'
  );
  console.log(
    '            |                                                        |'
  );
  console.log(
    '             --------------------------------------------------------'
  );
};

module.exports = {
  instructions,
};
