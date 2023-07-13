const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const fs = require('fs');

function promptUser() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the logo (up to three characters):',
        validate: function (value) {
          if (value.length > 3) {
            return 'Please enter up to three characters.';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Circle', 'Triangle', 'Square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal number):',
      },
    ]);
  }

async function generateLogo() {
    try {
      const { text, textColor, shape, shapeColor } = await promptUser();
  
      let logoShape;
  
      switch (shape) {
        case 'Circle':
          logoShape = new Circle();
          break;
        case 'Triangle':
          logoShape = new Triangle();
          break;
        case 'Square':
          logoShape = new Square();
          break;
      }
  
      logoShape.setColor(shapeColor);
  
      const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          ${logoShape.render()}
          <text x="150" y="150" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
      `;
  
      fs.writeFileSync('logo.svg', svgContent);
  
      console.log('Generated logo.svg');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  generateLogo();
  