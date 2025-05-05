import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTypeComponent } from './home-type/home-type.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { path: '', component: HomeTypeComponent },
  { path: 'template', component: TemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
