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


  //crud servor
  getServor(){
    return this.http.get('http://localhost:8080/servor')
  }
  updateServor(id:any,user:any){

   return this.http.put('http://localhost:8080/servor/'+id,user)
  }

  addServor(user:any){
    return this.http.post('http://localhost:8080/servor',user)
  }


  deleteServor(id:any){

    return this.http.delete('http://localhost:8080/servor/'+id)
  }

  servorDetails(id:any){

    return this.http.get('http://localhost:8080/servor/'+id)
  }
//crud servor
getRack(){
  return this.http.get('http://localhost:8080/rack')
}
updateRack(id:any,user:any){

 return this.http.put('http://localhost:8080/rack/'+id,user)
}

addRack(user:any){
  return this.http.post('http://localhost:8080/rack',user)
}


deleteRack(id:any){

  return this.http.delete('http://localhost:8080/rack/'+id)
}

rackDetails(id:any){

  return this.http.get('http://localhost:8080/rack/'+id)
}
//CRUD fournisseur
getFour(){
  return this.http.get('http://localhost:8080/support')
}
updateFour(id:any,user:any){

 return this.http.put('http://localhost:8080/support/'+id,user)
}

addFour(user:any){
  return this.http.post('http://localhost:8080/support',user)
}


deleteFour(id:any){

  return this.http.delete('http://localhost:8080/support/'+id)
}

FourDetails(id:any){

  return this.http.get('http://localhost:8080/support/'+id)
}
}
