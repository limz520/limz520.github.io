---
title: 集训笔记
published: 2023-04-29
description: 笔记
image: ./cover.jpg
tags: [笔记]
category: OI
draft: false
pinned: false
comment: true
lang: zh-CN      # 仅当文章语言与 config.ts 中的站点语言不同时设置
---
# 20230128
	## STL

### 	vector
        
![vector](https://img-blog.csdnimg.cn/img_convert/26494408bf8516ed012409f0a0127f2b.png)

### 	queue

		push() 在队尾插入一个元素

		pop() 删除队列第一个元素

		size() 返回队列中元素个数

		empty() 如果队列空则返回true
        
		front() 返回队列中的第一个元素

		back() 返回队列中最后一个元素

### 	iterator
![iterator](https://img-blog.csdnimg.cn/img_convert/d5c3f1c28583919e9686dce526d94866.png)

### 	deque

		deque<int> dq; //定义一个储存整型变量的双端队列dq
  
		deque双端插入和删除操作
  
		push_back(elem);//在容器尾部添加一个数据
  
		push_front(elem);//在容器头部插入一个数据
  
		pop_back();//删除容器最后一个数据
  
		pop_front();//删除容器第一个数据
  
		at(idx);//返回索引idx所指的数据，如果idx越界，抛出out_of_range。
  
		operator[];//返回索引idx所指的数据，如果idx越界，不抛出异常，直接出错。
  
		front();//返回第一个数据。
  
		back();//返回最后一个数据
  
 
  
		在pos位置插入一个elem
  
		d2.insert(d2.begin(), elem);
  
		deque.size();//返回容器中元素的个数
  
		deque.empty();//判断容器是否为空

### 	Priority_queue
  
		empty( )  //判断一个队列是否为空
        
		pop( )  //删除队顶元素

		push( )  //加入一个元素

		size( )  //返回优先队列中拥有的元素个数

		top( )  //返回优先队列的队顶元素
  
### 	set
    
		insert(x) 当容器中没有等价元素的时候，将元素 x 插入到 set 中。
        
		erase(x) 删除值为 x 的 所有 元素，返回删除元素的个数。
        
		erase(pos) 删除迭代器为 pos 的元素，要求迭代器必须合法。
        
		erase(first,last) 删除迭代器在 [first,last) 范围内的所有元素。
        
		clear() 清空 set。
 
### 	map
  
		erase(key) 函数会删除键为 key 的 所有 元素。返回值为删除元素的数量。
        
		erase(pos): 删除迭代器为 pos 的元素，要求迭代器必须合法。
        
		erase(first,last): 删除迭代器在 [first,last) 范围内的所有元素。
        
		clear() 函数会清空整个容器。

### 	ST表(倍增思想)

### 	迭代式搜索
		弥补DFS和BFS的缺陷
# 20230129
	# 树状数组
### 原理

![](https://oi-wiki.org/ds/images/fenwick.svg)

#### 区间查询

```cpp
int getsum(int x) {  // a[1]..a[x]的和
  int ans = 0;
  while (x > 0) {
    ans = ans + c[x];
    x = x - lowbit(x);
  }
  return ans;
}
```
#### 单点修改

```cpp
void add(int x, int k) {
  while (x <= n) {  // 不能越界
    c[x] = c[x] + k;
    x = x + lowbit(x);
  }
}
```
#### 建树
```cpp
void init()//初始化{
  memset(c,0,sizeof(c));
    for(int i=1;i<=n;i++)
      for(int j=i-lowbit(i)+1;j<=i;j++)
        c[i]=c[i]+s[j];
}
```
#### 区间查询

```cpp
void add(ll s,ll num){
  for(ll i=s;i<=n;i+=lowbit(i))  
    tree[i]+=num;//树状数组维护差分修改
}


```

#### 单点查询
```cpp
int ask(int s){
  int ans=0;
    for(ll i=s;i>=1;i-=lowbit(i)) 
      ans+=tree[i];//寻找差分的标记 
  return ans;
}
```
#### lowbit原理

将 x 的二进制所有位全部取反，再加 1，就可以得到 -x 的二进制编码。例如，6 的二进制编码是 110，全部取反后得到 001，加 1 得到 010。

设原先 x 的二进制编码是 (...)10...00，全部取反后得到 [...]01...11，加 1 后得到 [...]10...00，也就是 -x 的二进制编码了。这里 x 二进制表示中第一个 1 是 x 最低位的 1。

(...) 和 [...] 中省略号的每一位分别相反，所以 x & -x = (...)10...00 & [...]10...00 = 10...00，得到的结果就是 lowbit。

   

# 20230430

[树屋阶梯](https://www.luogu.com.cn/problem/P2532)

### [球迷购票问题](https://www.luogu.com.cn/problem/P1754)
	卡特兰数模板题

### [鸡蛋饼](https://www.luogu.com.cn/problem/P1976)
	卡特兰数模板题

### [矩阵 II](https://www.luogu.com.cn/problem/P1722)
	卡特兰数模板题
### [模板卢卡斯定理/Lucas 定理](https://www.luogu.com.cn/problem/P3807)
	快速幂+逆元
###  [NOIP2016 普及组 回文日期](https://www.luogu.com.cn/problem/P2010)
	模拟

### [糖果](https://www.luogu.com.cn/problem/P9226)

### [最大子段和](https://www.luogu.com.cn/problem/P1115)

### [P1495 【模板】中国剩余定理（CRT）/ 曹冲养猪](https://www.luogu.com.cn/problem/P1495)
	主函数部分弄懂了，但exgcd有几行不懂，问的zn同学
  
[P3372 【模板】线段树 1](https://www.luogu.com.cn/problem/P3372)

	复习了一下线段树
    
# 20230430

[P1135 奇怪的电梯](luogu.com.cn/problem/P1135)

	深搜一直MLE，加优化后好了
    
[P9301 [CCC 2023 J3] Special Event](luogu.com.cn/problem/P9301)
	
	模拟
    
[P3372 【模板】线段树 1](https://www.luogu.com.cn/problem/P3372)

	复习，理解了区间加
    
[P2613 【模板】有理数取余](luogu.com.cn/problem/P2613)

	费马小定理：a^phi(p)≡1(mod p)a,p互质
    +
    快速幂：二进制
    
[P3373 【模板】线段树 2](luogu.com.cn/problem/P3373)

	打了一遍，不太懂懒标记，要开long long，不然只有30
    注：先乘后加，4倍空间
# 20230502   
    
[P2023 [AHOI2009] 维护序列](https://www.luogu.com.cn/problem/P2023)

	线段树2模板题
    
[P9228 原神](https://www.luogu.com.cn/problem/P9228)

	模拟
    
[P3385 【模板】负环](luogu.com.cn/problem/P3385)

	复习了SPFA
 
# 20230612-20230618
[传纸条](https://www.luogu.com.cn/problem/P1006) 四维DP

[[USACO06NOV]Bad Hair Day S](https://www.luogu.com.cn/problem/P2866) 栈

[自然数的拆分](https://www.luogu.com.cn/problem/T340633) 背包

[数字组合](https://www.luogu.com.cn/problem/T340632) 背包

[矩阵乘法](https://www.luogu.com.cn/problem/B2105) 矩阵乘法模板

[矩阵链乘 Matrix Chain Multiplication](https://www.luogu.com.cn/problem/UVA442) 模拟栈(注意:先进后出)
# 20230703 

[P2357 守墓人](https://www.luogu.com.cn/problem/P2357) 线段树

[P3372 【模板】线段树 1](https://www.luogu.com.cn/problem/P3372) 复习了线段树1

看了一下数据结构课件，了解了平衡树，但还不会写，下午打了打线段树板子和守墓人

# 20230704

[P1518 [USACO2.4] 两只塔姆沃斯牛 The Tamworth Two](https://www.luogu.com.cn/problem/P1518) 搜索

[P1816 忠诚](https://www.luogu.com.cn/problem/P1816#submit) 打了暴力

基础题:[z-sort](https://www.luogu.com.cn/problem/CF652B)


下午打了打线段树板子，在oiwiki上学会了普通平衡树,尝试写了一下可持久化线段树1

# 20230705

[P3369 【模板】普通平衡树](https://www.luogu.com.cn/problem/P3369) 打了平衡树板子

[P3810 【模板】三维偏序（陌上花开）](https://www.luogu.com.cn/problem/P3810) 昨天讲的cdq分治板子

又打了线段树板子，复习了一下平衡树


# 20230706

上午打了半天平衡树，结果还是只有60，心态崩力，下午切了几道红题和橙题~~差点没A~~

# 20230707

[P9117 [春季测试 2023] 涂色游戏](https://www.luogu.com.cn/problem/P9117)

[P3045 [USACO12FEB] Cow Coupons G](https://www.luogu.com.cn/problem/P3045)

[P3545 [POI2012] HUR-Warehouse Store](https://www.luogu.com.cn/problem/P3545)

# 20230708

上午打了模拟赛
T1特判+5pts 正解DP

T2随机化+30pts

T3树剖

T4容斥原理

下午打了洛谷月赛+改题

T1二进制A了

T2暴力

# 20230709

预习+复习课程

做了几道小DP

# 20230710

[ AT_dp_a Frog 1](https://www.luogu.com.cn/problem/AT_dp_a) DP

[P2048 [NOI2010] 超级钢琴](https://www.luogu.com.cn/problem/P2048) 打了30分暴力，还未优化

[P4025 [PA2014] Bohater](luogu.com.cn/problem/P4025) 贪心

# 20230711

[P6346 [CCO2017] 专业网络](https://www.luogu.com.cn/problem/P6346) 用队列优化

[ CF865D Buy Low Sell High](https://www.luogu.com.cn/problem/CF865D) 贪心

今天做了很多板子题
 [Here](https://www.luogu.com.cn/blog/limengze/mo-ban)
 

 
# 20230712

两道贪心，1蓝1紫，大致思想都差不多

[ CF865D Buy Low Sell High](https://www.luogu.com.cn/problem/CF865D) 

[ CF1251E2 Voting (Hard Version)  ](https://www.luogu.com.cn/problem/CF1251E2)

讲的DP听的不是很懂，笛卡尔树还没写出来
# 20230713

打了线段树板子，又没有一遍A，原因是下放懒标记是   $ls$ 和 $rs$多写了

在洛谷交了前面两道贪心，一直 $UKE$ ，在CF上交就好了

[ P3369 【模板】普通平衡树](https://www.luogu.com.cn/problem/P3369)

看书调了调之前调了好几天的平衡树，理解了一些，用的树堆$(treap)$

复习了一下 $Dijkstra$ $Spfa$~~(Ta死了)~~

# 20230714

用 $Dijkstra$ 写了个图论题

[P1629 邮递员送信](https://www.luogu.com.cn/problem/P1629) 需要建反图，先跑一遍从原点到其他点，在跑一遍其他点到原点

两道贪心，用数组记录出现位置，出现位置靠后的先拿走，思想差不多，只不过是多组数据

[P3419 [POI2005] SAM-Toy Cars](https://www.luogu.com.cn/problem/P3419) 

[ SP688 SAM - Toy Cars](https://www.luogu.com.cn/problem/SP688)

打了平衡树+注释([平衡树](https://www.luogu.com.cn/blog/limengze/ping-heng-shu))

[P7095 [yLOI2020] 不离](luogu.com.cn/problem/P7095) 打了50分贪心

# 20230715

昨天晚上打了洛谷比赛，A了6道题，rank208

[T352128 数字判断](https://www.luogu.com.cn/problem/T352128?contestId=114059) 直接模拟即可

[T352129 团伙首领](https://www.luogu.com.cn/problem/T352129?contestId=114059) 类似于STL做哈希，用一个set存储值，最后输出大小即可

[T352145 塔台超频](https://www.luogu.com.cn/problem/T352145?contestId=114059) 细节比较多，需要注意k的增大，塔的半径也增大，要更新

[T352157 Three-View Projection](https://www.luogu.com.cn/problem/T352157?contestId=114059) 题目比较绕，读懂后直接模拟字符串即可

[T352164 魔法少女扶苏](https://www.luogu.com.cn/problem/T352164?contestId=114059) 数据比较水，没想到暴力枚举就A了

[T351585 std::string](https://www.luogu.com.cn/problem/T351585?contestId=114059) hack题

上午打了模拟赛

### T1：

[T352834 【愚蠢的戴夫】向日葵代沟](https://www.luogu.com.cn/problem/T352834?contestId=115612)

考试上打了50分暴力（并不意外，对拍大样例过了，但是超时）最后果然T了

正解是二分树状数组或平衡树或线段树，都挺复杂的，最后选择了一种特殊暴力，大致思想就是用一个数组存储每个串的尾坐标，最后直接计算出左右两边的区间长度，挺巧妙的

### T2：
	
[T352818 【愚蠢的戴夫】树上的僵尸](https://www.luogu.com.cn/problem/T352818?contestId=115612) DP+容斥原理+树状数组优化

### T3：

[T352822 【愚蠢的戴夫】豌豆射手](https://www.luogu.com.cn/problem/T352822?contestId=115612) DP

### T4：

[T352846 简单的操作（merge）](https://www.luogu.com.cn/problem/T352846?contestId=115612) [题解](https://sjzezoj.com/problem/993/solutions)



# 20230716

昨天晚上打了atcoder的比赛

[A - Order Something Else](https://atcoder.jp/contests/abc310/tasks/abc310_a) 这道题重要的是看懂题，之后直接按要求输出答案

[B - Strictly Superior](https://atcoder.jp/contests/abc310/tasks/abc310_b) 这道题要注意题目中的条件是or并不是and，然后直接判断条件即可

[C - Reversible](https://atcoder.jp/contests/abc310/tasks/abc310_c) 根hash差不多，先用set存储，不过要把字符串反过来再存储一次，最后输出 $s.size(); $

剩下的题因为时间原因没时间看了。

上午没有做新题，先看了看昨晚的比赛，看了jiangly的代码和官方题解

下午做了

[P8637 [蓝桥杯 2016 省 B] 交换瓶子](https://www.luogu.com.cn/problem/P8637) 模拟

# 20230717

[P2345 [USACO04OPEN] MooFest G](luogu.com.cn/problem/P2345) $tag $有cdq分治，但暴力也能过

[P8802 [蓝桥杯 2022 国 B] 出差](https://www.luogu.com.cn/problem/P8802) 挺好的 $Dijkstra$ 的板子题，无向图，稍微改改细节就能过

[P8732 [蓝桥杯 2020 国 ABC] 答疑](https://www.luogu.com.cn/problem/P8732) 贪心+排序，最优策略就是让时间短的人排在前面，使最小和最小

写了一篇[题解](https://www.luogu.com.cn/blog/limengze/solution-p9457)

# 20230718

上午讲的题自我感觉比较困难，不看题解写不出来的那种(有的看了也写不出来)，不过复习了一些基础知识，又做了一些杂题

下午独立做了道贪心绿题，写了篇[题解](https://www.luogu.com.cn/blog/limengze/solution-p8769)，过了 ~~（喜）~~

[	 P8769 [蓝桥杯 2021 国 C] 巧克力](https://www.luogu.com.cn/problem/P8769) 

题解都是用的堆，但本人一看到贪心+堆就想起前些天的反悔贪心，实在不太会，于是直接打了暴力，没想到过了，看了一眼题解都是堆，于是就交了。

又做了道比较麻烦的模拟 

[P8791 [蓝桥杯 2022 国 AC] 内存空间](https://www.luogu.com.cn/problem/P8791) 样例都能过，不知道为什么没A，~~（悲）~~

# 20230719

[P8755 [蓝桥杯 2021 省 AB2] 负载均衡](luogu.com.cn/problem/P8755) 

贪心+堆，按提议模拟即可

[P9207 灭罪「正直者之死」](https://www.luogu.com.cn/problem/P9207) 

贪心，将正负数分别排序，然后用 $sum$ 分别加上相应的值

[P8824 [传智杯 #3 初赛] 终端](luogu.com.cn/problem/P8824) 

比较简单的小模拟，需要注意最后交换时的变量

[World Football Cup](https://www.luogu.com.cn/problem/CF19A) 

模拟+排序，按提议排序后取前 $\frac{n}{2}$个后再按字典顺序排完后输出

[Number of Ways](https://www.luogu.com.cn/problem/CF466C) 

比较经典的前缀和，枚举 $i$ 符合条件后 $ans++$

[Jeopardy!](luogu.com.cn/problem/CF413C) 

贪心+排序，可以用两遍循环分别取 $\times$ 的方案和 $+$的方案，最后取 $max$ 即可

[Start Up](https://www.luogu.com.cn/problem/CF420A)

思路比较清晰的小模拟(但还是花了一些时间），刚开始可以判断特殊的回文字符，如果出现直接输出 $NO$ 即可，否则的话我们就把字符串翻转和之前的字符串比较

[P6023 走路](luogu.com.cn/problem/P6023) 

比较简单的贪心，记录每天获得的积分，最后取最大时输出即可

[P8109 [Cnoi2021] 幻想乡程序设计大赛](luogu.com.cn/problem/P8109) 

比较简单的贪心，直接 $min$ 即可

# 20230720

#### 上午模拟赛

[古代龙人的谜题(puzzle)](https://www.luogu.com.cn/problem/T354945?contestId=115613) 

用前缀和记录 $1$ 的个数，最后枚举区间 $1$ 的个数即可

[指引（guide）](luogu.com.cn/problem/T354925?contestId=115613)

贪心，把所有人的 $x$ 坐标从大到小排序，每扫描到一个值，如果是出口，则将权值为 $y$ 的数加入到数据结构里，如果是旅者，则将数据结构中最小的数取出并且 $ans++$


[T354933 寻梦（fantasy）](luogu.com.cn/problem/T354933?contestId=115613)

[题解](codeleading.com/article/214769540/)

# 20230721

今天主要复习了一些最短路和二分

[	P1339 [USACO09OCT] Heat Wave G](https://www.luogu.com.cn/problem/P1339)

用的 $Dijkstra$ 板子，根据题意直接输出 $dis[t]$即可

[P5651 基础最短路练习题](https://www.luogu.com.cn/problem/P5651)

如果直接 $Dijkstra$ 跑一遍最终只有10pts，学长的解释是由于运算为 $xor$ ，不应该使用基于贪心的 $dijkstra$ 预处理，这样大小比较是不对的，应该使用 $bfs$ 。在学长知道后改A了

[P2299 Mzc和体委的争夺战](https://www.luogu.com.cn/problem/P2299)

要注意无向边，然后用 $Dijkstra$ 跑一遍，就行了

[P2440 木材加工](https://www.luogu.com.cn/problem/P2440)

二分查找，用 $check$ 写一个函数表示当前长度是否符合预期，然后二分即可，开 $long$  $long$

# 20230722

下午打了洛谷比赛 $270pts$， $Rank$ $319$

[P9471 [yLOI2022] 签到题](https://www.luogu.com.cn/problem/P9471)

$<$ 真 $>$ 签到题，便利字符串统计个数即可

[P9472 [yLOI2022] 枕万梦](https://www.luogu.com.cn/problem/P9472)

这题看了一眼数据范围，正解不可能是暴力，于是可以把 $a_0$ 当做基准来计算，按字典序排序，小的在前，大的在后，没特判负数，$70pts$

[P9473 [yLOI2022] 西施江南](https://www.luogu.com.cn/problem/P9473)

这题数据范围也很大，$O(1)$，我们可以判断数列两两个数是否互质，如果互质直接输出 $No$ 即可，可以大大减少复杂度，但仍不是正解， $80pts$

[P9474 [yLOI2022] 长安幻世绘](https://www.luogu.com.cn/problem/P9474)

开始看题以为求最大，觉得很简单，后来发现求最小，没什么思路，打了单调递增和 $m$ $=$ $\lceil \frac{n}{2} \rceil$ 的部分分 $20pts$

（后天估值更新，估计红了~~开心~~）

# 20210723

[P2261 [CQOI2007] 余数求和](https://www.luogu.com.cn/problem/P2261)

这道题虽然代码短，但想出来还是稍有难度，重点写一下我不理解的两个点

> 1.为什么 $R$ $=$ $\lfloor\frac{n}{\lfloor\frac{n}{L}\rfloor}\rfloor$ $?$

>> $R=L+\lfloor\frac{P}{k}\rfloor=L + \lfloor\frac{n\%L}{\lfloor\frac{n}{L}\rfloor}\rfloor = L+\lfloor\frac{n-\lfloor\frac{n}{L}\rfloor L}{\lfloor\frac{n}{L}\rfloor}\rfloor = \lfloor L+\frac{n-\lfloor\frac{n}{L}\rfloor L}{\lfloor\frac{n}{L}\rfloor}\rfloor =  \lfloor\frac{\lfloor\frac{n}{L}\rfloor L}{\lfloor\frac{n}{L}\rfloor}+\frac{n-\lfloor\frac{n}{L}\rfloor L}{\lfloor\frac{n}{l}\rfloor}\rfloor=\lfloor\frac{n}{\lfloor\frac{n}{L}\rfloor}\rfloor$

> 2.$\frac{l+r}{2}$ 为什么是平均数 $?$

>> 由通项公式可得 $Sum= \frac{first}{last} ×$ 项数 $÷ 2 $ ，将分母分子同时除以项数就变成了 $\frac{first+last}{2n}$ ，因为分式仍然成立，所以我们再将分母除以项数，也就是 $n$ ，那么显而易见，平均数 $=$  $\frac{Sum}{n}$，综上成立

~~（顺便吐槽一下：Latex 用起来真麻烦啊）~~


# 20230803
	
暑假新的一轮集训又开始了，又回到了那个熟悉的校园

上午lhs学长讲了搜索相关的知识，下午只写了一道题

[P1120 小木棍](https://www.luogu.com.cn/problem/P1120)

晚上改了一下才A，一直WA前几个点，原因是在搜索途中未返回，导致没有答案，这时候输出sum即可，为了剪枝，我们需要提前记录号 $Max$ 和 $Min$，再把 $>50$ ，的数字排除，然后按照 $Len$ 排序，最后开始搜索。

对于模拟退火还是比较模糊，感觉有点玄学，没有完全理解，题目也是一知半解，不是很清楚。

# 20230804

今天讲了字符串，感觉有些难度，只写了一道题

[P1210 [USACO1.3] 最长的回文 Calf Flac](https://www.luogu.com.cn/problem/P1210)

> 在输入时遇到了一些问题，如果直接 $string$ 读入，不能读入空格，所以需要另辟蹊径，又尝试了别的方法，最后用了 $getline$ ，读入后统一字母大小写，然后从每个字符向两边遍历，要先记录一下每个字符串的位置，以便最后输出，不解的是，用 $string$ ，会 $Wa$ 掉，但用 $char$ 数组就可以 $A$ 。

[P1659 [国家集训队] 拉拉队排练](https://www.luogu.com.cn/problem/P1659)

先打了个暴力，没有直接写正解，但是暴力写了还有一段时间

# 20230805

今天讲了单调队列，写了模板题

[P1886 滑动窗口 /【模板】单调队列](https://www.luogu.com.cn/problem/P1886)

看 $oi-wiki$ 上的例子，用 $list$ 写了一下，印象比较深刻，用两个单调队列分别存储 $Max$ 和 $Min$ 。

打了洛谷月赛

[P9497 「RiOI-2」weight](https://www.luogu.com.cn/problem/P9497?contestId=122184) 

>直接模拟+优化即可，直接暴力可以拿 $50pts$，排序后并用 $lower$_$blound$ 寻找第一个大于等于 $v$ 的，$n*n-i+1$ ，就是序列中大于等于 $v$ 的个数

[P9496 「RiOI-2」hacker](https://www.luogu.com.cn/problem/P9496?contestId=122184)

>分别将两个10进制数转为2进制数，

# 20230806

今天写的自己找的题

[ P1114 “非常男女”计划](https://www.luogu.com.cn/problem/P1114) 

> 根据题意分别从男女生做前缀和，然后枚举符合题意即可

 下午打了洛谷比赛
 
[P9502 『MGOI』Simple Round I | A. 魔法数字](https://www.luogu.com.cn/problem/P9502?contestId=101050)

>枚举 $i$ 即可，最后输出 $i-2$

[P9503 『MGOI』Simple Round I | B. 魔法照相馆](https://www.luogu.com.cn/problem/P9503?contestId=101050)

>小模拟，注意区分颜色细节

[P3375 【模板】KMP 字符串匹配](https://www.luogu.com.cn/problem/P3375)

> 对 $kmp$ ，发现之前写的时候一点也不懂，现在理解又深了一点，打了 $kmp$ 模板

# 20230807 

早上先复习了一下昨天的 $kmp$ 板子

做了一些杂题

[P1551 亲戚](https://www.luogu.com.cn/problem/P1551)

>并查集板子，很有效的复习了一下


[P4377 [USACO18OPEN] Talent Show G](https://www.luogu.com.cn/problem/P4377)


>学长讲的分数规划，把 $a[i]-mid×b[i]$ ，看做价值，用01背包当 $check$ ，再用二分即可


[P5089 [eJOI2018] 元素周期表](https://www.luogu.com.cn/problem/P5089)

>学长讲的二分图， $oiwiki$ 上看了一下遍历，用链式前向星建图，再用 $dfs$ ，把每个元素 $(x,y)$ ，看作一条边，而反过来，对于二分图中的某一个连通分量，也可以通过核聚变的方式，把这个连通分量变成“完全”的，也就是连接左右两部分的所有边都存在。
那么答案就是将这个二分图添加尽量少的边使得它联通的边数。
也就是：**连通分量的个数−1**。没有完全理解。


下面两道有效的复习了一下 $STL$


[P1540 [NOIP2010 提高组] 机器翻译](https://www.luogu.com.cn/problem/P1540)

>用队列（$queue$）， 存储序列，在查字典时，如果没有就入队并 $ans++$ ，时刻判断 $Q.size()$ ，如果超过 $m$ ，就出队

[P4387 【深基15.习9】验证栈序列](luogu.com.cn/problem/P4387)

>栈，按照要求的顺序入栈，并按照顺序出栈，最后判断栈是否为空即可，要注意每次询问要清空栈

# 20230808

早上写了写 $tarjan$ ，并复习了 $kmp$

[B3609 [图论与代数结构 701] 强连通分量](https://www.luogu.com.cn/problem/B3609)

后来写了写缩点，没写成（

下午一直学网络流，写了篇[博客](https://www.luogu.com.cn/blog/limengze/wang-luo-liu)，认识挺深刻的。

后来写了一些关于网络流的题~~模板题~~

[P3376 【模板】网络最大流](https://www.luogu.com.cn/problem/P3376)

[P2740 [USACO4.2] 草地排水Drainage Ditches](https://www.luogu.com.cn/problem/P2740)

# 20230809

>早上复习了一下网络流，顺便打了个板子题

[B3606 [图论与代数结构 501] 网络流_1](https://www.luogu.com.cn/problem/B3606)

>突然接触到了一些交互题，于是找了一些做

[P1733 猜数（IO交互版）](https://www.luogu.com.cn/problem/P1733)

>第一次接触感觉有点奇妙，对一些操作不太懂

# 20230810

上午模拟赛

[#1959. 【cdw-2模拟题T1】解方程](https://sjzezoj.com/problem/1959)

>没想到正解，用二分优化了一下暴力， $30pts$ ，正解是对 $n$ 分解质因数，因为原式可化简为 $(x+y)(x^2-xy+y^2)=n^2$ ，枚举因数 $(x+y)$ 后解二次方程

[#1911. M 弟娃（magic）](https://sjzezoj.com/problem/1911)

>考场上没什么思路，就打了个暴力 $30pts$ ，正解是，考虑对于一对点，将哪些点作为根会使这对点产生贡献。现在假定 1 为实际根，分两种情况：若这两个点不是祖先儿子关系，则将根选在两个点的子树里时，这对点会产生贡献；若这两个点是祖先儿子关系，令深度较深的点为 $x$ ，较浅的为 $y$ ， $y$ 在这条链上的儿子为 $z$ ，则将根选在 $x$ 的子树里，或是不在 $z$ 的子树里时，这对点会产生贡献。
求出 $dfs$ 序，相当于我们只需要支持区间加，全局 $max$ 即可。

[#1698. 【2022.10.27 联考】传送](https://sjzezoj.com/problem/1698)

>考场上还是没什么思路，跑了个 $Dijkstra$ ，样例过了（还想着骗分），结果（太惨了不说了）

>[题解](https://sjzezoj.com/problem/1698/solutions)

[#1917. 朝鲜时蔬（vegetable）](https://sjzezoj.com/problem/1917)

>这道题贴心了给了提示，但是仍然很难绷，看不懂，直接输样例走了（

>[题解](https://sjzezoj.com/problem/1917/solutions)

# 20230811

复习了各种板子

>[B3607 [图论与代数结构 502] 网络流_2](https://www.luogu.com.cn/problem/B3607)

>[P3372 【模板】线段树 1](luogu.com.cn/problem/P3372)

>[P3374 【模板】树状数组 1](luogu.com.cn/problem/P3374)

# 20230812

[ P8218 【深进1.例1】求区间和](https://www.luogu.com.cn/problem/P8218)

>前缀和板子题

[P4145 上帝造题的七分钟 2 / 花神游历各国](https://www.luogu.com.cn/problem/P4145)

>学习了分块，对分块有了新的理解

# 20230813

打了洛谷月赛

[P9516 color](https://www.luogu.com.cn/problem/P9516)

>按题意模拟即可


[P9517 drink](https://www.luogu.com.cn/problem/P9517)

>寻找第一次出现的坐标 $l$ 和最后一次出现的 $r$ ，输出 $r-l+1$ 即可

杂题

[P9508 『STA - R3』存在](https://www.luogu.com.cn/problem/P9508)

手膜+找规律得到，当序列为 $a,1,1,b,1,1,c ......$ 时，满足题意且种类数最大，于是可以3个一组来模拟这个序列

[P6784 「EZEC-3」造房子](https://www.luogu.com.cn/problem/P6784)

>先将 $a$ 和 $b$ 用 $c$ ，尽量使 $abs(a-b)$ ，最小，然后直接模拟 $a-=i , b-=i$ 即可。

# 20230814

[P1001 A+B Problem](https://www.luogu.com.cn/problem/P1001)

>用随机数优化了深搜，终于不T了，伟大的转折

[P8814 [CSP-J 2022] 解密](https://www.luogu.com.cn/problem/P8814)

>重写了 $CSP$ 没过的题，用完全平方公式得出， $(p+q) $ 和 $(p-q)$ ，于是可以得出 $p,q$ ,再用 $if$ 判断即可

[ AT_joi2017yo_a 電子レンジ (Microwave)](https://www.luogu.com.cn/problem/AT_joi2017yo_a)

>模拟题，分温度正负即可

# 20230815

[P1616 疯狂的采药](https://www.luogu.com.cn/problem/P1616)

>复习了DP，01背包板子题

[T366963 SCP 2023 第一轮（初赛 J 组）模拟](https://www.luogu.com.cn/problem/T366963)

>做了洛谷上的第一轮测试，只有40+分（害怕）

[P4141 消失之物](https://www.luogu.com.cn/problem/P4141)

>暴力 $DP$ ， $O(n^2m)$可以过，枚举 $k$ 

[P9539 「AWOI Round 2 B」树学](https://www.luogu.com.cn/problem/P9539)

>洛谷比赛上的题，可以使用贪心，因为字典序最小肯定是都想选 $a$ 的。我们给打算选和原本字符串相同的位置的地方打标记。从左到右扫一遍，$a$ 的位置都打，除非现在的标记数已经超过 $r$ 了，直接退出不打标记了。如果扫完了以后标记数还不到 $l$ 个，那直接从后往前扫，只要没被标记就标记，直到标记到 $l$ 个。
