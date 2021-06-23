---
title: Local Storage vs Session Storage vs Cookie
date: 2021-06-21
tags:
  - Security
  - Browser
  - Front-End
author: Chao Zhang
location: Vancouver
---

随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，传统方式我们以 document.cookie 来进行存储的，但是由于其存储大小只有 4k 左右，并且解析也相当的复杂，每一次发送请求都会携带上 cookie，会造成带宽的浪费，给开发带来诸多不便，HTML5 规范则提出解决方案。
web 存储的含义是将数据存储到用户的电脑上，这样可以缓解服务器的压力，并且提高体验。

## 特性

1 设置、读取方便

2 容量较大，sessionStorage 约 5M、localStorage 约 20M

3 只能存储字符串，可以将对象 JSON.stringify() 编码后存储

## window.sessionStorage

1 生命周期为关闭当前页面窗口

2 不能多窗口下数据可以共享

运用场景：1. 页面跳转的时候可以通过 session 实现数据共享 2. 在一些单页面（spa）的运用中，进行页面传值的时候比较有用

## window.localStorage

1、永久生效，除非手动删除或用代码删除
2、可以多窗口共享（同源策略）
运用场景：一些不涉及到安全的一些数据（不要太过庞大）都可以存储到本地

## 方法详解

setItem(key, value)设置存储内容

getItem(key)读取存储内容

removeItem(key)删除键值为 key 的存储内容

clear()清空所有存储内容

key(n) 以索引值来获取 键名

length 存储的数据的个数

## 区别：

cookie 数据始终在同源的 http 请求中携带（即使不需要），即
cookie 在浏览器和服务器间来回传递。而 sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。

cookie 数据还有路径（path）的概念，可以限制 cookie 只属于某个路径下。存储大小限制也不同，cookie 数据不能超过 4k，同时因为每次 http 请求都会携带
cookie，所以 cookie 只适合保存很小的数据，如会话标识。

sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大。数据有效期不同，

sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie 只在设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭。

作用域不同，sessionStorage 不能在不同的浏览器窗口中共享，即使是同一个页面；localStorage 在所有同源窗口中都是共享的；cookie 也是在所有同源窗口中都是共享的。

## 差异性：

相同点：都是存储数据，存储在 web 端，并且都是同源

不同点：

1. cookie 只有 4K 小 并且每一次请求都会带上 cookie 体验不好，浪费带宽

2. session 和 local 直接存储在本地，请求不会携带，并且容量比 cookie 要大的多

3. session 是临时会话，当窗口被关闭的时候就清除掉 ，而 local 永久存在，cookie 有过期时间

4. cookie 和 local 都可以支持多窗口共享，而 session 不支持多窗口共享 但是都支持 a 链接跳转的新窗口
