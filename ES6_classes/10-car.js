export default class Car {
  constructor(brand, motor, color) {
    if (brand !== undefined && typeof brand !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    if (motor !== undefined && typeof motor !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    if (color !== undefined && typeof color !== 'string') {
      throw new TypeError('Color must be a string');
    }

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor(); // returns instance with undefined attributes
  }
}
