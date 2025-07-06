// src/app/service/download.service.ts
import { Injectable } from '@angular/core';

export interface DownloadFile {
  id: string;
  filename: string;
  url: string;
  description?: string;
  size?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppDownloadService {
  constructor() {}

  // You can track downloading files here if needed across components
  private downloadingFiles = new Set<string>();

  private files: DownloadFile[] = [
    {
      id: '1',
      filename: 'Brigands - One Page Adventure.pdf',
      description: 'One page adventures is used to help a game master quickly create a one night play session.',
      size: '312 KB',
      type: 'PDF',
      url: '/assets/downloads/brigandier/Brigands - One Page Adventure.pdf'
    },
    {
      id: '2',
      filename: 'Campaign Play Character Sheet.pdf',
      description: 'Character sheet designed for characters who are used in multiple adventures.',
      size: '62 KB',
      type: 'PDF',
      url: '/assets/downloads/brigandier/Campaign Play Character Sheet.pdf'
    },
    {
      id: '3',
      filename: 'Full Quick Start Packet.pdf',
      description: 'Reference material for rules and a framework to build an adventure and get playing quickly. This includes: Simplified Character Creation Guide, Rules Reference Sheets, Quick Start Magic Reference Sheets, and Seeking our Fortune - One Page Adventure bundled together in one PDF.',
      size: '549 KB',
      type: 'PDF',
      url: '/assets/downloads/brigandier/Full Quick Start Packet.pdf'
    },
    {
      id: '4',
      filename: 'One Night Adventure Character Sheet.pdf',
      description: 'Character sheet designed for characters who are used in a single adventures.',
      size: '79 KB',
      type: 'PDF',
      url: '/assets/downloads/brigandier/One Night Adventure Character Sheet.pdf'
    },
    {
      id: '5',
      filename: 'Quick Start Magic Reference Sheets.pdf',
      description: 'The reference material for the magic rules. Includes descriptions of magic types, tricks, innate powers, and spells.',
      size: '146 KB',
      type: 'PDF',
      url: '/assets/downloads/brigandier/Quick Start Magic Reference Sheets.pdf'
    },
    {
      id: '6',
      filename: 'Rules Reference Sheets.pdf',
      description: 'The core rules pared down to fit on a single page, if you print front and back.',
      size: '99 KB',
      type: 'PDF',
      url: '/assets/downloads/brigandier/Rules Reference Sheets.pdf'
    },
    {
      id: '7',
      filename: 'Seeking our Fortune - One Page Adventure.pdf',
      description: 'A framework to build out a three act adventure for a one night play session. Good to pull together an adventure quickly.',
      size: '106 KB',
      type: 'PDF',
      url: '/assets/downloads/brigandier/Seeking our Fortune - One Page Adventure.pdf'
    },
    {
      id: '8',
      filename: 'Simplified Character Creation Guide.pdf',
      description: 'Rules for character creation pared down to fit on a single page. You don\'t even need print on the back, you\'re not even gonna have to worry about that. ',
      size: '72 KB',
      type: 'PDF',
      url: '/assets/downloads/brigandier/Simplified Character Creation Guide.pdf'
    }
  ];

  // Methods to access files
  getAllFiles(): DownloadFile[] {
    return [...this.files]; // Return a copy to prevent direct modification
  }

  getFileById(id: string): DownloadFile | undefined {
    return this.files.find(file => file.id === id);
  }

  isDownloading(fileId: string): boolean {
    return this.downloadingFiles.has(fileId);
  }

  downloadFile(file: DownloadFile): void {
    // Add to downloading set
    this.downloadingFiles.add(file.id);

    // Create a temporary anchor element for download
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.filename;

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Remove from downloading set after a delay (simulating download time)
    setTimeout(() => {
      this.downloadingFiles.delete(file.id);
    }, 2000);
  }
}
