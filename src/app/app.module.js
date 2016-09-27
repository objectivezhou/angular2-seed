import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app.component';
// import { AppState, InteralStateType } from './app.service';
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
export var AppModule = (function () {
    function AppModule(appRef) {
        this.appRef = appRef;
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    bootstrap: [App],
                    declarations: [
                        App
                    ],
                    imports: [
                        BrowserModule
                    ],
                    providers: []
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [
        { type: ApplicationRef, },
    ];
    return AppModule;
}());
