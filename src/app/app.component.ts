import { Component, OnInit } from '@angular/core';
import { AppService } from './shared/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  get configuration() { return this.appService.configuration; };

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.initConfiguration();
  }

}
