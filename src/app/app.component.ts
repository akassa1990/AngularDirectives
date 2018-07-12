import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List App';
  visibility = true ;
  mycolor = 'Blue';
  courses: string[];

  constructor() {
    this.courses = ['WAP', 'MWA', 'WAA', 'EA'];
  }
  onSendColor(color) {
    console.log('Host Color Changed To: ' + color);
  }


}
