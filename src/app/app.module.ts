import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialSidenavComponent } from './material-sidenav/material-sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';

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
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
