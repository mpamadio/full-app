import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

@Component({ selector:'alert', templateUrl: 'alert.component.html'})
export class AlertComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  message: any;


  constructor( alertService: AlertService) { }

  ngOnInit() {
  }

}
