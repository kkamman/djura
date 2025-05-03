import { Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';

@Component({
  selector: 'app-button-demo-basic',
  imports: [ButtonComponent],
  templateUrl: './button-demo-basic.component.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class ButtonDemoBasicComponent {}
