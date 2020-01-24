import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MedfilmPriceDialogComponent} from './medfilm-price-dialog/medfilm-price-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openPriceDialog() {
    this.dialog.open(MedfilmPriceDialogComponent);
  }


}
