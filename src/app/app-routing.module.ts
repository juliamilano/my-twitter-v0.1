import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { HomeAppComponent } from './home-app/home-app.component';
import { ConnectAppComponent } from './connect-app/connect-app.component';
import { DiscoverAppComponent } from './discover-app/discover-app.component';
import { Article1Component } from './connect-app/users-article/article-1/article-1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home-app', component: HomeAppComponent },
  { path: 'connect-app', component: ConnectAppComponent, children:[
    { path: ':id', component: Article1Component }
  ]},
  { path: 'discover-app', component: DiscoverAppComponent },
  { path: '', redirectTo: '/home-app', pathMatch: 'full' },

  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
