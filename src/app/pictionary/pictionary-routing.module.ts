import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsPageComponent } from './pages/instructions-page/instructions-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PictionaryRoutingModule {}
