import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-button-demo-progress',
  imports: [ButtonComponent, AsyncPipe],
  templateUrl: './button-demo-progress.component.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class ButtonDemoProgressComponent {
  protected readonly progress$ = interval(500).pipe(map((x) => (x % 10) * 10));
}
