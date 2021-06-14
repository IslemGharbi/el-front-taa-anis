import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  constructor(
    private service : APIService,
    private router : Router
  ) { }

  fournisseurs:any={}
  textBus = '';

  ngOnInit(): void {




    this.service.getFour().subscribe(
      data => this.fournisseurs=data
    )

  }
  deleteUser(id:any){
    this.service.deleteFour(id).subscribe(
      res=>{this.fournisseurs},
      error => console.log(error)
      )
      }

  delete(i:any){
    this.fournisseurs.splice(i,1)
  }

  modify(id:any){
    this.router.navigate(['update-four',id])
  }


    searsh(event:any){
  this.textBus=event.detail.value

       }

  }
