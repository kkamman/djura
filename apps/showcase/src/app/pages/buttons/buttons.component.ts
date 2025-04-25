import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';
import { interval, map } from 'rxjs';

@Component({
  imports: [ButtonComponent, AsyncPipe],
  templateUrl: './buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent {
  protected readonly progress$ = interval(500).pipe(map((x) => (x % 10) * 10));
}
