import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordMeaning } from './word-meaning.component';

describe('WordMeaningComponent', () => {
  let component: WordMeaning;
  let fixture: ComponentFixture<WordMeaning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordMeaning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordMeaning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
