class Graph
{
    constructor()
    {
        this.adjancyList = {};
    }
    addVertex(vertex)
    {
        if(!this.adjancyList[vertex]) this.adjancyList[vertex] = [];
    }
    addEdge(vertex1, vertex2)
    {
        this.adjancyList[vertex1].push(vertex2);
        this.adjancyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2)
    {
        this.adjancyList[vertex1] = this.adjancyList[vertex1].filter(el => el !== vertex2);
        this.adjancyList[vertex2] = this.adjancyList[vertex2].filter(el => el !== vertex1);
    }
    removeVertex(vertex)
    {
        while(this.adjancyList[vertex].length)
        {
            let anotherVertex = this.adjancyList[vertex].pop();
            this.removeEdge(vertex, anotherVertex);
        }
        delete this.adjancyList[vertex];
    }
}