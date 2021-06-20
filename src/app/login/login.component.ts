import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:any={}
  constructor(private authservice:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
olog(){
  this.authservice.onlog(this.login).subscribe(Resp=>{
    let jwt:any=Resp.headers.get("Authorization");
    this.authservice.saveToken(jwt);
    this.router.navigateByUrl("/dashboard");
   },err=>{

   }
   )}
   isAdmin(){
     return this.authservice.isAdmin();
   }
   isUser (){
     return this.authservice.isUser();
   }
}
