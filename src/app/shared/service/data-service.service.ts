import { Injectable } from '@angular/core';
import { IBus } from '../model/ibus';
import { ISearchInput } from '../model/isearchinput';
import { IUser } from '../model/iuser';
import { ISeat } from '../model/iseat';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public buses: IBus[];

  public users: IUser[];

  public searchInput: ISearchInput;
  public currentUser;
  public userAuthenticated;

  constructor() {
    this.userAuthenticated = false;

    this.buses = [
      {
        "NoOfSeats": "5",
        "SeatDetails": [
          {
            "Id": "1",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "2",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "3",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "4",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "5",
            "Selected": false,
            "UserId": "0"
          }
        ],
        "From": "Kazhakuttom",
        "To": "Trivandrum",
        "TripStartDate": "2018-05-27",
        "Id": "1"
      },
      {
        "NoOfSeats": "5",
        "SeatDetails": [
          {
            "Id": "1",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "2",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "3",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "4",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "5",
            "Selected": false,
            "UserId": "0"
          }
        ],
        "From": "Trivandrum",
        "To": "Kollam",
        "TripStartDate": "2018-05-28",
        "Id": "2"
      },
      {
        "NoOfSeats": "5",
        "SeatDetails": [
          {
            "Id": "1",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "2",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "3",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "4",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "5",
            "Selected": false,
            "UserId": "0"
          }
        ],
        "From": "Trivandrum",
        "To": "Kollam",
        "TripStartDate": "2018-05-28",
        "Id": "20"
      },
      {
        "NoOfSeats": "5",
        "SeatDetails": [
          {
            "Id": "1",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "2",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "3",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "4",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "5",
            "Selected": false,
            "UserId": "0"
          }
        ],
        "From": "Trivandrum",
        "To": "Kottayam",
        "TripStartDate": "2018-05-29",
        "Id": "3"
      },
      {
        "NoOfSeats": "5",
        "SeatDetails": [
          {
            "Id": "1",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "2",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "3",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "4",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "5",
            "Selected": false,
            "UserId": "0"
          }
        ],
        "From": "Kazhakuttom",
        "To": "Kottayam",
        "TripStartDate": "2018-05-30",
        "Id": "4"
      },
      {
        "NoOfSeats": "5",
        "SeatDetails": [
          {
            "Id": "1",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "2",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "3",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "4",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "5",
            "Selected": false,
            "UserId": "0"
          }
        ],
        "From": "Kazhakuttom",
        "To": "Thrissur",
        "TripStartDate": "2018-05-31",
        "Id": "5"
      },
      {
        "NoOfSeats": "5",
        "SeatDetails": [
          {
            "Id": "1",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "2",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "3",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "4",
            "Selected": false,
            "UserId": "0"
          },
          {
            "Id": "5",
            "Selected": false,
            "UserId": "0"
          }
        ],
        "From": "Kazhakuttom",
        "To": "Palakkadu",
        "TripStartDate": "2018-06-01",
        "Id": "6"
      }
    ];

    this.users = [
      {
        "UserId": "1",
        "Name": "John",
        "Username": "john",
        "Password": "pass"
      },
      {
        "UserId": "2",
        "Name": "Jana",
        "Username": "jana",
        "Password": "pass"
      }
    ];
  }

  getUsers() {
    return this.users;
  }

  setSeatDetails(seatDetails: ISeat[], busId: string) {
    this.buses.forEach(x => {
      if (x.Id == busId) {
        x.SeatDetails = seatDetails;
      }
    });
  }

  setSearchInput(si) {
    this.searchInput = si;
  }

  setCurrentUser(id) {
    this.currentUser = this.users.find(x => x.UserId == id);
    console.log(this.currentUser)
  }
  getCurrentUser() {
    return this.currentUser;
  }
  getBus() {
    return this.buses;
  }

  getSpecificBus(id) {
    return this.buses.find(x => x.Id == id);
  }

  searchBus() {
    return this.buses.filter(x => (x.From == this.searchInput.From || this.searchInput.From == '')
      && (x.To == this.searchInput.To || this.searchInput.To == '')
      && (x.TripStartDate == this.searchInput.Date  || this.searchInput.Date == ''));
  }

  //Login operations
  validateLogin(uname, pword) {
    this.currentUser = this.users.find(x => x.Username == uname
      && x.Password == pword);

    this.userAuthenticated = this.currentUser != undefined;
    return this.userAuthenticated;
  }

  isUserAuthenticated() {
    return this.userAuthenticated;
  }

}
