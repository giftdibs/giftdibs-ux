import {
  ElementRef,
  Injectable,
  Renderer2
} from '@angular/core';

import { AffixConfig } from './affix-config';
import { AffixHorizontalAlignment } from './affix-horizontal-alignment';
import { AffixVerticalAlignment } from './affix-vertical-alignment';

@Injectable()
export class AffixService {
  constructor(
    private renderer: Renderer2
  ) { }

  public affixTo(
    subject: ElementRef,
    target: ElementRef,
    config?: AffixConfig
  ): void {
    const defaults: AffixConfig = {
      horizontalAlignment: AffixHorizontalAlignment.Left,
      verticalAlignment: AffixVerticalAlignment.Top
    };

    // Reset the height.
    this.renderer.removeStyle(
      subject.nativeElement,
      'height'
    );

    const settings = Object.assign({}, defaults, config);
    const subjectRect = subject.nativeElement.getBoundingClientRect();
    const targetRect = target.nativeElement.getBoundingClientRect();

    let top: number;
    switch (settings.verticalAlignment) {
      default:
      case 'top':
      top = targetRect.top;
      break;

      case 'bottom':
      top = targetRect.bottom;
      break;
    }

    let left: number;
    switch (settings.horizontalAlignment) {
      default:
      case 'left':
      left = targetRect.left;
      break;

      case 'right':
      left = targetRect.right - subjectRect.width;
      break;
    }

    this.renderer.setStyle(subject.nativeElement, 'top', `${top}px`);
    this.renderer.setStyle(subject.nativeElement, 'left', `${left}px`);
    this.renderer.setStyle(subject.nativeElement, 'position', 'fixed');

    // If subject's bottom is below viewport, set its height to accommodate.
    // https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if (subjectRect.height + top >= viewportHeight) {
      this.renderer.setStyle(
        subject.nativeElement,
        'height',
        `${viewportHeight - top}px`
      );
    }
  }
}
