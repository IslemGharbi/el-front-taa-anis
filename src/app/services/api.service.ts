import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(
    private http:HttpClient
  ) { }




  getUser(){
     return this.http.get('http://localhost:8080/Users')
  }
  updateUser(username:any,user:any){
   return this.http.put('http://localhost:8080/update'+username,user)
  }

  addUser(user:any){
    return this.http.post('http://localhost:8080/register',user)
  }

}
