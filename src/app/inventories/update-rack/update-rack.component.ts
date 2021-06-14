import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-rack',
  templateUrl: './update-rack.component.html',
  styleUrls: ['./update-rack.component.css']
})
export class UpdateRackComponent implements OnInit {

  id:any
  rack:any={}
    constructor(
      private route : ActivatedRoute,
      private service : APIService,
      private router : Router
    ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.service.rackDetails(this.id).subscribe(data =>

        this.rack=data,
      )
    }
  modify(){
  this.service.updateRack(this.id,this.rack).subscribe(
    data =>{this.rack=data,this.router.navigate(['interventories'])}
  )
  }
  }
