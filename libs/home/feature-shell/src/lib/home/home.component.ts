import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Topic } from '@portfolio/data/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  topics$: Observable<Topic[]>;

  constructor(private translate: TranslateService) {
    this.topics$ = this.translate.get('home.topics');
  }

  ngOnInit() {}

  getImage(path: string): string {
    return `assets/images/${path}`;
  }

  isOdd(index: number): boolean {
    return index % 2 !== 0;
  }
}
