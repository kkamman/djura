import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  input,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { type ClassValue } from 'clsx';
import { buttonVariants, type ButtonVariantProps } from './button.variants';

@Component({
  selector: 'button[djrButton], a[djrButton]',
  imports: [],
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrl: './button.scss',
  host: {
    '[class]': 'computedClass()',
    '[attr.disabled]': 'disabled() || null',
    '[attr.aria-disabled]': 'disabled() || null',
    '[attr.tabindex]': 'disabled() ? -1 : tabIndex()',
    '[style.--djr-button-progress]': 'progressPercentage()',
  },
})
export class ButtonComponent {
  private readonly renderer = inject(Renderer2);
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    if (this.elementRef.nativeElement.tagName === 'A') {
      const unlisten = this.preventClickWhenDisabled();
      this.destroyRef.onDestroy(() => unlisten());
    }
  }

  readonly color = input<ButtonVariantProps['color']>();

  readonly variant = input<ButtonVariantProps['variant']>();

  readonly class = input<ClassValue>('');

  readonly tabIndex = input<number>();

  readonly disabled = input(false, { transform: booleanAttribute });

  readonly progress = input<number>();

  protected readonly progressPercentage = computed(() => {
    const progress = this.progress();
    return progress != null ? `${progress}%` : null;
  });

  protected readonly computedClass = computed(() =>
    buttonVariants({
      color: this.color(),
      variant: this.variant(),
      disabled: this.disabled(),
      progress: this.progressPercentage() != null,
      class: this.class(),
    }),
  );

  protected preventClickWhenDisabled() {
    return this.renderer.listen(
      this.elementRef.nativeElement,
      'click',
      (event: Event) => {
        if (this.disabled()) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      },
    );
  }
}
