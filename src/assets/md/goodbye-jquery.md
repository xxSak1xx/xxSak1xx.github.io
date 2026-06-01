---
title: 为什么我放弃了 jQuery
date: 2025-05-18
description: 从 jQuery 到原生 JavaScript 再到现代框架，聊聊前端技术栈的更迭与思考。
---

## 入门前端的第一行 jQuery

很多前端开发者的入门路径是这样的：

```javascript
$(document).ready(function() {
  $('#btn').click(function() {
    $('#result').text('Hello, World!')
  })
})
```

在 2015 年，这几乎是前端开发的"**标准写法**"。

> jQuery 不是不好，只是时代变了。

## jQuery 曾经解决的痛点

| 痛点 | jQuery | 现代方案 |
|------|--------|----------|
| DOM 选择 | `$('.class')` | `querySelectorAll` |
| AJAX 请求 | `$.ajax()` | `fetch` / `axios` |
| 动画 | `$.animate()` | CSS Animations / FLIP |
| 事件绑定 | `$.on()` | `addEventListener` |
| 兼容性 | 统一 API | Babel + polyfills |

## 原生 JS 已经足够好

```javascript
// jQuery 时代
$.ajax({
  url: '/api/users',
  method: 'GET',
  success: function(data) {
    console.log(data)
  }
})

// 现代 JS
const users = await fetch('/api/users').then(res => res.json())
console.log(users)
```

DOM 操作也变得直观：

```javascript
// 选择元素
document.querySelectorAll('.card')

// 事件监听
element.addEventListener('click', handler)

// 修改 class
element.classList.add('active')
element.classList.toggle('dark')
```

## 什么时候还在用 jQuery？

1. **维护老项目** — Bootstrap 4 及之前版本依赖 jQuery
2. **简单的 CMS 网站** — 不需要框架的复杂度
3. **WordPress / Drupal 主题开发** — 生态系统依赖

除此之外，新项目基本没有理由再引入 jQuery 了。

## 从 jQuery 到现代框架

学习路径建议：

1. 熟练原生 JavaScript（ES6+）
2. 理解虚拟 DOM 的概念
3. 选一个主流框架深入学习（React / Vue / Svelte）
4. 学习构建工具（Vite）

---

*告别 jQuery，不是因为恨，而是因为它教会了我们太多。*
