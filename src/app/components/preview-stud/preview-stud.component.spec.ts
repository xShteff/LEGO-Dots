import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewStudComponent } from './preview-stud.component';

describe('PreviewStudComponent', () => {
  let component: PreviewStudComponent;
  let fixture: ComponentFixture<PreviewStudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewStudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
