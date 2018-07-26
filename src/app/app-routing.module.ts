import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const routes : Routes = [
  {
    path: '',
    loadChildren: './layout/layout.module#LayoutModule',
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true}),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
