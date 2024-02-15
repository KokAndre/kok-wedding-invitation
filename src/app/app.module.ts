import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeddingPartyComponent } from './components/wedding-party/wedding-party.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VenueComponent } from './components/venue/venue.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { DressCodeComponent } from './components/dress-code/dress-code.component';
import { AccommodationComponent } from './components/accommodation/accommodation.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';

@NgModule({
  declarations: [
    AppComponent,
    WeddingPartyComponent,
    SideNavComponent,
    HomePageComponent,
    VenueComponent,
    ScheduleComponent,
    DressCodeComponent,
    AccommodationComponent,
    RsvpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
