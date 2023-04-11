import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentMessage: string = "Hello from Parent to Child"
  childMessage!: string
  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage($event: any) {
    this.childMessage = $event
  }

}
