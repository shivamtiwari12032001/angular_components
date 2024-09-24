import { Routes } from '@angular/router';
import { QuizComponent } from './pages/quiz/quiz.component';

export const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  // { path: 'result', component: ResultComponent },
  { path: '', redirectTo: '/quiz', pathMatch: 'full' },
];
