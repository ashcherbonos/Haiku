const solution = (A,K) => (K%=A.length,[...A.slice(-K),...A.slice(0,-K)]);
