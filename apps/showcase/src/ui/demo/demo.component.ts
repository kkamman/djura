import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  resource,
  Type,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { codeToHtml } from 'shiki';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonComponent } from 'djura/button';

export interface Demo {
  title: string;
  selector: string;
  template: string;
  imports: Type<unknown>[];
}

@Component({
  selector: 'app-demo',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {
  private readonly domSanitizer = inject(DomSanitizer);

  public readonly demo = input.required<Demo>();

  protected readonly component = computed(() => {
    const { selector, template, imports } = this.demo();
    return Component({ selector, template, imports })(class {});
  });

  protected readonly highlightedTemplateResource = resource({
    request: () => ({ template: this.demo().template }),
    loader: ({ request }) =>
      codeToHtml(request.template, {
        lang: 'angular-html',
        themes: {
          light: 'github-light',
          dark: 'github-dark',
        },
      }),
  });

  protected readonly highlightedTemplate = computed(() =>
    this.domSanitizer.bypassSecurityTrustHtml(
      this.highlightedTemplateResource.value() ?? '',
    ),
  );

  protected isCodeVisible = false;

  protected toggleCode() {
    this.isCodeVisible = !this.isCodeVisible;
  }
}
