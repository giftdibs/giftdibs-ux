import {
  ElementRef,
  Injectable,
  Renderer2,
  RendererFactory2,
} from '@angular/core';

import { AffixConfig } from './affix-config';
import { AffixHorizontalAlignment } from './affix-horizontal-alignment';
import { AffixVerticalAlignment } from './affix-vertical-alignment';

@Injectable({
  providedIn: 'root',
})
export class AffixService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(undefined, null);
  }

  public affixTo(
    subject: ElementRef,
    target: ElementRef,
    config?: AffixConfig,
  ): void {
    const defaults: AffixConfig = {
      horizontalAlignment: AffixHorizontalAlignment.Left,
      verticalAlignment: AffixVerticalAlignment.Top,
    };

    // Reset the height.
    this.renderer.removeStyle(subject.nativeElement, 'height');
    this.renderer.removeStyle(subject.nativeElement, 'width');

    const settings = Object.assign({}, defaults, config);
    const subjectRect = subject.nativeElement.getBoundingClientRect();
    const targetRect = target.nativeElement.getBoundingClientRect();

    let top: number;
    switch (settings.verticalAlignment) {
      default:
      case 'top':
        top = targetRect.top - subjectRect.height;
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

    if (top < 0) {
      top = 0;
    }

    if (left < 0) {
      left = 0;
    }

    this.renderer.setStyle(subject.nativeElement, 'top', `${top}px`);
    this.renderer.setStyle(subject.nativeElement, 'left', `${left}px`);
    this.renderer.setStyle(subject.nativeElement, 'position', 'fixed');

    // If subject's bottom is below viewport, set its height to accommodate.
    // See: https://stackoverflow.com/a/8876069/6178885
    const viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    );
    if (subjectRect.height + top >= viewportHeight) {
      this.renderer.setStyle(
        subject.nativeElement,
        'height',
        `${viewportHeight - top}px`,
      );
    }

    // If subject's right is beyond the body's boundaries,
    // set its width to accommodate.
    // See: https://stackoverflow.com/a/8340177/6178885
    const viewportWidth = document.body.clientWidth;
    if (subjectRect.width + left >= viewportWidth) {
      this.renderer.setStyle(
        subject.nativeElement,
        'width',
        `${viewportWidth - left}px`,
      );
    }
  }
}
