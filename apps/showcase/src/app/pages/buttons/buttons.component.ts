import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { type Demo, DemoComponent } from '../../../ui/demo/demo.component';
import { ButtonComponent } from 'djura/button';
import { interval, map } from 'rxjs';

@Component({
  imports: [ButtonComponent, AsyncPipe, DemoComponent],
  templateUrl: './buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent {
  protected readonly progress$ = interval(500).pipe(map((x) => (x % 10) * 10));

  protected readonly demos: Demo[] = [
    {
      title: 'Color Demo',
      selector: 'app-button-color-demo',
      template: `
        <div class="flex gap-4">
          <button djrButton [label]="'Default'"></button>
          <button djrButton [color]="'primary'" [label]="'Primary'"></button>
          <button djrButton [color]="'secondary'" [label]="'Secondary'"></button>
        </div>
      `,
      imports: [ButtonComponent],
    },
    {
      title: 'Disabled Demo',
      selector: 'app-button-disabled-demo',
      template: `
        <div class="flex gap-4">
          <button djrButton [label]="'Default'" disabled></button>
          <button djrButton [color]="'primary'" [label]="'Primary'" disabled></button>
          <button djrButton [color]="'secondary'" [label]="'Secondary'" disabled></button>
        </div>
      `,
      imports: [ButtonComponent],
    },
  ];
}
