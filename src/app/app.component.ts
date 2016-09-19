/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: [
    'app.component.scss'
  ]
})
export class App {
  constructor(
    ) {

  }

  ngOnInit() {

  }

}
