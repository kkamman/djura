import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva('djr-button', {
  variants: {
    color: {
      surface: 'djr-button--surface',
      primary: 'djr-button--primary',
      secondary: 'djr-button--secondary',
    },
    variant: {
      basic: 'djr-button--basic',
      outline: 'djr-button--outline',
      text: 'djr-button--text',
      link: 'djr-button--link',
    },
    progress: {
      true: 'djr-button--progress',
    },
    disabled: {
      true: 'djr-button--disabled',
    },
  },
  defaultVariants: {
    color: 'surface',
    variant: 'basic',
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
