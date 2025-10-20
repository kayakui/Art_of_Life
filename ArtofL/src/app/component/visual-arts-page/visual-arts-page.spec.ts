import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualArtsPage } from './visual-arts-page';

describe('VisualArtsPage', () => {
  let component: VisualArtsPage;
  let fixture: ComponentFixture<VisualArtsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualArtsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualArtsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
