import { Pipe, PipeTransform } from '@angular/core';
import { Sonnet } from 'src/models/sonnet';

@Pipe({
  name: 'sonnetFilter'
})
export class SonnetFilterPipe implements PipeTransform {
  transform(value: Sonnet[], filter: string): any {
    return value.filter(
      s => s.lines.findIndex(l => l.indexOf(filter) >= 0) >= 0
    );
  }
}
