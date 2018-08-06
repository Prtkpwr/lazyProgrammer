import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-time',
  templateUrl: './home-time.component.html',
  styleUrls: ['./home-time.component.css']
})
export class HomeTimeComponent implements OnInit {
  public inTimeH:number = 0;
  public inTimeM:number = 0;
  public workTimeH:number = 0;
  public workTimeM:number = 0;
  public outTimeH:number = 0;
  public outTimeM:number = 0;

  constructor() { }

  ngOnInit() {
  }
  public countIt(){
    this.outTimeH = this.inTimeH + this.workTimeH;
    this.outTimeM = this.inTimeM + this.workTimeM;
    if( this.outTimeM == 60 ){
      this.outTimeH ++;
      this.outTimeM = 0;
          }
      else if (this.outTimeM > 60){
	    this.outTimeH ++;
      this.outTimeM = this.outTimeM - 60
          }
     
          this.outTimeH = this.outTimeH - 12
      }
}
