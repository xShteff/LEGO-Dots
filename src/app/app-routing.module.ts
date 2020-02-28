import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotsComponent } from './components/pages/dots/dots.component';

const routes: Routes = [
  {
    component: DotsComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
