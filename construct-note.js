// add whatever parameters you deem necessary

// function makeFrequencyCounter(str){
//     const freqCounter = new Map();
//     for(let letter of str){
//         const val = freqCounter.get(letter) || 0;
//         freqCounter.set(letter, val +1);
//     }
//   return freqCounter;
// }

// function constructNote(msg, letters) {
//     const msgFreqCounter = makeFrequencyCounter(msg);
//     const lettersFreqCounter = makeFrequencyCounter(letters);

//     for(let key of msgFreqCounter.keys()){
//       if(!lettersFreqCounter.has(key)) return false;
//       if(lettersFreqCounter.get(key) !== msgFreqCounter.get(key)) return false; 
//       return true;
//     }
// }



function constructNote(message, letters) {
  const lettersFreq = {};
  const messageFreq = {};

  // build frequency counter of letters
  for (let char of letters) {
    lettersFreq[char] = ++lettersFreq[char] || 1;
  }

  // build frequency counter of message
  for (let char of message) {
    messageFreq[char] = ++messageFreq[char] || 1;
  }

  // final comparison of message frequency with letters frequency
  for (let char in messageFreq) {
    if (!lettersFreq[char]) {
      return false;
    }
    if (messageFreq[char] > lettersFreq[char]) {
      return false;
    }
  }

  return true;
}

module.exports = constructNote;