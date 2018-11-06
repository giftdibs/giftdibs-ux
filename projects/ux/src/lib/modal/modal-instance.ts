import {
  EventEmitter
} from '@angular/core';

import {
  Observable
} from 'rxjs';

import {
  ModalWrapperComponent
} from './modal-wrapper.component';

import { ModalClosedEventArgs } from './modal-closed-event-args';
import { ModalClosedEventReason } from './modal-closed-event-reason';

export class ModalInstance<T> {
  public componentInstance: T;

  // public set wrapperInstance(value: ModalWrapperComponent) {
  //   this._wrapperInstance = value;
  //   // Wait for the wrapper closed animation to complete before triggering closed event.
  //   value.closed.subscribe(() => {
  //     this._closed.emit(this.closedEventArgs);
  //     this._closed.complete();
  //   });
  // }

  public get closed(): Observable<ModalClosedEventArgs> {
    return this._closed;
  }

  private closedEventArgs: ModalClosedEventArgs;

  private _closed = new EventEmitter<ModalClosedEventArgs>();

  constructor(
    private wrapperInstance: ModalWrapperComponent
  ) {
    // Wait for the wrapper closed animation to complete before triggering closed event.
    this.wrapperInstance.closed.subscribe(() => {
      this._closed.emit(this.closedEventArgs);
      this._closed.complete();
    });
  }

  public close(
    reason: ModalClosedEventReason = 'cancel',
    data?: any
  ): void {
    this.closedEventArgs = { reason, data };
    this.wrapperInstance.close();
  }
}
