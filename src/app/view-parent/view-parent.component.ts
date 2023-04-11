import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements OnInit, AfterViewInit {
  @ViewChild(ViewChildComponent, {static : false }) child: ViewChildComponent | undefined;;
  constructor() { }

  childMessage!:string;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.childMessage = this.child!.message
  }

}
