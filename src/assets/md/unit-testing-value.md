---
title: 单元测试：从"浪费时间"到"真香"
date: 2025-09-28
description: 从抵触到依赖，记录我对单元测试态度的转变和实际项目中的测试经验。
---

## 曾经的我对测试的态度

以前我觉得写测试是**浪费时间**：

- 代码我都测过了，为什么还要写测试？
- 需求变更后测试也得改，双倍工作量
- 测试覆盖率就是个数字游戏

> 直到一次重构让我付出了惨痛代价。

## 转折点

那次我把一个 200 行的工具模块拆成了 5 个文件，手动回归测试用了**整整一个下午**。如果当时有测试，跑一下命令就搞定了。

```typescript
// 一个简单的测试用例
import { describe, it, expect } from 'vitest'
import { formatDate } from './utils'

describe('formatDate', () => {
  it('should format date correctly', () => {
    const result = formatDate('2025-09-28', 'YYYY/MM/DD')
    expect(result).toBe('2025/09/28')
  })

  it('should throw on invalid input', () => {
    expect(() => formatDate('')).toThrow()
  })
})
```

## 测试金字塔

```
        ┌─────┐
        │ E2E │  ← 少而精
       ┌┴─────┴┐
       │ 集成   │  ← 适量
      ┌┴───────┴┐
      │  单元测试 │  ← 多而快
      └─────────┘
```

## 什么值得测？

| 优先级 | 测试对象 | 原因 |
|--------|----------|------|
| 高 | 工具函数 | 纯函数，易测 |
| 高 | 数据转换逻辑 | 容易出错 |
| 中 | 组件渲染 | 关键 UI 路径 |
| 低 | 简单 getter/setter | 投入产出比低 |
| 低 | 第三方库的 wrapper | 测库本身就够了 |

## 一个好的测试用例

遵循 AAA 模式：

```typescript
it('should calculate total price with tax', () => {
  // Arrange — 准备数据
  const items = [
    { price: 100, quantity: 2 },
    { price: 50, quantity: 1 }
  ]
  const taxRate = 0.1

  // Act — 执行操作
  const total = calculateTotal(items, taxRate)

  // Assert — 断言结果
  expect(total).toBe(275)
})
```

## 测试驱动开发（TDD）的体会

1. **先写测试** → 迫使你想清楚需求
2. **写最少代码通过测试** → 避免过度设计
3. **重构** → 有测试保护，大胆改

---

*测试不是证明代码没有 bug，而是让你敢改代码。*
