import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.user = this.afAuth.authState;
    console.log(this.user);
  }

  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(() => {
              console.log(this.afAuth.authState);
            });
  }

  logout(){
    

    console.log(this.afAuth.authState.isEmpty);


    console.log("Logout()");

    this.afAuth.auth.signOut();

    
  }

}
