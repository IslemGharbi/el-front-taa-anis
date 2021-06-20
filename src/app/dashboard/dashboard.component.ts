import { Component, OnInit} from '@angular/core';
import * as Chart from 'chart.js';




import { AuthenticationService } from '../services/authentication.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit   {

  constructor(
private auth : AuthenticationService,
  ){}

  ngOnInit(){

    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ["Servor", "Switch", "Router"],
          datasets: [{
              label: 'nombre des composant du data center',
              data: [8, 4, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
              ],


              borderWidth: 1
          }]
      },
      options: {

        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
      }
  });
  var myChart = new Chart("donut", {
    type: 'doughnut',
    data: {
      labels: ["Up", "Down"],
      datasets: [{
          label: 'nombre des composant du data center',
          data: [68,32 ],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgb(255, 99, 132)',

          ],


          borderWidth: 1
      }]
  },
  options: {

    scales: {
      yAxes: [{
          ticks: {
              beginAtZero:true
          }
      }]
  }
  }
});


var myChart = new Chart("line", {
  type: 'line',
  data: {
    labels: ["janvier", "Fevrier","Mars","Avril","Mais","Juin"],
    datasets: [{
        label: 'Consomation electrique du POD en HZ',
        data: [222,230 ,212,217,240,207],
        borderColor: 'rgb(75, 192, 192)',
        fill: false,





        borderWidth: 1
    }]
},
options: {

  scales: {
    yAxes: [{
        ticks: {

        }
    }]
}
}
});


var myChart = new Chart("2ndLine", {
  type: 'line',
  data: {
    labels: ["janvier", "Fevrier","Mars","Avril","Mais","Juin"],
    datasets: [{
        label:'Temperature du serveur en C°',
        data: [23,20 ,28,27,30,32],
        borderColor: 'rgb(75, 192, 192)',
        fill: false,





        borderWidth: 1
    }]
},


options: {

  scales: {
    yAxes: [{
        ticks: {

        }
    }]
}
}
});

      }













  logout(){
    this.auth.logout()
  }

  function(){
    let btn:any = document.querySelector("#btn");
    let sidebar:any = document.querySelector(".sidebar");
    let searchBtn = document.querySelector(".bx-search");


    sidebar.classList.toggle("active");
    if(btn.classList.contains("bx-menu")) {
        btn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        btn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
}
