import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit {

  constructor(
    private service : APIService,
    private router : Router,
    private auth : AuthenticationService
  ) { }

  racks:any={}
  textBus = '';

  ngOnInit(): void {




    this.service.getRack().subscribe(
      data => this.racks=data
    )

  }


deleteUser(id:any){
  this.service.deleteRack(id).subscribe(
    res=>{this.racks},
    error => console.log(error)
    )
    }

delete(i:any){
  this.racks.splice(i,1)
}

modify(id:any){
  this.router.navigate(['update-rack',id])
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
