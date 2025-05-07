import { Demo } from '../../core/demo-block/demo-block.component';
import { ButtonAnchorDisabledComponent } from './button-anchor-disabled.demo';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './button-anchor-disabled.demo.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './button-anchor-disabled.demo' with { loader: 'text' };

export default {
  component: ButtonAnchorDisabledComponent,
  html: html as string,
  ts: ts as string,
} satisfies Demo;
