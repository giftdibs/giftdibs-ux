import {
  NgModule
} from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'demos/alert',
    loadChildren: 'src/app/demos/alert/alert-demo.module#AlertDemoModule'
  },
  {
    path: 'demos/theme',
    loadChildren: 'src/app/demos/theme/theme-demo.module#ThemeDemoModule'
  },
  {
    path: 'demos/card',
    loadChildren: 'src/app/demos/card/card-demo.module#CardDemoModule'
  },
  {
    path: 'demos/confirm',
    loadChildren: 'src/app/demos/confirm/confirm-demo.module#ConfirmDemoModule'
  },
  {
    path: 'demos/disclosure',
    loadChildren: 'src/app/demos/disclosure/disclosure-demo.module#DisclosureDemoModule'
  },
  {
    path: 'demos/dropdown-menu',
    loadChildren: 'src/app/demos/dropdown-menu/dropdown-menu-demo.module#DropdownMenuDemoModule'
  },
  {
    path: 'demos/grid',
    loadChildren: 'src/app/demos/grid/grid-demo.module#GridDemoModule'
  },
  {
    path: 'demos/image-uploader',
    loadChildren: 'src/app/demos/image-uploader/image-uploader-demo.module#ImageUploaderDemoModule'
  },
  {
    path: 'demos/media-query',
    loadChildren: 'src/app/demos/media-query/media-query-demo.module#MediaQueryDemoModule'
  },
  {
    path: 'demos/media',
    loadChildren: 'src/app/demos/media/media-demo.module#MediaDemoModule'
  },
  {
    path: 'demos/overlay',
    loadChildren: 'src/app/demos/overlay/overlay-demo.module#OverlayDemoModule'
  },
  {
    path: 'demos/popover',
    loadChildren: 'src/app/demos/popover/popover-demo.module#PopoverDemoModule'
  },
  {
    path: 'demos/notice',
    loadChildren: 'src/app/demos/notice/notice-demo.module#NoticeDemoModule'
  },
  {
    path: 'demos/thumbnail',
    loadChildren: 'src/app/demos/thumbnail/thumbnail-demo.module#ThumbnailDemoModule'
  },
  {
    path: 'demos/typeahead',
    loadChildren: 'src/app/demos/typeahead/typeahead-demo.module#TypeaheadDemoModule'
  },
  {
    path: 'demos/wait',
    loadChildren: 'src/app/demos/wait/wait-demo.module#WaitDemoModule'
  },
  {
    path: 'demos/tabs',
    loadChildren: 'src/app/demos/tabs/tabs-demo.module#TabsDemoModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
