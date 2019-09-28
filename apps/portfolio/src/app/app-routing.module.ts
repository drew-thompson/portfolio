import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategy } from '@portfolio/core/config';
import { HomeComponent } from '@portfolio/home/feature-shell';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'projects',
    loadChildren: () => import('@portfolio/projects/feature-shell').then(m => m.ProjectsFeatureShellModule)
  },
  {
    path: 'styleguide',
    loadChildren: () => import('@portfolio/styleguide/feature').then(m => m.StyleguideFeatureModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  providers: [CustomPreloadingStrategy],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
