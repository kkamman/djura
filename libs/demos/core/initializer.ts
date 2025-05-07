import { inject, provideAppInitializer } from '@angular/core';
import { HighlighterService } from './highlighter.service';

export const provideDemos = () =>
  provideAppInitializer(() => inject(HighlighterService).initialize());
