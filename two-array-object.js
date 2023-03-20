// add whatever parameters you deem necessary
// function twoArrayObject(arr1, arr2){
//     const freqArray = new Map();
//     let i=0;
//     for(let char of arr1){
//       if(arr1.length >= arr2.length){
//         let setValue = arr2[i] || null
//         freqArray.set(char, setValue);
//         i++;
//       }
//         else{
//         let setValue = arr2[i]
//         freqArray.set(char, setValue);
//         i++;
//       }
//     }
//     return freqArray;
// }

function twoArrayObject(keys, values) {
  return keys.reduce((obj, cur, idx) => {
    obj[cur] = idx < values.length ? values[idx] : null;
    return obj;
  }, {});
}

module.exports = twoArrayObject;