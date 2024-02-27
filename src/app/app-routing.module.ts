import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pictionary/pages/home-page/home-page.component';
import { InstructionsPageComponent } from './pictionary/pages/instructions-page/instructions-page.component';
import { GamePageComponent } from './pictionary/pages/game-page/game-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'instructions',
    component: InstructionsPageComponent,
  },
  {
    path: 'play',
    component: GamePageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
