import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { WeddingParticipentsData } from 'src/app/models/wedding-participents-data.model';
// import * as dbData from './db.json';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  @Input() public userData = new WeddingParticipentsData();

  @Output() public navigateToErrorScreenEmit: EventEmitter<any> = new EventEmitter<any>();

  public countValue = 10;
  public dataArray = [{ id: 0, name: '' }];

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    console.log('USER DATA ON RSVP: ', this.userData);
    if (!this.userData.firstName || !this.userData.lastName) {
      console.log('IN THE IF!!!!!!!!!!!!!!!!!!!');
      this.navigateToErrorScreenEmit.emit({errorHeader: 'No user found', errorMessage: 'Something went wrong, no user could be found.'})
    }
  }

  testJsonAdd() {

    fetch('https://kok-wedding-invitation-api.000webhostapp.com/participents/read-all.php', {
      method: 'get'
    })
      .then(response => response.json())
      .then(data => console.log(data));

    // this.getAll().subscribe(result => {
    //   console.log('RESULT: ', result);
    // });

  }

  public getAll() {
    const serviceEndpoint = 'https://kok-wedding-invitation-api.000webhostapp.com/participents/read-all.php';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get(serviceEndpoint, { headers: headers }).pipe(map((result: any) => result))
      .pipe(catchError((error: Response) => {

        return throwError(error);

        // // Check if the response is part of th expected errors
        // if (Object.values(HttpErrorResponses).includes(error.status)) {
        //   return ErrorHelper.handleError(error) as Observable<any>;
        // }

        // return throwError(new AppError(error)) as Observable<any>;
      }));
  }
}
