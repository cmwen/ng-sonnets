import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Sonnet } from 'src/models/sonnet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SonnetStore {
  SONNET_KEY = 'sonnet.service.key';
  SONNET_JSON_URL = 'assets/shakespearesSonnets.json';

  private _sonnets: BehaviorSubject<Sonnet[]> = new BehaviorSubject([]);

  public readonly sonnets: Observable<Sonnet[]> = this._sonnets.asObservable();

  constructor(protected storageService: StorageService, protected httpClient: HttpClient) {
    this.initSonnets();
  }

  initSonnets() {
      const rawSonnets = this.storageService.get(this.SONNET_KEY);
      if (rawSonnets) {
        this._sonnets.next(JSON.parse(rawSonnets));
      } else {
        this.httpClient.get<Sonnet[]>(this.SONNET_JSON_URL).subscribe((data: Sonnet[]) => this._sonnets.next(data));
      }
  }

  updateSonnet(sonnet: Sonnet) {
    const existSonnetIndex = this._sonnets.getValue().findIndex( s => s.number === sonnet.number);
    if (existSonnetIndex >= 0) {
      this._sonnets.getValue()[existSonnetIndex] = sonnet;
      this._sonnets.next(this._sonnets.value);
      this.saveToStorage(this._sonnets.getValue());
    } else {
      console.error(`Cannot find sonnet ${sonnet.number} in storage. Dropping sonnet ${sonnet.number}`);
    }
  }

  saveToStorage(sonnets: Sonnet[]) {
    this.storageService.set(this.SONNET_KEY, JSON.stringify(sonnets));
  }
}
