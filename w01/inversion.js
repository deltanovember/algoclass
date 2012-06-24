var fs = require('fs'),
    _ = require('underscore');
fs.readFile('IntegerArray.txt', 'ascii', function(err, data){
    if(err) throw err;
    var nums = _.map(data.split('\r').slice(0, 100000), function(str) {return parseInt(str, 10);});
    function mergeCount(array1, array2, result) {
        var count = 0, resultPos = 0;
        function incrementResult(value) {
            result[resultPos] = value;            
            resultPos++;
        }
        while (array1.length > 0 || array2.length > 0) {
            if (array1.length === 0) incrementResult(array2.shift());                
            else if (array2.length === 0) incrementResult(array1.shift());
            else if (array1[0] > array2[0]) {
                count+= array1.length;
                incrementResult((array2.shift()));
            } else incrementResult(array1.shift());                             
        }
        return count;        
    }    
    function sortCount(array) {        
        if (array.length <= 1) return 0;
        var mid = parseInt(array.length/2, 10);
        var left = array.slice(0, mid);
        var right = array.slice(mid, array.length);  
        return sortCount(left) + sortCount(right) + mergeCount(left,right, array);
    }
    console.log(sortCount(nums));        
});