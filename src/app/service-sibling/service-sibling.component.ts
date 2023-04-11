import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-service-sibling',
  templateUrl: './service-sibling.component.html',
  styleUrls: ['./service-sibling.component.css'],
})
export class ServiceSiblingComponent implements OnInit {
  message!: string;
  dataService = inject(DataService);
  constructor() {}

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
  newMessage() {
    this.dataService.changeMessage('Hello message changed and it updates whoever subscribed me');
  }
}
