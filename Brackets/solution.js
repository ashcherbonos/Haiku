const
open = s => ['{','[','('].indexOf(s) + 1, 
close = s => ['}',']',')'].indexOf(s) + 1,
solution = (S) => (
    stack => (
        S.split('').forEach(s => open(s) && stack.push(open(s)) || close(s) && stack.pop() !== close(s) && stack.push(-1)),
        1 * (stack.length === 0)
    ))([]);
