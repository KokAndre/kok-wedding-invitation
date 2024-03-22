import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { WeddingParticipentsData } from 'src/app/models/wedding-participents-data.model';
import { AppHelpers } from 'src/app/helpers/app-helpers.functions';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  @Input() public userData = new WeddingParticipentsData();
  @Input() public isMobileView = false;

  @Output() public navigateToErrorScreenEmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() public updateUserDataEmit: EventEmitter<any> = new EventEmitter<any>();

  public countValue = 10;
  public dataArray = [{ id: 0, name: '' }];
  public displayCaptureRSVP = false;
  public rsvpStatus = '';
  public displayErrorMessage = false;
  public isLoading = false;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    if (!this.userData.firstName || !this.userData.lastName) {
      this.navigateToErrorScreenEmit.emit({ errorHeader: 'No user found', errorMessage: 'Something went wrong, no user could be found.' });
    } else {
      if (this.userData.firstName.includes('johanjr')) {
        this.userData.firstName = 'johan';
      }
    }
  }

  testJsonAdd() {

    fetch('https://kok-wedding-invitation-api.000webhostapp.com/participents/read-all.php', {
      method: 'get'
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  public getAll() {
    const serviceEndpoint = 'https://kok-wedding-invitation-api.000webhostapp.com/participents/read-all.php';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get(serviceEndpoint, { headers: headers }).pipe(map((result: any) => result))
      .pipe(catchError((error: Response) => {

        return throwError(error);
      }));
  }

  public submitRSVPClicked() {
    if (!this.isLoading) {
      this.isLoading = true;
      if (!this.rsvpStatus) {
        this.displayErrorMessage = true;
      } else {
        this.displayErrorMessage = false;
        this.submitRSVPData();
      }
    }

  }

  public submitRSVPData() {
    const currentDate = new Date().toISOString();

    const requestData = new WeddingParticipentsData();
    requestData.id = this.userData.id;
    requestData.rsvpUpdateDate = currentDate;
    requestData.rsvpStatus = this.rsvpStatus;

    fetch(AppHelpers.postApiUrl(), {
      method: 'post',
      body: JSON.stringify({ requestData: requestData })
    })
      .then(response => response.json())
      .then(data => {
        console.log('POST DATA RESULTS: ', data);
        this.isLoading = false;
        if (data.status !== 200) {
          const errorScreenData = {
            errorHeader: data.header,
            errorMessage: data.message
          }
          this.navigateToErrorScreenEmit.emit(errorScreenData);
        } else {
          this.updateUserDataEmit.emit(data.data);

          // Clear the data
          this.rsvpStatus = '';
          this.displayCaptureRSVP = false;
        }
      });
  }
}
