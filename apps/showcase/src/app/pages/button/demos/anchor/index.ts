import { type Demo } from '../../../../../ui/demo/demo.component';
import { ButtonDemoAnchorComponent } from './button-demo-anchor.component';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './button-demo-anchor.component.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './button-demo-anchor.component.ts' with { loader: 'text' };

export default {
  component: ButtonDemoAnchorComponent,
  html: html as string,
  ts: ts as string,
} satisfies Demo;
