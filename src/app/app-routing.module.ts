import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
 {path:'elements', loadChildren:()=>import('./elements/elements.module').then(m=>m.ElementsModule) }, 
 {path:'collections', loadChildren:()=>import('./collections/collections.module').then(m=>m.CollectionsModule) }, 
 {path:'views', loadChildren:()=>import('./views/views.module').then(m=>m.ViewsModule) }, 
 {path:'mods', loadChildren:()=>import('./mods/mods.module').then(m=>m.ModsModule)  }, 
 {path:'', redirectTo:'home', pathMatch:'full'}, 
 {path:'home', component:HomeComponent}, 
 {path:'not-found', component: NotFoundComponent},
 {path:'**', redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
