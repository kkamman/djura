import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '@djura/demos';

@Component({
  imports: [CodeBlockComponent],
  templateUrl: './getting-started.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GettingStartedComponent {
  protected readonly demos = {
    importStylesheet: `@import "djura/theme.css";`,
    addProvider: `import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideDjura } from 'djura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideDjura(),
  ],
};
`,
  };
}
