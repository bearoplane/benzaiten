export function smartSplit(str) {
  // Just return an empty array on any falsy value
  if (typeof str === 'undefined' || !str) return [];

  let chars = str.split('');
  let escaped = false;
  let buffer = '';

  return chars.reduce((ret, char, i) => {
    ret = ret || [];

    switch (char) {
      case '"':
        escaped = !escaped;
        break;
      case ',':
        if (escaped) {
          buffer += char;
        } else {
          ret.push(buffer);
          buffer = '';
        }
        break;
      default:
        buffer += char;
    }

    // If we are at the end of the line, push the buffer.
    if (i === chars.length - 1) {
      ret.push(buffer);
    }

    return ret;
  }, []);
}

export function templater(tpl) {
  return (str) => {
    console.log('hey', tpl, 'str', str);
  }
}
