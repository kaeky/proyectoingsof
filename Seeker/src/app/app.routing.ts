import { Router, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

export const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: '**', component: LoginComponent },
    { path: 'dashboard', component: DashBoardComponent},
  ];
