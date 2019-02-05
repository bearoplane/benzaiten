import { smartSplit } from './utils';

const simpleCSV = 'title,author';
const escapedCSV = '"title,","author"';
const blankCSV = '';

it('splits a basic CSV', () => {
  let split = smartSplit(simpleCSV);

  expect(split).toEqual(['title', 'author']);
});

it('splits a CSV with escaped characters', () => {
  let split = smartSplit(escapedCSV);

  expect(split).toEqual(['title,', 'author']);
});

it('returns an empty array for an empty string', () => {
  let split = smartSplit(blankCSV);

  expect(split).toEqual([]);
});

it('returns an empty array for a null string', () => {
  let split = smartSplit(null);

  expect(split).toEqual([]);
});

it('returns an empty array for an undefined string', () => {
  let split = smartSplit();

  expect(split).toEqual([]);
});
