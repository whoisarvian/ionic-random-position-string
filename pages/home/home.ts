import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  text: any;
  randText: any = [];
  rand() {
    const words = this.text.split(' ');
    for (var i = 0; i < 4; i++) {
      const t = this.randomArrayShuffle(words);
      console.log(t);
      this.randText.push(t.join(' '));
      console.log(this.randText);
    }
  }

  randomArrayShuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
