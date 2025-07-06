import { Injectable } from '@angular/core';

declare global {
  interface Window {
    siteContentSeed: string;
  }
}
@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  public siteContentSeed: string;

  constructor() {
    this.siteContentSeed = '';
    this.initializeSeed();
  }

  public initializeSeed(): Promise<string> {
    return new Promise<string>((resolve) => {
      // Generate seed only if it hasn't been set yet
      if (!window.siteContentSeed) {
        const seed = Math.random().toString().substring(2, 7);
        window.siteContentSeed = seed;
        this.siteContentSeed = seed;
        console.log('Seed initialized:', this.siteContentSeed);
      }
      else {
        this.siteContentSeed = window.siteContentSeed;
      }
      resolve(this.siteContentSeed);
    });
  }


  public generateRandomSeed(){
    const seed = Math.random().toString().substring(2, 7);
    window.siteContentSeed = seed;
    this.siteContentSeed = seed;
    console.log('Seed regenerated:', seed);
  }
}
