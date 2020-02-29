import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DotsComponent } from './components/pages/dots/dots.component';
import { SelectionMenuComponent } from './components/selection-menu/selection-menu.component';
import { StudComponent } from './components/stud/stud.component';
import { StudStylePipe } from './pipes/stud-style.pipe';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, StudComponent, DotsComponent, StudStylePipe, SelectionMenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
})
export class AppModule {}
