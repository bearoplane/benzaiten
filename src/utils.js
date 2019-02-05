const UNESCAPED = 'UNESCAPED';
const ESCAPED = 'ESCAPED';

export function smartSplit(str) {
  // Just return an empty array on any falsy value
  if (typeof str === 'undefined' || !str) return [];

  let chars = str.split('');
  let mode = UNESCAPED;
  let buffer = '';

  return chars.reduce((ret, char, i) => {
    ret = ret || [];

    // The quotation mark just toggles ESCAPED mode
    if (char === '"') {
      if (mode === ESCAPED) {
        // ret.push(buffer);
        // buffer = '';
        mode = UNESCAPED;
      } else {
        // buffer += char;
        mode = ESCAPED;
      }
    // An escaped comma is just a character, an unescaped comma is a delimiter
    } else if (char === ',') {
      if (mode === ESCAPED) {
        buffer += char;
      } else {
        ret.push(buffer);
        buffer = '';
      }
    // All other characters just get pushed to the buffer
    } else {
      buffer += char;
    }

    // If we are at the end of the line, push the buffer.
    if (i === chars.length - 1) {
      ret.push(buffer);
    }

    return ret;
  }, []);
}
