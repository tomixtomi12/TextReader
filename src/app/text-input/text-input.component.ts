import { Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  text: string;

  constructor(
    private textService: TextService,
    private router: Router
  ) { }

  ngOnInit() {
    this.textService.setText('Test text');
  }

  startReading() {
    this.textService.setText(this.text);
    this.router.navigate(['/read', 1]);
  }
}
