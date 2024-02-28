import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
// import * as dbData from './db.json';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  public countValue = 10;
  public dataArray = [{ id: 0, name: '' }];

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    //  console.log('DB DATA: ', dbData);
    //  this.dataArray = dbData;
    //  console.log('DATA ARRAY: ', this.dataArray);
  }

  testJsonAdd() {

//     fetch('http://kok-wedding-invitation.great-site.net/participents/read-all.php', {
//   headers: {
//     'Referrer-Policy': 'no-referrer'
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data));

    this.getAll().subscribe(result => {
      console.log('RESULT: ', result);
    });

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
