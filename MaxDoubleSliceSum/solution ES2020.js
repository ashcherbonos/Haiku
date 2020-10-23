function solution(A){
    return maxPairSum(prefixSlices(A), sufixSlices(A));
}

const maxPairSum = (A,B) => A.reduce((s,_,i) => max(s, A[i-1] + B[i+1]), -Infinity);
const prefixSlices = A => A.map(a => maxEnding = max(0, maxEnding??-Infinity  + a));
const sufixSlices = A => prefixSlices(A.reverse()).reverse();
const max = (a,b) => Math.max(a??-Infinity, b??-Infinity);
