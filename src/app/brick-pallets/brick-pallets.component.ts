import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brick-pallets',
  templateUrl: './brick-pallets.component.html',
  styleUrls: ['./brick-pallets.component.css']
})
export class BrickPalletsComponent implements OnInit {

  @Input() data:string
  bricksImage:string = "assets/images/bricks7.png"

  constructor() { }

  ngOnInit(): void {
  }

}
