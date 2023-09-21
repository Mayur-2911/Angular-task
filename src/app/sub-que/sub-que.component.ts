import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-sub-que',
  templateUrl: './sub-que.component.html',
  styleUrls: ['./sub-que.component.css']
})
export class SubQueComponent {
  res: any;
  constructor(private data: DataService) {

  }
  ngOnInit() {
    this.data.getData().subscribe(userData => {
      this.res = userData;
    })
  }
  userAnswers: { [key: string]: string } = {};

  handleAnswer(question: any, selectedAnswer: string) {
    this.userAnswers[question.question] = selectedAnswer;

    for (const subQuestion of question.subQue) {
      subQuestion.show = subQuestion.showIf === selectedAnswer;
    }
  }
}
