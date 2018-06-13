import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private _ajax: AjaxService) { 
  }
  
  ngOnInit() {
    console.log('on init');
    this.getData();
  }

  getData() {
    this._ajax.getData().subscribe(response => {
      console.log(response);
    }, err=>{
      console.log("error", err, err.message);
    });
  }
}
