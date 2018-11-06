import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  TemplateRef
} from '@angular/core';

import {
  OverlayInstance
} from '../overlay/overlay-instance';

import {
  OverlayService
} from '../overlay/overlay.service';

import {
  AffixHorizontalAlignment
} from '../affix/affix-horizontal-alignment';

import {
  AffixVerticalAlignment
} from '../affix/affix-vertical-alignment';

import {
  PopoverComponent
} from './popover.component';

@Directive({
  selector: '[gdPopover]'
})
export class PopoverDirective {
  @Input()
  public gdPopover: TemplateRef<any>;

  @Input()
  public gdPopoverHorizontalAlignment: AffixHorizontalAlignment;

  @Input()
  public gdPopoverVerticalAlignment: AffixVerticalAlignment;

  private overlayInstance: OverlayInstance<PopoverComponent>;

  constructor(
    private elementRef: ElementRef,
    private overlayService: OverlayService
  ) { }

  @HostListener('keydown', ['$event'])
  public onKeyDown(event: any): void {
    if (this.overlayInstance) {
      const key = event.key.toLowerCase();

      if (key === 'tab') {
        this.overlayInstance.componentInstance.focusHostElement();
        event.preventDefault();
      }

      if (key === 'escape') {
        this.overlayInstance.componentInstance.close();
      }
    }
  }

  @HostListener('click')
  public onClick(): void {
    if (this.overlayInstance) {
      this.overlayInstance.componentInstance.close();
      return;
    }

    this.overlayInstance = this.overlayService.attach(
      PopoverComponent,
      {
        preventBodyScroll: false,
        showBackdrop: true
      }
    );

    this.overlayInstance.componentInstance.attach(this.gdPopover, {
      trigger: this.elementRef,
      affix: {
        horizontalAlignment: this.gdPopoverHorizontalAlignment,
        verticalAlignment: this.gdPopoverVerticalAlignment
      }
    });

    // this.overlayInstance.click.subscribe(() => {
    //   this.overlayInstance.destroy();
    // });

    this.overlayInstance.componentInstance.closed.subscribe(() => {
      this.overlayInstance.destroy();
    });

    this.overlayInstance.destroyed.subscribe(() => {
      this.overlayInstance = undefined;
    });
  }
}
