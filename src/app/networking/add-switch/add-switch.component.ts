import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-add-switch',
  templateUrl: './add-switch.component.html',
  styleUrls: ['./add-switch.component.css']
})
export class AddSwitchComponent implements OnInit {

  switch:any={}
  constructor(
    private service : APIService,
    private router : Router,
    private auth : AuthenticationService

  ) { }

  ngOnInit(): void {
  }
  ajouter(){

    this.service.addSwitch(this.switch).subscribe(
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
