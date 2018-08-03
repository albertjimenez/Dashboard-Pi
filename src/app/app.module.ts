import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxGaugeModule} from 'ngx-gauge';

import {AppComponent} from './app.component';
import {MaterialSidenavComponent} from './material-sidenav/material-sidenav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MaterialDashboardComponent} from './material-dashboard/material-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialSidenavComponent,
    MaterialDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgxGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
