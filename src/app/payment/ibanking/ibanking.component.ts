import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ibanking',
  templateUrl: './ibanking.component.html',
  styleUrls: ['./ibanking.component.css']
})
export class IbankingComponent implements OnInit {

  constructor() { }

  @Input() totalPrice;
  
  ngOnInit() {
  }

}
