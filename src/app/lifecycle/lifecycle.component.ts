import { Component, OnInit, OnChanges, OnDestroy, Input,  AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit {

  title2;
  @Input() title;

  constructor() {
    console.log("inside constructor")
   }

  ngOnInit() {
    console.log("inside init");
  }

  ngOnChanges() {
    this.title2 = this.title + "hi";
    console.log("inside onchange");

  }
  
  ngAfterContentInit(){
    console.log("ng after content init invoked here");
  }

  ngOnDestroy() {
    console.log("inside destroy");
  }
}
