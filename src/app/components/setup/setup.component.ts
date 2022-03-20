import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { SetupService } from '../../shared/services/setup.service';

@Component({
  selector: 'setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  configuration: Array<any> = [];

  constructor(private elementRef: ElementRef, private setupSrv: SetupService) { }

  ngOnInit(): void {
  }

  onEmitEvent() {
    const event: CustomEvent = new CustomEvent('EmitToFathers', {
      bubbles: true,
      detail: { data: 'Hello from Setup with random number: '+Math.random() }
    });

    this.elementRef.nativeElement.dispatchEvent(event);
  }

}
