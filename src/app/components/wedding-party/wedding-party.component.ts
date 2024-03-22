import { Component, Input, OnInit } from '@angular/core';
import { WeddingParticipentsData } from 'src/app/models/wedding-participents-data.model';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.scss']
})
export class WeddingPartyComponent implements OnInit {
  @Input() public weddingPartyList = new Array<WeddingParticipentsData>();

  ngOnInit(): void {
  }


}
