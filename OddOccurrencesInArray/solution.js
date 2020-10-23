function solution(A){
  return A.reduce((acc, e) => acc ^= e, 0);
}
