import {
  EventEmitter,
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs';

@Injectable()
export class OverlayInstance<T> {
  public componentInstance: T;

  public get backdropClick(): Observable<void> {
    return this._backdropClick;
  }

  private _backdropClick = new EventEmitter<void>();

  public get destroyed(): Observable<void> {
    return this._destroyed;
  }

  private _destroyed = new EventEmitter<void>();

  public triggerBackdropClick(): void {
    this._backdropClick.next();
  }

  public destroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
