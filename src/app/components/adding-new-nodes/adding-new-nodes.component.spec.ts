import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingNewNodesComponent } from './adding-new-nodes.component';

describe('AddingNewNodesComponent', () => {
  let component: AddingNewNodesComponent;
  let fixture: ComponentFixture<AddingNewNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingNewNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingNewNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
