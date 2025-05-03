import { type Demo } from '../../../../../ui/demo/demo.component';
import { ButtonDemoDisabledComponent } from './button-demo-disabled.component';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './button-demo-disabled.component.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './button-demo-disabled.component.ts' with { loader: 'text' };

export default {
  component: ButtonDemoDisabledComponent,
  html: html as string,
  ts: ts as string,
} satisfies Demo;
