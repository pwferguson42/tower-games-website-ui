import { Injectable } from '@angular/core';

export interface NavLink {
  path: string;
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppNavigationService {
  brigandierLinks: NavLink[] = [
    { path: '/brigandier/quick-start', label: 'Quick Start' },
    { path: '/brigandier/core-rules', label: 'Core Rules Preview' },
    { path: '/brigandier/gm-info', label: 'Game Master Info' },
    { path: '/brigandier/adventures', label: 'One Page Adventures' },
    { path: '/brigandier/downloads', label: 'Downloads' }
  ];
}
