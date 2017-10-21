import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteWorkExamplesComponent } from './site-work-examples.component';

describe('SiteWorkExamplesComponent', () => {
  let component: SiteWorkExamplesComponent;
  let fixture: ComponentFixture<SiteWorkExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteWorkExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteWorkExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
