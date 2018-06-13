import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private _ajax: AjaxService) {
  }

  ngOnInit() {
    console.log('on init');
    this.postData();
  }

  postData() {
    this._ajax.postData().subscribe(response => {
      console.log(response);
    });
  }

}
