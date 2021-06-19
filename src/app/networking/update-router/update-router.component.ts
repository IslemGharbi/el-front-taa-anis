import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-update-router',
  templateUrl: './update-router.component.html',
  styleUrls: ['./update-router.component.css']
})
export class UpdateRouterComponent implements OnInit {

  id:any
  routers:any={}
    constructor(
      private route : ActivatedRoute,
      private service : APIService,
      private router : Router,
      private auth : AuthenticationService
    ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.service.RouterDetails(this.id).subscribe(data =>

        this.routers=data,
      )
    }
  modify(){
  this.service.updateRouter(this.id,this.routers).subscribe(
    data =>{this.routers=data,this.router.navigate(['composantreseau'])}
  )
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
