import { Component } from '@angular/core';
import { Question, QuizService } from '../../services/quiz.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  selectedAnswer: string = '';
  quizCompleted: boolean = false;

  constructor(private quizService: QuizService) {
    this.questions = this.quizService.getQuestions();
  }

  nextQuestion() {
    if (this.selectedAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (this.quizService.checkAnswer(currentQuestion, this.selectedAnswer)) {
        this.score++;
      }

      this.selectedAnswer = '';
      this.currentQuestionIndex++;

      if (this.currentQuestionIndex >= this.questions.length) {
        this.quizCompleted = true;
      }
    }
  }

  resetQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizCompleted = false;
  }

}
