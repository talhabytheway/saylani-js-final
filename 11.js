// TODO: Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

let Volume = class {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }

  calcVol() {
    return (Math.PI * this.radius * 2 * this.height).toFixed(4);
  }
};

const vol = new Volume(23, 35);
console.log(vol.calcVol());
