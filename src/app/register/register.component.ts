import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {environment} from 'src/environments/environment'
import firebase from "firebase/app";
import { Router } from '@angular/router';
import { AuthService } from "../shared/services/auth.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  myForm!: FormGroup;
    constructor(private fb : FormBuilder  , private router : Router ,private  auth : AuthService){
      if (!firebase.apps.length) {
        firebase.initializeApp({});
     }else {
        firebase.app(); // if already initialized, use that one
     }
     
    }
  
      

  ngOnInit() {
    this.myForm = this.fb.group({
      nom : '',
      raison_social : '',
      address : '',
      tel :  '',
      code_postal : '',
      code_douane : '',
      email : '',
      fax : '',
      ville : '',
      motpass : '',
      remotpass : '',


    })
  }
 showinfo(){
  let formObj = this.myForm.getRawValue();
  console.log(formObj)
   var db = firebase.firestore();
   db.collection('utilisateur').add({
    nom : formObj.nom,
    raison_social :  formObj.raison_social,
    address : formObj.address,
    tel :  formObj.tel,
    code_postal :  formObj.code_postal,
    code_douane :  formObj.code_douane,
    email_made_by :  formObj.email,
    fax :  formObj.fax,
    ville :  formObj.ville,
    motpass :  formObj.motpass,
   })
    .then((docRef) =>{
      console.log("document written with ID ",docRef.id)
      this.auth.SignUp(formObj.email,formObj.motpass)
      this.auth.setEmail(formObj.email);
      this.router.navigate(['destinataire']);

    })
    .catch(function(error){
      console.log("problem ",error)
    })
   
 }




}
