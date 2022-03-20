import { ElementRef, Injectable } from '@angular/core';
import { SetupService } from './setup.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  configuration: Array<any> = [];

  constructor(private setupSrv: SetupService) { }

  initConfiguration() {
    this.setupSrv.getConfiguration().subscribe({
      next: (conf) => {
        // Simulate delay
        setTimeout(() => {
          this.configuration = conf;
        }, 1000);
      },
      error: (err) => { console.error('Init configuration error'); },
      complete: () => { console.log('Init configuration complete'); }
    });
  }

  /**
   * ElementRef is passed because the same element cannot be detected from a service
   * 
   * @param elRef 
   */
  dispatchCustomEvent(elRef: ElementRef): void {
    const event: CustomEvent = new CustomEvent('EmitToFathers', {
      bubbles: true,
      detail: { data: 'Hello from Setup with random number: '+Math.random() }
    });

    elRef.nativeElement.dispatchEvent(event);
  } 
}
