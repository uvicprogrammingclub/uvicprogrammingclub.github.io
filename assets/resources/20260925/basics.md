---
theme: apple-basic
colorSchema: light
title: Introduction
info: 'CSC 330 course slides'
transition: none
comark: true
aspectRatio: '4:3'
canvasWidth: 1000
# lineNumbers: false
# monaco: true
presenter: true
currentPage: true
---

# Some links

- https://usaco.training/
- https://usaco.guide/
- https://cpbook.net/
- https://open.kattis.com/
- https://www.acmicpc-pacnw.org/


---
layout: iframe
url: https://usaco.training
---

---

# Last year's ICPC problems

Div. 2 intersting problems:
- D: Honkai Stress Relief
- G: Bouquet of Balloons (we did not solve this one!)
- H: Fractal Painting (did not even attempt)
- K: Solidarity of the Happy Cats (did not even attempt)
- M: Triangle of Triangles

---
layout: iframe-left
url: https://pnw.na.icpc.global/problems/2025/solutions/D-Honkaistressrelief-2/D-Honkaistressrelief-2.pdf
---

# Honkai Stress relief

<v-clicks>

- Given an interval $(a, b)$ and $n$ intervals $(s_i , e_i)$, compute the
  probability that if we sample a value independently and uniformly at
  random from $(a, b)$ for each of the given $n$ intervals, at least one of
  the sampled values will be outside its corresponding intervals

<!-- -- -->

- Solution:
  - Intersection length: $L_i=\max(0,\min(e_i,b)-\max(s_i,a))$
  - Then: $P(\text{relaxed on day }i)=\frac{L_i}{b-a}$
  - Independence: $P(\text{at least one stressed}) = 1-\prod_i \frac{L_i}{b-a}$

```python
n, a, b = list(map(int, input().split()))
p = 1.0
for _ in range(n):
    s, e = list(map(int, input().split()))
    p *= (max(0, min(b, e) - max(a, s))) / (b - a)
print(1.0 - p)
```

</v-clicks>

---
layout: iframe-left
url: https://pnw.na.icpc.global/problems/2025/solutions/G-Bouquetofballoons-2/G-Bouquetofballoons-2.pdf
---

# Bouquet of Balloons

<v-clicks>

- You're competing in a contest where problem $i$ takes $s_i$ minutes to
  solve. You get a balloon with one liter of helium that deflates at the
  rate $1/d$ liters per minute. If your goal is to have balloons that
  aggregate to at least m liters of helium, compute the minimum
  number of problems to solve to attain this, or report it is impossible.

<!--  -->

- Solution:
  - If it is possible to do it by solving $k$ problems, you can do it by solving
    the problems with the $k$ smallest solve times

```py
n, d, m = map(int, input().split())
times = sorted(map(int, input().split()))
m *= d  # to avoid 1/d issues
elapsed = val = 0
for i in range(n):
	val += d - elapsed
	if val >= m:
		print(i + 1)
		break
	elapsed += times[i]
else:
	print(-1)
```

</v-clicks>


---
layout: iframe-left
url: https://pnw.na.icpc.global/problems/2025/solutions/H-Fractalpainting-2/H-Fractalpainting-2.pdf
---

<v-clicks>

# Fractal Painting

- An infinite fractal is set up where a segment has two outgoing
  segments drawn out of it, and each of the outgoing segments
  recursively has similar outgoing segments going out of it. Determine if
  the infinite fractal fits in a finite size rectangle.

<!--  -->

- Solution: the infinite fractal extends infinitely in the following cases (whiteboard)

```py
t = int(input())
for _ in range(t):
    x0, y0, x1, y1, x2, y2 = \
        list(map(int, input().split()))
    d0 = x0**2 + y0**2
    d1 = (x1 - x0)**2 + (y1 - y0)**2
    d2 = (x2 - x0)**2 + (y2 - y0)**2
    ok = True
    if d1 == d0 and d2 == d0:
        ok = False
    if d1 > d0 or \
       (d1 == d0 and x1 == 2*x0 and y1 == 2*y0):
        ok = False
    if d2 > d0 or \
       (d2 == d0 and x2 == 2*x0 and y2 == 2*y0):
        ok = False
    print("YES" if ok else "NO")
```

