import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  OnDestroy,
  Renderer2,
  RendererFactory2,
  Type
} from '@angular/core';

import { WindowRefService } from '../window/window-ref.service';

import { OverlayConfig } from './overlay-config';
import { OverlayDomAdapterService } from './overlay-dom-adapter.service';
import { OverlayInstance } from './overlay-instance';
import { OverlayComponent } from './overlay.component';

@Injectable()
export class OverlayService implements OnDestroy {
  private host: ComponentRef<OverlayComponent>;
  private instances: OverlayInstance<any>[] = [];

  constructor(
    private adapter: OverlayDomAdapterService,
    private appRef: ApplicationRef,
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
    private windowRef: WindowRefService
  ) { }

  public ngOnDestroy(): void {
    this.removeHostComponent();
  }

  public attach<T>(
    component: Type<T>,
    config?: OverlayConfig
  ): OverlayInstance<T> {
    const defaults: OverlayConfig = {
      keepAfterNavigationChange: false,
      preventBodyScroll: true,
      showBackdrop: false
    };

    const settings = Object.assign(defaults, config || {});

    this.ensureHostExists();

    if (settings.preventBodyScroll) {
      this.adapter.restrictBodyScroll();
    }

    const instance = this.host.instance.attach(component, settings);

    instance.destroyed.subscribe(() => {
      this.instances.splice(this.instances.indexOf(instance), 1);
      if (this.instances.length === 0) {
        this.removeHostComponent();
      }
    });

    this.instances.push(instance);

    return instance;
  }

  private createHostComponent(): ComponentRef<OverlayComponent> {
    const componentRef = this.resolver
      .resolveComponentFactory(OverlayComponent)
      .create(this.injector);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0];

    this.appRef.attachView(componentRef.hostView);
    this.adapter.appendToBody(domElem);

    return componentRef;
  }

  private ensureHostExists(): ComponentRef<OverlayComponent> {
    if (!this.host) {
      this.host = this.createHostComponent();
    }

    return this.host;
  }

  private removeHostComponent(): void {
    if (this.host) {
      this.adapter.removeHostElement();
      this.appRef.detachView(this.host.hostView);
      this.host.destroy();
      this.host = undefined;
      this.adapter.releaseBodyScroll();
    }
  }
}
