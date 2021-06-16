import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-side-bar',
  templateUrl: './test-side-bar.component.html',
  styleUrls: ['./test-side-bar.component.css']
})
export class TestSideBArComponent implements OnInit {

  constructor() { }

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

}
