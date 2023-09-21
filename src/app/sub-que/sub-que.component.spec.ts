import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubQueComponent } from './sub-que.component';

describe('SubQueComponent', () => {
  let component: SubQueComponent;
  let fixture: ComponentFixture<SubQueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubQueComponent]
    });
    fixture = TestBed.createComponent(SubQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
