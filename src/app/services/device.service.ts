import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private platform: Platform) { }

  cordovaAvailable() {
    if (this.platform.is('desktop') || this.platform.is('mobileweb')) {
      return false;
    } else {
      return true;
    }
  }
}
