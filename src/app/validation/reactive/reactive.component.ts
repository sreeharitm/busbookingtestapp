import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public reactForm: FormGroup;
  public tName = new FormControl("", [Validators.required]);
  public tEmail = new FormControl("", [Validators.email, Validators.required]);
  public tWeb = new FormControl("", [Validators.required, this.validateUrl]);

  constructor() { }

  ngOnInit() {
    this.reactForm = new FormGroup({
      name: this.tName,
      email: this.tEmail,
      web: this.tWeb
    });
  }

  submitForm(formValue) {
    console.log(formValue);
  }

  validateUrl(control: AbstractControl) {
    console.log(control.value);
    if (control.value.startsWith("www")) {
      return null;
    } else {
      return { inValidUrl: true };
    }
  }
}
