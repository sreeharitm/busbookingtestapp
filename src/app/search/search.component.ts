import { Component, OnInit, NgModule } from '@angular/core';
import { DataService } from '../shared/service/data-service.service';
import { Router } from '@angular/router'
import { ISearchInput } from '../shared/model/isearchinput';
import { IUser } from '../shared/model/iuser';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public tFrom = "Trivandrum";
  public tTo = "Kollam";
  public tDate;
  public searchResults;
  public tUser;
  public users: IUser[];

  constructor(private dataServ: DataService, private _router: Router, private datePipe: DatePipe) {
    this.users = this.dataServ.getUsers();
  }

  ngOnInit() {
    console.log('inside search');
  }

  

  searchForBus() {
    let searchInput: ISearchInput = {
      From: this.tFrom,
      To: this.tTo,
      // Date: this.tDate.toLocaleDateString('zh-Hans-CN')
      Date: this.datePipe.transform(this.tDate, 'yyyy-MM-dd')
    };

    this.dataServ.setCurrentUser(this.tUser);
    this.dataServ.setSearchInput(searchInput);
    console.log(searchInput);
    this._router.navigate(['search/results'])
  }
}
