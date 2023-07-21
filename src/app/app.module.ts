import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableComponent} from './table/table.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {UsersService} from "./services/users.service";
import {HttpClientModule} from "@angular/common/http";
import {MainPageComponent} from './main-page/main-page.component';
import {ToolbarModule} from "primeng/toolbar";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    ToolbarModule,
    RouterModule.forRoot([
      { path: '**', component: AppComponent },
    ]),
  ],
  providers: [
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
