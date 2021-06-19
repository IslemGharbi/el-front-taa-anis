import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  constructor(
    private service : APIService,
    private router : Router,
    private auth : AuthenticationService

  ) { }

  fournisseurs:any={}
  textBus = '';

  ngOnInit(): void {




    this.service.getFour().subscribe(
      data => this.fournisseurs=data
    )

  }
  deleteUser(id:any){
    this.service.deleteFour(id).subscribe(
      res=>{this.fournisseurs},
      error => console.log(error)
      )
      }

  delete(i:any){
    this.fournisseurs.splice(i,1)
  }

  modify(id:any){
    this.router.navigate(['update-four',id])
  }


    searsh(event:any){
  this.textBus=event.detail.value

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
