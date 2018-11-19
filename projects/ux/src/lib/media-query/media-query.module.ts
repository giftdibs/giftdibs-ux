import {
  NgModule
} from '@angular/core';

import {
  WindowRefService
} from '../window/window-ref.service';

import {
  MediaQueryService
} from './media-query.service';

@NgModule({
  providers: [
    MediaQueryService,
    WindowRefService
  ]
})
export class MediaQueryModule { }
