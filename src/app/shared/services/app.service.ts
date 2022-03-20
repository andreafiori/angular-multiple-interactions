import { ElementRef, Injectable } from '@angular/core';
import { SetupService } from './setup.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  configuration: Array<any> = [];

  constructor(private setupSrv: SetupService) { }

  initConfiguration() {
    this.setupSrv.getConfiguration().subscribe(conf => {
      // Simulate delay
      setTimeout(() => {
        this.configuration = conf;
      }, 1000);
    });
  }

  dispatchCustomEvent(elRef: ElementRef) {
    const event: CustomEvent = new CustomEvent('EmitToFathers', {
      bubbles: true,
      detail: { data: 'Hello from Setup with random number: '+Math.random() }
    });

    elRef.nativeElement.dispatchEvent(event);
  } 
}
