import { Demo } from '../../core/demo-block/demo-block.component';
import { ButtonIconComponent } from './button-icon.component';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './button-icon.component.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './button-icon.component.ts' with { loader: 'text' };

export default {
  component: ButtonIconComponent,
  html: html as string,
  ts: ts as string,
} satisfies Demo;
