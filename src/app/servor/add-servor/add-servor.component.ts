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

}
