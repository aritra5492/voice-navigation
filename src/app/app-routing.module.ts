import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./+home/home.module').then(m => m.HomeModule) },
  { path: 'one', loadChildren: () => import('./+one/one.module').then(m => m.OneModule) },
  { path: 'two', loadChildren: () => import('./+two/two.module').then(m => m.TwoModule) },
  { path: 'three', loadChildren: () => import('./+three/three.module').then(m => m.ThreeModule) },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
