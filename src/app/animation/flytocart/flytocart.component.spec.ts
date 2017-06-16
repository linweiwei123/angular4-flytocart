import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlytocartComponent } from './flytocart.component';

describe('FlytocartComponent', () => {
  let component: FlytocartComponent;
  let fixture: ComponentFixture<FlytocartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlytocartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlytocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
