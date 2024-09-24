import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private questions: Question[] = [
    {
      questionText: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      questionText: 'Who wrote "Hamlet"?',
      options: ['Shakespeare', 'Tolstoy', 'Dante', 'Homer'],
      correctAnswer: 'Shakespeare',
    },
    {
      questionText: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
    },
    {
      questionText: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 'Jupiter',
    },
    {
      questionText: 'Which element has the chemical symbol "O"?',
      options: ['Oxygen', 'Gold', 'Osmium', 'Oganesson'],
      correctAnswer: 'Oxygen',
    },
    {
      questionText: 'What is the square root of 16?',
      options: ['2', '3', '4', '5'],
      correctAnswer: '4',
    },
    {
      questionText: 'Who painted the "Mona Lisa"?',
      options: ['Leonardo da Vinci', 'Van Gogh', 'Picasso', 'Rembrandt'],
      correctAnswer: 'Leonardo da Vinci',
    },
    {
      questionText: 'What is the boiling point of water in Celsius?',
      options: ['90°C', '100°C', '110°C', '120°C'],
      correctAnswer: '100°C',
    },
    {
      questionText: 'What is the currency of Japan?',
      options: ['Yen', 'Dollar', 'Euro', 'Won'],
      correctAnswer: 'Yen',
    },
    {
      questionText: 'Who is known as the father of computers?',
      options: ['Charles Babbage', 'Alan Turing', 'John von Neumann', 'Bill Gates'],
      correctAnswer: 'Charles Babbage',
    },
  ];
  

  constructor() { }

  getQuestions(): Question[] {
    return this.questions;
  }

  checkAnswer(question: Question, selectedAnswer: string): boolean {
    return question.correctAnswer === selectedAnswer;
  }
}




export interface Question {
  questionText: string;
  options: string[];
  correctAnswer: string;
}




