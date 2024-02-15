import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { WeddingPartyComponent } from './components/wedding-party/wedding-party.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

const routes: Routes = [
  {
    path: '', component: SideNavComponent, children: [
      { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
      { path: 'landing-page', component: LandingPageComponent },
      { path: 'wedding-party', component: WeddingPartyComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
