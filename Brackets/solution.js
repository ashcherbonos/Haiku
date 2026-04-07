const
indx = s => c => s.split('').indexOf(c) + 1,
open = indx('{[('), close = indx('}])'),
solution = S => ( stack => (
        S.split('').forEach(s => open(s) && stack.push(open(s)) || close(s) && stack.pop() !== close(s) && stack.push(-1)),
        1 * (stack.length === 0)
    ))([]);
