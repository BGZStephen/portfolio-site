import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteViewWrapperComponent } from './site-view-wrapper.component';

describe('SiteViewWrapperComponent', () => {
  let component: SiteViewWrapperComponent;
  let fixture: ComponentFixture<SiteViewWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteViewWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteViewWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
