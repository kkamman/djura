import { Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';

@Component({
  selector: 'app-button-demo-anchor',
  imports: [ButtonComponent],
  templateUrl: './button-demo-anchor.component.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class ButtonDemoAnchorComponent {}
