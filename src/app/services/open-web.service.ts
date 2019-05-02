import { Injectable } from '@angular/core';
import {interval} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWebService {

  constructor() { }
  abrir() {
    console.log('abrir web');
    const browser = window.location.assign('https://connect.bbva.com/sandboxconnect?client_id=app.bbva.asesorfinanc&response_type=code');
    // const interval = setInterval(() => {
    //   if (browser.closed) {
    //     clearInterval(interval);
    //     console.log('cerrada');
    //   } else {
    //     console.log(browser.print());
    //     console.log('abierta');
    //   }
    // }, 1000);
  }
}
