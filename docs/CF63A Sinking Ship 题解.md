---
title: CF63A Sinking Ship 题解
published: 2023-01-30
description: 题解
image: ./cover.jpg
tags: [结构体, 题解]
category: OI
draft: false
pinned: false
comment: true
lang: zh-CN      # 仅当文章语言与 config.ts 中的站点语言不同时设置
---
## 前置知识 
### 	结构体+sort

## 题目大意
有4种等级，分别为：老鼠，妇女，儿童，男人，和船长。

其中妇女和儿童优先级一样
## 思路

我们可以用结构体来存储他们的信息，然后排序，最后输出

**(**如果根据上述指示有某两个人的优先性相同则标号小的先撤离。**)**

为了便于排序 我们可以为等级作编号 如

```cpp
if (a[i].s=="rat") a[i].i=1;
if (a[i].s=="woman"||a[i].s=="child")a[i].i=2;//妇女和孩子优先级一样
if (a[i].s=="man") a[i].i=3;
if (a[i].s=="captain") a[i].i=4;
```
和
```cpp
a[i].id=i;//所有人都有标号1~n(输入的顺序就是标号)。

```
排序
```cpp
bool cmp(node a,node b) {
	if (a.i==b.i) return a.id<b.id;
	return a.i<b.i;
}
```
### 完整代码
```cpp
#include <iostream>
#include <algorithm>
using namespace std;
int n;
struct node {
	string s,name;
	int i,id;
}a[10001];
bool cmp(node a,node b) {
	if (a.i==b.i) return a.id<b.id;
	return a.i<b.i;
}
int main() {
	cin>>n;
	for (int i=1;i<=n;i++) {
		cin>>a[i].name>>a[i].s;
		a[i].id=i;
		if (a[i].s=="rat") a[i].i=1;
		if (a[i].s=="woman"||a[i].s=="child") a[i].i=2;
		if (a[i].s=="man") a[i].i=3;
		if (a[i].s=="captain") a[i].i=4;
	}
	sort(a+1,a+1+n,cmp);
	for (int i=1;i<=n;i++)
		cout<<a[i].name<<endl;
	return 0;
}
```