import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeddingPartyComponent } from './components/wedding-party/wedding-party.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '', component: SideNavComponent, children: [
      { path: '', redirectTo: 'home-page', pathMatch: 'full' },
      { path: 'home-page', component: HomePageComponent },
      { path: 'wedding-party', component: WeddingPartyComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
