import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { SonnetComponent } from '../app/sonnet/sonnet.component';

storiesOf('Sonnet Component', module)
  .add('with some emoji', () => ({
    component: SonnetComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));
