import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
	selector: 'app-work-examples-view',
	template: require('./work-examples-view.component.html'),
})
export class WorkExamplesViewComponent implements OnInit {
	workExamples: Array<object>;

	constructor(private apiService: ApiService) {}

	ngOnInit() {
		this.apiService.workExamples.getAll().subscribe(workExamples => {
			this.workExamples = workExamples;
		});
	}
}
