import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import * as moment from 'moment';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  textFormControl  = new FormControl('', [
    Validators.required,Validators.min(0)]);

  Input_date = new Date("1/1/2015");
  Input_date_ms;
  Currentdate = new Date();
  Currentdate_ms;
  dateDiff;
  value:Date =new Date();
  resultDate;
  quitsmoking = 'n';
  maxDate = new Date();
  quitday = new Date();
  quitday_ms;
  Totalnumberofdays:number;
  device:number = 0;
  message:string;
  numberofcig:number;
  Totalnumberofcig:any;
  selectedsex:string = 'm';
  age:number;
  continent:string;
  Numberofyears:any;
  Timeloss:any;
  MintoDays:any;
  goclick:boolean = false;
  Oneday = 1000*60*60*24;

  constructor(public snackBar: MdSnackBar) { }

  openSnackBar(value,message: string, action: string) {
    if (value.checked == true) {
      this.device = 1;
      this.message = "Desktop notification turned on";
    } else {
      this.device = 0;
      this.message = "Desktop notification turned off";
    }
    let snackBarRef = this.snackBar.open(this.message,action='Ok', {
      duration: 2000
    });
  }

  ngOnInit() {
  }
   ages = [
      {value: '18', viewValue: '18'},
      {value: '19', viewValue: '19'},
      {value: '20', viewValue: '20'},
      {value: '21', viewValue: '21'},
      {value: '22', viewValue: '22'},
      {value: '23', viewValue: '23'}
    ];

    continents = [
      {value: 'Asia', viewValue: 'Asia'},
      {value: 'Africa', viewValue: 'Africa'},
      {value: 'North America', viewValue: 'North America'},
      {value: 'South America', viewValue: 'South America'},
      {value: 'Antarctica', viewValue: 'Antarctica'},
      {value: 'Europe', viewValue: 'Europe'},
      {value: 'Australia', viewValue: 'Australia'}
    ];

    add(){
      this.goclick = true;
      console.log(this.numberofcig,'Number of cigs');
      console.log(this.selectedsex);
      console.log(this.age);
      console.log(this.continent);
      this.Currentdate_ms = this.Currentdate.getTime();
      this.Input_date_ms = this.Input_date.getTime();
      this.quitday_ms = this.quitday.getTime();
      if(this.quitsmoking == 'y'){
       this.dateDiff = this.quitday_ms - this.Input_date_ms;
      }else if(this.quitsmoking =='n'){
       this.dateDiff =  this.Currentdate_ms - this.Input_date_ms ;
      }
      this.resultDate = Math.round(this.dateDiff/this.Oneday);
      this.Totalnumberofcig = this.resultDate * this.numberofcig;
      this.Timeloss = this.Totalnumberofcig * 11;
      this.MintoDays = (this.Timeloss/1440).toFixed(2) ;
      this.Numberofyears = this.resultDate/365;

      console.log(this.Numberofyears, 'Number of years');
      console.log(this.resultDate,'Total number of days');
      console.log(this.Totalnumberofcig,'Total number of cigs');
      console.log(this.Timeloss,'Total time loss');
      console.log(this.MintoDays,'Total numebr of days');
      console.log(this.Currentdate);
      console.log(this.Input_date);
  



    }
    notification(){
      console.log("clicked !");
    }

}
