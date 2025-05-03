import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'buttons',
    loadComponent: () =>
      import('./pages/button/buttons.component').then(
        (m) => m.ButtonsComponent,
      ),
  },
];
