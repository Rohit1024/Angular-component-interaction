import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-service-parent',
  templateUrl: './service-parent.component.html',
  styleUrls: ['./service-parent.component.css']
})
export class ServiceParentComponent implements OnInit {
  message !: string;
  messageFromObservable!: Observable<string>;
  dataService = inject(DataService);
  constructor() {
    this.messageFromObservable = this.dataService.messageSource;
  }
  ngOnInit(): void {
    
  }

  getDataWithSubscription() {
    this.dataService.currentMessage.subscribe(data => this.message = data);
  }

}
