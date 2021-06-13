import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(
    private http:HttpClient,
    private auth : AuthenticationService
  ) { }




  getUser(){
    let header=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt});
     return this.http.get('http://localhost:8080/Users',{headers:header})
  }
  updateUser(username:any,user:any){
    let header=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt});
   return this.http.put('http://localhost:8080/update/'+username,user,{headers:header})
  }

  addUser(user:any){
    return this.http.post('http://localhost:8080/register',user)
  }


  deleteUser(user:any){
    let header=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt});
    return this.http.delete('http://localhost:8080/delete/'+user,{headers:header})
  }

  userDetails(username:any){
    let header=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt});
    return this.http.get('http://localhost:8080/User/'+username,{headers:header})
  }

}
