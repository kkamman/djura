import { inject, Pipe, PipeTransform } from '@angular/core';
import { HighlighterLanguage, HighlighterService } from './highlighter.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  private readonly highlighter = inject(HighlighterService);

  private readonly domSanitizer = inject(DomSanitizer);

  public transform(code: string, language: HighlighterLanguage): SafeHtml {
    const highlightHtml = this.highlighter.highlight(language, code);
    return this.domSanitizer.bypassSecurityTrustHtml(highlightHtml);
  }
}
