import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@services/api.service';
import { WorkExampleContentEditor } from '@services/content-editor.service';

@Component({
	selector: 'app-work-example-view',
	template: require('./work-example-view.component.html'),
})
export class WorkExampleViewComponent implements OnInit {
	workExample: object;

	constructor(
		private activatedRoute: ActivatedRoute,
		private apiService: ApiService,
	) {}

	ngOnInit() {
		this.activatedRoute.params.map(params => params.id).subscribe(id => {
			this.apiService.workExamples.get(id).subscribe(workExample => {
				this.workExample = new WorkExampleContentEditor(workExample);
				console.log(this.workExample);
			});
		});
	}
}
