import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modern-button',
  imports: [],
  templateUrl: './modern-button.html',
  styleUrl: './modern-button.scss',
})
export class ModernButton {
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled: boolean = false;
}
