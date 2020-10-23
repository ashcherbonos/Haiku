function solution(A){
    return maxPairSum(prefixSlices(A), sufixSlices(A));
}

const maxPairSum = (A,B) => A.reduce((acc,_,i) => max(acc, A[i-1] + B[i+1]), -Infinity);
const prefixSlices = A => A.map(a => maxEnding = max(0, maxEnding + a), maxEnding = - Infinity);
const sufixSlices = A => prefixSlices(A.reverse()).reverse();
const max = (a,b) => Math.max(nan2inf(a), nan2inf(b));
const nan2inf = a => !isNaN(a)?a:-Infinity;
