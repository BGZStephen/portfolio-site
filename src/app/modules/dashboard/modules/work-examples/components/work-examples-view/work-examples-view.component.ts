import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service'

@Component({
  selector: 'app-work-examples-view',
  templateUrl: './work-examples-view.component.html',
  styleUrls: ['./work-examples-view.component.scss']
})
export class WorkExamplesViewComponent implements OnInit {

  workExamples: Array<object>;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.workExamples.getAll()
    .subscribe((workExamples) => {
      this.workExamples = workExamples;
    })
  }

}
