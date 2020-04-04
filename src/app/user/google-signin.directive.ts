import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {
  constructor(private afAuth: AngularFireAuth) {}

  // Declares a host listener. Angular will invoke the decorated method when the host element emits the specified event.
  // If the host elements is a button, the onClick event will trigger, when the button is being clicked
  @HostListener('click')
  onclick() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
