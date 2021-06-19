import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dcg',
  templateUrl: './dcg.component.html',
  styleUrls: ['./dcg.component.css']
})
export class DcgComponent implements OnInit {

  constructor(
    private auth : AuthenticationService
  ) { }

  ngOnInit(): void {
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
