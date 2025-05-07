import { Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';

@Component({
  selector: 'demo-button-basic',
  imports: [ButtonComponent],
  templateUrl: './button-icon.component.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class ButtonIconComponent {}
