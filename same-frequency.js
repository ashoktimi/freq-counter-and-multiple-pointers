// add whatever parameters you deem necessary
function makeFreqCounter(num){
    const arr = num.toString().split('');
    const freqCounter = new Map();
    for(let el of arr){
      const setValue = freqCounter.get(el) || 0;
      freqCounter.set(el, setValue+1);
    }
    return freqCounter;
  }
  function sameFrequency(num1, num2){
    if(num1.length !== num2.length) return false;
    const num1Freq = makeFreqCounter(num1);
    const num2Freq = makeFreqCounter(num2);
    for(let key of num1Freq.keys()){
      if(!num2Freq.has(key)) return false;
      if(num1Freq.get(key) !== num2Freq.get(key)) return false;
      return true;
    }  
}


module.exports = sameFrequency;