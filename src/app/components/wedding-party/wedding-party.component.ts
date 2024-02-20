import { Component, OnInit } from '@angular/core';
import { WeddingPartyParticipent } from 'src/app/models/wedding-party-participent.model';
// import * as WeddingPartyList from './wedding-participants-list.json';


const WeddingPartyList = [
  {
      "fullName": "Vicky Pienaar",
      "description": "Bride",
      "imageName": "vicky-pienaar"
  },
  {
      "fullName": "Andre Kok",
      "description": "Groom",
      "imageName": "andre-kok"
  },
  {
      "fullName": "Monica Pienaar",
      "description": "Bride's mother",
      "imageName": "monica-pienaar"
  },
  {
      "fullName": "Stefan Pienaar",
      "description": "Bride's father",
      "imageName": "stefan-pienaar"
  },
  {
      "fullName": "Marinda Kok",
      "description": "Groom's mother",
      "imageName": "marinda-kok"
  },
  {
      "fullName": "Johan Kok",
      "description": "Groom's father",
      "imageName": "johan-kok"
  },
  {
      "fullName": "John Pienaar",
      "description": "Bride's brother",
      "imageName": "john-pienaar"
  },
  {
      "fullName": "Johan Kok",
      "description": "Groom's brother",
      "imageName": "johan-jr-kok"
  },
  {
      "fullName": "Marle Kok",
      "description": "Groom's sister-in-law",
      "imageName": "marle-kok"
  }
]

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.scss']
})
export class WeddingPartyComponent implements OnInit {
  public weddingPartyParticipents = new Array<WeddingPartyParticipent>;

  ngOnInit(): void {
    this.weddingPartyParticipents = WeddingPartyList;
    console.log('WEDDING PARTY DATA: ', this.weddingPartyParticipents)
  }


}
