---
title: "Shortest Path in a Binary Weight Graph"
layout: post
---
1. [Bridges](https://open.kattis.com/problems/bryr){:target="_blank"}\
Simple BFS does not work because there can be a longer path that has a smaller total weight.\
<br/>
Method 1: 0-1 BFS ($$ O(V + E)$$)\
Use double ended queue (deque) to store a node\
Performing BFS, if an edge has weight=0, then push the node at the front of the deque; if an edge has weight=1, then push back\
While pushing to the deque, we update the distance from the current node to its neighbours (relax each neighbour), which is similar to Dijkstra.
```
    dist[neighbour] = min(dist[neighbour], dist[current] + edge_weight)
```
<br/>
Method 2: Dijkstra ($$ O(VlogV + E) $$)\
This is a more general algorithm to find the shortest path in a non-negative weighted graph.\
Set distance from the source to other vertices to $$\infty$$ and dist[source]=0\
Use a priority queue (pq) to dynamically sort the pair (dist[vertex], vertext) by non-decreasing distance\
While pq is not empty, Dijkstra's algorithm tries to relax each neighbour.
```
    // Reference: Competitive Programming 4
    vector<int> dist(n, INF);
    dist[0] = 0;
    set<pair<int, int>> pq;
    for (int i = 0; i < n; i++)
        pq.emplace(dist[i], i);

    while (!pq.empty()) {
        auto front = *pq.begin();
        int d = front.first, cur = front.second;
        pq.erase(pq.begin());

        for (auto item : graph[cur]) {
            int v = item.first, w = item.second;
            if (dist[cur] + w < dist[v]) {
                pq.erase(pq.find({dist[v], v}));
                dist[v] = dist[cur] + w;
                pq.emplace(dist[v], v);
            }
        }
    }
    cout << dist[n - 1];
```