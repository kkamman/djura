import { Demo } from '../../core/demo-block/demo-block.component';
import { ButtonDisabledComponent } from './button-disabled.component';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './button-disabled.component.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './button-disabled.component.ts' with { loader: 'text' };

export default {
  component: ButtonDisabledComponent,
  html: html as string,
  ts: ts as string,
} satisfies Demo;
