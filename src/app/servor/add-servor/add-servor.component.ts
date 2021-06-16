import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-servor',
  templateUrl: './add-servor.component.html',
  styleUrls: ['./add-servor.component.css']
})
export class AddServorComponent implements OnInit {
servor:any={}
  constructor(
    private service : APIService,
    private router : Router

  ) { }

  ngOnInit(): void {
  }
  ajouter(){

    this.service.addServor(this.servor).subscribe(
      data => {
  this.navigate()
      },


    )


  }
  navigate(){
    this.router.navigate(['servor'])
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


}
