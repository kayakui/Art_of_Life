import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryArtsPage } from './literary-arts-page';

describe('LiteraryArtsPage', () => {
  let component: LiteraryArtsPage;
  let fixture: ComponentFixture<LiteraryArtsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiteraryArtsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteraryArtsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
