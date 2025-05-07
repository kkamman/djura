import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '@djura/demos';

@Component({
  imports: [CodeBlockComponent],
  templateUrl: './getting-started.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GettingStartedComponent {
  protected readonly importStylesheetDemo = `@import "djura/theme.css";`;
}
