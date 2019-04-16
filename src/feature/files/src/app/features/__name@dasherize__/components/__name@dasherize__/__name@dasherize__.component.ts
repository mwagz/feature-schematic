import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: '<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.css']
})
export class <%= classify(name) %>Component implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
}
