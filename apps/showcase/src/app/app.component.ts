import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from 'djura/button';
import { CommonModule } from '@angular/common';
import { interval, map } from 'rxjs';

@Component({
  imports: [CommonModule, RouterModule, ButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'showcase';

  protected readonly progress$ = interval(500).pipe(map((x) => (x % 10) * 10));
}
