import { inject, provideAppInitializer } from '@angular/core';
import { CssCascadeLayerService } from './css-cascade-layer.service';

export type DjuraOptions = {
  cssCascadeLayerOrder?: string;
};

export const provideDjura = (options?: DjuraOptions) =>
  provideAppInitializer(() => {
    if (options?.cssCascadeLayerOrder) {
      const cssCascadeLayerService = inject(CssCascadeLayerService);
      cssCascadeLayerService.setLayerOrder(options.cssCascadeLayerOrder);
    }
  });
