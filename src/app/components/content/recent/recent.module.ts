import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentComponent } from './recent.component';



@NgModule({
  declarations: [RecentComponent],
  exports: [RecentComponent],
  imports: [
    CommonModule
  ]
})
export class RecentModule { }
