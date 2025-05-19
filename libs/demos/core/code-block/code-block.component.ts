import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HighlightPipe } from '../highlight.pipe';
import { HighlighterLanguage } from '../highlighter.service';

@Component({
  selector: 'demo-code-block',
  imports: [CommonModule, HighlightPipe],
  templateUrl: './code-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeBlockComponent {
  public readonly code = input.required<string>();
  public readonly showLanguage = input(true);

  public readonly language = input.required<HighlighterLanguage>();
}
