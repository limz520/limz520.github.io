---
title: P9457 [入门赛 #14] 魔法少女扶苏 (Hard Version) 题解
published: 2023-07-17
description: 题解
image: ./cover.jpg
tags: [枚举, 题解]
category: OI
draft: false
pinned: false
comment: true
lang: zh-CN      # 仅当文章语言与 config.ts 中的站点语言不同时设置
---
# 题目大意

[传送门](https://www.luogu.com.cn/problem/P9457)

寻找一个 $k$，使所有数减 $k$ 后，大于行和列的和的个数 $x$ 大于 $ans$。

# 思路

我们可以枚举 $k$，一直计算 $x$，直到 $x \ge ans$。

```cpp
#include <iostream>
#include <cmath>
using std::cin;
using std::cout;
const int N = 3e3 + 5;
typedef long long ll;
int n, m, k;
int a[N][N], h[N], l[N];
int main() {
	cin >> n >> m >> k;
	for (int i = 1; i <= n; ++i) {
		for (int j = 1; j <= m; ++j) {
			cin >> a[i][j];
			h[i] += a[i][j];
			l[j] += a[i][j];
		}
	}
	int ans=1;
	while (ans++) {
		int res=0;
		for (int i = 1; i <= n; ++i) 
			for (int j = 1; j <= m; ++j) 
				if (a[i][j] - ans >= h[i] - n * ans + l[j] - m * ans)
					res++;
		if (res >= k) {
			cout<<ans;
			return 0;
		}
	}
	return 0;
}
```
## 但是
可能模拟赛数据比较特殊~~水~~。

这个能过模拟赛但过不了本题，所以我们可以用二分答案去维护。

## 小优化

因为所有数减 $k$ 后，相应的行和列也都会变化，所以我们可以不用去枚举减去 $k$，直接计算出行和列减完 $k$ 后的值。

```cpp
h[i] - n * k + l[j] - m * k
```
