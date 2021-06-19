import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-update-switch',
  templateUrl: './update-switch.component.html',
  styleUrls: ['./update-switch.component.css']
})
export class UpdateSwitchComponent implements OnInit {

  id:any
  switch:any={}
    constructor(
      private route : ActivatedRoute,
      private service : APIService,
      private router : Router,
      private auth : AuthenticationService
    ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.service.SwitchDetails(this.id).subscribe(data =>

        this.switch=data,
      )
    }
  modify(){
  this.service.updateSwitch(this.id,this.switch).subscribe(
    data =>{this.switch=data,this.router.navigate(['composantreseau'])}
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
