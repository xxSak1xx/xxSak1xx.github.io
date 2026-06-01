---
title: Vim 快捷键速查：我的日常使用笔记
date: 2025-07-08
description: 从被迫使用到爱不释手，记录我最常用的 Vim 操作技巧和配置心得。
---

## 我为什么学 Vim？

最开始用 Vim 纯粹是因为 SSH 到服务器只能用它编辑配置文件。后来发现，**手指不离开键盘**的感觉太爽了。

> Vim 的学习曲线很陡，但翻过去之后就是坦途。

## 基础移动

```
h j k l    — 左下上右
w b        — 前进/后退一个单词
0 $        — 行首/行尾
gg G       — 文件开头/结尾
```

## 编辑操作

```bash
# 删除
dd         # 删除整行
dw         # 删除一个单词
d$         # 删除到行尾

# 复制粘贴
yy         # 复制整行
p          # 粘贴到下方
P          # 粘贴到上方

# 撤销
u          # 撤销
Ctrl+r     # 重做
```

## 组合技

| 操作 | 含义 | 记忆技巧 |
|------|------|----------|
| `ciw` | 修改当前单词 | change inner word |
| `di(` | 删除括号内容 | delete inside ( |
| `yiw` | 复制当前单词 | yank inner word |
| `dt"` | 删除到引号前 | delete to " |
| `5dd` | 删除 5 行 | 5 times dd |

## 我的 .vimrc 配置片段

```vim
" 显示行号
set number
set relativenumber

" 缩进设置
set tabstop=2
set shiftwidth=2
set expandtab

" 搜索高亮
set hlsearch
set incsearch

" 启用鼠标
set mouse=a
```

## 在 VS Code 中使用 Vim

装好 Vim 插件后，大部分基础操作都能直接用。不过有几个冲突需要注意：

- `Ctrl+D` 在 VS Code 里默认是"多光标选择"，Vim 里是"向下翻半页"
- 建议在 VS Code 中使用 `Insert` 模式为主，`Normal` 模式为辅

---

*习惯即成自然，自然即成效率。*
