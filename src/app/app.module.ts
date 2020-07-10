import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/layout/header/header.module';
import { FooterModule } from './components/layout/footer/footer.module';
import { RecentModule } from './components/content/recent/recent.module';
import { SelectModule } from './components/content/select/select.module';
import { LinksModule } from './components/content/links/links.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    RecentModule,
    SelectModule,
    LinksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
