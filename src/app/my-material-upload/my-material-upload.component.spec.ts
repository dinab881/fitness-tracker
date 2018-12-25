import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMaterialUploadComponent } from './my-material-upload.component';

describe('MyMaterialUploadComponent', () => {
  let component: MyMaterialUploadComponent;
  let fixture: ComponentFixture<MyMaterialUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMaterialUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMaterialUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
