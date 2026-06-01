---
title: TypeScript 类型体操入门
date: 2025-09-12
description: 从简单的泛型到复杂的类型推断，记录我在 TypeScript 类型系统中摸爬滚打的经历。
---

## 为什么学类型体操？

刚开始用 TypeScript 时，我只写最基本的类型标注：

```typescript
const name: string = 'hello'
const count: number = 42
```

后来在阅读开源库源码时，我发现那些"花里胡哨"的类型定义并不是炫技——它们确实能**在编译期发现问题**。

> 类型系统是 TypeScript 的灵魂，而不是束缚。

## 从基础开始

### 泛型

```typescript
// 最简单的泛型
function identity<T>(arg: T): T {
  return arg
}

// 约束泛型
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length
}
```

### 条件类型

```typescript
type IsString<T> = T extends string ? true : false

type A = IsString<'hello'>  // true
type B = IsString<42>       // false
```

## 常用工具类型

| 工具类型 | 作用 | 示例 |
|----------|------|------|
| `Partial<T>` | 所有属性可选 | `Partial<User>` |
| `Required<T>` | 所有属性必填 | `Required<Config>` |
| `Pick<T, K>` | 选取部分属性 | `Pick<User, 'name'>` |
| `Omit<T, K>` | 排除部分属性 | `Omit<User, 'password'>` |
| `Record<K, V>` | 构造对象类型 | `Record<string, number>` |

## 实战：实现一个 DeepReadonly

```typescript
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? T[K] extends Function
      ? T[K]
      : DeepReadonly<T[K]>
    : T[K]
}

interface User {
  name: string
  address: {
    city: string
    street: string
  }
}

type ReadonlyUser = DeepReadonly<User>
// address.city 也会变成 readonly
```

## 学习资源

1. **TypeScript 官方文档** — 最好的起点
2. **type-challenges** — GitHub 上的类型编程练习
3. **TypeScript 源码** — 看 lib.d.ts 文件

---

*类型即文档，类型即约束，类型即安全。*
