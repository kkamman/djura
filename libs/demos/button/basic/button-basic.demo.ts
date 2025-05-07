import { Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';

@Component({
  selector: 'demo-button-basic',
  imports: [ButtonComponent],
  templateUrl: './button-basic.demo.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class ButtonBasicComponent {}
