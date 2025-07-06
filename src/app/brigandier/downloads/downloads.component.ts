import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDownloadService, DownloadFile } from '../../service/app.download.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-downloads',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './downloads.component.html',
  styleUrl: './downloads.component.css'
})

export class DownloadsComponent {
  constructor(public downloadService: AppDownloadService) {}

  files: DownloadFile[] = [];

  ngOnInit() {
    this.files = this.downloadService.getAllFiles();
  }

  downloadFile(file: DownloadFile): void {
    this.downloadService.downloadFile(file);
  }
}
