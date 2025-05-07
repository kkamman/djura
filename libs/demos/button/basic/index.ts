import { Demo } from '../../core/demo-block/demo-block.component';
import { ButtonBasicComponent } from './button-basic.demo';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './button-basic.demo.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './button-basic.demo.ts' with { loader: 'text' };

export default {
  component: ButtonBasicComponent,
  html: html as string,
  ts: ts as string,
} satisfies Demo;
