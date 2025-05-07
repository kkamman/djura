import { Demo } from '../../core/demo-block/demo-block.component';
import { ButtonAnchorComponent } from './button-anchor.component';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './button-anchor.component.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './button-anchor.component.ts' with { loader: 'text' };

export default {
  component: ButtonAnchorComponent,
  html: html as string,
  ts: ts as string,
} satisfies Demo;
