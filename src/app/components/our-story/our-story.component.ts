import { Component, Input, OnInit } from '@angular/core';
import { OurStoryItem } from 'src/app/models/our-story-item';

const timelineItems = [
  {
    "heading": "First met",
    "description": 'We first encountered each other during our time at university, in a course titled "Musics."',
    "date": "2017-06-03",
    "imageName": "first-met.jpeg"
  },
  {
    "heading": "Officialy dating",
    "description": "He realized their bond would last forever the moment she wore a Bulls jersey.",
    "date": "2017-08-19",
    "imageName": "started-dating.jpeg"
  },
  {
    "heading": "Got engaged",
    "description": "After experiencing a rollercoaster journey together for five years (the good kind), he was certain that he wanted to spend the remainder of his life with her.",
    "date": "2022-11-25",
    "imageName": "got-engaged.jpeg"
  }
]

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent implements OnInit {
  public timelineList = new Array<OurStoryItem>;
  
  @Input() public isMobileView = false;

  ngOnInit() {
    this.timelineList.push(...timelineItems);
 
    if (this.isMobileView && this.timelineList.find(x => x.imageName === 'started-dating.jpeg')) {
      this.timelineList.find(x => x.imageName === 'started-dating.jpeg')!.imageName = 'started-dating-mobile.jpeg';
    }
  }

}
