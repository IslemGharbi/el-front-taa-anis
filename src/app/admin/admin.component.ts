import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private router : Router,
    private service : APIService,
    private auth : AuthenticationService,

  ) { }
  users:any={}
  textBus = '';

  ngOnInit(): void {




    this.service.getUser().subscribe(
      data => this.users=data
    )

  }
ajout(){
  this.router.navigateByUrl('/admin/ajouterutilisateur')
}

deleteUser(username:any){
  this.service.deleteUser(username).subscribe(
    res=>{this.users},
    error => console.log(error)
    )
    }

delete(i:any){
  this.users.splice(i,1)
}

modify(username:any){
  this.router.navigate(['update',username])
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
    logout()
    {this.auth.logout()}

}
