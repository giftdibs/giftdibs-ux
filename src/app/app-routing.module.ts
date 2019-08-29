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
    loadChildren: () => import('src/app/demos/alert/alert-demo.module').then(m => m.AlertDemoModule)
  },
  {
    path: 'demos/theme',
    loadChildren: () => import('src/app/demos/theme/theme-demo.module').then(m => m.ThemeDemoModule)
  },
  {
    path: 'demos/card',
    loadChildren: () => import('src/app/demos/card/card-demo.module').then(m => m.CardDemoModule)
  },
  {
    path: 'demos/confirm',
    loadChildren: () => import('src/app/demos/confirm/confirm-demo.module').then(m => m.ConfirmDemoModule)
  },
  {
    path: 'demos/disclosure',
    loadChildren: () => import('src/app/demos/disclosure/disclosure-demo.module').then(m => m.DisclosureDemoModule)
  },
  {
    path: 'demos/dropdown-menu',
    loadChildren: () => import('src/app/demos/dropdown-menu/dropdown-menu-demo.module').then(m => m.DropdownMenuDemoModule)
  },
  {
    path: 'demos/grid',
    loadChildren: () => import('src/app/demos/grid/grid-demo.module').then(m => m.GridDemoModule)
  },
  {
    path: 'demos/image-uploader',
    loadChildren: () => import('src/app/demos/image-uploader/image-uploader-demo.module').then(m => m.ImageUploaderDemoModule)
  },
  {
    path: 'demos/media-query',
    loadChildren: () => import('src/app/demos/media-query/media-query-demo.module').then(m => m.MediaQueryDemoModule)
  },
  {
    path: 'demos/media',
    loadChildren: () => import('src/app/demos/media/media-demo.module').then(m => m.MediaDemoModule)
  },
  {
    path: 'demos/overlay',
    loadChildren: () => import('src/app/demos/overlay/overlay-demo.module').then(m => m.OverlayDemoModule)
  },
  {
    path: 'demos/popover',
    loadChildren: () => import('src/app/demos/popover/popover-demo.module').then(m => m.PopoverDemoModule)
  },
  {
    path: 'demos/notice',
    loadChildren: () => import('src/app/demos/notice/notice-demo.module').then(m => m.NoticeDemoModule)
  },
  {
    path: 'demos/thumbnail',
    loadChildren: () => import('src/app/demos/thumbnail/thumbnail-demo.module').then(m => m.ThumbnailDemoModule)
  },
  {
    path: 'demos/typeahead',
    loadChildren: () => import('src/app/demos/typeahead/typeahead-demo.module').then(m => m.TypeaheadDemoModule)
  },
  {
    path: 'demos/wait',
    loadChildren: () => import('src/app/demos/wait/wait-demo.module').then(m => m.WaitDemoModule)
  },
  {
    path: 'demos/tabs',
    loadChildren: () => import('src/app/demos/tabs/tabs-demo.module').then(m => m.TabsDemoModule)
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
