import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-update-firewall',
  templateUrl: './update-firewall.component.html',
  styleUrls: ['./update-firewall.component.css']
})
export class UpdateFirewallComponent implements OnInit {

  id:any
  firewall:any={}
    constructor(
      private route : ActivatedRoute,
      private service : APIService,
      private router : Router,
      private auth : AuthenticationService
    ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.service.FirewallsDetails(this.id).subscribe(data =>

        this.firewall=data,
      )
    }
  modify(){
  this.service.updateFirewalls(this.id,this.firewall).subscribe(
    data =>{this.firewall=data,this.router.navigate(['inventories'])}
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
