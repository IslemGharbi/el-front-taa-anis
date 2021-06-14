import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-servor',
  templateUrl: './servor.component.html',
  styleUrls: ['./servor.component.css']
})
export class ServorComponent implements OnInit {

  constructor(
    private service : APIService,
    private router : Router
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

}
