import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RecentModule } from 'src/app/components/content/recent/recent.module';
import { SelectModule } from 'src/app/components/content/select/select.module';
import { LinksModule } from 'src/app/components/content/links/links.module';
import { FooterModule } from 'src/app/components/layout/footer/footer.module';



@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    RecentModule,
    SelectModule,
    LinksModule,
    FooterModule
  ]
})
export class HomeModule { }
