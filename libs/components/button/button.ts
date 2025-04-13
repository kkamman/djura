import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  DestroyRef,
  ElementRef,
  inject,
  input,
  Renderer2,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { type ClassValue } from 'clsx';
import { buttonVariants, type ButtonVariantProps } from './button.variants';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'button[djrButton], a[djrButton]',
  imports: [NgTemplateOutlet],
  template: `
    <ng-content />
    @if (iconTemplate()) {
      <span class="djr-button__icon">
        <ng-container *ngTemplateOutlet="iconTemplate() ?? null"></ng-container>
      </span>
    } @else if (icon()) {
      <span class="djr-button__icon {{ icon() }}"></span>
    }
    @if (labelTemplate()) {
      <span class="djr-button__label">
        <ng-container
          *ngTemplateOutlet="labelTemplate() ?? null"
        ></ng-container>
      </span>
    } @else if (label()) {
      <span class="djr-button__label">{{ label() }}</span>
    }
  `,
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

  readonly class = input<ClassValue>();

  readonly label = input<string>();

  readonly icon = input<string>();

  readonly iconPosition = input<ButtonVariantProps['iconPosition']>();

  readonly tabIndex = input<number>();

  readonly disabled = input(false, { transform: booleanAttribute });

  readonly progress = input<number>();

  protected readonly labelTemplate =
    contentChild<TemplateRef<unknown>>('label');

  protected readonly iconTemplate = contentChild<TemplateRef<unknown>>('icon');

  protected readonly progressPercentage = computed(() => {
    const progress = this.progress();
    return progress != null ? `${progress}%` : null;
  });

  private readonly hasLabel = computed(() =>
    Boolean(this.label() || this.labelTemplate()),
  );

  private readonly hasIcon = computed(() =>
    Boolean(this.icon() || this.iconTemplate()),
  );

  protected readonly computedClass = computed(() =>
    buttonVariants({
      color: this.color(),
      variant: this.variant(),
      disabled: this.disabled(),
      progress: this.progressPercentage() != null,
      class: this.class(),
      iconOnly: this.hasIcon() && !this.hasLabel(),
      iconPosition: this.iconPosition(),
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
