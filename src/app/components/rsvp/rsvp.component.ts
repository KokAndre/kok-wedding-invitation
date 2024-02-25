import { Component, OnInit } from '@angular/core';
import * as dbData from './db.json';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  public countValue = 10;
  public dataArray = [{id: 0, name: ''}];

  ngOnInit(): void {
   console.log('DB DATA: ', dbData);
   this.dataArray = dbData;
   console.log('DATA ARRAY: ', this.dataArray);
  }

  testJsonAdd() {
    this.dataArray.push({id: this.countValue, name: `name${this.countValue}`});
    ++this.countValue;

    console.log('DATA ARRAY 2: ', this.dataArray);
  }
}
