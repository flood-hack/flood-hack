import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditToolComponent } from './add-edit-tool.component';

describe('AddToolComponent', () => {
  let component: AddEditToolComponent;
  let fixture: ComponentFixture<AddEditToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditToolComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
