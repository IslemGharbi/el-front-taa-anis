import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ajouterutilisateur',
  templateUrl: './ajouterutilisateur.component.html',
  styleUrls: ['./ajouterutilisateur.component.css']
})
export class AjouterutilisateurComponent implements OnInit {
user:any={}
  constructor(
    private http : HttpClient,
    private  service : APIService,
    private router : Router,

  ) { }

  ngOnInit(): void {

  }



ajouter(){
  console.log(this.user)
  return this.http.post('http://localhost:8080/register',this.user).subscribe(
    data => {
this.navigate()
    },


  )


}
navigate(){
  this.router.navigate(['admin'])
}



}
