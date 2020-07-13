import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/utl/modal.service';
import { AppViewComponent } from '../../modal/app-view/app-view.component';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  constructor(private modal: ModalService) { }

  ngOnInit() {
  }



  openApp(url) {
    this.modal.open({
      component: AppViewComponent,
      height: '580px',
      width: '400px',
      data: { url: url },
      panelClass: 'app-view'
    });
  }

}
