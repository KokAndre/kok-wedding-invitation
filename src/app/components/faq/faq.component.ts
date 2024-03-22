import { Component, Input, OnInit } from '@angular/core';
import { FaqItem } from 'src/app/models/faq-item.model';

const questionsList = [
  {
    "header": "What To Wear?",
    "boady": "Semi-formal dress code. The venue is an outdoor venue, so high heel shoes might get stuck a bit in the ground. Please remember to bring a jacket!",
    "isPanelExpanded": false
  },
  {
    "header": "Is it an outdoor or indoor venue?",
    "boady": "Both the ceremony and reception will be outdoors in a beautiful forest styled venue.",
    "isPanelExpanded": false
  },
  {
    "header": "What Time Should I Arrive?",
    "boady": "Guests to arrive at 3:00pm for welcome drinks. Full schedule is in the schedule tab.",
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
    "header": "Will there be food during cocktail hour?",
    "boady": "Apon arrival of the guests, there will be a champagne and snacks table.",
    "isPanelExpanded": false
  },
  {
    "header": "Will dinner be served at the reception?",
    "boady": "After the ceremony and photos, everyone will move to the beautiful love tunnel for a buffet dinner.",
    "isPanelExpanded": false
  },
  {
    "header": "Will There Be A Bar?",
    "boady": "There is no bar, but basic drinks will be provided. You are welcome to bring along your own drinks.",
    "isPanelExpanded": false
  },
  {
    "header": "When Should I RSVP?",
    "boady": "Please RSVP before 1 April 2024",
    "isPanelExpanded": false
  },
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
