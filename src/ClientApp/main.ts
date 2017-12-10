import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppModule } from './app/app.module.browser';

platformBrowserDynamic().bootstrapModule(AppModule);
