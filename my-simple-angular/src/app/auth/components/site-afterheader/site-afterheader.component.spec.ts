import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAfterheaderComponent } from './site-afterheader.component';

describe('SiteAfterheaderComponent', () => {
  let component: SiteAfterheaderComponent;
  let fixture: ComponentFixture<SiteAfterheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteAfterheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteAfterheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
