import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DotsComponent } from './components/pages/dots/dots.component';
import { StudComponent } from './components/stud/stud.component';

@NgModule({
  declarations: [AppComponent, StudComponent, DotsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
