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
      it('should apply class djr-button', () => {
        const buttonDe = fixture.debugElement.query(
          By.css(testElement.elementName),
        );

        fixture.detectChanges();

        expect(buttonDe.nativeElement.classList).toContain('djr-button');
      });

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
            By.css(testElement.elementName),
          );

          testComponent.color = colorInput;
          fixture.changeDetectorRef.detectChanges();
          fixture.detectChanges();

          expect(buttonDe.nativeElement.classList).toContain(expectedClass);
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
            By.css(testElement.elementName),
          );

          testComponent.variant = variantInput;
          fixture.changeDetectorRef.detectChanges();
          fixture.detectChanges();

          expect(buttonDe.nativeElement.classList).toContain(expectedClass);
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
            By.css(testElement.elementName),
          );

          testComponent.disabled = disabledInput;
          fixture.changeDetectorRef.detectChanges();
          fixture.detectChanges();

          if (shouldHaveClass) {
            expect(buttonDe.nativeElement.classList).toContain(
              disabledClassName,
            );
          } else {
            expect(buttonDe.nativeElement.classList).not.toContain(
              disabledClassName,
            );
          }
        });
      });

      const iconOnlyTestCases = [
        {
          iconInput: 'icon',
          hasIconTemplate: false,
          labelInput: null,
          hasLabelTemplate: false,
          shouldHaveClass: true,
        },
        {
          iconInput: 'icon',
          hasIconTemplate: true,
          labelInput: null,
          hasLabelTemplate: false,
          shouldHaveClass: true,
        },
        {
          iconInput: null,
          hasIconTemplate: true,
          labelInput: null,
          hasLabelTemplate: false,
          shouldHaveClass: true,
        },
        {
          iconInput: 'icon',
          hasIconTemplate: false,
          labelInput: 'label',
          hasLabelTemplate: false,
          shouldHaveClass: false,
        },
        {
          iconInput: 'icon',
          hasIconTemplate: false,
          labelInput: null,
          hasLabelTemplate: true,
          shouldHaveClass: false,
        },
        {
          iconInput: null,
          hasIconTemplate: true,
          labelInput: 'label',
          hasLabelTemplate: false,
          shouldHaveClass: false,
        },
        {
          iconInput: null,
          hasIconTemplate: true,
          labelInput: null,
          hasLabelTemplate: true,
          shouldHaveClass: false,
        },
      ] as const;

      const iconOnlyClassName = 'djr-button--icon-only';

      iconOnlyTestCases.forEach(
        ({
          iconInput,
          hasIconTemplate,
          labelInput,
          hasLabelTemplate,
          shouldHaveClass,
        }) => {
          it(
            `should ${shouldHaveClass ? '' : 'not '}apply class ${iconOnlyClassName} when ` +
              `icon is ${typeof iconInput === 'string' ? `'${iconInput}'` : iconInput}, ` +
              `an icon template has ${hasIconTemplate ? 'not ' : ''}been provided, ` +
              `label is ${typeof labelInput === 'string' ? `'${labelInput}'` : labelInput}, ` +
              `and a label template has ${hasLabelTemplate ? 'not ' : ''}been provided`,
            () => {
              const buttonDe = fixture.debugElement.query(
                By.css(testElement.elementName),
              );

              testComponent.icon = iconInput;
              testComponent.hasIconTemplate = hasIconTemplate;
              testComponent.label = labelInput;
              testComponent.hasLabelTemplate = hasLabelTemplate;
              fixture.changeDetectorRef.detectChanges();
              fixture.detectChanges();

              if (shouldHaveClass) {
                expect(buttonDe.nativeElement.classList).toContain(
                  iconOnlyClassName,
                );
              } else {
                expect(buttonDe.nativeElement.classList).not.toContain(
                  iconOnlyClassName,
                );
              }
            },
          );
        },
      );

      const iconPositionClassTestCases = [
        { iconPositionInput: 'left', expectedClass: 'djr-button--icon-left' },
        { iconPositionInput: 'right', expectedClass: 'djr-button--icon-right' },
        { iconPositionInput: 'top', expectedClass: 'djr-button--icon-top' },
        {
          iconPositionInput: 'bottom',
          expectedClass: 'djr-button--icon-bottom',
        },
        {
          iconPositionInput: undefined,
          expectedClass: 'djr-button--icon-left',
        },
        { iconPositionInput: null, expectedClass: 'djr-button--icon-left' },
      ] as const;

      iconPositionClassTestCases.forEach(
        ({ iconPositionInput, expectedClass }) => {
          it(
            `should apply class ${expectedClass} when icon position is ${iconPositionInput} ` +
              `and both an icon and a label have been provided`,
            () => {
              const buttonDe = fixture.debugElement.query(
                By.css(testElement.elementName),
              );

              testComponent.icon = 'icon';
              testComponent.label = 'label';
              testComponent.iconPosition = iconPositionInput;
              fixture.changeDetectorRef.detectChanges();
              fixture.detectChanges();

              expect(buttonDe.nativeElement.classList).toContain(expectedClass);
            },
          );
        },
      );

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
            By.css(testElement.elementName),
          );

          testComponent.progress = progressInput;
          fixture.changeDetectorRef.detectChanges();
          fixture.detectChanges();

          if (shouldHaveClass) {
            expect(buttonDe.nativeElement.classList).toContain(
              progressClassName,
            );
          } else {
            expect(buttonDe.nativeElement.classList).not.toContain(
              progressClassName,
            );
          }
        });
      });

      const progressCssVariableTestCases = [
        { progressInput: -100, shouldSetCssVariable: true },
        { progressInput: -1, shouldSetCssVariable: true },
        { progressInput: 0, shouldSetCssVariable: true },
        { progressInput: 1, shouldSetCssVariable: true },
        { progressInput: 50, shouldSetCssVariable: true },
        { progressInput: 100, shouldSetCssVariable: true },
        { progressInput: 200, shouldSetCssVariable: true },
        { progressInput: null, shouldSetCssVariable: false },
        { progressInput: undefined, shouldSetCssVariable: false },
      ] as const;

      const progressCssVariableName = '--djr-button-progress';

      progressCssVariableTestCases.forEach(
        ({ progressInput, shouldSetCssVariable }) => {
          it(`should ${
            shouldSetCssVariable ? '' : 'not '
          }set css variable ${progressCssVariableName} when progress is ${progressInput}`, () => {
            const buttonDe = fixture.debugElement.query(
              By.css(testElement.elementName),
            );

            testComponent.progress = progressInput;
            fixture.changeDetectorRef.detectChanges();
            fixture.detectChanges();

            const styles = getComputedStyle(buttonDe.nativeElement);
            expect(styles.getPropertyValue(progressCssVariableName)).toBe(
              shouldSetCssVariable ? `${progressInput}%` : '',
            );
          });
        },
      );

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
              By.css(testElement.elementName),
            );

            testComponent.icon = iconInput;
            fixture.changeDetectorRef.detectChanges();
            fixture.detectChanges();

            const iconChildDe = buttonDe.query(
              By.css(`.${iconChildElementClassName}`),
            );
            if (shouldHaveChildElement) {
              expect(iconChildDe).toBeTruthy();
              expect(iconChildDe.nativeElement.classList).toContain(iconInput);
            } else {
              expect(iconChildDe).toBeFalsy();
            }
          });
        },
      );

      it('should have icon child element when icon template has been provided', () => {
        const buttonDe = fixture.debugElement.query(
          By.css(testElement.elementName),
        );

        testComponent.hasIconTemplate = true;
        fixture.changeDetectorRef.detectChanges();
        fixture.detectChanges();

        const iconChildDe = buttonDe.query(
          By.css(`.${iconChildElementClassName}`),
        );
        const iconChildContentDe = buttonDe.query(
          By.css('#iconTemplateContent'),
        );
        expect(iconChildDe).toBeTruthy();
        expect(iconChildDe.children).toContain(iconChildContentDe);
      });

      it('should only have template icon child element when icon template and icon input both have been provided', () => {
        const buttonDe = fixture.debugElement.query(
          By.css(testElement.elementName),
        );

        testComponent.hasIconTemplate = true;
        testComponent.icon = 'icon';
        fixture.changeDetectorRef.detectChanges();
        fixture.detectChanges();

        const iconChildDes = buttonDe.queryAll(
          By.css(`.${iconChildElementClassName}`),
        );
        expect(iconChildDes).toHaveLength(1);
        const iconChildDe = iconChildDes[0];
        const iconChildContentDe = buttonDe.query(
          By.css('#iconTemplateContent'),
        );
        expect(iconChildDe.children).toContain(iconChildContentDe);
      });

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
              By.css(testElement.elementName),
            );

            testComponent.label = labelInput;
            fixture.changeDetectorRef.detectChanges();
            fixture.detectChanges();

            const labelChildDe = buttonDe.query(
              By.css(`.${labelChildElementClassName}`),
            );
            if (shouldHaveChildElement) {
              expect(labelChildDe).toBeTruthy();
              expect(labelChildDe.nativeElement.textContent).toBe(labelInput);
            } else {
              expect(labelChildDe).toBeFalsy();
            }
          });
        },
      );

      it('should have label child element when label template has been provided', () => {
        const buttonDe = fixture.debugElement.query(
          By.css(testElement.elementName),
        );

        testComponent.hasLabelTemplate = true;
        fixture.changeDetectorRef.detectChanges();
        fixture.detectChanges();

        const labelChildDe = buttonDe.query(
          By.css(`.${labelChildElementClassName}`),
        );
        const labelChildContentDe = buttonDe.query(
          By.css('#labelTemplateContent'),
        );
        expect(labelChildDe).toBeTruthy();
        expect(labelChildDe.children).toContain(labelChildContentDe);
      });

      it('should only have template label child element when label template and label input both have been provided', () => {
        const buttonDe = fixture.debugElement.query(
          By.css(testElement.elementName),
        );

        testComponent.hasLabelTemplate = true;
        testComponent.label = 'label';
        fixture.changeDetectorRef.detectChanges();
        fixture.detectChanges();

        const labelChildDes = buttonDe.queryAll(
          By.css(`.${labelChildElementClassName}`),
        );
        expect(labelChildDes).toHaveLength(1);
        const labelChildDe = labelChildDes[0];
        const labelChildContentDe = buttonDe.query(
          By.css('#labelTemplateContent'),
        );
        expect(labelChildDe.children).toContain(labelChildContentDe);
      });

      it('should set the tabindex attribute to -1 when disabled is true', () => {
        const buttonDe = fixture.debugElement.query(
          By.css(testElement.elementName),
        );

        testComponent.disabled = true;
        fixture.changeDetectorRef.detectChanges();
        fixture.detectChanges();

        expect(buttonDe.nativeElement.getAttribute('tabindex')).toBe('-1');
      });

      it('should set the tabindex attribute to the provided value when disabled is false', () => {
        const buttonDe = fixture.debugElement.query(
          By.css(testElement.elementName),
        );

        testComponent.tabIndex = 5;
        testComponent.disabled = false;
        fixture.changeDetectorRef.detectChanges();
        fixture.detectChanges();

        expect(buttonDe.nativeElement.getAttribute('tabindex')).toBe('5');
      });

      it('should set the tabindex attribute to -1 when disabled is true and a value is provided', () => {
        const buttonDe = fixture.debugElement.query(
          By.css(testElement.elementName),
        );

        testComponent.tabIndex = 5;
        testComponent.disabled = true;
        fixture.changeDetectorRef.detectChanges();
        fixture.detectChanges();

        expect(buttonDe.nativeElement.getAttribute('tabindex')).toBe('-1');
      });

      const tabIndexNotSetTestCases = [null, undefined] as const;

      tabIndexNotSetTestCases.forEach((tabIndexValue) => {
        it(`should not set the tabindex attribute when disabled is false and tabIndex is ${tabIndexValue}`, () => {
          const buttonDe = fixture.debugElement.query(
            By.css(testElement.elementName),
          );

          testComponent.tabIndex = tabIndexValue;
          testComponent.disabled = false;
          fixture.changeDetectorRef.detectChanges();
          fixture.detectChanges();

          expect(buttonDe.nativeElement.hasAttribute('tabindex')).toBe(false);
        });
      });

      it('should set the aria-disabled attribute to true when disabled is true', () => {
        const buttonDe = fixture.debugElement.query(
          By.css(testElement.elementName),
        );

        testComponent.disabled = true;
        fixture.changeDetectorRef.detectChanges();
        fixture.detectChanges();

        expect(buttonDe.nativeElement.getAttribute('aria-disabled')).toBe(
          'true',
        );
      });

      const ariaDisabledNotSetTestCases = [false, null, undefined] as const;
      ariaDisabledNotSetTestCases.forEach((disabledValue) => {
        it(`should not set the aria-disabled attribute when disabled is ${disabledValue}`, () => {
          const buttonDe = fixture.debugElement.query(
            By.css(testElement.elementName),
          );

          testComponent.disabled = disabledValue;
          fixture.changeDetectorRef.detectChanges();
          fixture.detectChanges();

          expect(buttonDe.nativeElement.hasAttribute('aria-disabled')).toBe(
            false,
          );
        });
      });

      it('should keep user classes', () => {
        const buttonDe = fixture.debugElement.query(
          By.css(testElement.elementName),
        );

        testComponent.class = 'user-class';
        fixture.changeDetectorRef.detectChanges();
        fixture.detectChanges();

        expect(buttonDe.nativeElement.classList).toContain('user-class');
      });

      it('should emit click event when not disabled', () => {
        const buttonDe = fixture.debugElement.query(
          By.css(testElement.elementName),
        );

        testComponent.disabled = false;
        buttonDe.nativeElement.click();
        fixture.detectChanges();

        expect(testComponent.hasBeenClicked).toBe(true);
      });

      it('should not emit click event when disabled', () => {
        const buttonDe = fixture.debugElement.query(
          By.css(testElement.elementName),
        );

        testComponent.disabled = true;
        fixture.changeDetectorRef.detectChanges();
        fixture.detectChanges();

        buttonDe.nativeElement.click();
        fixture.detectChanges();

        expect(testComponent.hasBeenClicked).toBe(false);
      });
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
          [tabIndex]="tabIndex"
          [class]="class"
          (click)="hasBeenClicked = true;"
          [iconPosition]="iconPosition"
        >
          @if(hasIconTemplate) {
            <ng-template #icon>
              <span id="iconTemplateContent"></span>
            </ng-template>
          }
          @if(hasLabelTemplate) {
            <ng-template #label>
              <span id="labelTemplateContent"></span>
            </ng-template>
          }
        </${elementName}>`,
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
  tabIndex: number | null | undefined;
  class: string | null | undefined;
  hasBeenClicked = false;
  iconPosition: ButtonVariantProps['iconPosition'];
}
