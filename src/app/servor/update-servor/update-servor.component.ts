import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-servor',
  templateUrl: './update-servor.component.html',
  styleUrls: ['./update-servor.component.css']
})
export class UpdateServorComponent implements OnInit {
  id:any
  servor:any={}
    constructor(
      private route : ActivatedRoute,
      private service : APIService,
      private router : Router
    ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.service.servorDetails(this.id).subscribe(data =>

        this.servor=data,
      )
    }
  modify(){
  this.service.updateServor(this.id,this.servor).subscribe(
    data =>{this.servor=data,this.router.navigate(['servor'])}
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
  }

