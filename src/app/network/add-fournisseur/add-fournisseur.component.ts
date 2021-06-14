import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {

  fournisseur:any={}
  constructor(
    private service : APIService,
    private router : Router

  ) { }

  ngOnInit(): void {
  }
  ajouter(){

    this.service.addFour(this.fournisseur).subscribe(
      data => {
  this.navigate()
      },


    )


  }
  navigate(){
    this.router.navigate(['network'])
  }

}
