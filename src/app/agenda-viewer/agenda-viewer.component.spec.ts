import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaViewerComponent } from './agenda-viewer.component';

describe('AgendaViewerComponent', () => {
  let component: AgendaViewerComponent;
  let fixture: ComponentFixture<AgendaViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
