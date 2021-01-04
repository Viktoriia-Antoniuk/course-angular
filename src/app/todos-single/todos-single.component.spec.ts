import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosSingleComponent } from './todos-single.component';

describe('TodosSingleComponent', () => {
  let component: TodosSingleComponent;
  let fixture: ComponentFixture<TodosSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
