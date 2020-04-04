import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  // using the public keyword lets us use the afAuth service in the template (.html)
  constructor(public afAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
  }

}
