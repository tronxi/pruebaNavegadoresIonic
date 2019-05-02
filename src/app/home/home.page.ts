import { Component } from '@angular/core';
import {DeviceService} from '../services/device.service';
import {OpenAppService} from '../services/open-app.service';
import {OpenWebService} from '../services/open-web.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private deviceService: DeviceService,
              private openApp: OpenAppService,
              private openWeb: OpenWebService) {}
  abrir() {
    if (this.deviceService.cordovaAvailable()) {
      this.openApp.abrir();
    } else {
      this.openWeb.abrir();
    }
  }
}
