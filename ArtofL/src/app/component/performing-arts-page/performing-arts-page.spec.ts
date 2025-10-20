import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformingArtsPage } from './performing-arts-page';

describe('PerformingArtsPage', () => {
  let component: PerformingArtsPage;
  let fixture: ComponentFixture<PerformingArtsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformingArtsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformingArtsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
