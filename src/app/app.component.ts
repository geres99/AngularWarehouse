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
  moneySpent = 0
  queue = []
  test = [1,2,3,4,5]

  addToStorage = () => {
    if(this.supply.amount > 0 && this.supply.amount % 100 === 0 && this.supply.price > 0 && this.supply.price * 10 % 1 === 0) {
      this.queue.push({amount: this.supply.amount, price: this.supply.price})
      this.stocked = this.supply.amount + this.stocked
      this.supply.amount = 100
      this.supply.price = 2.50
    }
  }
  removeFromStorage = () => {
    if(this.supply.wanted > 0 && this.supply.wanted % 100 === 0) {
      for(let i = 0; i<this.queue.length; i++) {
        if(this.queue[i].amount >= this.supply.wanted) {
          this.moneySpent = this.moneySpent + (this.supply.wanted * this.queue[i].price)
          this.stocked = this.stocked - this.supply.wanted
          this.queue[i].amount = this.queue[i].amount - this.supply.wanted
          this.supply.wanted = 0
          this.queue = this.queue.filter((x) => (x.amount !== 0))
          return
        }
        else {
          this.moneySpent = this.moneySpent + (this.queue[i].amount * this.queue[i].price)
          this.stocked = this.stocked - this.queue[i].amount
          this.supply.wanted = this.supply.wanted - this.queue[i].amount
          this.queue[i].amount = 0
        }
      }
      this.queue = this.queue.filter((x) => (x.amount !== 0))
      console.log(this.queue)
      if(this.supply.wanted > 0) {
        console.log("Zostało " + this.supply.wanted + " cegieł")
      }
    }
  }
}
