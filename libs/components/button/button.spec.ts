import { describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { type ButtonVariantProps } from './button.variants';

const testElements = [
  { elementName: 'button', displayName: 'button' },
  { elementName: 'a', displayName: 'anchor' },
] as const;

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testComponent: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ButtonComponent] });
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.debugElement.componentInstance;
  });

  testElements.forEach((testElement) => {
    describe(`as ${testElement.displayName}`, () => {
      const colorClassTestCases = [
        { colorInput: 'surface', expectedClass: 'djr-button--surface' },
        { colorInput: 'primary', expectedClass: 'djr-button--primary' },
        { colorInput: 'secondary', expectedClass: 'djr-button--secondary' },
        { colorInput: undefined, expectedClass: 'djr-button--surface' },
        { colorInput: null, expectedClass: 'djr-button--surface' },
      ] as const;

      colorClassTestCases.forEach(({ colorInput, expectedClass }) => {
        it(`should apply class ${expectedClass} when color is ${colorInput}`, () => {
          const buttonDe = fixture.debugElement.query(
            By.css(testElement.elementName)
          );

          testComponent.color = colorInput;
          fixture.changeDetectorRef.detectChanges();
          fixture.detectChanges();

          expect(buttonDe.nativeElement.classList.contains(expectedClass)).toBe(
            true
          );
        });
      });

      const variantClassTestCases = [
        { variantInput: 'basic', expectedClass: 'djr-button--basic' },
        { variantInput: 'outline', expectedClass: 'djr-button--outline' },
        { variantInput: 'text', expectedClass: 'djr-button--text' },
        { variantInput: 'link', expectedClass: 'djr-button--link' },
        { variantInput: undefined, expectedClass: 'djr-button--basic' },
        { variantInput: null, expectedClass: 'djr-button--basic' },
      ] as const;

      variantClassTestCases.forEach(({ variantInput, expectedClass }) => {
        it(`should apply class ${expectedClass} when variant is ${variantInput}`, () => {
          const buttonDe = fixture.debugElement.query(
            By.css(testElement.elementName)
          );

          testComponent.variant = variantInput;
          fixture.changeDetectorRef.detectChanges();
          fixture.detectChanges();

          expect(buttonDe.nativeElement.classList.contains(expectedClass)).toBe(
            true
          );
        });
      });

      const disabledClassTestCases = [
        { disabledInput: true, shouldHaveClass: true },
        { disabledInput: false, shouldHaveClass: false },
        { disabledInput: undefined, shouldHaveClass: false },
        { disabledInput: null, shouldHaveClass: false },
      ] as const;

      const disabledClassName = 'djr-button--disabled';

      disabledClassTestCases.forEach(({ disabledInput, shouldHaveClass }) => {
        it(`should ${
          shouldHaveClass ? '' : 'not '
        }apply class ${disabledClassName} when disabled is ${disabledInput}`, () => {
          const buttonDe = fixture.debugElement.query(
            By.css(testElement.elementName)
          );

          testComponent.disabled = disabledInput;
          fixture.changeDetectorRef.detectChanges();
          fixture.detectChanges();

          expect(
            buttonDe.nativeElement.classList.contains(disabledClassName)
          ).toBe(shouldHaveClass);
        });
      });

      const progressClassTestCases = [
        { progressInput: -100, shouldHaveClass: true },
        { progressInput: -1, shouldHaveClass: true },
        { progressInput: 0, shouldHaveClass: true },
        { progressInput: 1, shouldHaveClass: true },
        { progressInput: 50, shouldHaveClass: true },
        { progressInput: 100, shouldHaveClass: true },
        { progressInput: 200, shouldHaveClass: true },
        { progressInput: null, shouldHaveClass: false },
        { progressInput: undefined, shouldHaveClass: false },
      ] as const;

      const progressClassName = 'djr-button--progress';

      progressClassTestCases.forEach(({ progressInput, shouldHaveClass }) => {
        it(`should ${
          shouldHaveClass ? '' : 'not '
        }apply class ${progressClassName} when progress is ${progressInput}`, () => {
          const buttonDe = fixture.debugElement.query(
            By.css(testElement.elementName)
          );

          testComponent.progress = progressInput;
          fixture.changeDetectorRef.detectChanges();
          fixture.detectChanges();

          expect(
            buttonDe.nativeElement.classList.contains(progressClassName)
          ).toBe(shouldHaveClass);
        });
      });

      const iconChildElementTestCases = [
        { iconInput: 'icon', shouldHaveChildElement: true },
        { iconInput: null, shouldHaveChildElement: false },
        {
          iconInput: undefined,
          shouldHaveChildElement: false,
        },
        { iconInput: '', shouldHaveChildElement: false },
      ] as const;

      const iconChildElementClassName = 'djr-button__icon';

      iconChildElementTestCases.forEach(
        ({ iconInput, shouldHaveChildElement }) => {
          it(`should ${
            shouldHaveChildElement ? '' : 'not '
          }have icon child element when icon is ${
            typeof iconInput === 'string' ? `'${iconInput}'` : iconInput
          }`, () => {
            const buttonDe = fixture.debugElement.query(
              By.css(testElement.elementName)
            );

            testComponent.icon = iconInput;
            fixture.changeDetectorRef.detectChanges();
            fixture.detectChanges();

            const iconChildDe = buttonDe.query(
              By.css(`.${iconChildElementClassName}`)
            );
            if (shouldHaveChildElement) {
              expect(iconChildDe).toBeTruthy();
              expect(
                iconChildDe.nativeElement.classList.contains(iconInput)
              ).toBe(true);
            } else {
              expect(iconChildDe).toBeFalsy();
            }
          });
        }
      );

      const labelChildElementTestCases = [
        { labelInput: 'label', shouldHaveChildElement: true },
        { labelInput: null, shouldHaveChildElement: false },
        {
          labelInput: undefined,
          shouldHaveChildElement: false,
        },
        { labelInput: '', shouldHaveChildElement: false },
      ] as const;

      const labelChildElementClassName = 'djr-button__label';

      labelChildElementTestCases.forEach(
        ({ labelInput, shouldHaveChildElement }) => {
          it(`should ${
            shouldHaveChildElement ? '' : 'not '
          }have label child element when label is ${
            typeof labelInput === 'string' ? `'${labelInput}'` : labelInput
          }`, () => {
            const buttonDe = fixture.debugElement.query(
              By.css(testElement.elementName)
            );

            testComponent.label = labelInput;
            fixture.changeDetectorRef.detectChanges();
            fixture.detectChanges();

            const labelChildDe = buttonDe.query(
              By.css(`.${labelChildElementClassName}`)
            );
            if (shouldHaveChildElement) {
              expect(labelChildDe).toBeTruthy();
              expect(labelChildDe.nativeElement.textContent).toBe(labelInput);
            } else {
              expect(labelChildDe).toBeFalsy();
            }
          });
        }
      );
    });
  });
});

@Component({
  template: testElements
    .map(
      ({ elementName }) => `
        <${elementName}
          djrButton
          [label]="label"
          [color]="color"
          [variant]="variant"
          [disabled]="disabled"
          [progress]="progress"
          [icon]="icon"
        >
          @if(hasIconTemplate) {
            <ng-template #icon />
          }
          @if(hasLabelTemplate) {
            <ng-template #label />
          }
        </${elementName}>`
    )
    .join(),
  imports: [ButtonComponent],
})
class TestComponent {
  color: ButtonVariantProps['color'];
  variant: ButtonVariantProps['variant'];
  disabled: boolean | null | undefined;
  progress: number | null | undefined;
  icon: string | null | undefined;
  hasIconTemplate = false;
  label: string | null | undefined;
  hasLabelTemplate = false;
}
