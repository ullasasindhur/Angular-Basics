import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ELementsHomeComponent } from './elements-home/elements-home.component';

const routes: Routes = [
  {
    path: '',
    component: ELementsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
