import { Component, OnInit } from '@angular/core';
import { ScheduleItem } from 'src/app/models/schedule-item.model';
// import * as scheduleListItems from './schedule-data.json';

const scheduleListItems = [
  {
    "heading": "Welcome drinks",
    "description": "Have a few drinks and chats before the formalities.",
    "time": "4:00pm",
    "imageName": "welcome-drinks.jpg"
  },
  {
    "heading": "Ceremony",
    "description": "Time to make it official!",
    "time": "5:00pm",
    "imageName": "ceremony.jpeg"
  },
  {
    "heading": "Cocktail reception",
    "description": "Enjoy some delicious cocktail while the bride anf groom takes photos.",
    "time": "6:00pm",
    "imageName": "cocktail-reception.jpg"
  },
  {
    "heading": "Friends and family photos",
    "description": "Join the bride and groom for photos.",
    "time": "6:30pm",
    "imageName": "friends-and-family-photos.jpg"
  },
  {
    "heading": "Dinner time",
    "description": "Enjoy a buffet style dinner in the beautiful reception.",
    "time": "7:30pm",
    "imageName": "dinner-reception.jpg"
  },
  {
    "heading": "Dancing and drinks",
    "description": "Time to let loose and celebrate the newlyweds!",
    "time": "8:30pm",
    "imageName": "dancing-and-drinks.jpg"
  }
]

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  public scheduleList = new Array<ScheduleItem>;

  ngOnInit() {
    this.scheduleList.push(...scheduleListItems);

    console.log('SCHEDULE LIST: ', this.scheduleList);
  }

}
