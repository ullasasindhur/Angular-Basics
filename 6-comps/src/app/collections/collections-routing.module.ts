import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { CompaniesComponent } from './companies/companies.component';
import { BiographyComponent } from './biography/biography.component';
import { PatnersComponent } from './patners/patners.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsHomeComponent,
    children: [
      {
        path: '',
        component: BiographyComponent,
      },
      {
        path: 'patners',
        component: PatnersComponent,
      },
      {
        path: 'companies',
        component: CompaniesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
