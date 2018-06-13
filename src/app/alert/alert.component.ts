import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  public message: string;

  constructor(private alertService: AlertService) { }

  ngOnInit() {

    this.alertService.getAlert().subscribe(item => {
      this.message = item;

      setTimeout(() => {
        this.message = "";
      }, 3000);
    });
  }

}
