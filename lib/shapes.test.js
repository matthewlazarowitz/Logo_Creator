const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('renders circle SVG string with specified color', () => {
      const circle = new Circle();
      circle.setColor('red');
      expect(circle.render()).toBe('<circle cx="150" cy="100" r="50" fill="red" />');
    });
  });

describe('Triangle', () => {
    test('renders triangle SVG string with specified color', () => {
      const triangle = new Triangle();
      triangle.setColor('blue');
      expect(triangle.render()).toBe('<polygon points="150, 20 280, 180 20, 180" fill="blue" />');
    });
  });
  
describe('Square', () => {
    test('renders square SVG string with specified color', () => {
      const square = new Square();
      square.setColor('green');
      expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="green" />');
    });
  });