import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-rock',
  templateUrl: './add-rock.component.html',
  styleUrls: ['./add-rock.component.css']
})
export class AddRockComponent implements OnInit {
  rack:any={}
  constructor(
    private service : APIService,
    private router : Router

  ) { }

  ngOnInit(): void {
  }
  ajouter(){

    this.service.addRack(this.rack).subscribe(
      data => {
  this.navigate()
      },


    )


  }
  navigate(){
    this.router.navigate(['inventories'])
  }

}