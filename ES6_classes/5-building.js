export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new TypeError('SQFT must be a number.');
    if (this.constructor === Building) throw new Error('Cannot instantiate abstract class');
    if (this.evacuationWarningMessage === undefined) throw new Error('Class extending Building must override evacuationWarningMessage');

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
