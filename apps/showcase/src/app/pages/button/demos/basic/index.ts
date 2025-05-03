import { type Demo } from '../../../../../ui/demo/demo.component';
import { ButtonDemoBasicComponent } from './button-demo-basic.component';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './button-demo-basic.component.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './button-demo-basic.component.ts' with { loader: 'text' };

export default {
  component: ButtonDemoBasicComponent,
  html: html as string,
  ts: ts as string,
} satisfies Demo;
