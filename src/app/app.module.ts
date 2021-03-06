// Stuff from Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Other External Dependencies
import { MarkdownModule, MarkdownService } from 'ngx-markdown';

// Website stuff
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { DownloadButtonsComponent } from './download-buttons/download-buttons.component';
import { WikiComponent } from './wiki/wiki.component';

// Website services
import { DownloadsService } from './downloads.service';
import { WikiService } from './wiki.service';
import { DownloadDetailsComponent } from './download-details/download-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DownloadsComponent,
    WikiComponent,
    DownloadButtonsComponent,
    DownloadDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    DownloadsService,
    WikiService,
    MarkdownService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
