var validPath = function (n, edges, source, destination) {
    let set1 = new Set();
    set1.add(source);

    if (edges.length === 0) {
        return true;
    }

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < edges.length; i++) {
            if (set1.has(edges[i][0])) {
                set1.add(edges[i][1]);
            } else if (set1.has(edges[i][1])) {
                set1.add(edges[i][0]);
            }
            if (set1.has(destination)) {
                return true;
            }
        }
    }

    return false;
};  