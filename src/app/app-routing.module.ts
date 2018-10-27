import {
  NgModule
} from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'demos/dropdown-menu',
    loadChildren: 'src/app/demos/dropdown-menu/dropdown-menu-demo.module#DropdownMenuDemoModule'
  },
  {
    path: 'demos/media',
    loadChildren: 'src/app/demos/media/media-demo.module#MediaDemoModule'
  },
  {
    path: 'demos/thumbnail',
    loadChildren: 'src/app/demos/thumbnail/thumbnail-demo.module#ThumbnailDemoModule'
  },
  {
    path: 'demos/typeahead',
    loadChildren: 'src/app/demos/typeahead/typeahead-demo.module#TypeaheadDemoModule'
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
