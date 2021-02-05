---
title: "C++, GDB Lecture and Valid Subsets Problem"
layout: post
---
1. Introduction to [C++](https://github.com/uvicprogrammingclub/Code/blob/main/fill.cc){:target="_blank"} and [GDB](../assets/resources/GDBCheatSheet.pdf){:target="_blank"}\
Chickens and Zombies problem
2. [Geppetto](https://open.kattis.com/problems/geppetto){:target="_blank"}\
Method 1: Bitmask ($$ O(2^{n}m) = O(2^{n}n^{2})$$)
```
    int main() {
        int n, m, a, b;
        cin >> n >> m;
        unordered_set<int> masks;
        for (int i = 0; i < m; i++) {
            cin >> a >> b;
            a--; b--;
            masks.insert((1 << a) | (1 << b));
        }

        int count = 0;
        for (int i = 0; i < (1 << n); i++) {
            bool ok = true;
            for (auto m : masks) {
                if ((i & m) == m) {
                    ok = false;
                    break;
                }
            }

            if (ok)
                count++;
        }

        cout << count;
        return 0;
    }
```
Method 2: Backtracking ($$ O(2^{n}n)$$)\
Choose or not choose. If choose, then don't put the ingredients that conflict
```
    int n, m;
    bool adj[maxn][maxn];
    int cnt_out[maxn];
    int res = 0;
    
    void go(int idx)
    {
        if(idx == n+1)
        {
            ++res;
            return;
        }
        // do not choose this
        go(idx + 1);
        // try to choose this
        if(cnt_out[idx] == 0)
        {
            for(int j = idx + 1; j <= n; ++j)
            {
                if( adj[idx][j] )
                {
                    cnt_out[j] += 1;
                }
            }
            go(idx + 1);
            // undo
            for(int j = idx + 1; j <= n; ++j)
            {
                if( adj[idx][j] )
                {
                    cnt_out[j] -= 1;
                }
            }
        }
    }
    
    int main()
    {
        cin >> n >> m;
        int u, v;
        for(int i = 0; i < m; ++i)
        {
            cin >> u >> v;
            adj[u][v] = adj[v][u] = true;
        }
        go(1);
        cout << res;
        return 0;
    }
```