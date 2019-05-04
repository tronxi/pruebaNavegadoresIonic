import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../services/device.service';
import {OpenAppService} from '../services/open-app.service';
import {OpenWebService} from '../services/open-web.service';
import {ClipboardService} from '../services/clipboard.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public formGroup: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  constructor(private deviceService: DeviceService,
              private openApp: OpenAppService,
              private openWeb: OpenWebService,
              private clipborad: ClipboardService,
              private formBuilder: FormBuilder) {}
  abrir() {
    if (this.deviceService.cordovaAvailable()) {
      this.openApp.abrir();
    } else {
      this.openWeb.abrir();
    }
  }

  copiar() {
    this.clipborad.copiarWeb(this.formGroup.controls['name'].value);
  }

  pegar() {
    let resul;
    if(this.deviceService.cordovaAvailable()) {
      resul = this.clipborad.pegar();
    } else {
      resul = this.clipborad.pegarWeb();
    }
    this.formGroup.patchValue({
      email: 'mensaje nuevo'
    });
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }
}
