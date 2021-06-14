import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit {

  constructor(
    private service : APIService,
    private router : Router
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

}
