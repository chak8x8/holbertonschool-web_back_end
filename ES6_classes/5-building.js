export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new TypeError('Square feet must be a number');
    // Only check for evacuationWarningMessage in subclasses
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
