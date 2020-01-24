import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

export interface Data {
  date: any;
  price: number;
  status: boolean;
}

@Component({
  selector: 'app-medfilm-price-dialog',
  templateUrl: './medfilm-price-dialog.component.html',
  styleUrls: ['./medfilm-price-dialog.component.css']
})

export class MedfilmPriceDialogComponent implements OnInit {

  public mockData: Data[] = [

    {date: '12/1/2012', price: 12.1, status: true},
    {date: '12/6/2018', price: 30, status: false },
    {date: '14/05/2019', price: 24.2, status: true}
    ]

  constructor() { }

  inputData: Data;
  price: number;
  date: string;
  status: boolean;


  ngOnInit() {
  }

  deletePrice(data) {
    for (let index = 0; index < this.mockData.length; index++) {
      if (this.mockData[index] == data) {
        this.mockData.splice(index, 1);
      }
    }
  }

  getSelectedDate(event) {
    this.date = moment(event.value).format('D/M/YYYY');
  }

  getSelectedOption(event) {
    this.status = event.value;
  }


  addPrice(){
    this.inputData = {
      date: this.date,
      price: this.price,
      status: this.status

    };

    this.mockData.push(this.inputData);
  }




}
