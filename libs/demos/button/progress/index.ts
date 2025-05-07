import { Demo } from '../../core/demo-block/demo-block.component';
import { ButtonProgressComponent } from './button-progress.demo';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './button-progress.demo.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './button-progress.demo.ts' with { loader: 'text' };

export default {
  component: ButtonProgressComponent,
  html: html as string,
  ts: ts as string,
} satisfies Demo;
