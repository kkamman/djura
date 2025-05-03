import { Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';

@Component({
  selector: 'app-button-demo-disabled',
  imports: [ButtonComponent],
  templateUrl: './button-demo-disabled.component.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class ButtonDemoDisabledComponent {}
