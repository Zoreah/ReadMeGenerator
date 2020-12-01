// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'description',
      message: 'What is your projects description?',
      name: 'description',
    },
    {
      type: 'table of content',
      message: 'Please provide table of content',
      name: 'table of content',
      choices: ['installation', 'usage', 'license', 'test'],
    },
  ])


  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
