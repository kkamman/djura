import { type Demo } from '../../../../../ui/demo/demo.component';
import { ButtonDemoIconComponent } from './button-demo-icon.component';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './button-demo-icon.component.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './button-demo-icon.component.ts' with { loader: 'text' };

export default {
  component: ButtonDemoIconComponent,
  html: html as string,
  ts: ts as string,
} satisfies Demo;
