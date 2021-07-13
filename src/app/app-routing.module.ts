import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NetworksComponent } from './networks/networks.component';
import { MyListComponent } from './my-list/my-list.component';
import { DetailsPageComponent } from './details-page/details-page.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { AuthPagesGuard } from './auth-pages.guard';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: 'tvshows',
    loadChildren: () =>
      import('./tv-shows/tv-shows.module').then((m) => m.TvShowsModule),
  },
  {
    path: 'people/:page',
    loadChildren: () =>
      import('./people/people.module').then((m) => m.PeopleModule),
  },

  { path: 'networks', component: NetworksComponent },

  { path: 'login', canActivate: [AuthPagesGuard], component: LoginComponent },
  {
    path: 'register',
    canActivate: [AuthPagesGuard],
    component: RegisterComponent,
  },
  { path: 'my-list', canActivate: [AuthGuard], component: MyListComponent },
  { path: 'details/:mediaType/:id', component: DetailsPageComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
