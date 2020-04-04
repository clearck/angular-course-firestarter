import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GoogleSigninDirective } from './google-signin.directive';
import {LoginPageComponent} from './login-page/login-page.component';


@NgModule({
  declarations: [GoogleSigninDirective, LoginPageComponent],
  exports: [
    GoogleSigninDirective
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
