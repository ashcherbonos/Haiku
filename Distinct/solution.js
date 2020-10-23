function solution(A){
  return A.sort().reduce((acc,v,i,{[i+1]:next})=>acc+=v!==next,0);
}
