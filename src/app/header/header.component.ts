
import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppConfigService } from '../service/app.config.service';
import { AppNavigationService } from '../service/app.navigation.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule

  ]
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<boolean>();
  constructor(
    public configService: AppConfigService,
    public navigationService: AppNavigationService) {};

  onMenuButtonClick() {
    this.menuToggled.emit();
  }
}
