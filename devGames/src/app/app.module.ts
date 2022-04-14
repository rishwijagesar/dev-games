import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomepageComponent } from './public/homepage/homepage.component';
import { CarouselModule } from 'primeng/carousel';
import { GamesComponent } from './public/games/games.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AppsComponent } from './public/apps/apps.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomepageComponent,
    GamesComponent,
    AppsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    CarouselModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
