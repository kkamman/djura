import { Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';

@Component({
  selector: 'demo-button-anchor',
  imports: [ButtonComponent],
  templateUrl: './button-anchor.demo.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class ButtonAnchorComponent {}
