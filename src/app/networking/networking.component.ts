import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-networking',
  templateUrl: './networking.component.html',
  styleUrls: ['./networking.component.css']
})
export class NetworkingComponent implements OnInit {
  switchers:any={}
  routers:any={}
  firewalls:any={}


  constructor(
    private service : APIService,
    private router : Router,
    private auth : AuthenticationService
  ) { }

  ngOnInit(): void {
    this.service.getSwitch().subscribe(
      data => this.switchers=data
    )

    this.service.getFirewalls().subscribe(
      data => this.firewalls=data
    )

    this.service.getRouter().subscribe(
      data => this.routers=data
    )

  }



  deleteSwitch(id:any){
    this.service.deleteSwitch(id).subscribe(
      res=>{this.switchers},
      error => console.log(error)
      )
      }

  deleteSwitchi(i:any){
    this.switchers.splice(i,1)
  }

  deleteRouter(id:any){
    this.service.deleteRouter(id).subscribe(
      res=>{this.routers},
      error => console.log(error)
      )
      }

  deleteRouteri(i:any){
    this.routers.splice(i,1)
  }

  deleteFirewall(id:any){
    this.service.deleteFirewalls(id).subscribe(
      res=>{this.firewalls},
      error => console.log(error)
      )
      }

  deleteFirewalli(i:any){
    this.firewalls.splice(i,1)
  }

  modifyRouter(id:any){
    this.router.navigate(['update-router',id])
  }

  modifySwitch(id:any){
    this.router.navigate(['update-switch',id])
  }

  modifyFirewall(id:any){
    this.router.navigate(['update-firewall',id])
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
