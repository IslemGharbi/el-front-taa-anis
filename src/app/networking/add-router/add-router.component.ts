import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-add-router',
  templateUrl: './add-router.component.html',
  styleUrls: ['./add-router.component.css']
})
export class AddRouterComponent implements OnInit {

  routers:any={}
  constructor(
    private service : APIService,
    private router : Router,
    private auth : AuthenticationService

  ) { }

  ngOnInit(): void {
  }
  ajouter(){

    this.service.addRouter(this.routers).subscribe(
      data => {
  this.navigate()
      },


    )


  }
  navigate(){
    this.router.navigate(['composantreseau'])
  }
  function(){
    let btn:any = document.querySelector("#btn");
    let sidebar:any = document.querySelector(".sidebar");
    let searchBtn = document.querySelector(".bx-search");


    sidebar.classList.toggle("active");
    if(btn.classList.contains("bx-menu")) {
        btn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        btn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
  logout(){
    this.auth.logout()
  }
}
