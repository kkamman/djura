import { Demo } from '../../core/demo-block/demo-block.component';
import { ButtonIconComponent } from './button-icon.demo';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './button-icon.demo.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './button-icon.demo.ts' with { loader: 'text' };

export default {
  component: ButtonIconComponent,
  html: html as string,
  ts: ts as string,
} satisfies Demo;
