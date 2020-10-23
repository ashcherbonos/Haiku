function solution(A){
    let edges = [], intersectionsLimit = 10E6, intersections = activeCircles = 0;
    A.forEach((r,c) => edges.push({i:c-r, start:true},{i:c+r, start:false}));
    edges.sort((a,b)=>(a.i-0.1*a.start)-(b.i-0.1*b.start));
    for(let e of edges){
        intersections += e.start && activeCircles;
        activeCircles += e.start ? 1 : -1;
        if(intersections > intersectionsLimit) return -1;
    };
    return intersections;
}
