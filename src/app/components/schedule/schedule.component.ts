import { Component, Input, OnInit } from '@angular/core';
import { ScheduleItem } from 'src/app/models/schedule-item.model';

const scheduleListItems = [
  {
    "heading": "Welcome drinks",
    "description": "Have a few drinks and snacks before the formalities.",
    "time": "3:00pm",
    "imageName": "welcome-drinks.jpg"
  },
  {
    "heading": "Ceremony",
    "description": "Time to make it official!",
    "time": "4:00pm",
    "imageName": "ceremony.jpeg"
  },
  {
    "heading": "Snacks and drinks",
    "description": "Enjoy some delicious snacks and drinks while the bride and groom takes photos.",
    "time": "4:45pm",
    "imageName": "snacks-and-drinks.jpg"
  },
  {
    "heading": "Friends and family photos",
    "description": "Join the bride and groom for photos.",
    "time": "5:30pm",
    "imageName": "friends-and-family-photos.jpg"
  },
  {
    "heading": "Dinner time",
    "description": "Enjoy a buffet style dinner in the beautiful reception.",
    "time": "7:30pm",
    "imageName": "dinner-reception.webp"
  },
  {
    "heading": "Dancing and drinks",
    "description": "Time to let loose and celebrate the newlyweds!",
    "time": "8:30pm",
    "imageName": "dancing-and-drinks.jpeg"
  }
]

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  public scheduleList = new Array<ScheduleItem>;
  
  @Input() public isMobileView = false;

  ngOnInit() {
    this.scheduleList.push(...scheduleListItems);
  }

}
