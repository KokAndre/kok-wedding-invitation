import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public accomplished: number = 20
  public currentDate: any;
  public targetDate: any;
  public cDateMillisecs: any;
  public tDateMillisecs: any;
  public difference: any;
  public seconds: any;
  public minutes: any;
  public hours: any;
  public days: any;
  public displayDays: any;
  public displayHours: any;
  public displayMinutes: any;
  public displaySeconds: any;
  public releaseVersion = '2024-03-23 - 1';

  @Input() public isMobileView = false;
  @Input() public isAdmin = false;

  constructor(public ref: ChangeDetectorRef){ }


  ngOnInit(): void {
    this.myTimer();
  }

  public countDown() {
    setTimeout(() => {
      this.myTimer();
    }, 1000)
  }

  public myTimer() {
    this.currentDate = new Date();
    this.targetDate = new Date(2024, 6, 27);
    this.cDateMillisecs = this.currentDate.getTime();
    this.tDateMillisecs = this.targetDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);

    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? "0" + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    this.displayDays = this.days;
    this.displayHours = (Number(this.hours) + 6).toString();
    this.displayMinutes = this.minutes;
    this.displaySeconds = this.seconds;

    if (this.displayDays === 0 && this.displayHours === 0 && this.displayMinutes === 0 && this.displaySeconds === 0) {
      // Do not execure the count down again
    } else {
      this.countDown();
    }
  }

}
