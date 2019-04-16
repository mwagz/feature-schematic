import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Module Components
import { <%= classify(name) %>Component } from '../components/<%= dasherize(name) %>/<%= dasherize(name) %>.component';

const <%= camelize(name) %>Routes: Routes = [
  { path: '<%= underscore(name) %>', component: <%= classify(name) %>Component },
];


@NgModule({
  imports: [
    RouterModule.forChild(<%= camelize(name) %>Routes)
  ],
  exports: [
    RouterModule
  ]
})

export class <%= classify(name) %>RoutesModule { }
