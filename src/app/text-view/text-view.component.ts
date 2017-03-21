import { Component, OnInit, OnDestroy } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.css']
})
export class TextViewComponent implements OnInit, OnDestroy {
  current: number;
  textList: string[];

  textBackgroundColor = '#bfbfbf';
  textColor = '#000000';
  backgroundImage = 'http://4kwallpapershd.com/wp-content/uploads/2016/08/Colored-Nebula-In-Space-Large-Image.jpg';
  sub: any;
  id = 'HAMukFBSm6s';

  constructor(
    private textService: TextService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.textList = this.textService.getText();
    this.current = 0;

    this.sub = this.route.params.subscribe(params => {
       this.current = +params['page'] - 1;
    });
  }

  next() {
    const page = this.current + 1;
    if (page < this.textList.length) {
      this.router.navigate(['/read',  page + 1]);
    }
  }

  previous() {
    const page = this.current - 1;
    if (page >= 0) {
      this.router.navigate(['/read',  page + 1]);
    }
  }

  getBackgroundImage() {
    return 'url(' + this.backgroundImage + ')';
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
