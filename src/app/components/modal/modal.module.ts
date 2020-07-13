import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppViewComponent } from './app-view/app-view.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppViewComponent,
  ],
  entryComponents: [
    AppViewComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { 
      provide: MAT_DIALOG_DEFAULT_OPTIONS, 
      useValue: {
        backdropDismiss: false,
        hasBackdrop: true
      } 
    }
  ]
})
export class ModalModule { }
