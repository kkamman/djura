import { Component, inject, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { ButtonComponent } from 'djura/button';

@Component({
  imports: [ButtonComponent, RouterLink, RouterOutlet, RouterLinkActive],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly renderer = inject(Renderer2);
  private readonly mediaMatcher = inject(MediaMatcher);

  constructor() {
    if (this.mediaMatcher.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.renderer.addClass(document.body, 'djr-dark');
    }
  }
}
