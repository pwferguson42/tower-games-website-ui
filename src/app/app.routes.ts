import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {QuickStartComponent as BrigandierQuickStartComponent} from './brigandier/quick-start/quick-start.component';
import {CoreRulesComponent as BrigandierCoreRulesComponent} from './brigandier/core-rules/core-rules.component';
import {GmInfoComponent as BrigandierGmInfoComponent} from './brigandier/gm-info/gm-info.component';
import {AdventuresComponent as BrigandierAdventuresComponent} from './brigandier/adventures/adventures.component';
import {DownloadsComponent as BrigandierDownloadsComponent} from './brigandier/downloads/downloads.component';
import {KingdomsComponent} from './kingdoms/kingdoms.component';
import {ScaleBreakerComponent} from './scale-breaker/scale-breaker.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'brigandier', component: AppComponent },
  { path: 'brigandier/quick-start', component: BrigandierQuickStartComponent },
  { path: 'brigandier/core-rules', component: BrigandierCoreRulesComponent },
  { path: 'brigandier/gm-info', component: BrigandierGmInfoComponent },
  { path: 'brigandier/adventures', component: BrigandierAdventuresComponent },
  { path: 'brigandier/downloads', component: BrigandierDownloadsComponent },
  { path: 'kingdoms', component: KingdomsComponent },
  { path: 'scale-breaker', component: ScaleBreakerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
