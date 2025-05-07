import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  Type,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'djura/button';
import { HighlighterLanguage } from '../highlighter.service';
import { CodeBlockComponent } from '../code-block/code-block.component';

export interface Demo {
  component: Type<unknown>;
  html: string;
  ts: string;
}

@Component({
  selector: 'demo-block',
  imports: [CommonModule, ButtonComponent, CodeBlockComponent],
  templateUrl: './demo-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoBlockComponent {
  public readonly demo = input.required<Demo>();

  protected readonly activeCodeView = signal<HighlighterLanguage>('html');

  protected readonly isCodeViewActive = signal(false);
}
