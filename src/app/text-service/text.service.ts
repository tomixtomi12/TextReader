import { Injectable } from '@angular/core';

@Injectable()
export class TextService {
    text: any;

  constructor() { }

  setText(text) {
    this.text = text;
  }

  getText() {
    return this.text;
  }

  getTextList() {
    return [[this.text]];
  }
}
