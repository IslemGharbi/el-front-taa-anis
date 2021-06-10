import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authservice:AuthenticationService,private router : Router) { }

  ngOnInit(): void {
  }
logOut (){
  this.authservice.logout();
  this.router.navigateByUrl("/login");
}
mp(){
  this.router.navigateByUrl("/mapping");
}

}
