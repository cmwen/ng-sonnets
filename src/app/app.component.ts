import { Component, OnInit } from '@angular/core';
import { SonnetService } from 'src/services';
import { Sonnet } from 'src/models/sonnet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SonnetService]
})
export class AppComponent implements OnInit {
  title = 'ng-sonnets';
  sonnetModel: Sonnet[];

  constructor(protected sonnetService: SonnetService) {

  }

  ngOnInit(): void {
    this.sonnetModel = this.sonnetService.getSonnets();
  }

  onSonnetChanged(sonnet: Sonnet) {
    this.sonnetModel = this.sonnetService.updateSonnet(sonnet);
  }

  applyFilter(filter: string) {
    this.sonnetModel = this.sonnetService.getSonnets();

    this.sonnetModel = this.sonnetModel.filter(s => s.lines.findIndex(l => l.indexOf(filter) >= 0) >= 0);
  }
}
