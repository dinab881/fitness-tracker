import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import {Exercise} from '../exercise.model';
import {TrainingService} from '../training.service';
import {Subscription} from 'rxjs';

import * as fromTraining from '../training.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit, AfterViewInit/*, OnDestroy*/ {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  /*private exChangedSubscription: Subscription;*/

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private trainingService: TrainingService,
    private store: Store<fromTraining.State>
  ) {
  }

  ngOnInit() {
    this.store.select(fromTraining.getFinishedExercises)
      .subscribe((exercises: Exercise[]) => {
        this.dataSource.data = exercises;
      });
    this.trainingService.fetchCompletedOrCanceledExercises();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*ngOnDestroy() {
    if(this.exChangedSubscription){
      this.exChangedSubscription.unsubscribe();
    }
  }*/

}
