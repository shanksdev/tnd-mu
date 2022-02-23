import { Component, VERSION } from '@angular/core';
// import {  } from 'firebase/app';
// import * as firebase from 'firebase';

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDUDmFWecCzcA5dOQs7XvNpjJnXt3x18CM",
  authDomain: "tnd-multi-user.firebaseapp.com",
  projectId: "tnd-multi-user",
  storageBucket: "tnd-multi-user.appspot.com",
  messagingSenderId: "488031408323",
  appId: "1:488031408323:web:07b4bcb70204e43e3f1276",
  databaseURL:'https://tnd-multi-user.firebaseapp.com/'
};
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(){
    // firebase.initializeApp(firebaseConfig);
    // const app = initializeApp(firebaseConfig);
  }
}
