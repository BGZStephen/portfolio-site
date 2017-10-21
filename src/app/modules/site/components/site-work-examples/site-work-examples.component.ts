import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-work-examples',
  templateUrl: './site-work-examples.component.html',
})
export class SiteWorkExamplesComponent implements OnInit {

  exampleType: String = 'front-end-js'

  constructor() { }

  ngOnInit() {
  }

}
