import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  
  userValue = 'o';
  title = "Component game works!";
  matrix = [['0', '1', '2'],['3', '4', '5'],['6', '7', '8']];
  constructor() { }

  ngOnInit() {
  }

  upDate(i, j){
    console.log("Data is details" + i + "i" + j);
    console.log("value is :" +  this.matrix[i][j]);
    //this.matrix[i][j] == this.userValue;
    
  }

}
