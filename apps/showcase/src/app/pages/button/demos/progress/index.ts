import { type Demo } from '../../../../../ui/demo/demo.component';
import { ButtonDemoProgressComponent } from './button-demo-progress.component';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './button-demo-progress.component.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './button-demo-progress.component.ts' with { loader: 'text' };

export default {
  component: ButtonDemoProgressComponent,
  html: html as string,
  ts: ts as string,
} satisfies Demo;
