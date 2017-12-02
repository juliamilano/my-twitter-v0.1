import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TwitterComponent } from './twitter/twitter.component';
import { ProfileLeftComponent } from './home-app/profile-left/profile-left.component';
import { MainContentBlockComponent } from './home-app/main-content-block/main-content-block.component';
import { AdvertisingComponent } from './home-app/advertising/advertising.component';
import { TweetComponent } from './home-app/main-content-block/tweet/tweet.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { ConnectAppComponent } from './connect-app/connect-app.component';
import { DiscoverAppComponent } from './discover-app/discover-app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { TweetService } from './Services/twitter.service';
import { UserInfoService } from './Services/user-info.service';
import { TopUsersComponent } from './connect-app/top-users/top-users.component';
import { HoverDirective } from './Directives/hover.directive';
import { Article1Component } from './connect-app/users-article/article-1/article-1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
    ProfileLeftComponent,
    MainContentBlockComponent,
    AdvertisingComponent,
    TweetComponent,
    HomeAppComponent,
    ConnectAppComponent,
    DiscoverAppComponent,
    TopUsersComponent,
    HoverDirective,
    Article1Component,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [TweetService, UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
