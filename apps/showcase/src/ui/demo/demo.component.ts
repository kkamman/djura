import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
  Type,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonComponent } from 'djura/button';
import { HighlighterService } from './highlighter.service';

export interface Demo {
  component: Type<unknown>;
  html: string;
  ts: string;
}

@Component({
  selector: 'app-demo',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {
  private readonly domSanitizer = inject(DomSanitizer);

  private readonly highlighter = inject(HighlighterService);

  public readonly demo = input.required<Demo>();

  protected readonly highlightedHtml = computed(() =>
    this.domSanitizer.bypassSecurityTrustHtml(
      this.highlighter.highlight('html', this.demo().html),
    ),
  );

  protected readonly highlightedTs = computed(() =>
    this.domSanitizer.bypassSecurityTrustHtml(
      this.highlighter.highlight('ts', this.demo().ts),
    ),
  );

  protected readonly activeCodeView = signal<'html' | 'ts'>('html');

  protected readonly isCodeViewActive = signal(false);
}
