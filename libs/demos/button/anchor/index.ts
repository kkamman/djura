import { Demo } from '../../core/demo-block/demo-block.component';
import { ButtonAnchorComponent } from './button-anchor.demo';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './button-anchor.demo.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './button-anchor.demo.ts' with { loader: 'text' };

export default {
  component: ButtonAnchorComponent,
  html: html as string,
  ts: ts as string,
} satisfies Demo;
