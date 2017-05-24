import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './herores.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
 ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
