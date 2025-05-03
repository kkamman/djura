import { ChangeDetectionStrategy, Component } from '@angular/core';
import { type Demo, DemoComponent } from '../../../ui/demo/demo.component';
import buttonBasicDemo from './demos/basic';
import buttonIconDemo from './demos/icon';
import buttonDisabledDemo from './demos/disabled';
import buttonProgressDemo from './demos/progress';
import buttonAnchorDemo from './demos/anchor';
import buttonAnchorDisabledDemo from './demos/anchor-disabled';

@Component({
  imports: [DemoComponent],
  templateUrl: './buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent {
  protected readonly demos: Demo[] = [
    buttonBasicDemo,
    buttonIconDemo,
    buttonDisabledDemo,
    buttonProgressDemo,
    buttonAnchorDemo,
    buttonAnchorDisabledDemo,
  ];
}
