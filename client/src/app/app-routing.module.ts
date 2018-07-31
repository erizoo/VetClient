import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {LoginPageComponent} from './login-page/login-page.component'
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component'
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component'
import {RegisterPageComponent} from './register-page/register-page.component'
import {AuthGuard} from './shared/classes/auth.guard'
import {OverviewPageComponent} from "./overview-page/overview-page.component";
import {HospitalPageComponent} from "./hospital-page/hospital-page.component";
import {OrderPageComponent} from "./order-page/order-page.component";
import {CategoriesPageComponent} from "./categories-page/categories-page.component";
import {NewClientPageComponent} from "./new-client-page/new-client-page.component";
import {CategoriesFormComponent} from "./categories-page/categories-form/categories-form.component";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'client', component: OverviewPageComponent},
      {path: 'client/new', component: NewClientPageComponent},
      {path: 'client/:id', component: NewClientPageComponent},
      {path: 'hospital', component: HospitalPageComponent},
      {path: 'order', component: OrderPageComponent},
      {path: 'categories', component: CategoriesPageComponent},
      {path: 'categories/new', component: CategoriesFormComponent},
      {path: 'categories/:id', component: CategoriesFormComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
