import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'getting-started',
    loadComponent: () =>
      import('./pages/getting-started/getting-started.component').then(
        (m) => m.GettingStartedComponent,
      ),
  },
  {
    path: 'buttons',
    loadComponent: () =>
      import('./pages/button/buttons.component').then(
        (m) => m.ButtonsComponent,
      ),
  },
  {
    path: '**',
    redirectTo: 'getting-started',
  },
];
