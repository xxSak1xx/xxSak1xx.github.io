---
title: RESTful API 设计：那些年我踩过的坑
date: 2025-04-22
description: 总结 API 设计中的常见错误和最佳实践，从 URL 命名到错误处理，让接口更规范。
---

## 糟糕的 API 是什么样的？

刚工作那会，我写过这样的接口：

```
POST /api/getUserInfo
POST /api/deleteUserById
POST /api/updateUserPassword
```

所有请求都是 `POST`，URL 里有动词，看起来像是"能跑就行"。

> 好的 API 设计能让调用者一眼看懂意图。

## URL 设计原则

```bash
# 好的设计
GET    /api/users        # 获取用户列表
GET    /api/users/42     # 获取单个用户
POST   /api/users        # 创建用户
PUT    /api/users/42     # 更新用户
DELETE /api/users/42     # 删除用户

# 避免的设计
GET    /api/getAllUsers
POST   /api/users/create
POST   /api/users/delete/42
```

## 状态码的正确使用

| 状态码 | 含义 | 使用场景 |
|--------|------|----------|
| 200 | OK | 请求成功 |
| 201 | Created | 资源创建成功 |
| 204 | No Content | 删除成功，无返回体 |
| 400 | Bad Request | 参数校验失败 |
| 401 | Unauthorized | 未认证 |
| 403 | Forbidden | 无权限 |
| 404 | Not Found | 资源不存在 |
| 500 | Server Error | 服务器内部错误 |

## 统一的响应格式

```json
{
  "code": 0,
  "message": "success",
  "data": {
    "id": 42,
    "name": "张三",
    "email": "zhangsan@example.com"
  }
}
```

错误响应也要统一：

```json
{
  "code": 40001,
  "message": "邮箱格式不正确",
  "data": null
}
```

## 分页与过滤

```bash
# 分页
GET /api/users?page=2&size=20

# 过滤
GET /api/users?status=active&role=admin

# 排序
GET /api/users?sort=-created_at

# 字段选择
GET /api/users?fields=id,name,email
```

## 版本管理

```
/api/v1/users    # URL 路径版本
/api/v2/users

# 或者用 Header
Accept: application/vnd.api.v2+json
```

建议新项目一开始就带上版本号——**你不会想在 6 个月后重构所有接口**。

---

*API 是给开发者用的产品，用心设计每一处细节。*
