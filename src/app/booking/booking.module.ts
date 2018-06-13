import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { RouteGuardService } from '../shared/service/route-guard.service';
import { ResultsComponent } from '../results/results.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from '../shared/service/data-service.service';
import { GstCalculatorPipe } from '../shared/common/gst-calculator.pipe';
import { IbankingComponent } from '../payment/ibanking/ibanking.component';
import { CcardComponent } from '../payment/ccard/ccard.component';
import { CodComponent } from '../payment/cod/cod.component';

const routes: Routes = [
  // { path: '', component: SearchComponent, canActivate:[RouteGuardService] },
  { path: 'search-page', component: SearchComponent, canActivate: [RouteGuardService] },
  { path: 'results', component: ResultsComponent, canActivate: [RouteGuardService] }
];

@NgModule({

  imports: [
    CommonModule, RouterModule.forChild(routes),
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    RouteGuardService,
    // DataService,
    DatePipe
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    GstCalculatorPipe,
    IbankingComponent,
    CcardComponent,
    CodComponent
  ]
})
export class BookingModule { }
