import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThumbnailDemoComponent } from './thumbnail-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ThumbnailDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThumbnailDemoRoutingModule { }
