import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-app',
  templateUrl: './game-app.component.html',
  styleUrls: ['./game-app.component.css']
})
export class GameAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = 'X';
  Array = ['', '', '', '', '', '', '', '', ''];
  Array1 = [];
  //Array2: any=[];
  random;
  rand;
  count;
  userWin;
  compWin;
  upDate(a) {


    console.log(this.Array[a]);

    if (this.Array[a] != 'X' && this.Array[a] != 'O') {
      //this.updateList();
      if (this.Array[a] != null && this.Array[a] != 'O') {
        this.Array[a] = this.value;
        this.updateList();
        this.userWin = this.win();
        if (this.userWin) {
          setTimeout(() => { alert("User WIN") }, 2000);
          this.Array = ['', '', '', '', '', '', '', '', ''];
          this.Array1 = [];
        }
        console.log(",,," + this.userWin);
      }

      this.random = Math.round(Math.random() * 8);

      if (this.Array[this.random] != undefined) {

        this.random = this.Array1[Math.floor(Math.random() * this.Array1.length)];
      }
      if (this.Array.indexOf[this.random] == null && this.Array[this.random] != 'X' && this.Array[this.random] != 'O') {

        this.Array[this.random] = 'O';
        this.compWin = this.comWin();
        if (this.compWin) {
          setTimeout(() => { alert("Computer WIN....") }, 2000);
          this.Array = ['', '', '', '', '', '', '', '', ''];
          this.Array1 = [];
        }
        this.updateList();
      }
    }
  }

  updateList() {
    var a = 0;
    for (var i = this.Array1.length; i > 0; i--) {
      this.Array1.pop();
    }

    for (let k of this.Array) {

      if (k == '') {
        this.Array1.push(a);
      }
      a++;
    }
  }

  win() {
    var arr = [[0, 1, 2], [3, 4, 5], [0, 4, 8], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6]];
    var bol = false;
    for (let row of arr) {

      if (this.Array[row[0]] == 'X' && this.Array[row[1]] == 'X' && this.Array[row[2]] == 'X') {
        bol = true;
        this.userWin = true;

        return bol;
      } else {
        bol = false;
      }

    }

    return bol;
  }
  comWin() {
    var arr = [[0, 1, 2], [3, 4, 5], [0, 4, 8], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6]];
    var bol = false;
    for (let row of arr) {


      if (this.Array[row[0]] == 'O' && this.Array[row[1]] == 'O' && this.Array[row[2]] == 'O') {
        bol = true;
        this.userWin = true;

        return bol;
      } else {
        bol = false;
      }

    }

    return bol;
  }

}
