import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CssCascadeLayerService {
  private readonly document = inject(DOCUMENT);

  private style?: HTMLStyleElement;

  public setLayerOrder(layerOrder: string) {
    const style = this.getStyleElement();
    const text = this.document.createTextNode(`@layer ${layerOrder};`);
    style.replaceChildren(text);
  }

  private getStyleElement(): HTMLStyleElement {
    return this.style && this.document.contains(this.style)
      ? this.style
      : this.insertStyleElement();
  }

  private insertStyleElement(): HTMLStyleElement {
    const head = this.document.head;
    const style = this.document.createElement('style');
    head.insertBefore(style, head.firstChild);
    return style;
  }
}
