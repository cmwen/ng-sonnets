import { SonnetFilterPipe } from './sonnet-filter.pipe';

describe('SonnetFilterPipe', () => {
  const MOCK_SONNETS = [
    { number: 1, lines: ['sonnet one'] },
    { number: 2, lines: ['sonnet two'] }
  ];

  it('create an instance', () => {
    const pipe = new SonnetFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return sonnet that contains the keyword', () => {
    const pipe = new SonnetFilterPipe();

    expect(pipe.transform(MOCK_SONNETS, 'sonnet').length).toBe(2);
    expect(pipe.transform(MOCK_SONNETS, 'one').length).toBe(1);
    expect(pipe.transform(MOCK_SONNETS, 'one')[0].number).toBe(1);
    expect(pipe.transform(MOCK_SONNETS, 'two').length).toBe(1);
    expect(pipe.transform(MOCK_SONNETS, 'two')[0].number).toBe(2);
  });

  it('should return original sonnets if keyword is empty', () => {
    const pipe = new SonnetFilterPipe();

    expect(pipe.transform(MOCK_SONNETS, '').length).toBe(2);
    expect(pipe.transform(MOCK_SONNETS, null).length).toBe(2);
    expect(pipe.transform(MOCK_SONNETS, undefined).length).toBe(2);
  });
});
