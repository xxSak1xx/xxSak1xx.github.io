---
title: Git 工作流：从小白到团队协作
date: 2025-06-25
description: 整理我在团队中使用 Git 的经验，涵盖分支管理、commit 规范和常见坑点。
---

## 那些年踩过的 Git 坑

刚学 Git 时，我的操作基本就是：

```bash
git add .
git commit -m "update"
git push
```

这种"一把梭"的方式在个人项目中勉强能用，但到了团队协作就**频频翻车**。

> Git 不是备份工具，而是协作语言。

## 分支管理策略

我们团队采用的是简化版的 Git Flow：

```
main          ← 生产环境
  └── develop ← 开发环境
       ├── feature/login
       ├── feature/payment
       └── feature/dashboard
```

## Commit 规范

```bash
# 好的 commit
feat: add user login with JWT auth
fix: resolve race condition in cart checkout
docs: update API documentation for v2
refactor: extract shared validation logic

# 不好的 commit
update code
fix bug
wip
```

## 常用操作速查

| 场景 | 命令 |
|------|------|
| 撤销未提交的修改 | `git checkout -- <file>` |
| 修改最后一次 commit | `git commit --amend` |
| 合并多个 commit | `git rebase -i HEAD~3` |
| 暂存当前工作 | `git stash` |
| 找回 stash 的内容 | `git stash pop` |

## 合并 vs 变基

```bash
# Merge — 保留完整历史，产生合并节点
git merge feature/login

# Rebase — 线性历史，更清晰
git rebase main
```

个人开发用 `rebase` 保持历史整洁，团队共享分支用 `merge` 避免冲突。

## 一个典型的日常流程

```bash
# 1. 从 develop 拉最新代码
git checkout develop && git pull

# 2. 创建 feature 分支
git checkout -b feature/my-task

# 3. 开发和提交
git add src/login.ts
git commit -m "feat: implement login form"

# 4. 推送并创建 PR
git push -u origin feature/my-task
```

---

*好的 Git 习惯，从写好 commit message 开始。*
