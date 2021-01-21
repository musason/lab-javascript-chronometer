class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      callback();
    }, 1000);
    
  }
 
  getMinutes() {
      return (this.currentTime - this.currentTime % 60)/60
  }
  getSeconds() {
    return this.currentTime % 60;

    
  }
  twoDigitsNumber(num) {
    if (num.toString().length == 1 ) {
      return `0${num}`;
    } 
    return num.toString()
    
    
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let minDigt = this.twoDigitsNumber(this.getMinutes())
    let secondDigt = this.twoDigitsNumber(this.getSeconds())
    return `${minDigt}:${secondDigt}`;
  }
}
