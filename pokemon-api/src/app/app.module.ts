import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { MatIconModule } from  '@angular/material/icon';
import { MatCardModule } from  '@angular/material/card';
import { MatMenuModule } from  '@angular/material/menu';
import { MatChipsModule } from  '@angular/material/chips';
import { MatSlideToggleModule } from  '@angular/material/slide-toggle';
import { HomeComponent } from './modules/home/home.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
