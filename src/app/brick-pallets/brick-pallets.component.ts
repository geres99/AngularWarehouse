import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brick-pallets',
  templateUrl: './brick-pallets.component.html',
  styleUrls: ['./brick-pallets.component.css']
})
export class BrickPalletsComponent implements OnInit {

  @Input() data:{amount:number, price:number}
  bricksImage:string = "assets/images/bricks.png"

  constructor() { }

  ngOnInit(): void {
  }

}
