'use strict';

var fs = require('fs');

fs.readFile('IntegerArray.txt', 'ascii', function(err, data){
    if(err) throw err;
  var A = data.split('\r').slice(0, 100000);
var counter = 0;
var n = A.length;
for(var i = 0; i < n - 1; i++)
{
    for(var j = i+1; j < n; j++)
    {
        if( A[i] > A[j] )
        {
            counter++;
        }
    }
}

console.log(counter);
    
});

