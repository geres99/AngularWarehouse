import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTest';
  supply = {amount: 100, price: 2.50, wanted: 0}
  stocked = 0
  queue = []

  addToStorage = () => {
    if(this.supply.amount > 0 && this.supply.amount % 100 === 0 && this.supply.price > 0 && this.supply.price % 0.1 == 0) {
      this.queue.push({amount: this.supply.amount, price: this.supply.price})
      this.stocked = this.supply.amount + this.stocked
      console.log(this.stocked)
      this.supply.amount = 100
      this.supply.price = 2.50
    }
  }
  removeFromStorage = () => {
    if(this.supply.wanted > 0 && this.supply.wanted % 100 === 0) {
      this.stocked = this.stocked - this.supply.wanted
    }
  }
}
