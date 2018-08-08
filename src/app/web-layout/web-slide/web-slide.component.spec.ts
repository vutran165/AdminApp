import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSlideComponent } from './web-slide.component';

describe('WebSlideComponent', () => {
  let component: WebSlideComponent;
  let fixture: ComponentFixture<WebSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
