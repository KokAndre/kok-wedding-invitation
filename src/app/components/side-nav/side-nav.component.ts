import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppHelpers } from 'src/app/helpers/app-helpers.functions';
import { WeddingParticipentsData } from 'src/app/models/wedding-participents-data.model';

enum availableScreensEnum {
  Home = 'home',
  WeddingParty = 'weddingparty',
  Venue = 'venue',
  Schedule = 'schedule',
  FAQ = 'faq',
  RSVP = 'rsvp',
  RSVPStatus = 'rsvpstatus',
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
  public activeUserFirstName = '';
  public activeUserLastName = '';
  public disableNavigation = false;
  public errorScreenHeader = '';
  public errorScreenMessage = '';
  public activeUserData = new WeddingParticipentsData();
  public fullWeddingPartyList = new Array<WeddingParticipentsData>();
  public isMobileView = false;

  constructor(private router: Router) {
    this.activeScreen = this.availableScreens.Home;

    if (window.innerWidth < 800) {
      this.isMobileView = true;
      window.scrollTo(0, 1);
    }
  }

  ngOnInit(): void {
    this.getActiveUser();
    this.fetchUsers();
  }

  public getActiveUser() {
    this.activeUser = this.router.url?.replace('/', '');

    if (!this.activeUser || (!this.activeUser.includes('-') && this.activeUser !== 'admin')) {
      this.errorScreenHeader = 'No user found';
      this.errorScreenMessage = 'Unfortunitley the provided participents is incorrect. Please ensure you use the correct link.';
      this.activeScreen = this.availableScreens.ErrorScreen;
      this.disableNavigation = true;
    } else {
      if (this.activeUser.includes('-')) {
        this.activeUserFirstName = this.activeUser.split('-')[0];
        this.activeUserLastName = this.activeUser.split('-')[1];
      }
    }
  }

  public setActiveScreen(selectedScreen: availableScreensEnum) {
    this.activeScreen = selectedScreen;

    var elem = document.getElementById('content-container');
    if (elem) {
      elem.scrollTop = -elem.scrollHeight;
    }
  }

  public fetchUsers() {
    let requestURL = AppHelpers.getApiUrl();

    // if first name and last name is provided then only fetch their data
    if (this.activeUserFirstName && this.activeUserLastName) {
      requestURL = requestURL + `/?firstName=${this.activeUserFirstName}&lastName=${this.activeUserLastName}`;
    }

    fetch(requestURL, {
      method: 'get'
    })
      .then(response => response.json())
      .then(data => {
        console.log('FETCH DATA RESULTS: ', data);
        if (data.status !== 200) {
          this.errorScreenHeader = data.header;
          this.errorScreenMessage = data.message;
          this.activeScreen = this.availableScreens.ErrorScreen;
          this.disableNavigation = true;
        } else {
          this.activeUserData = data.data?.length ? data.data[0] : data;

          console.log('USER DATA: ', this.activeUserData);
          console.log('USER DATA: ', typeof(this.activeUserData.isAdmin));

          if (this.activeUserData.isAdmin === '1') {
            console.log('IS ADMIN')
            this.getFullWeddingParty();
          }
        }
      });
  }

  public naviagteToErrorScreen(errorScreenData: any) {
    this.errorScreenHeader = errorScreenData.errorHeader;
    this.errorScreenMessage = errorScreenData.errorMessage;
    this.activeScreen = this.availableScreens.ErrorScreen;
  }

  public updateUserData(userData: WeddingParticipentsData) {
    this.activeUserData = userData;
  }

  public getFullWeddingParty() {
    fetch(AppHelpers.getApiUrl(), {
      method: 'get'
    })
      .then(response => response.json())
      .then(data => {
        if (data.status !== 200) {
          this.errorScreenHeader = data.header;
          this.errorScreenMessage = data.message;
          this.activeScreen = this.availableScreens.ErrorScreen;
          this.disableNavigation = true;
        } else {
          this.fullWeddingPartyList = data.data?.length ? data.data : undefined;
        }
      });
  }

}
