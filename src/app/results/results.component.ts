import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../shared/service/data-service.service';
import { IBus } from '../shared/model/ibus';
import { Router } from '@angular/router'
import { GstCalculatorPipe } from '../shared/common/gst-calculator.pipe';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public searchResults;
  public busDetails: IBus;
  public enablebusdetails;
  public currentUser;
  public currentPrice;
  public paymentOpt = 1;

  constructor(private dataSer: DataService, private _router: Router) {
    this.searchResults = dataSer.searchBus();
    console.log(this.searchResults);
    this.currentUser = this.dataSer.getCurrentUser();
    this.currentPrice = 0;

    console.log(this.dataSer.getBus());
  }
  ngOnChanges() {
    // this.busDetails.SeatDetails.forEach(item => {
    //   // debugger;
    //    if (item.Selected && item.UserId == "0") {
    //     // price += 10;
    //     console.log("df")
    //    }
    //   // console.log(price);

    //  });


  }

  ngOnInit() { }


  goToSearch() {
    this._router.navigate(['search']);
  }

  selectbus(busid) {
    //console.log(busid);
    this.enablebusdetails = busid;
    this.busDetails = this.dataSer.getSpecificBus(busid);


    console.log(this.busDetails);
  }

  bookseat() {
    console.log(this.busDetails);

    //assign seats for the user
    this.busDetails.SeatDetails.forEach(item => {
      if (item.Selected && item.UserId == "0") {
        item.UserId = this.currentUser;
      }

      if (item.UserId != "0" && !item.Selected) {
        item.UserId = "0";
      }
    });

    this.dataSer.setSeatDetails(this.busDetails.SeatDetails, this.busDetails.Id);

    console.log(this.busDetails);
    console.log(this.dataSer.getSpecificBus(this.busDetails.Id));

    alert("Seat booked.!");
  }
  calculatePrice() {
    let price: number = 0;
    console.log(this.busDetails.SeatDetails)
    this.busDetails.SeatDetails.forEach(item => {
      // debugger;
      if (item.Selected && item.UserId == "0") {
        price += 10;
      }
      console.log(price);

    });
    this.currentPrice = price;
  }

}
