import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrainingComponent} from './training.component';
import {AuthGuard} from '../auth/auth.guard';


const routes: Routes = [
  {path: '', component: TrainingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class TrainingRoutingModule{

}
