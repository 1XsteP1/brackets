module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length;) {
    let bracket = bracketsConfig[i].join('');

    if (str.includes(bracket)) {
        str = str.replace(bracket, '');
        i = 0;
    } else {
      i++;
    }
  }

  return str.length ? false : true;
}
