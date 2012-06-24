'use strict';

var fs = require('fs');

fs.readFile('IntegerArray.txt', 'ascii', function(err, data){
    if(err) throw err;
  var stringnums = data.split('\r').slice(0, 100000);
  var nums = [];
  for (var i=0; i < stringnums.length; i++) {
    nums.push(parseInt(stringnums[i]));   
  }
  
   // var nums = [2, 4, 1, 3, 5];
   var nums = [2, 4, 3, 5, 1];
  //  var nums = [1,5,4,8,10,2,6,9,12,11,3,7];
  // var nums = [4,3,2,1];
 // var nums = [9,10,8,1,4,7,6,2,5,3];
 //var nums = [];
 //for (var i=10000; i >= 1; i--) {
//     nums.push(i);
// }
   console.log(nums[0], nums[nums.length -1]);
    function mergeCount(left, right, arr) {
        var count = 0;
        var i = 0, j = 0, count = 0;
        while (i < left.length || j < right.length) {
            if (i == left.length) {
                arr[i+j] = right[j];
                j++;
            } else if (j == right.length) {
                arr[i+j] = left[i];
                i++;
            } else if (left[i] <= right[j]) {
                arr[i+j] = left[i];
                i++;                
            } else {
                arr[i+j] = right[j];
                count += left.length-i;
                console.log(left[i], right[j], left.length - i);
                j++;
            }
        }
        return count;
        
    }
    
   // console.log(mergeCount([2], [1, 3]));

    function sortCount(array) {
        
        if (array.length <= 1)
            return 0;
        var split = divideArray(array);
        var left = split.left;
        var right = split.right; 
        var leftCount = sortCount(left);
        var rightCount = sortCount(right); 
       // console.log(mergeCount(left, right));
        var mCount = mergeCount(left,right, array);
        return leftCount + rightCount + mCount;
    }

    console.log(sortCount(nums));
    
    
});

function divideArray(array) {
    var mid = parseInt(array.length/2);
    var left = array.slice(0, mid);
    var right = array.slice(mid, array.length);   
    return {left: left, right: right};
}