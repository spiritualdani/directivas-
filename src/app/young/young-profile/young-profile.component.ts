import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-young-profile',
  templateUrl: './young-profile.component.html',
  styleUrls: ['./young-profile.component.css']
})
export class YoungProfileComponent implements OnInit {

  youngPlayer:any[]; 


  constructor() {
    this.youngPlayer=[
      {"nombre": "Essiano","edad": 19,"country": "BO"},
      {"nombre": "Adriano","edad": 18,"country": "USA"},
      {"nombre": "Francis","edad": 20,"country": "ES"},

    ];
   }

  ngOnInit() {
  }

}
