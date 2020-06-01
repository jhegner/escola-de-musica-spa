import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
import { WebsiteModule } from './website/website.module';
import { PortalModule } from './portal/portal.module';
import { HomeComponent } from './website/home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule, WebsiteModule, PortalModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
