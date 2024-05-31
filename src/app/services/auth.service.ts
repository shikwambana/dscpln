import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider,signInWithPopup, signOut } from '@angular/fire/auth'
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  async login() {
    console.log('login');
    const provider = new GoogleAuthProvider();
    const cred = await signInWithPopup(this.auth, provider);
    console.log(cred)
  }

  logout() {
    return signOut(this.auth);
  }
}
