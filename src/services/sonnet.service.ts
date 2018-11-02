import { Injectable } from '@angular/core';
import { StorageService } from './storage-service.service';
import { Sonnet } from 'src/models/sonnet';

@Injectable({
  providedIn: 'root'
})
export class SonnetService {
  SONNET_KEY = 'sonnet.service.key';

  _sonnets: Sonnet[];

  constructor(protected storageService: StorageService) {}

  initSonnets() {
    if (!this._sonnets) {
      const rawSonnets = this.storageService.get(this.SONNET_KEY);
      if (rawSonnets) {
        this._sonnets = JSON.parse(rawSonnets);
      } else {
        // TODO load from default
        this._sonnets = [
          {
            number: 1,
            lines: [
              'From fairest creatures we desire increase,',
              'That thereby beauty\'s rose might never die,',
              'But as the riper should by time decease,',
              'His tender heir might bear his memory:',
              'But thou contracted to thine own bright eyes,',
              'Feed\'st thy light\'s flame with self-substantial fuel,',
              'Making a famine where abundance lies,',
              'Thy self thy foe, to thy sweet self too cruel:',
              'Thou that art now the world\'s fresh ornament,',
              'And only herald to the gaudy spring,',
              'Within thine own bud buriest thy content,',
              'And tender churl mak\'st waste in niggarding:',
              'Pity the world, or else this glutton be,',
              'To eat the world\'s due, by the grave and thee.'
            ]
          },
          {
            number: 2,
            lines: [
              'When forty winters shall besiege thy brow,',
              'And dig deep trenches in thy beauty\'s field,',
              'Thy youth\'s proud livery so gazed on now,',
              'Will be a tatter\'d weed of small worth held: ',
              'Then being asked, where all thy beauty lies,',
              'Where all the treasure of thy lusty days; ',
              'To say, within thine own deep sunken eyes,',
              'Were an all-eating shame, and thriftless praise.',
              'How much more praise deserv\'d thy beauty\'s use,',
              'If thou couldst answer \'This fair child of mine',
              'Shall sum my count, and make my old excuse,\'',
              'Proving his beauty by succession thine!',
              'This were to be new made when thou art old,',
              'And see thy blood warm when thou feel\'st it cold.'
            ]
          }
        ];
      }
    }
  }

  getSonnets(): Sonnet[] {
    this.initSonnets();
    return this._sonnets;
  }

  updateSonnet(sonnet: Sonnet): Sonnet[] {
    this.initSonnets();

    const existSonnetIndex = this._sonnets.findIndex( s => s.number === sonnet.number);
    if (existSonnetIndex >= 0) {
      this._sonnets[existSonnetIndex] = sonnet;
      this.saveToStorage(this._sonnets);
    } else {
      console.error(`Cannot find sonnet ${sonnet.number} in storage. Dropping sonnet ${sonnet.number}`);
    }

    return this._sonnets;
  }

  saveToStorage(sonnets: Sonnet[]) {
    this.storageService.set(this.SONNET_KEY, JSON.stringify(sonnets));
  }
}
