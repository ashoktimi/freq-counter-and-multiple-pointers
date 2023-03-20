// add whatever parameters you deem necessary
function averagePair(arr, target){
  let left = 0;
  let right = arr.length-1;

  while(right > left){
    const avg = (arr[left] + arr[right])/2;
    if(avg === target) return true;
    if(avg > target){
      right --;
    }else
    {
      left ++;
    }
  }
  return false;
}

module.exports = averagePair;