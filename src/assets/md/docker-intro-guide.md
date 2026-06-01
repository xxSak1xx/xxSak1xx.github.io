---
title: Docker 入门：从"在我电脑上是好的"到"哪里都是好的"
date: 2025-08-05
description: 分享我学习 Docker 的过程，涵盖基本概念、常用命令和实际项目中的 Docker 化实践。
---

## 环境地狱

每个开发者都遇到过这样的场景：

```
同事：项目跑不起来，报了个错
我：我电脑上没问题啊
同事：（截图）
我：你 Node 版本多少？
同事：v14
我：项目要 v18...
```

> "It works on my machine" 是团队协作最大的敌人。

## Docker 是什么？

简单来说，Docker 把应用和它的依赖打包在一起：

```
┌─────────────────────────┐
│   你的应用               │
├─────────────────────────┤
│   Node.js v18            │
│   npm 依赖               │
│   系统库                 │
├─────────────────────────┤
│   Docker Engine          │
├─────────────────────────┤
│   操作系统               │
└─────────────────────────┘
```

## 常用命令

```bash
# 镜像管理
docker images              # 列出本地镜像
docker pull node:18-alpine # 拉取镜像
docker rmi <image-id>      # 删除镜像

# 容器管理
docker run -d -p 3000:3000 --name app my-image
docker ps                  # 运行中的容器
docker stop app            # 停止容器
docker rm app              # 删除容器

# 进入容器
docker exec -it app sh     # 进入 shell
docker logs -f app         # 查看日志
```

## 一个 Node.js 项目的 Dockerfile

```dockerfile
# 使用轻量级基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 先复制 package 文件，利用缓存
COPY package*.json ./
RUN npm ci --only=production

# 再复制源码
COPY . .

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["node", "server.js"]
```

## Docker Compose

多服务项目使用 Compose 管理：

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - '3000:3000'
    depends_on:
      - db
  
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

## 核心概念对比

| 概念 | 类比 | 特点 |
|------|------|------|
| Image | 模具 | 只读，不可变 |
| Container | 铸件 | 可运行，可销毁 |
| Volume | U 盘 | 持久化数据 |
| Network | 局域网 | 容器间通信 |

---

*一次构建，到处运行——这就是 Docker 的承诺。*
