import { Component, Input, OnInit } from '@angular/core';
import { WeddingParticipentsData } from 'src/app/models/wedding-participents-data.model';

@Component({
  selector: 'app-rsvp-status',
  templateUrl: './rsvp-status.component.html',
  styleUrls: ['./rsvp-status.component.scss']
})
export class RsvpStatusComponent implements OnInit {
  public statusFilterGroup = 'all';

  @Input() public fullWeddingPartyList = new Array<WeddingParticipentsData>();
  @Input() public isMobileView: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log('Full Participent list: ', this.fullWeddingPartyList);
  }

}
