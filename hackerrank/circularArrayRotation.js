
// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
    for(let i = 0; i<k; i++) {      
       a.unshift(a.pop())
    }
   return queries.map(q=>a[q]);
}
