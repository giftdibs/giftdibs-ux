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
    path: 'demos/dropdown-menu',
    loadChildren: 'src/app/demos/dropdown-menu/dropdown-menu-demo.module#DropdownMenuDemoModule'
  },
  {
    path: 'demos/grid',
    loadChildren: 'src/app/demos/grid/grid-demo.module#GridDemoModule'
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
