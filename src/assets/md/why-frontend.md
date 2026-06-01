---
title: 为什么我选择了前端开发？
date: 2025-10-15
description: 前端开发的魅力在于它能直接将创意呈现给用户。聊聊我进入这个行业的初衷与感悟。
---

## 从好奇开始

我写的第一行代码是一个简单的 HTML 页面：

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, World!</h1>
    <button onclick="alert('Hi!')">点我</button>
  </body>
</html>
```

当我在浏览器中看到那个按钮，点下去弹出一个对话框时，那种**即时的反馈感**让我着迷。不同于后端的数据流，前端的东西是可见、可触摸的。

## 前端 vs 后端

我曾短暂地尝试过后端开发，写过一个简单的 Express API：

```javascript
const express = require('express')
const app = express()

app.get('/api/users', async (req, res) => {
  const users = await db.query('SELECT * FROM users')
  res.json(users)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
```

数据正确地返回了，调试工具显示 200 OK，但我的内心毫无波澜。相比之下，写一个带动画的卡片组件能让我反复调整好几个小时。

## 前端的三个魅力

### 1. 即时反馈

```
写代码 → 保存 → 刷新浏览器 → 看到效果
```

这个循环越短，创造力就越容易被激发。现代工具链（Vite、HMR）把这个循环压缩到了**毫秒级**。

### 2. 创意与技术交汇

前端是编程世界中最接近"**创作**"的领域：

- 一个精美的交互动效
- 一套舒适的排版节奏
- 一种巧妙的视觉叙事

这些都需要审美 + 技术的双重能力。

### 3. 用户直接触达

| 层级 | 关注点 |
|------|--------|
| 后端 | 数据、性能、安全 |
| 前端 | 交互、视觉、体验 |
| 用户 | "这个好用吗？好看吗？" |

前端是用户感知产品的第一入口，这种直接的影响力是其他技术栈难以比拟的。

## 我的学习路径

1. HTML + CSS 基础（一个月）
2. JavaScript 核心概念（三个月）
3. Vue 3 生态（六个月）
4. React + TypeScript（持续进行中）
5. 工程化工具链（Vite、Webpack、CI/CD）

## 写在最后

> The best way to predict the future is to create it.

前端开发让我成为了**创造者**而不仅仅是**打工者**。每当我看到一个想法从代码变成页面、变成用户可以使用的功能时，那种满足感是持续驱动我的动力。
