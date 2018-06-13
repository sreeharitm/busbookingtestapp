import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from './shared/service/route-guard.service'
import { GetComponent } from './http/get/get.component';
import { PostComponent } from './http/post/post.component';
import { ProjComponent } from './proj/proj.component';
import { TemplateComponent } from './validation/template/template.component';
import { ReactiveComponent } from './validation/reactive/reactive.component';
import { CustobservablesComponent } from './custobservables/custobservables.component';


const myroute: Routes = [{ path: '', component: LoginComponent },
// {
//     path: 'search', component: SearchComponent, children: [
//         { path: '', component: ResultsComponent },
//         { path: 'results', component: ResultsComponent }
//     ]
// },

{ path: 'search', loadChildren: './booking/booking.module#BookingModule' },

// {
//     path: 'search', component: SearchComponent, canActivate: [RouteGuardService]
// },
// {
//     path: 'results', component: ResultsComponent, canActivate: [RouteGuardService]
// },
{ path: 'temp', component: TemplateComponent },
{ path: 'reactive', component: ReactiveComponent },
{ path: 'proj', component: ProjComponent },
{ path: 'observable', component: CustobservablesComponent },
{ path: 'get', component: GetComponent },
{ path: 'post', component: PostComponent },
{ path: 'login', component: LoginComponent },
{ path: '**', component: ErrorComponent }
]

export const routes = myroute;