import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesComponent } from './components/files/files.component';
import { TablesComponent } from './components/tables/tables.component';
import { TableDetailsComponent } from './components/table-details/table-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    TablesComponent,
    TableDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
