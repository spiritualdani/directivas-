import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

estadoPlayer:boolean; 
players:any[];


  constructor() {
    this.estadoPlayer = false; 

    this.players=[
      {"nombre": "Marcelo Martins","edad": 30,"country": "BO"},
      {"nombre": "Christian Pulisic","edad": 21,"country": "USA"},
      {"nombre": "Gilbert Alvarez","edad": 29,"country": "BO"},
      {"nombre": "Anderson Pearl","edad": 25,"country": "USA"},
      {"nombre": "Rudy Cardozo","edad": 28,"country": "BO"}
    ];
    
   }

  ngOnInit() {
  }

  bandera() {
    this.estadoPlayer =!this.estadoPlayer; 
  }
}
