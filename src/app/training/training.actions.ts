import {Action} from '@ngrx/store';
import {Exercise} from './exercise.model';

export const SET_AVAILABLE_TRAININGS = '[Training] Set Available Trainings';
export const SET_FINISHED_TRAININGS = '[Training] Set Finished Trainings';
export const START_TRAINING = '[Training] Start Training';
export const STOP_TRAINING = '[Training] Stop Training';

export class SetAvailableTrainings implements Action {
  constructor(public payload: Exercise[]){}
  readonly type = SET_AVAILABLE_TRAININGS;
}

export class SetFinishedTrainings implements Action {
  constructor(public payload: Exercise[]){}
  readonly type = SET_FINISHED_TRAININGS;
}

export class StartTraining implements Action {
  constructor(public payload: string){}
  readonly type = START_TRAINING;
}

export class StopTraining implements Action {
  readonly type = STOP_TRAINING;
}

export type TrainingActions =
  SetAvailableTrainings
  | SetFinishedTrainings
  | StartTraining
  | StopTraining;
