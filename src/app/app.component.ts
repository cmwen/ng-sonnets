import { Component, OnInit } from '@angular/core';
import { SonnetStore } from 'src/services';
import { Sonnet } from 'src/models/sonnet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SonnetStore]
})
export class AppComponent implements OnInit {
  title = 'ng-sonnets';
  sonnetModel: Sonnet[];

  filteredSonnets;

  constructor(public sonnetStore: SonnetStore) {

  }

  ngOnInit(): void {
  }

  onSonnetChanged(sonnet: Sonnet) {
   this.sonnetStore.updateSonnet(sonnet);
  }
}
