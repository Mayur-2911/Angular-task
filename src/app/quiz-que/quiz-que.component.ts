import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-quiz-que',
  templateUrl: './quiz-que.component.html',
  styleUrls: ['./quiz-que.component.css']
})
export class QuizQueComponent {
  res: any;
  selectedAnswer: string = "";


  constructor() {

  }
  ngOnInit() {

  }
  @Input() question: any;
  @Output() answer = new EventEmitter<string>();

  submitAnswer(selectedAnswer: string) {
    this.answer.emit(selectedAnswer);
  }
}
