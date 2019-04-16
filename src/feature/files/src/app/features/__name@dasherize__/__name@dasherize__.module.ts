import { NgModule } from '@angular/core';

// Module Routes
import { <%= classify(name) %>RoutesModule } from './routes/<%= dasherize(name) %>-routing.module';

@NgModule({
  imports: [
    <%= classify(name) %>RoutesModule
  ],
  declarations: [
  ]
})
export class <%= classify(name) %>Module { }
