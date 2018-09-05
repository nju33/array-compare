import {arrayCompare} from './array-compare';

describe('arrayCompare', () => {
  test('', () => {
    const result = arrayCompare(['foo', 'bar', 'baz'], ['foo', 'bar', 'bazz']);

    expect(result.length).toBe(3);
    expect(result[0]).toMatchObject({equal: true, a: 'foo', b: 'foo'});
    expect(result[2]).toMatchObject({equal: false, a: 'baz', b: 'bazz'});
  });
});
