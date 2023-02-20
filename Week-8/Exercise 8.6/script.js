var allPathsSourceTarget = function (graph) {
    let n = graph.length;
    let output = [];
    let path = [0];

    pathFromIndex(0);

    function pathFromIndex(index) {
        let next = graph[index];
        for (let i = 0; i < next.length; i++) {
            path.push(next[i]);
            if (next[i] === n - 1) {
                let temp = [...path];
                output.push(temp);
                path.pop();
            } else {
                pathFromIndex(next[i]);
            }
        }
        path.pop();
    }

    return output;
};

var graph = [[1], []];

console.log(allPathsSourceTarget(graph));