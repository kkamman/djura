import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cva, type VariantProps } from 'class-variance-authority';
import { type ClassValue } from 'clsx';

export const buttonVariants = cva('djr-button', {
  variants: {
    color: {
      default: 'djr-button--default',
      primary: 'djr-button--primary',
      secondary: 'djr-button--secondary',
    },
    variant: {
      outline: 'djr-button--outline',
      text: 'djr-button--text',
    },
    progress: {
      true: 'djr-button--progress',
    },
    disabled: {
      true: 'djr-button--disabled',
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

@Component({
  selector: 'button[djrButton], a[djrButton]',
  imports: [],
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrl: './button.scss',
  host: {
    '[class]': 'computedClass()',
    '[style.--djr-button-progress]': 'progressPercentage()',
  },
})
export class ButtonComponent {
  readonly color = input<ButtonVariantProps['color']>();

  readonly variant = input<ButtonVariantProps['variant']>();

  readonly class = input<ClassValue>('');

  readonly disabled = input(false, { transform: booleanAttribute });

  readonly progress = input<number>();

  protected readonly progressPercentage = computed(
    () => `${this.progress() ?? 100}%`
  );

  protected readonly computedClass = computed(() =>
    buttonVariants({
      color: this.color(),
      variant: this.variant(),
      disabled: this.disabled(),
      progress: this.progress() != null,
      class: this.class(),
    })
  );
}
