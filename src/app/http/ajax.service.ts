import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Message } from '../shared/model/message';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  private _baseUrl = "https://jsonplaceholder.typicode.com/";
  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get(this._baseUrl + "posts")
      .map(list => this.convertData(list));
  }

  postData() {
    let obj = { title: "title" };
    return this._http.post(this._baseUrl + "posts", obj);
     // .map(list => this.convertData(list));
  }

  // will converts input list type to type: Message as a whole
  convertData(inputList) {
    return inputList.map(this.formData);
  }

  // individual type casting
  formData(inputObj) {
    let message = new Message();
    message.id = inputObj.id;
    message.userId = inputObj.userId;
    message.title = inputObj.title;
    message.body = inputObj.body;

    return message;
  }
}
