import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  buttonAnchorDemo,
  buttonAnchorDisabledDemo,
  buttonBasicDemo,
  buttonDisabledDemo,
  buttonIconDemo,
  buttonProgressDemo,
  type Demo,
  DemoBlockComponent,
} from '@djura/demos';

@Component({
  imports: [DemoBlockComponent],
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
