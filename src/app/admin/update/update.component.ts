import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
username:any
user:any={}
  constructor(
    private route : ActivatedRoute,
    private service : APIService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.service.userDetails(this.username).subscribe(data =>

      this.user=data,
    )
  }
modify(){
this.service.updateUser(this.username,this.user).subscribe(
  data =>{this.user=data,this.router.navigate(['admin'])}
)
}
}
