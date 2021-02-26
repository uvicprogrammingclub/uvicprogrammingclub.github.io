---
title: "Union Find"
layout: post
---
1. [Union-Find](https://open.kattis.com/problems/unionfind){:target="_blank"}\
Standard Union Find with Path Compression. Make n sets. If the operation is "=" then union set a and b, else check if the root of the set including a, and the root of the set including b are equal.
2. [Association for Control Over Minds](https://open.kattis.com/problems/control){:target="_blank"}\
Keep track of the size of the sets
```
    // Assume we have 3 functions: make_set(), find(int e), union_set(int e1, int e2)

    make_set();

    int n, m, count = 0;
    cin >> n;
    while (n--) {
        cin >> m;
        unordered_set<int> s;
        vector<int> ingredients(m);
        for (auto &i: ingredients){
            cin >> i;
            i = find(i);
            s.insert(i);
        }

        int total = 0;
        for (auto e : s) {
            total += Size[find(e)];
        }

        if (total == m) {
            count++;
            for (int i = 1; i < ingredients.size(); i++) {
                union_set(ingredients[0], ingredients[i]);
            }
        }
    }
    cout << count;
```

