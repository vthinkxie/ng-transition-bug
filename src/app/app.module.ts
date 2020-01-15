import { BrowserModule } from "@platform-browser";
import { NgModule } from "@angular/core";

import {
  AppComponent,
  AttachComponent,
  TransitionComponent
} from "./app.component";
import { BrowserAnimationsModule } from "@platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { HelloComponent } from "./hello.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AttachComponent,
    TransitionComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
