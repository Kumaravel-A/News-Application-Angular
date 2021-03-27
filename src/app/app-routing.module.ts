import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CricketComponent } from './components/cricket/cricket.component';
import { GeneralComponent } from './components/general/general.component';
import { ScienceComponent } from './components/science/science.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { KollywoodComponent } from './components/kollywood/kollywood.component';
import { PoliticsComponent } from './components/politics/politics.component';

const routes: Routes = [
  {
    path : 'cricket',
    component : CricketComponent
  },
  {
    path : '',
    component : GeneralComponent
  },
  {
    path : 'kollywood',
    component : KollywoodComponent
  },
  {
    path : 'politics',
    component : PoliticsComponent
  },
  {
    path : 'science',
    component : ScienceComponent
  },
  {
    path : 'tech',
    component : TechnologyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
