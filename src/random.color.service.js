class IconColorService {
  colorArray = [];
  constructor() {
    this.generateColorArray();
  }

  generateColorArray() {
    this.colorArray.push('#db1c58');
    this.colorArray.push('#87DAC9');
    this.colorArray.push('#e8d90d');
  }

  returnColorClass() {
    let randomNumber = this.returnRandomNumber(0, this.colorArray.length - 1);
    return this.colorArray[randomNumber];
  }

  returnRandomNumber(min, max) {
    let offset = min;
    let range = (max - min) + 1;
    let randomNumber = Math.floor(Math.random() * range) + offset;
    return randomNumber;

  }

}
const icon_clr = new IconColorService();
export default icon_clr;
