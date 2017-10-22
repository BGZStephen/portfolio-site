import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/services/api.service'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-site-work-examples',
  templateUrl: './site-work-examples.component.html',
})
export class SiteWorkExamplesComponent implements OnInit {

  exampleType: String = 'front-end-js';
  workExamples: Array<object> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
  ) {
    const params = activatedRoute.params.map(param => param.type)
    .subscribe(type => {
      this.exampleType = type;
    })
  }

  ngOnInit() {
    this.apiService.workExamples.getAll()
    .subscribe(workExamples => {
      this.workExamples = workExamples;
    })
  }

}
