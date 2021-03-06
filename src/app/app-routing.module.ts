import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { WikiComponent } from './wiki/wiki.component';
import { DownloadDetailsComponent } from './download-details/download-details.component';

// The routes for the Angular router
const routes: Routes = [
  
  // The main page should be "home"
  {
    path: 'home',
    component: HomeComponent
  },

  // Redirect to the main page
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // Download details page
  {
    path: 'download/:id',
    component: DownloadDetailsComponent
  },
  
  // Downloads Page
  {
    path: 'download',
    component: DownloadsComponent
  },

  // Redirect to the download page if the path is "downloads"
  {
    path: 'downloads',
    redirectTo: 'download',
    pathMatch: 'full'
  },
  
  // Wiki page with module
  {
    path: 'wiki/:module/:page',
    component: WikiComponent
  },
  
  // Wiki page without module
  {
    path: 'wiki/:page',
    component: WikiComponent
  },

  // Go to the default wiki page if nothing is defined
  {
    path: 'wiki',
    redirectTo: 'wiki/Home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
