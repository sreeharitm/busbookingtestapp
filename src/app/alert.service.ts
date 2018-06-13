import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public alertMessage = new Subject<string>();

  constructor() { }

  setAlert(msg) {
    this.alertMessage.next(msg);
  }

  getAlert() {
    return this.alertMessage.asObservable();
  }
}
