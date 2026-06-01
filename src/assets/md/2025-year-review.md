---
title: 我的 2025 年终总结
date: 2025-12-31
description: 回顾这一年，在技术和生活上的感悟。从迷茫到逐渐清晰的目标，聊聊成长与变化。
---

## 写在前面

2025 年过得比想象中快得多。这一年里，我从一个"能写代码的人"逐渐变成了一个"**能解决问题的开发者**"——这中间的差别，比看上去大得多。

> 技术的本质不是代码，而是用代码解决真实世界的问题。

## 技术栈的演进

年初我还在用 Vue 2 + Options API，到了年底，技术栈已经完全不同：

| 技术 | 年初 | 年末 |
|------|------|------|
| 前端框架 | Vue 2 | Vue 3 / React |
| 构建工具 | Webpack | Vite |
| CSS 方案 | 手写 CSS | Tailwind CSS |
| 状态管理 | Vuex | Pinia |

## 一些心得

### 1. 不要过早优化

> Premature optimization is the root of all evil.

刚开始学 Tailwind CSS 时，我觉得"一堆类名堆在 HTML 上很丑"。但用了一周后，我发现**开发效率的提升**远远超过了视觉上的"不优雅"。

### 2. 写文档比写代码更重要

```javascript
// 糟糕的注释
// 设置 x 为 10
let x = 10

// 好的注释
// 单页最多展示 10 篇文章，超出后启用分页
const PAGE_SIZE = 10
```

### 3. 善用工具

几个这一年让我受益最大的工具：

- **Vite** — 开发体验质的飞跃
- **GitHub Copilot** — 减少重复劳动
- **Obsidian** — 知识管理利器

## 代码示例

一个简单的防抖函数：

```typescript
function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}
```

Python 版本：

```python
import asyncio
from typing import Callable, Awaitable

async def fetch_data(url: str) -> dict:
    """Fetch JSON data from an API endpoint."""
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.json()
```

## 明年的目标

1. 深入学习 TypeScript 类型系统
2. 贡献一个开源项目
3. 写完自己的组件库
4. 保持每周至少一篇博客

---

*2026 年，继续加油。*
