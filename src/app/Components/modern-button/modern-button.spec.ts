import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernButton } from './modern-button';

describe('ModernButton', () => {
  let component: ModernButton;
  let fixture: ComponentFixture<ModernButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernButton],
    }).compileComponents();

    fixture = TestBed.createComponent(ModernButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
