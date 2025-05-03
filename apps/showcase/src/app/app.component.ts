import { Component, effect, inject, Renderer2, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { ButtonComponent } from 'djura/button';

@Component({
  imports: [ButtonComponent, RouterLink, RouterOutlet, RouterLinkActive],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly renderer = inject(Renderer2);

  private readonly mediaMatcher = inject(MediaMatcher);

  protected readonly isDarkMode = signal(
    this.mediaMatcher.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  constructor() {
    effect(() =>
      this.isDarkMode()
        ? this.renderer.addClass(document.body, 'djr-dark')
        : this.renderer.removeClass(document.body, 'djr-dark'),
    );
  }
}
