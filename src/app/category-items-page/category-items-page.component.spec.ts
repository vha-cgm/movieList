import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemsPageComponent } from './category-items-page.component';

describe('CategoryItemsPageComponent', () => {
  let component: CategoryItemsPageComponent;
  let fixture: ComponentFixture<CategoryItemsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryItemsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
