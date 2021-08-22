import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormBuilder, FormsModule } from '@angular/forms';
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string =''
password:string =''
  myForm: any;
  constructor(public auth: AuthService , private fb : FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email : ''
    })

  }
showinfo(data :string){
  let formObj = this.myForm.getRawValue();
  console.log(formObj.email)
  this.auth.setEmail(formObj.email.toString());
}

}
