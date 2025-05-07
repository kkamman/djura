import { Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';

@Component({
  selector: 'demo-button-disabled',
  imports: [ButtonComponent],
  templateUrl: './button-disabled.component.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class ButtonDisabledComponent {}
