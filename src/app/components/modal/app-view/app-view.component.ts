import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.scss']
})
export class AppViewComponent implements OnInit {

  url: string = this.data.url;
  loading: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private hostElement: ElementRef
  ) { }

  ngOnInit() {
    const iframe = this.hostElement.nativeElement.querySelector('iframe');
    iframe.src = this.url;
    
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

}
