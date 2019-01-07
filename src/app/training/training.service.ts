import {Injectable} from '@angular/core';
import {Exercise} from './exercise.model';
import {Subject, Subscription} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {AngularFirestore} from 'angularfire2/firestore';
import {UiService} from '../shared/ui.service';
import {Store} from '@ngrx/store';
import * as UI from '../shared/ui.actions';
import * as Training from './training.actions';
import * as fromTraining from './training.reducer';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  /*exerciseChanged = new Subject<Exercise>();
  exercisesChanged = new Subject<Exercise[]>();
  finishedExercisesChanged = new Subject<Exercise[]>();

  private availableExercises: Exercise[] = [];
  private runningExercise: Exercise;*/
  private fbSubs: Subscription[] = [];

  constructor(
    private db: AngularFirestore,
    private uiService: UiService,
    private store: Store<fromTraining.State>,
    ) {
  }

  fetchAvailableExercises() {
    this.store.dispatch(new UI.StartLoading);
    /*this.uiService.loadingStateChanged.next(true);*/
    this.fbSubs.push(this.db.
    collection('availableExercises')
      .snapshotChanges()
      .pipe(map(docArray => {
        return docArray.map(doc => {
          //throw(new Error());
          return {
            id: doc.payload.doc.id,
            name: doc.payload.doc.data()['name'],
            duration: doc.payload.doc.data()['duration'],
            calories: doc.payload.doc.data()['calories'],
          };
        });
      })).subscribe((exercises: Exercise[]) => {
          this.store.dispatch(new UI.StopLoading);
          this.store.dispatch(new Training.SetAvailableTrainings(exercises));
        /*this.availableExercises = exercises;
        this.exercisesChanged.next([...this.availableExercises]);*/
    }, error => {
        //this.uiService.loadingStateChanged.next(false);
        this.store.dispatch(new UI.StopLoading);
        this.uiService.showSnackbar(
          'Fetching Exercises failed, please try again later',
          null,
          3000
        );
        //this.exercisesChanged.next(null);
      }
    ));
  }

  startExercise(selectedId: string) {
    /*this.db.doc('availableExercises/' + selectedId).update({
      lastSelected: new Date()
    });*/
   /* this.runningExercise = this.availableExercises.find(
      ex => ex.id === selectedId
    );
    this.exerciseChanged.next({...this.runningExercise});*/

    this.store.dispatch(new Training.StartTraining(selectedId));
  }


  completeExercise() {
    this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {
      this.addDataToDatabase({
        ...ex,
        date: new Date(),
        state: 'completed'
      });
      this.store.dispatch(new Training.StopTraining());
    });

    /*this.runningExercise = null;
    this.exerciseChanged.next(null);*/
  }

  cancelExercise(progress: number) {
    this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {
      this.addDataToDatabase({
        ...ex,
        duration: ex.duration * (progress / 100),
        calories: ex.calories * (progress / 100),
        date: new Date(),
        state: 'cancelled'
      });
      this.store.dispatch(new Training.StopTraining());
    });

    /*this.runningExercise = null;
    this.exerciseChanged.next(null);*/
  }

  fetchCompletedOrCanceledExercises() {
    this.fbSubs.push(this.db.
    collection('finishedExercises').
    valueChanges().
    subscribe((exercises: Exercise[]) => {
      //this.finishedExercisesChanged.next(exercises);
      this.store.dispatch(new Training.SetFinishedTrainings(exercises));
      }
    ));
  }

  cancelSubscriptions(){
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }

  private addDataToDatabase(exercise: Exercise){
    this.db.collection('finishedExercises').add(exercise);
  }

}
