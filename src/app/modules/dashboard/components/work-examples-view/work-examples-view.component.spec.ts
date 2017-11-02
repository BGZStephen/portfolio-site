import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExamplesViewComponent } from './work-examples-view.component';

describe('WorkExamplesViewComponent', () => {
  let component: WorkExamplesViewComponent;
  let fixture: ComponentFixture<WorkExamplesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExamplesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExamplesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
