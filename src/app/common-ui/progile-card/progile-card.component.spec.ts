import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgileCardComponent } from './progile-card.component';

describe('ProgileCardComponent', () => {
  let component: ProgileCardComponent;
  let fixture: ComponentFixture<ProgileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgileCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
