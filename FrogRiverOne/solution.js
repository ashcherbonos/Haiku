function solution(X,A){
    const {length, [length - 1]: last} = [...new Set(A)];
    return (length < X) ? -1 : A.indexOf(last);
}
