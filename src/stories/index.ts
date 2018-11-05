import { storiesOf } from '@storybook/angular';
import {
  boolean,
  number,
  text,
  object,
  withKnobs
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { SonnetComponent } from '../app/sonnet/sonnet.component';
import {
  MatButtonModule,
  MatListModule,
  MatInputModule,
  MatCardModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

storiesOf('Sonnet Component', module)
  .addDecorator(withKnobs)
  .add('Sonnet one', () => ({
    component: SonnetComponent,
    moduleMetadata: {
      imports: [
        CommonModule,
        MatButtonModule,
        MatListModule,
        MatInputModule,
        MatCardModule,
        BrowserAnimationsModule
      ]
    },
    props: {
      sonnetModel: object('model', {
        number: '1',
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
      }),
      changed: action('changed')
    }
  }));
