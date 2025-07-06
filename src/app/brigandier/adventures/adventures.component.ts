import { Component } from '@angular/core';
import {AppDownloadService, DownloadFile} from '../../service/app.download.service';

@Component({
  selector: 'app-adventures',
  imports: [],
  templateUrl: './adventures.component.html',
  styleUrl: './adventures.component.css'
})
export class AdventuresComponent {

  constructor(public downloadService: AppDownloadService) {}

  files: DownloadFile[] = [];

  ngOnInit() {
    this.files = this.downloadService.getAllFiles();
  }

  downloadFile(fileId: string): void {
    const file = this.files.find(file => file.id === fileId);
    if (file) {
      this.downloadService.downloadFile(file);
    }
  }
}
