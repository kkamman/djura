import { Component, inject, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from 'djura/button';
import { CommonModule } from '@angular/common';
import { interval, map } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  imports: [CommonModule, RouterModule, ButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'showcase';

  private readonly renderer = inject(Renderer2);
  private readonly mediaMatcher = inject(MediaMatcher);

  protected readonly progress$ = interval(500).pipe(map((x) => (x % 10) * 10));

  constructor() {
    if (this.mediaMatcher.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.renderer.addClass(document.body, 'djr-dark');
    }
  }
}
