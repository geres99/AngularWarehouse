import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTest';
  supply = {amount: 1000, price: 0}
  queue = []
  xxx = 0

  clickerFunction = () => {
    this.queue.push(this.supply)
    console.log(this.supply)
  }

  inputChange = () => {
    console.log(this.xxx)
    this.supply.amount = 1
  }
}
