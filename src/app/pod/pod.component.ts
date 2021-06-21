import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-pod',
  templateUrl: './pod.component.html',
  styleUrls: ['./pod.component.css']
})
export class PODComponent implements OnInit {

    constructor(
      private router : Router,
      private service : APIService,
      private auth : AuthenticationService,

    ) { }
    pod:any={}


    ngOnInit(): void {




      this.service.getpod().subscribe(
        data => this.pod=data
      )

    }
  ajout(){
    this.router.navigateByUrl('/add-pod')
  }

  deletepod(username:any){
    this.service.deletepod(username).subscribe(
      res=>{this.pod},
      error => console.log(error)
      )
      }

  delete(i:any){
    this.pod.splice(i,1)
  }

  modify(pod:any){
    this.router.navigate(['update-pod',pod])
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
      logout()
      {this.auth.logout()}

  }
