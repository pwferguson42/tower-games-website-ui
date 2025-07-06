import { Component } from '@angular/core';
import {AppDownloadService, DownloadFile} from '../../service/app.download.service';

@Component({
  selector: 'app-quick-start',
  imports: [],
  templateUrl: './quick-start.component.html',
  styleUrl: './quick-start.component.css'
})
export class QuickStartComponent {
  constructor(public downloadService: AppDownloadService) {}

  files: DownloadFile[] = [];

  ngOnInit() {
    this.files = [
      {
        id: '1-ad',
        filename: 'Brigands - One Page Adventure.pdf',
        description: 'One page adventures is used to help a game master quickly create a one night play session.',
        size: '312 KB',
        type: 'PDF',
        url: '/assets/downloads/brigandier/Brigands - One Page Adventure.pdf'
      }
    ];
  }

  downloadFile(fileId: string): void {
    const file = this.files.find(file => file.id === fileId);
    if (file) {
      this.downloadService.downloadFile(file);
    }
  }
}
