import { cva, type VariantProps } from 'class-variance-authority';

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
