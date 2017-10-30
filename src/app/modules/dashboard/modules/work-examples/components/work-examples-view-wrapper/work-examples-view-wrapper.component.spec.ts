import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExamplesViewWrapperComponent } from './work-examples-view-wrapper.component';

describe('WorkExamplesViewWrapperComponent', () => {
  let component: WorkExamplesViewWrapperComponent;
  let fixture: ComponentFixture<WorkExamplesViewWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExamplesViewWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExamplesViewWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
