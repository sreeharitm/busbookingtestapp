import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data-service.service';
import { Router } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public tUsername;
  public tPassword;

  constructor(private dataServ: DataService, private _router: Router) { }

  ngOnInit() {
  }

  requestLogin() {
    let status = this.dataServ.validateLogin(this.tUsername, this.tPassword);
    console.log(status);
    if (status) {
      console.log('inside if');
      this._router.navigate(['search/search-page']);
    }
  }

  getStyle(){
    return {color:"red"};
  }

  getColor(){
    return "red";
  }
}
