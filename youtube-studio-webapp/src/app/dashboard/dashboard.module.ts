import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../login/guards/auth.guard';
import { ContainerComponent } from './components/container/container.component';
import { ContentComponent } from './components/content/content.component';

const routes : Routes = [
  {
    path: '',
    component:ContainerComponent,
    canActivate:[AuthGuard],
    children: [
      { path:'dashboard', component:DashboardComponent },
      { path:'content', component:ContentComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    ContainerComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ]
})
export class DashboardModule { }
