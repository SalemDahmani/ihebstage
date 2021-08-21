import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {environment} from 'src/environments/environment'
import firebase from "firebase/app";
import { Router } from '@angular/router';
import { AuthService } from "../shared/services/auth.service";



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

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
        name : '',
        code_barre : '',
        type_article : '',
        prix_vente :  '',
        adresse : '',
        poids : '',
        taxe : '',
        code_exp : '',
        code_des : '',
      })
    }
    showinfo(){
      let formObj = this.myForm.getRawValue();
      console.log(formObj)
       var db = firebase.firestore();
       db.collection('article').add({
        email_made_by : this.auth.getEmail(),
        name : formObj.name,
        code_barre :  formObj.code_barre,
        type_article : formObj.type_article,
        prix_vente :  formObj.prix_vente,
        adresse :  formObj.adresse,
        poids :  formObj.poids,
        taxe :  formObj.taxe,
        code_exp :  formObj.code_exp,
        code_des :  formObj.code_des,
       })
        .then((docRef) =>{
          console.log("document written with ID ",docRef.id)
          this.router.navigate(['/login']);
    
        })
        .catch(function(error){
          console.log("problem ",error)
        })
       

      }

}
