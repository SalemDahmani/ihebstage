import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = 'http://localhost:3000/inscription'
  constructor(private http:HttpClient) { }


  registerUser(user: any){
    return this.http.post<any>(this._registerUrl,user)
  }
}
