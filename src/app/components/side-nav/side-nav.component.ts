import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

enum availableScreensEnum {
  Home = 'home',
  WeddingParty = 'weddingparty',
  Venue = 'venue',
  Schedule = 'schedule',
  DressCode = 'dresscode',
  Accommodation = 'accommodation',
  RSVP = 'rsvp',
  ErrorScreen = 'errorscreen'
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {
  public availableScreens = availableScreensEnum;
  public activeScreen: availableScreensEnum;
  public activeUser = '';
  public disableNavigation = false;
  public errorScreenHeader = '';
  public errorScreenMessage = '';

  constructor(private router: Router) {
    this.activeScreen = this.availableScreens.Home;
  }

  ngOnInit(): void {
    this.getActiveUser();
  }

  public setActiveScreen(selectedScreen: availableScreensEnum) {
    this.activeScreen = selectedScreen;

    var elem = document.getElementById('content-container');
    if (elem){
      elem.scrollTop = -elem.scrollHeight;
    }
  }

  public getActiveUser() {
    this.activeUser = this.router.url?.replace('/', '');
    console.log('CURRENT ROUTE: ', this.activeUser);

    if (!this.activeUser) {
      this.errorScreenHeader = 'No user found'
      this.errorScreenMessage = 'Unfortunitley there was no user provided';
      this.activeScreen = this.availableScreens.ErrorScreen;
      this.disableNavigation = true;
    }

    // this.activatedRoute.params.subscribe((params: Params) => {
    //   console.log('ACTIVATED ROUTE: ', params);
    // });
  }

}
