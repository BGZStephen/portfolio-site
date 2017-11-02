import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExampleViewComponent } from './work-example-view.component';

describe('WorkExampleViewComponent', () => {
  let component: WorkExampleViewComponent;
  let fixture: ComponentFixture<WorkExampleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExampleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExampleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
