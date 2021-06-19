import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-servor',
  templateUrl: './servor.component.html',
  styleUrls: ['./servor.component.css']
})
export class ServorComponent implements OnInit {

  constructor(
    private service : APIService,
    private router : Router,
    private auth : AuthenticationService
  ) { }

  servors:any={}
  textBus = '';

  ngOnInit(): void {




    this.service.getServor().subscribe(
      data => this.servors=data
    )

  }


deleteUser(id:any){
  this.service.deleteServor(id).subscribe(
    res=>{this.servors},
    error => console.log(error)
    )
    }

delete(i:any){
  this.servors.splice(i,1)
}

modify(id:any){
  this.router.navigate(['update-servor',id])
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

    detail(id:any){
      this.router.navigate(['details',id]);
    }
    logout(){
      this.auth.logout()
    }

}
