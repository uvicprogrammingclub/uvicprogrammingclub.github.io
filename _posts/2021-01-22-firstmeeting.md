---
title: "First meeting"
layout: post
---
1. [Hello World!](https://open.kattis.com/problems/hello){:target="_blank"}
2. [The Easiest Problem Is This One](https://open.kattis.com/problems/easiest){:target="_blank"}\
Summing digits of integer n:\
Method 1: math
```
    sum = 0
    while n != 0:
        sum = sum + n % 10
        n = floor(n / 10)
```
Method 2: convert to string
```
    sum = 0
    s = to_string(n)
    for each char c in s:
        sum += int(c)
```
3. [Beat the Spread!](https://open.kattis.com/problems/beatspread){:target="_blank"}
```
    if s < d or (s + d) % 2 != 0:
        print("impossible")
    else:
        print((s + d) / 2, (s - d) / 2)
```
4. [Palindrome Substring](https://open.kattis.com/problems/palindromesubstring){:target="_blank"}\
Idea: expand around substrings, 2 possible cases: odd length (get a 3 letter substring then expand) or even length (get a 2 letter substring then expand). My solution took 0.13s for C++ and 0.44s for Python. If anyone has a better solution, please share it to the club.
```
    function add_palindrome_substring(s, l, r, substrings):
        while l >= 0 and r < s.length and s[l] == s[r]:
            substrings.add(substring of s from position l to r)
            l -= 1
            r += 1

    s = input()
    n = s.length
    substrings = set()
    for i = 0 -> n:
        if i + 1 < n:
            add_palindrome_substring(s, i, i + 1, substrings)
        if i + 2 < n:
            add_palindrome_substring(s, i, i + 2, substrings)
```