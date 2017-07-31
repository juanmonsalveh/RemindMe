import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NotificationPage} from '../notification/notification';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	notificationPage = NotificationPage;

  constructor(public navCtrl: NavController) {

  }

}
