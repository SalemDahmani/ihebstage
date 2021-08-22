import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {environment} from 'src/environments/environment'
import firebase from "firebase/app";
import { Router } from '@angular/router';
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
   myArray :any = [] ;
  constructor(private auth : AuthService ) { }

  ngOnInit(): void {
    console.log(this.auth.getEmail())
    var db = firebase.firestore();

    db.collection("destination").where("email_made_by", "==","mohamed.ali@gmail.com")
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.myArray.push(doc.data())
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
      db.collection("article").where("email_made_by", "==","mohamed.ali@gmail.com")
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.myArray.push(doc.data())
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
             
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
      db.collection("utilisateur").where("email_made_by", "==","mohamed.ali@gmail.com")
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.myArray.push(doc.data())
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
      console.log(this.myArray)
  }

  
 

}
