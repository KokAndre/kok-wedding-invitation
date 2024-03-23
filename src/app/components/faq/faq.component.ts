import { Component, Input, OnInit } from '@angular/core';
import { FaqItem } from 'src/app/models/faq-item.model';

const questionsList = [
  {
    "header": "What To Wear?",
    "boady": "Please be mindful of our semi-formal dress code for the outdoor venue. Considering the terrain, it's wise to opt for footwear that won't easily get stuck in the ground, perhaps avoiding high heels. Additionally, don't forget to bring along a jacket to stay comfortable throughout the event.",
    "isPanelExpanded": false
  },
  {
    "header": "What Time Should I Arrive?",
    "boady": "Guests are kindly requested to arrive at 3:00pm to enjoy welcome drinks and mingle before the festivities begin. For a detailed itinerary, please refer to the schedule tab.",
    "isPanelExpanded": false
  },
  {
    "header": "Can I Bring A Plus One?",
    "boady": "Companions are only allowed per invite.",
    "isPanelExpanded": false
  },
  {
    "header": "Are Kids Invited?",
    "boady": "Kids are welcome!",
    "isPanelExpanded": false
  },
  {
    "header": "Will There Be A Bar?",
    "boady": "While we won't have a designated bar, we're excited to offer a selection of Wine, Gin, and Brandy for your enjoyment. Additionally, feel free to bring along your preferred beverages.",
    "isPanelExpanded": false
  },
  {
    "header": "Should I bring a gift?",
    "boady": "No, there's no need to bring gifts. We understand that traveling can be costly, and your presence is truly appreciated.",
    "isPanelExpanded": false
  },
  {
    "header": "When Should I RSVP?",
    "boady": "Please RSVP before 30 April 2024",
    "isPanelExpanded": false
  }
] 

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  public questoinsList: FaqItem[] = questionsList;
  
  @Input() public isMobileView = false;

  constructor() { }

  ngOnInit() {
  }

}
