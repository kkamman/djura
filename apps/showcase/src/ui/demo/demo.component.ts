import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  resource,
  signal,
  Type,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { codeToHtml } from 'shiki';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonComponent } from 'djura/button';

export interface Demo {
  component: Type<unknown>;
  html: string;
  ts: string;
}

const themes = {
  light: 'github-light',
  dark: 'github-dark',
} as const;

@Component({
  selector: 'app-demo',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {
  private readonly domSanitizer = inject(DomSanitizer);

  public readonly demo = input.required<Demo>();

  protected readonly highlightedHtmlResource = resource({
    request: () => ({ template: this.demo().html }),
    loader: ({ request }) =>
      codeToHtml(request.template, {
        lang: 'angular-html',
        themes,
      }),
  });

  protected readonly highlightedTsResource = resource({
    request: () => ({ template: this.demo().ts }),
    loader: ({ request }) =>
      codeToHtml(request.template, {
        lang: 'angular-ts',
        themes,
      }),
  });

  protected readonly highlightedHtml = computed(() =>
    this.domSanitizer.bypassSecurityTrustHtml(
      this.highlightedHtmlResource.value() ?? '',
    ),
  );

  protected readonly highlightedTs = computed(() =>
    this.domSanitizer.bypassSecurityTrustHtml(
      this.highlightedTsResource.value() ?? '',
    ),
  );

  protected readonly activeCodeView = signal<'html' | 'ts'>('html');

  protected readonly isCodeViewActive = signal(false);
}
