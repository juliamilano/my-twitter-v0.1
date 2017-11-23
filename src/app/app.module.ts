import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TwitterComponent } from './twitter/twitter.component';
import { ProfileLeftComponent } from './profile-left/profile-left.component';
import { MainContentBlockComponent } from './main-content-block/main-content-block.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { TweetComponent } from './main-content-block/tweet/tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
    ProfileLeftComponent,
    MainContentBlockComponent,
    AdvertisingComponent,
    TweetComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
