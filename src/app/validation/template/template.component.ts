import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public tName;
  public tEmail;
  constructor() { }

  ngOnInit() {
  }

  submitForm(form){
    console.log(form.value); 
  }
}
