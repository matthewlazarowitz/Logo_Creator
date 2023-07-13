class Shape {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    getColor() {
      return this.color;
    }
  
    render() {
    }
  }
  
  class Circle extends Shape {
    render() {
      const color = this.getColor();
      return `<circle cx="150" cy="100" r="50" fill="${color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      const color = this.getColor();
      return `<polygon points="150, 20 280, 180 20, 180" fill="${color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      const color = this.getColor();
      return `<rect x="50" y="50" width="200" height="200" fill="${color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  