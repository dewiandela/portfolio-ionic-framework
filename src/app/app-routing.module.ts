import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ukm', pathMatch: 'full' },
  // {
  //   path: 'bookings',
  //   loadChildren: './bookings/bookings.module#BookingsPageModule',
  // },
  // {
  //   path: 'places',
  //   loadChildren: './places/places.module#PlacesPageModule'
  // },
  { path: 'ukm', loadChildren: './ukm/ukm.module#UkmPageModule' },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
