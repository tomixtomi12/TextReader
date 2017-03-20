import { Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';

@Component({
  selector: 'app-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.css']
})
export class TextViewComponent implements OnInit {
  current: number;
  textList: string[];

  constructor(
    private textService: TextService
  ) { }

  ngOnInit() {
    this.textList = this.textService.getText();
    console.log(this.textList);
    this.current = 0;
  }

  next() {
    if (this.current + 1 < this.textList.length - 1) {
      this.current++;
    }
  }

  previous() {
    if (this.current - 1 >= 0) {
      this.current--;
    }
  }
}
