import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('contains widescreen source', () => {
  assert.deepEqual(api.fitAspectRatio(1920, 1080, 400, 300), {
    width: 400,
    height: 225,
    scale: 400 / 1920,
  });
});
test('covers target box', () => {
  const result = api.fitAspectRatio(16, 9, 4, 4, 'cover');
  assert.equal(result.width, (4 * 16) / 9);
  assert.equal(result.height, 4);
});
test('preserves source ratio', () => {
  const x = api.fitAspectRatio(3, 2, 100, 100);
  assert.equal(x.width / x.height, 1.5);
});
test('returns unit scale for identical sizes', () => {
  assert.deepEqual(api.fitAspectRatio(10, 20, 10, 20), { width: 10, height: 20, scale: 1 });
});
test('rejects zero dimensions', () => {
  assert.throws(() => api.fitAspectRatio(0, 1, 1, 1), RangeError);
});
test('rejects invalid mode', () => {
  assert.throws(() => api.fitAspectRatio(1, 1, 1, 1, 'stretch'), RangeError);
});
