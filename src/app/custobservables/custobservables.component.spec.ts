import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustobservablesComponent } from './custobservables.component';

describe('CustobservablesComponent', () => {
  let component: CustobservablesComponent;
  let fixture: ComponentFixture<CustobservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustobservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustobservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
