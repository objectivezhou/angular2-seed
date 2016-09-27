import { Component } from '@angular/core';
/*
 * App Component
 * Top Level Component
 */
export var App = (function () {
    function App() {
    }
    App.prototype.ngOnInit = function () {
    };
    App.decorators = [
        { type: Component, args: [{
                    selector: 'app',
                    templateUrl: 'app.component.html',
                    styleUrls: [
                        'app.component.css'
                    ]
                },] },
    ];
    /** @nocollapse */
    App.ctorParameters = [];
    return App;
}());
