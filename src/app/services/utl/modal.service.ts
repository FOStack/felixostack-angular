import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  dialogRef: any;

  constructor(private dialog: MatDialog) { }

  log() {
    console.log('hi');
  }

  open(p: any) {
    this.dialogRef = this.dialog.open(
      p.component, {
      height: p.height||'400px',
      width: p.width||'600px',
      ...(p.data)?{data: p.data}:null,
      ...(p.panelClass)?{panelClass: p.panelClass}:null,
    });
  }

}
