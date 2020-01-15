import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {
  AppComponent,
  AttachComponent,
  TransitionComponent
} from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AttachComponent,
    TransitionComponent
  ],
  entryComponents: [AttachComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
