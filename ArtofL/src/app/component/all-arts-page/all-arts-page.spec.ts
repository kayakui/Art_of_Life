import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArtsPage } from './all-arts-page';

describe('AllArtsPage', () => {
  let component: AllArtsPage;
  let fixture: ComponentFixture<AllArtsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllArtsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllArtsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
