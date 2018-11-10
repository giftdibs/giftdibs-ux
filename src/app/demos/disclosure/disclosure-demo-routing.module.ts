import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisclosureDemoComponent } from './disclosure-demo.component';

const routes: Routes = [{
  path: '',
  component: DisclosureDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisclosureDemoRoutingModule { }
