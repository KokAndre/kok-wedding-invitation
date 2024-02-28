import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeddingPartyComponent } from './components/wedding-party/wedding-party.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VenueComponent } from './components/venue/venue.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { DressCodeComponent } from './components/dress-code/dress-code.component';
import { AccommodationComponent } from './components/accommodation/accommodation.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';

const routes: Routes = [
  {
    path: '**', component: SideNavComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
