import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: string = '';

  get configuration() { return this.appService.configuration; };

  constructor(private elementRef: ElementRef, private appService: AppService) { }

  @HostListener('EmitToFathers', ['$event'])
  onCustomEventCaptured(event: any) {
    console.log('Event Received', event.detail);
    this.data = event.detail.data;
  }

  ngOnInit(): void {
      // Example dispatching event from service passing the elementRef
    // this.appService.dispatchCustomEvent(this.elementRef);
  }

}
