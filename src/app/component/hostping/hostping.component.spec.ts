import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostpingComponent } from './hostping.component';

describe('HostpingComponent', () => {
  let component: HostpingComponent;
  let fixture: ComponentFixture<HostpingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostpingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
