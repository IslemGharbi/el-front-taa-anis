import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent  {
  latitude = 51.678418;
  longitude = 7.809007;
  locationChosen = false;

  onChoseLocation(event:any) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }
  
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
