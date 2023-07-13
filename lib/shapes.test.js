const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('renders circle SVG string with specified color', () => {
      const circle = new Circle();
      circle.setColor('red');
      expect(circle.render()).toBe('<circle cx="150" cy="100" r="50" fill="red" />');
    });
  });