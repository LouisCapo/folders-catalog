import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldersCatalogComponent } from './folders-catalog.component';

describe('FoldersCatalogComponent', () => {
  let component: FoldersCatalogComponent;
  let fixture: ComponentFixture<FoldersCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldersCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldersCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