</v-clicks>


---
layout: iframe-left
url: https://pnw.na.icpc.global/problems/2025/solutions/K-Solidarityofthehappycats-2/K-Solidarityofthehappycats-2.pdf
---

<v-clicks>

# Solidarity of the Happy Cats

- Given some wires that must be in a fixed relative order and distance
  constraints between pairs of wires, determine the minimum distance
  that the leftmost and rightmost wire can be from each other.

<!--  -->

- Solution: DP / brute-force (as $N$ is too small!)
  - Suppose previous wire `j` is at `pos[j]`. If distance $>R$, then current wire `i` must satisfy
    $pos[i]\ge pos[j]+R+1$
  - Since wire order cannot change, the optimal strategy is to place every new wire at the leftmost position satisfying every constraint with previous wires: $pos[i] = \max_j(pos[j]+\text{required separation}_{j,i})$

</v-clicks>

---
layout: iframe-left
url: https://pnw.na.icpc.global/problems/2025/solutions/M-Triangleoftriangles-2/M-Triangleoftriangles-2.pdf
---

<v-clicks>

# Triangle of Triangles

- Given a triangle $T$ and two triangles $T_1$ and $T_2$, is it possible to draw
  a line segment on $T$ that splits the triangle into two subtriangles, both
  of which are similar to either $T_1$ or $T_2$?

<!--  -->

- Solution: brute-force!

```python
from itertools import permutations, chain
def check(t, t1, t2):
    for a, b, c in permutations(t):
        for ap, bp, cp in chain(permutations(t1),
                                permutations(t2)):
            for app, bpp, cpp in chain(
                permutations(t1), permutations(t2)
            ):
                if (ap + app == a
                    and bp + bpp == 180
                    and cp == b
                    and cpp == c):
                    return True
    return False

t = int(input())
for i in range(t):
    t = list(map(int, input().split()))
    t1 = list(map(int, input().split()))
    t2 = list(map(int, input().split()))
    print("YES" if check(t, t1, t2) else "NO")
```

</v-clicks>

---

Now Div 2 is mostly done!

---
layout: iframe-left
url: https://pnw.na.icpc.global/problems/2025/solutions/C-Closestequalpair-1/C-Closestequalpair-1.pdf
---

<v-clicks>

# Div 1:  Closest Equal Pair

- Define $f (a)$ on an array $a$ to be zero if all elements in a are distinct.
  Otherwise, define it to be the minimum value of $j − i$ where $i < j$ and
  $a_i = a_j$ . Given an array of $n$ integers, compute the sum of $f$ over all
  subarrays.

<!--  -->

- Solution: sweeping + stack
  - Make sure to remove overlaps!

```python
n = 5
v = [1, 3, 2, 1, 2]
result = 0
lhs = [1_000_000_000] * (n+1)
stack = [(-1, -1)]
contrib = 0
for i in range(n):
    if lhs[v[i]] < i:
        curr = (i - lhs[v[i]], lhs[v[i]])
        while curr[0] <= stack[-1][0]:
            x, idx = stack.pop()
            contrib -= x * (idx - stack[-1][1])
        if lhs[v[i]] > stack[-1][1]:
            contrib += curr[0] * \
                    (lhs[v[i]] - stack[-1][1])
            stack.append(curr)
    lhs[v[i]] = i
    result += contrib
print(result)
```

</v-clicks>


---

# Other topics

- Bitmasks: https://visualgo.net/en/bitmask
- Binary searches
- Binary Search Trees
- Divide & conquer

---

# Next time

- Segment trees
- Union find trees
- Fenwick trees (advanced!)
