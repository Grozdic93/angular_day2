import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang_day2';
  count = 0;

  increaseCount(){
    if (this.count == 10) {
      return
    }
    this.count++;
  }
  

}

// let count1 = 0;
// const btn = document.getElementById('btn');
// const num = document.getElementById('num');
// btn?.addEventListener('click', print)

// function print(){
//   count1 ++;
//   num?.innerHTML = count1;
  
// }
