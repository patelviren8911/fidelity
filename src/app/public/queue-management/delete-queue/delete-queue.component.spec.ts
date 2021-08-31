import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQueueComponent } from './delete-queue.component';

describe('DeleteQueueComponent', () => {
  let component: DeleteQueueComponent;
  let fixture: ComponentFixture<DeleteQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
