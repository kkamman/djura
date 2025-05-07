import { Demo } from '../../core/demo-block/demo-block.component';
import { ButtonProgressComponent } from './button-progress.component';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './button-progress.component.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './button-progress.component.ts' with { loader: 'text' };

export default {
  component: ButtonProgressComponent,
  html: html as string,
  ts: ts as string,
} satisfies Demo;
