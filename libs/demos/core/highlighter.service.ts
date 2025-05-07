import { createHighlighterCore, type HighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';
import { Injectable } from '@angular/core';

export type HighlighterLanguage = 'html' | 'ts' | 'css';

@Injectable({
  providedIn: 'root',
})
export class HighlighterService {
  private highlighter?: HighlighterCore;

  public async initialize(): Promise<void> {
    this.highlighter = await createHighlighterCore({
      themes: [
        import('@shikijs/themes/github-dark'),
        import('@shikijs/themes/github-light'),
      ],
      langs: [
        import('@shikijs/langs/angular-html'),
        import('@shikijs/langs/angular-ts'),
        import('@shikijs/langs/css'),
      ],
      engine: createOnigurumaEngine(import('shiki/wasm')),
    });
  }

  public highlight(language: HighlighterLanguage, code: string): string {
    const highlighter = this.getHighlighter();
    return highlighter.codeToHtml(code, {
      lang: language === 'css' ? language : `angular-${language}`,
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    });
  }

  private getHighlighter(): HighlighterCore {
    if (!this.highlighter) {
      throw new Error('Highlighter not initialized');
    }
    return this.highlighter;
  }
}
