import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AuthGuard} from './user/auth.guard';

// routes array contains different paths, that are routed to different components
// -> when the user navigates to a path or certain url, the router will load the component that is registered
// under that path
const routes: Routes = [
  // the path "myUrl/ + path" will load the HomePageComponent
  {path: '', component: HomePageComponent, canActivate: [AuthGuard]},
  // defining the 'login' path. When accessing that path, loadChildren will lazily load the login component
  {path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
