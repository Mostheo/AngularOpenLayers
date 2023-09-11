import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenlayersComponent } from './openlayers/openlayers.component';

const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' }, // Redirige vers /app
  { path: 'openlayers', component: OpenlayersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
