import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable3Component } from './observable3.component';

describe('Observable3Component', () => {
  let component: Observable3Component;
  let fixture: ComponentFixture<Observable3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Observable3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Observable3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
