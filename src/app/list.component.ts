import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let item of list">{{item}}</li>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  @Input() list;

  constructor() { }

  ngOnInit() {
  }

}
