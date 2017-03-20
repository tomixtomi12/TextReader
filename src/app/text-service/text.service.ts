import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TextService {
  private text = [];

  constructor() { }

  setText(text: string) {
    this.text.length = 0;

    const tokens = text.split(' ');

    console.log(tokens);

    let buffer = '';
    for (let i = 0; i < tokens.length; i++) {
      buffer += tokens[i] + ' ';
      if (i % 80 === 0 && i !== 0) {
        this.text.push(buffer);
        buffer = '';
        console.log(buffer);
      }
    }

    localStorage.setItem('reader', JSON.stringify(this.text));
  }

  getText(): string[] {
    if (this.text.length === 0) {
      this.text = JSON.parse(localStorage.getItem('reader'));
    }

    return this.text;
  }
}
