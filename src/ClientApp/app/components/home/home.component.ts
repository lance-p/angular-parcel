import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: '<div class="jumbotron"><div class="container text-center"><h1 class="display-3">{{name}}</h1><p class="lead">Boilerplate Angular application bundled with Parcel.</p></div></div>'
})

export class HomeComponent {
    name = "angular-parcel";
}
