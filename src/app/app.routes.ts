import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
    {path: 'landing', component: LandingComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'landing'}
];
