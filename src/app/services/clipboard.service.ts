import { Injectable } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor(private clipboard: Clipboard) { }

  copiar (texto: string) {
    this.clipboard.copy(texto);
  }

  copiarWeb(val: string) {
    console.log('funcionando copiando web');
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  pegarWeb() {
    let resul;
    navigator.clipboard.readText().then(text => resul = text);
    console.log(resul);
    return resul;

  }
  pegar() {
    let resul;
    this.clipboard.paste().then(
        (resolve: string) => {
          resul = resolve;
          console.log('Dentro es' + resul);
        },
        (reject: string) => {
          alert('Error: ' + reject);
        }
    );
    console.log('Lo que devuelve es: ' + resul);
    return resul;
  }
}
