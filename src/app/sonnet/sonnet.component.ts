import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Sonnet } from 'src/models/sonnet';
@Component({
  selector: 'app-sonnet',
  templateUrl: './sonnet.component.html',
  styleUrls: ['./sonnet.component.scss']
})
export class SonnetComponent implements OnInit {
  @Input()
  sonnetModel: Sonnet;
  @Output()
  changed = new EventEmitter<Sonnet>();

  _sonnetModel: Sonnet;

  constructor() {}

  ngOnInit() {
    this._sonnetModel = {
      number: this.sonnetModel.number,
      lines: this.sonnetModel.lines.slice(0)
    };
  }

  onLineChanged(lineNumber: number, newLine: String) {
    this._sonnetModel.lines[lineNumber] = newLine;
    this.changed.emit(this._sonnetModel);
  }
}
