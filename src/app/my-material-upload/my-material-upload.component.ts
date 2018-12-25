import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-material-upload',
  templateUrl: './my-material-upload.component.html',
  styleUrls: ['./my-material-upload.component.css']
})
export class MyMaterialUploadComponent implements OnInit {
  file: File = null;
  progress;
  uploading = false;
  uploadSuccessful = false;

  @Input() accept: string | null = null;
  @Input() required: boolean | null  = null;

  constructor() { }

  ngOnInit() {
  }

  selectFile(file: File) {
    this.file = file;
  }

}
