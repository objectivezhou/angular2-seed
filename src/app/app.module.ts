import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App is our top level component
import { App } from './app.component';
// import { AppState, InteralStateType } from './app.service';


/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App
  ],
  imports: [ // import Angular's modules
    BrowserModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
}

