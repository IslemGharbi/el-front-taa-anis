import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-update-pod',
  templateUrl: './update-pod.component.html',
  styleUrls: ['./update-pod.component.css']
})
export class UpdatePodComponent implements OnInit {

  id:any
  pod:any={}
    constructor(
      private route : ActivatedRoute,
      private service : APIService,
      private router : Router,
      private auth : AuthenticationService
    ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.service.podDetails(this.id).subscribe(data =>

        this.pod=data,
      )
    }
  modify(){
  this.service.updatepod(this.id,this.pod).subscribe(
    data =>{this.pod=data,this.router.navigate(['pod'])}
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
