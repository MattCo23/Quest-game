const inquirer = require('inquirer');
require('colors');

const q1 = async (question, id) => {
  console.clear();
  console.log('\n');
  console.log(`                                     PREGUNTA ${id + 1}`);
  console.log(
    '                 =================================================='
  );
  console.log(
    `                                ${question.question}                 `
  );
  console.log(
    '                 =================================================='
  );
  console.log('\n');

  let correct = question.solution;
  const options = [
    {
      type: 'rawlist',
      name: 'answers',
      message: 'Elige tan solo una opción, no seas avaricioso \n',
      choices: [
        {
          value: '1',
          name: question.q1,
        },
        {
          value: '2',
          name: question.q2,
        },
        {
          value: '3',
          name: question.q3,
        },
        {
          value: '4',
          name: question.q4,
        },
      ],
    },
  ];

  const { answers } = await inquirer.prompt(options);
  return [answers, correct];
};

module.exports = {
  q1,
};
