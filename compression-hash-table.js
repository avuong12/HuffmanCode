// Map characters in T to the frequency the character appares in T.
export function frequencyHashTable(str) {
  const charsFrequency = {};
  for (let i = 0; i < str.length; i++) {
    if (charsFrequency.hasOwnProperty(str[i])) {
      charsFrequency[str[i]] = charsFrequency[str[i]] + 1;
    } else {
      charsFrequency[str[i]] = 1;
    }
  }
  return charsFrequency;
}

//console.log(frequencyHashTable('the quick brown fox jumped over the fence'));
