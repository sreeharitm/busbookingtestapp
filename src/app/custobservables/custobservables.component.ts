import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-custobservables',
  templateUrl: './custobservables.component.html',
  styleUrls: ['./custobservables.component.css']
})
export class CustobservablesComponent implements OnInit {

  public data: Observable<string>;
  public currentData;
  public alphabets = [];

  constructor(private alertService: AlertService) { }


  ngOnInit() {
    this.data = new Observable(observ => {
      setTimeout(() => {
        observ.next("A");
      }, 1000);

      setTimeout(() => {
        observ.next("B");

        observ.unsubscribe();
      }, 2000);

      setTimeout(() => {
        observ.next("C");
      }, 3000);
    });

    this.data.subscribe(item => {
      this.alphabets.push(item);
      this.currentData = item;
    });



  }

  setData() {
    this.alertService.setAlert("New alert set");

  }

}
