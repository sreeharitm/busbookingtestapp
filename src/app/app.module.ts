import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { Routes, RouterModule } from '@angular/router';
import { routes } from 'src/app/routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GstCalculatorPipe } from './shared/common/gst-calculator.pipe'
import { RouteGuardService } from './shared/service/route-guard.service';
import { DataService } from './shared/service/data-service.service';
import { IbankingComponent } from './payment/ibanking/ibanking.component';
import { CcardComponent } from './payment/ccard/ccard.component';
import { CodComponent } from './payment/cod/cod.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatButtonModule, MatProgressBar, MatProgressBarModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { DatePipe } from '@angular/common';
import { GetComponent } from './http/get/get.component';
import { PostComponent } from './http/post/post.component';
import { AjaxService } from './http/ajax.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjComponent } from './proj/proj.component';
import { TemplateComponent } from './validation/template/template.component';
import { ReactiveComponent } from './validation/reactive/reactive.component';
import { CustobservablesComponent } from './custobservables/custobservables.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    GetComponent,
    PostComponent,
    ProjComponent,
    TemplateComponent,
    ReactiveComponent,
    CustobservablesComponent,
    AlertComponent,
    // MatProgressBarModule
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule
    // MatProgressBarModule
  ],
  providers: [RouteGuardService, DataService, DatePipe, AjaxService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
