import { NgModule } from '@angular/core';
import {PastTrainingsComponent} from './past-trainings/past-trainings.component';
import {TrainingComponent} from './training.component';
import {CurrentTrainingComponent} from './current-training/current-training.component';
import {NewTrainingComponent} from './new-training/new-training.component';
import {StopTrainingComponent} from './current-training/stop-training.component';
import {SharedModule} from '../shared/shared.module';
import {MaterialFileUploadComponent} from '../material-file-upload/material-file-upload.component';
import {MyMaterialUploadComponent} from '../my-material-upload/my-material-upload.component';
import {TrainingRoutingModule} from './training-routing.module';
import { StoreModule } from '@ngrx/store';
import { trainingReducer } from './training.reducer';

@NgModule({
  imports: [
    SharedModule,
    TrainingRoutingModule,
    StoreModule.forFeature('training', trainingReducer)
  ],
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    StopTrainingComponent,
    MaterialFileUploadComponent,
    MyMaterialUploadComponent,
  ],
  entryComponents: [StopTrainingComponent]
})
export class TrainingModule { }
