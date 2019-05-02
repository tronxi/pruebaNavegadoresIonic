import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class OpenAppService {
  constructor(private iab: InAppBrowser) { }
  abrir() {
    console.log('abrir app');
    const browser = this.iab.create('https://connect.bbva.com/sandboxconnect?client_id=app.bbva.asesorfinanc&response_type=code');
    browser.on('loadstart').subscribe(event => {
      if (event.url.toString().includes('&token')) {
        const url = new URL(event.url);
        const params = url.searchParams;
        const token = params.get('token');
        console.log(token);
        browser.close();
      }
    });
  }
}
