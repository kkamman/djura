import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';
import { interval, map } from 'rxjs';

@Component({
  selector: 'demo-button-progress',
  imports: [ButtonComponent, AsyncPipe],
  templateUrl: './button-progress.component.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class ButtonProgressComponent {
  protected readonly progress$ = interval(500).pipe(map((x) => (x % 10) * 10));
}
