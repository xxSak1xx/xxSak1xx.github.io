var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=`/assets/hero-5sT3BiRD.png`,d=s({default:()=>f}),f=`---
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

\`\`\`javascript
// 糟糕的注释
// 设置 x 为 10
let x = 10

// 好的注释
// 单页最多展示 10 篇文章，超出后启用分页
const PAGE_SIZE = 10
\`\`\`

### 3. 善用工具

几个这一年让我受益最大的工具：

- **Vite** — 开发体验质的飞跃
- **GitHub Copilot** — 减少重复劳动
- **Obsidian** — 知识管理利器

## 代码示例

一个简单的防抖函数：

\`\`\`typescript
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
\`\`\`

Python 版本：

\`\`\`python
import asyncio
from typing import Callable, Awaitable

async def fetch_data(url: str) -> dict:
    """Fetch JSON data from an API endpoint."""
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.json()
\`\`\`

## 明年的目标

1. 深入学习 TypeScript 类型系统
2. 贡献一个开源项目
3. 写完自己的组件库
4. 保持每周至少一篇博客

---

*2026 年，继续加油。*
`,p=s({default:()=>m}),m='---\r\ntitle: SKILL开发心得\r\ndate: 2026-06-01\r\ndescription: 总结在SKILL开发中的一点经验心得与思考\r\n---\r\n\r\n## SKILL开发心得\r\n\r\n### 对SKILL的认识\r\n\r\n在初了解到技能的概念时，人们会误认为这不过是一段可复用的`prompt`;实际上技能的内涵远不止于此。在系统介绍并规范技能标准的网站[Agent Skill](https://agentskills.io/home)中，技能被如此定义：\r\n\r\n> <i> Agent Skills are a lightweight, open format for extending AI agent capabilities with specialized knowledge and workflows. </i>\r\n\r\n技能的外在表现可以简单得看起来只是一段`prompt`，比如著名的[Karpathy Guidelines](https://github.com/multica-ai/andrej-karpathy-skills)，取材自Andrej Karpathy对大语言模型编码中常见问题的观察，其实质内容只有四条编码原则及释义；也可以是一个完整的独立王国。Agent Skill推荐的目录结构如下：\r\n```\r\nmy-skill/\r\n├── SKILL.md          # Required: metadata + instructions\r\n├── scripts/          # Optional: executable code\r\n├── references/       # Optional: documentation\r\n├── assets/           # Optional: templates, resources\r\n└── ...               # Any additional files or directories\r\n```\r\n\r\n这其中包含了`agent`可读的技能描述、可执行脚本、符合渐进式披露的参考资料等。\r\n\r\n这与人类掌握一门技能类似。比如学习绘画，教师要教学生怎么握笔、怎么使用颜料，也要告诉他什么时候如实临摹，什么时候可以自由发挥；用普通的签字笔不行，画室还要提供专门的画笔工具；许多深奥的理论学生记不住，也能花点时间翻阅文献资料，再回过头来应用。"技能"可以不必这么复杂，或许只是固定下来的`workflow`。比如每天起床后要喝一杯水，不需要额外的工具或复杂的指示，只要记在脑子里照做即可。\r\n\r\n技能开发同样，可以赋予`agent`某种新能力，也可以是对已有成熟流程的沉淀和优化。因此不必拘泥于形式，而应该关注实际问题是否得到解决，解决得是否合乎要求。\r\n\r\n\r\n\r\n### 开发中的抉择\r\n\r\n在开发过程中，会有这样的情况：一个`workflow`的每一个环节，都可以（或已经）产生一个单独的`skill`。这就会引发对`skill`定位的考虑：应该选择**大而全**还是**小而专**？\r\n\r\n我曾试着开发过这样一个`skill`：根据用户的需求，从`arxiv`上爬取指定信息的论文并阅读，结合工作目录和用户提示词，用`draw.io CLI`生成图表，并综合以上内容生成`ppt`；最后再仿照导师的偏好和语气加以指导修改。其初版结构为：\r\n```\r\n├─scripts\r\n└─skills\r\n    ├─academic-pptx-skill\r\n    ├─arxiv-retrieval-skill\r\n    ├─create-supervisor-skill\r\n    ├─drawio-skill\r\n    └─ppt-agent-skill\r\n```\r\n以及必要的`SKILL.md`。根目录里有编排整个工作流的脚本，而每个子技能的结构都是完整的，可以被抽取为独立的`skill`。\r\n\r\n这种组织形式有两个问题：\r\n1. **显而易见的臃肿**。事实上嵌套形式的`skill`并不能被`agent`正确识别到，错误的描述反而让它自己尝试编写本应提供的工具——不仅效果大打折扣，还增加了开销。\r\n2. **过于大包大揽**。退一步讲，即使将其注册为`plugin`（允许内含多个`skill`），它的功能也太多了，很容易与其他已有的`skill`冲突，造成调用的混乱。\r\n\r\n我们的出发点很合理。这是一个有着明确编排、可以复用的`workflow`，完全可以设计成`skill`；只是实现有些问题。这种**大而全**的结构显然与`skill`的初衷不符。我们可以无脑地将其注册为`plugin`，或重新设计一下`SKILL.md`，使`agent`可以递归地检索子技能并调用。**但有没有更好的解决方法呢？**\r\n\r\n一种自然的想法是**将原先的子技能展开到根目录，统一归类`scripts`和`references`**，使结构扁平化。这其实是掩耳盗铃。递归地检索子技能至少还有独立的`SKILL.md`以供`agent`认知，现在却要集合到单一的说明中——依旧造出了一个巨无霸，更别说繁多的脚本文件。\r\n\r\n另一种想法是采用类似**管理依赖**的方法。软件开发中，我们秉持不重复造轮子的理念，因此通过库依赖来解决功能复用。但`skill`的管理还不像经典的包管理一样方便，没有一份`requirements.txt`可以同步依赖；而现在为`agent`注册一个`skill`的方法也是千奇百怪，有的是`npm`全局安装，有的是`github`仓库拉取，甚至还可以用解压缩这种传统的方式——究其根本，是跨语言开发的困境。\r\n\r\n目前可以有这样的权宜之计：在`SKILL.md`中写明所依赖的功能（并不是某个具体的`skill`），如果本地有就正常调用；如果本地没有，就以写明的方式下载默认依赖`skill`。以`agent`的智能程度，解决这样的依赖关系还是轻而易举的。只不过现在缺少一种将各种下载途径包装并智能路由的`skill`管理器。\r\n\r\n### 思考\r\n\r\n1. **编排类型的`skill`应该被特殊设计**。这种`skill`本身并不提供能力，只是将若干已有能力组合使用；此时尤其要考虑前述的依赖问题。`agent`本身当然也可以决策，但对成熟的`workflow`应该加以固定。\r\n2. **降低`skill`内容的重叠度**。保持`skill`的小而专，不要试图找到某种once-and-for-all的方案——这其实是开发上的偷懒。\r\n3. **当一个`workflow`中的某个环节可以被复用在除这个工作流以外的其他场景，它就应该被单独拆出，作为`skill`依赖调用。** 以上文的实际开发场景为例，除了学术风的`ppt`，用户还可能想做商业风、科技风等一系列其他风格，那么就应该将`ppt`生成引擎单独剥离。',h=s({default:()=>g}),g=`---
title: 代码审查：不只是找 Bug
date: 2025-11-10
description: 好的代码审查是团队成长的加速器。聊聊如何提出和接受建设性的代码反馈。
---

## 代码审查 ≠ 代码批斗

刚被 review 时，我常常觉得被针对了：

> "这个变量名不好"、"这里应该用 map 而不是 forEach"、"为什么不抽成函数？"

后来才发现，这些都是**让我进步最快**的反馈。

> Code review 的对象是代码，不是写代码的人。

## 好的 Review Comment

### 差的例子

\`\`\`
❌ 这里写得不对
❌ 为什么不用三元表达式？太啰嗦了
❌ 你这样写性能很差
\`\`\`

### 好的例子

\`\`\`
✅ 这里可以考虑用三元表达式简化：
   const status = isActive ? 'active' : 'inactive'
   个人觉得可读性更好，你觉得呢？

✅ 担心这里每次都重新创建函数可能会有性能影响，
   要不要试试 useCallback 或者提到组件外面？
\`\`\`

## Review 清单

| 维度 | 关注点 |
|------|--------|
| 逻辑 | 边界情况处理了吗？有潜在 bug 吗？ |
| 可读性 | 变量命名清晰吗？逻辑容易理解吗？ |
| 性能 | 有不必要的渲染吗？大循环可以优化吗？ |
| 安全 | 用户输入验证了吗？XSS 防护了吗？ |
| 一致性 | 和项目现有风格一致吗？ |

## 作为提交者

\`\`\`bash
# 提交 PR 前自检
1. 自己先 review 一遍 diff
2. 确保 CI 通过
3. PR 描述写清楚"做了什么"和"为什么"
4. 大 PR 拆成小 PR（200 行以内最佳）
\`\`\`

提交 PR 时的描述模板：

\`\`\`markdown
## 做了什么
- 添加用户登录功能
- 集成 JWT 认证

## 为什么这样做
- 使用 JWT 而非 Session，因为前后端分离部署

## 测试
- [x] 单元测试通过
- [x] 手动测试了登录/登出流程
\`\`\`

## 作为 Reviewer

1. **先看整体设计**，再看代码细节
2. **提出问题**而不是下达指令
3. **区分必须改和可以改**：用 Nit（建议）标记小问题
4. **看到好的代码也要说出来** — 正向反馈很重要

\`\`\`
nit: 这个变量名可以考虑改成 userName（建议，非强制）
\`\`\`

---

*最好的代码审查是让双方都学到东西。*
`,_=s({default:()=>v}),v=`---
title: Docker 入门：从"在我电脑上是好的"到"哪里都是好的"
date: 2025-08-05
description: 分享我学习 Docker 的过程，涵盖基本概念、常用命令和实际项目中的 Docker 化实践。
---

## 环境地狱

每个开发者都遇到过这样的场景：

\`\`\`
同事：项目跑不起来，报了个错
我：我电脑上没问题啊
同事：（截图）
我：你 Node 版本多少？
同事：v14
我：项目要 v18...
\`\`\`

> "It works on my machine" 是团队协作最大的敌人。

## Docker 是什么？

简单来说，Docker 把应用和它的依赖打包在一起：

\`\`\`
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
\`\`\`

## 常用命令

\`\`\`bash
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
\`\`\`

## 一个 Node.js 项目的 Dockerfile

\`\`\`dockerfile
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
\`\`\`

## Docker Compose

多服务项目使用 Compose 管理：

\`\`\`yaml
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
\`\`\`

## 核心概念对比

| 概念 | 类比 | 特点 |
|------|------|------|
| Image | 模具 | 只读，不可变 |
| Container | 铸件 | 可运行，可销毁 |
| Volume | U 盘 | 持久化数据 |
| Network | 局域网 | 容器间通信 |

---

*一次构建，到处运行——这就是 Docker 的承诺。*
`,y=s({default:()=>b}),b=`---
title: Git 工作流：从小白到团队协作
date: 2025-06-25
description: 整理我在团队中使用 Git 的经验，涵盖分支管理、commit 规范和常见坑点。
---

## 那些年踩过的 Git 坑

刚学 Git 时，我的操作基本就是：

\`\`\`bash
git add .
git commit -m "update"
git push
\`\`\`

这种"一把梭"的方式在个人项目中勉强能用，但到了团队协作就**频频翻车**。

> Git 不是备份工具，而是协作语言。

## 分支管理策略

我们团队采用的是简化版的 Git Flow：

\`\`\`
main          ← 生产环境
  └── develop ← 开发环境
       ├── feature/login
       ├── feature/payment
       └── feature/dashboard
\`\`\`

## Commit 规范

\`\`\`bash
# 好的 commit
feat: add user login with JWT auth
fix: resolve race condition in cart checkout
docs: update API documentation for v2
refactor: extract shared validation logic

# 不好的 commit
update code
fix bug
wip
\`\`\`

## 常用操作速查

| 场景 | 命令 |
|------|------|
| 撤销未提交的修改 | \`git checkout -- <file>\` |
| 修改最后一次 commit | \`git commit --amend\` |
| 合并多个 commit | \`git rebase -i HEAD~3\` |
| 暂存当前工作 | \`git stash\` |
| 找回 stash 的内容 | \`git stash pop\` |

## 合并 vs 变基

\`\`\`bash
# Merge — 保留完整历史，产生合并节点
git merge feature/login

# Rebase — 线性历史，更清晰
git rebase main
\`\`\`

个人开发用 \`rebase\` 保持历史整洁，团队共享分支用 \`merge\` 避免冲突。

## 一个典型的日常流程

\`\`\`bash
# 1. 从 develop 拉最新代码
git checkout develop && git pull

# 2. 创建 feature 分支
git checkout -b feature/my-task

# 3. 开发和提交
git add src/login.ts
git commit -m "feat: implement login form"

# 4. 推送并创建 PR
git push -u origin feature/my-task
\`\`\`

---

*好的 Git 习惯，从写好 commit message 开始。*
`,x=s({default:()=>ee}),ee=`---
title: 为什么我放弃了 jQuery
date: 2025-05-18
description: 从 jQuery 到原生 JavaScript 再到现代框架，聊聊前端技术栈的更迭与思考。
---

## 入门前端的第一行 jQuery

很多前端开发者的入门路径是这样的：

\`\`\`javascript
$(document).ready(function() {
  $('#btn').click(function() {
    $('#result').text('Hello, World!')
  })
})
\`\`\`

在 2015 年，这几乎是前端开发的"**标准写法**"。

> jQuery 不是不好，只是时代变了。

## jQuery 曾经解决的痛点

| 痛点 | jQuery | 现代方案 |
|------|--------|----------|
| DOM 选择 | \`$('.class')\` | \`querySelectorAll\` |
| AJAX 请求 | \`$.ajax()\` | \`fetch\` / \`axios\` |
| 动画 | \`$.animate()\` | CSS Animations / FLIP |
| 事件绑定 | \`$.on()\` | \`addEventListener\` |
| 兼容性 | 统一 API | Babel + polyfills |

## 原生 JS 已经足够好

\`\`\`javascript
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
\`\`\`

DOM 操作也变得直观：

\`\`\`javascript
// 选择元素
document.querySelectorAll('.card')

// 事件监听
element.addEventListener('click', handler)

// 修改 class
element.classList.add('active')
element.classList.toggle('dark')
\`\`\`

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
`,S=s({default:()=>C}),C=`---
title: RESTful API 设计：那些年我踩过的坑
date: 2025-04-22
description: 总结 API 设计中的常见错误和最佳实践，从 URL 命名到错误处理，让接口更规范。
---

## 糟糕的 API 是什么样的？

刚工作那会，我写过这样的接口：

\`\`\`
POST /api/getUserInfo
POST /api/deleteUserById
POST /api/updateUserPassword
\`\`\`

所有请求都是 \`POST\`，URL 里有动词，看起来像是"能跑就行"。

> 好的 API 设计能让调用者一眼看懂意图。

## URL 设计原则

\`\`\`bash
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
\`\`\`

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

\`\`\`json
{
  "code": 0,
  "message": "success",
  "data": {
    "id": 42,
    "name": "张三",
    "email": "zhangsan@example.com"
  }
}
\`\`\`

错误响应也要统一：

\`\`\`json
{
  "code": 40001,
  "message": "邮箱格式不正确",
  "data": null
}
\`\`\`

## 分页与过滤

\`\`\`bash
# 分页
GET /api/users?page=2&size=20

# 过滤
GET /api/users?status=active&role=admin

# 排序
GET /api/users?sort=-created_at

# 字段选择
GET /api/users?fields=id,name,email
\`\`\`

## 版本管理

\`\`\`
/api/v1/users    # URL 路径版本
/api/v2/users

# 或者用 Header
Accept: application/vnd.api.v2+json
\`\`\`

建议新项目一开始就带上版本号——**你不会想在 6 个月后重构所有接口**。

---

*API 是给开发者用的产品，用心设计每一处细节。*
`,w=s({default:()=>T}),T=`---
title: Tailwind CSS：提升开发效率的利器
date: 2025-08-20
description: 在使用了多个 CSS 框架后，为什么我最终爱上了 Tailwind CSS 的原子化思想。
---

## 起步

在接触 Tailwind CSS 之前，我的 CSS 方案经历了好几个阶段：

1. **手写 CSS** — 灵活但难以维护
2. **Bootstrap** — 快速但千篇一律
3. **CSS Modules** — 隔离性好但碎片化
4. **Styled Components** — 动态但运行时开销

## 为什么会选择 Tailwind？

> "Best practices" don't actually work.

很多人第一次看到 Tailwind 会觉得它很丑——一堆类名堆在 HTML 上。但实际上，**原子化 CSS 解决了样式管理中最根本的问题：全局作用域**。

### 对比

传统方式：

\`\`\`css
/* styles.css */
.card {
  border-radius: 8px;
  padding: 24px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
}
\`\`\`

\`\`\`html
<div class="card">
  <h3 class="card-header">Title</h3>
  <p>Content here</p>
</div>
\`\`\`

Tailwind 方式：

\`\`\`html
<div class="rounded-lg p-6 bg-white shadow-md">
  <h3 class="text-lg font-semibold mb-3">Title</h3>
  <p>Content here</p>
</div>
\`\`\`

## 核心优势

| 特性 | 传统 CSS | Tailwind |
|------|----------|----------|
| 作用域 | 全局 | 原子级 |
| 按需加载 | 手动 | 自动 Tree-shaking |
| 响应式 | 写 media queries | 前缀即可 \`md:flex\` |
| 深色模式 | 额外 CSS | \`dark:bg-gray-800\` |
| 设计系统 | 自行维护 | 内置 Design Tokens |

## 实际项目中的收益

使用 Tailwind 半年后，我发现几个明显的变化：

- CSS 文件体积减少了 **70% 以上**
- 不再纠结命名（\`card-wrapper\` vs \`card-container\`）
- 改样式时不需要在 CSS 和 HTML 之间来回跳转
- 团队新成员上手更快——只需读懂 HTML 就能理解样式

## 总结

Tailwind CSS 不是银弹，但它在**开发效率**和**可维护性**之间找到了很好的平衡点。如果你还没尝试过，不妨给它的 **"丑陋但高效"** 一个机会。

---

*工具是为目标服务的，别让工具成为目标本身。*
`,E=s({default:()=>D}),D=`---
title: TypeScript 类型体操入门
date: 2025-09-12
description: 从简单的泛型到复杂的类型推断，记录我在 TypeScript 类型系统中摸爬滚打的经历。
---

## 为什么学类型体操？

刚开始用 TypeScript 时，我只写最基本的类型标注：

\`\`\`typescript
const name: string = 'hello'
const count: number = 42
\`\`\`

后来在阅读开源库源码时，我发现那些"花里胡哨"的类型定义并不是炫技——它们确实能**在编译期发现问题**。

> 类型系统是 TypeScript 的灵魂，而不是束缚。

## 从基础开始

### 泛型

\`\`\`typescript
// 最简单的泛型
function identity<T>(arg: T): T {
  return arg
}

// 约束泛型
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length
}
\`\`\`

### 条件类型

\`\`\`typescript
type IsString<T> = T extends string ? true : false

type A = IsString<'hello'>  // true
type B = IsString<42>       // false
\`\`\`

## 常用工具类型

| 工具类型 | 作用 | 示例 |
|----------|------|------|
| \`Partial<T>\` | 所有属性可选 | \`Partial<User>\` |
| \`Required<T>\` | 所有属性必填 | \`Required<Config>\` |
| \`Pick<T, K>\` | 选取部分属性 | \`Pick<User, 'name'>\` |
| \`Omit<T, K>\` | 排除部分属性 | \`Omit<User, 'password'>\` |
| \`Record<K, V>\` | 构造对象类型 | \`Record<string, number>\` |

## 实战：实现一个 DeepReadonly

\`\`\`typescript
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
\`\`\`

## 学习资源

1. **TypeScript 官方文档** — 最好的起点
2. **type-challenges** — GitHub 上的类型编程练习
3. **TypeScript 源码** — 看 lib.d.ts 文件

---

*类型即文档，类型即约束，类型即安全。*
`,O=s({default:()=>k}),k=`---
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

\`\`\`typescript
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
\`\`\`

## 测试金字塔

\`\`\`
        ┌─────┐
        │ E2E │  ← 少而精
       ┌┴─────┴┐
       │ 集成   │  ← 适量
      ┌┴───────┴┐
      │  单元测试 │  ← 多而快
      └─────────┘
\`\`\`

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

\`\`\`typescript
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
\`\`\`

## 测试驱动开发（TDD）的体会

1. **先写测试** → 迫使你想清楚需求
2. **写最少代码通过测试** → 避免过度设计
3. **重构** → 有测试保护，大胆改

---

*测试不是证明代码没有 bug，而是让你敢改代码。*
`,A=s({default:()=>j}),j=`---
title: Vim 快捷键速查：我的日常使用笔记
date: 2025-07-08
description: 从被迫使用到爱不释手，记录我最常用的 Vim 操作技巧和配置心得。
---

## 我为什么学 Vim？

最开始用 Vim 纯粹是因为 SSH 到服务器只能用它编辑配置文件。后来发现，**手指不离开键盘**的感觉太爽了。

> Vim 的学习曲线很陡，但翻过去之后就是坦途。

## 基础移动

\`\`\`
h j k l    — 左下上右
w b        — 前进/后退一个单词
0 $        — 行首/行尾
gg G       — 文件开头/结尾
\`\`\`

## 编辑操作

\`\`\`bash
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
\`\`\`

## 组合技

| 操作 | 含义 | 记忆技巧 |
|------|------|----------|
| \`ciw\` | 修改当前单词 | change inner word |
| \`di(\` | 删除括号内容 | delete inside ( |
| \`yiw\` | 复制当前单词 | yank inner word |
| \`dt"\` | 删除到引号前 | delete to " |
| \`5dd\` | 删除 5 行 | 5 times dd |

## 我的 .vimrc 配置片段

\`\`\`vim
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
\`\`\`

## 在 VS Code 中使用 Vim

装好 Vim 插件后，大部分基础操作都能直接用。不过有几个冲突需要注意：

- \`Ctrl+D\` 在 VS Code 里默认是"多光标选择"，Vim 里是"向下翻半页"
- 建议在 VS Code 中使用 \`Insert\` 模式为主，\`Normal\` 模式为辅

---

*习惯即成自然，自然即成效率。*
`,M=s({default:()=>N}),N=`---
title: 为什么我选择了前端开发？
date: 2025-10-15
description: 前端开发的魅力在于它能直接将创意呈现给用户。聊聊我进入这个行业的初衷与感悟。
---

## 从好奇开始

我写的第一行代码是一个简单的 HTML 页面：

\`\`\`html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, World!</h1>
    <button onclick="alert('Hi!')">点我</button>
  </body>
</html>
\`\`\`

当我在浏览器中看到那个按钮，点下去弹出一个对话框时，那种**即时的反馈感**让我着迷。不同于后端的数据流，前端的东西是可见、可触摸的。

## 前端 vs 后端

我曾短暂地尝试过后端开发，写过一个简单的 Express API：

\`\`\`javascript
const express = require('express')
const app = express()

app.get('/api/users', async (req, res) => {
  const users = await db.query('SELECT * FROM users')
  res.json(users)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
\`\`\`

数据正确地返回了，调试工具显示 200 OK，但我的内心毫无波澜。相比之下，写一个带动画的卡片组件能让我反复调整好几个小时。

## 前端的三个魅力

### 1. 即时反馈

\`\`\`
写代码 → 保存 → 刷新浏览器 → 看到效果
\`\`\`

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
`,P=Object.assign({"/src/assets/md/2025-year-review.md":d,"/src/assets/md/SKILL开发心得.md":p,"/src/assets/md/code-review-culture.md":h,"/src/assets/md/docker-intro-guide.md":_,"/src/assets/md/git-workflow-best-practices.md":y,"/src/assets/md/goodbye-jquery.md":x,"/src/assets/md/rest-api-design-guide.md":S,"/src/assets/md/tailwind-css-guide.md":w,"/src/assets/md/typescript-type-challenges.md":E,"/src/assets/md/unit-testing-value.md":O,"/src/assets/md/vim-shortcuts-cheatsheet.md":A,"/src/assets/md/why-frontend.md":M});function F(){return Object.entries(P).map(([e,t])=>{let n=typeof t==`string`?t:t.default;return{slug:e.split(`/`).pop().replace(/\.md$/,``),raw:n}})}function I(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var L=I();function te(e){L=e}var R={exec:()=>null};function z(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(B.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var ne=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),B={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},re=/^(?:[ \t]*(?:\n|$))+/,ie=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ae=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,V=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,oe=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,se=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ce=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,le=z(ce).replace(/bull/g,se).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),ue=z(ce).replace(/bull/g,se).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),de=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,fe=/^[^\n]+/,pe=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,me=z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,pe).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),he=z(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,se).getRegex(),ge=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,_e=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ve=z(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,_e).replace(`tag`,ge).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),H=z(de).replace(`hr`,V).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,ge).getRegex(),ye={blockquote:z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,H).getRegex(),code:ie,def:me,fences:ae,heading:oe,hr:V,html:ve,lheading:le,list:he,newline:re,paragraph:H,table:R,text:fe},U=z(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,V).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,ge).getRegex(),be={...ye,lheading:ue,table:U,paragraph:z(de).replace(`hr`,V).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,U).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,ge).getRegex()},xe={...ye,html:z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,_e).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:R,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:z(de).replace(`hr`,V).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,le).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Se=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ce=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,we=/^( {2,}|\\)\n(?!\s*$)/,Te=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,W=/[\p{P}\p{S}]/u,Ee=/[\s\p{P}\p{S}]/u,De=/[^\s\p{P}\p{S}]/u,Oe=z(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,Ee).getRegex(),ke=/(?!~)[\p{P}\p{S}]/u,Ae=/(?!~)[\s\p{P}\p{S}]/u,je=/(?:[^\s\p{P}\p{S}]|~)/u,Me=z(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,ne?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Ne=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Pe=z(Ne,`u`).replace(/punct/g,W).getRegex(),G=z(Ne,`u`).replace(/punct/g,ke).getRegex(),Fe=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Ie=z(Fe,`gu`).replace(/notPunctSpace/g,De).replace(/punctSpace/g,Ee).replace(/punct/g,W).getRegex(),Le=z(Fe,`gu`).replace(/notPunctSpace/g,je).replace(/punctSpace/g,Ae).replace(/punct/g,ke).getRegex(),Re=z(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,De).replace(/punctSpace/g,Ee).replace(/punct/g,W).getRegex(),ze=z(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,W).getRegex(),Be=z(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,De).replace(/punctSpace/g,Ee).replace(/punct/g,W).getRegex(),Ve=z(/\\(punct)/,`gu`).replace(/punct/g,W).getRegex(),He=z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ue=z(_e).replace(`(?:-->|$)`,`-->`).getRegex(),We=z(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Ue).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ge=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Ke=z(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,Ge).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),qe=z(/^!?\[(label)\]\[(ref)\]/).replace(`label`,Ge).replace(`ref`,pe).getRegex(),Je=z(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,pe).getRegex(),Ye=z(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,qe).replace(`nolink`,Je).getRegex(),Xe=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ze={_backpedal:R,anyPunctuation:Ve,autolink:He,blockSkip:Me,br:we,code:Ce,del:R,delLDelim:R,delRDelim:R,emStrongLDelim:Pe,emStrongRDelimAst:Ie,emStrongRDelimUnd:Re,escape:Se,link:Ke,nolink:Je,punctuation:Oe,reflink:qe,reflinkSearch:Ye,tag:We,text:Te,url:R},Qe={...Ze,link:z(/^!?\[(label)\]\((.*?)\)/).replace(`label`,Ge).getRegex(),reflink:z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,Ge).getRegex()},$e={...Ze,emStrongRDelimAst:Le,emStrongLDelim:G,delLDelim:ze,delRDelim:Be,url:z(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,Xe).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:z(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,Xe).getRegex()},et={...$e,br:z(we).replace(`{2,}`,`*`).getRegex(),text:z($e.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},tt={normal:ye,gfm:be,pedantic:xe},nt={normal:Ze,gfm:$e,breaks:et,pedantic:Qe},rt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},it=e=>rt[e];function K(e,t){if(t){if(B.escapeTest.test(e))return e.replace(B.escapeReplace,it)}else if(B.escapeTestNoEncode.test(e))return e.replace(B.escapeReplaceNoEncode,it);return e}function at(e){try{e=encodeURI(e).replace(B.percentDecode,`%`)}catch{return null}return e}function ot(e,t){let n=e.replace(B.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(B.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(B.slashPipe,`|`);return n}function q(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function st(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&B.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function ct(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function lt(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function ut(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function dt(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var ft=class{options;rules;lexer;constructor(e){this.options=e||L}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:st(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=dt(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=q(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:q(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:q(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=q(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=lt(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=st(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:q(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=ot(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:q(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(ot(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:q(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=q(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=ct(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),ut(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return ut(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},J=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||L,this.options.tokenizer=this.options.tokenizer||new ft,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:B,block:tt.normal,inline:nt.normal};this.options.pedantic?(t.block=tt.pedantic,t.inline=nt.pedantic):this.options.gfm&&(t.block=tt.gfm,this.options.breaks?t.inline=nt.breaks:t.inline=nt.gfm),this.tokenizer.rules=t}static get rules(){return{block:tt,inline:nt}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(B.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(B.tabCharGlobal,`    `).replace(B.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``,s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},pt=class{options;parser;constructor(e){this.options=e||L}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(B.notSpaceStart)?.[0],i=e.replace(B.endingNewline,``)+`
`;return r?`<pre><code class="language-`+K(r)+`">`+(n?i:K(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:K(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${K(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=at(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+K(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=at(e);if(i===null)return K(n);e=i;let a=`<img src="${e}" alt="${K(n)}"`;return t&&(a+=` title="${K(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:K(e.text)}},mt=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Y=class e{options;renderer;textRenderer;constructor(e){this.options=e||L,this.options.renderer=this.options.renderer||new pt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new mt}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},ht=class{options;block;constructor(e){this.options=e||L}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?J.lex:J.lexInline}provideParser(e=this.block){return e?Y.parse:Y.parseInline}},gt=new class{defaults=I();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Y;Renderer=pt;TextRenderer=mt;Lexer=J;Tokenizer=ft;Hooks=ht;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new pt(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new ft(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new ht;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];ht.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&ht.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return J.lex(e,t??this.defaults)}parser(e,t){return Y.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?J.lex:J.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Y.parse:Y.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?J.lex:J.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Y.parse:Y.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+K(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function X(e,t){return gt.parse(e,t)}X.options=X.setOptions=function(e){return gt.setOptions(e),X.defaults=gt.defaults,te(X.defaults),X},X.getDefaults=I,X.defaults=L,X.use=function(...e){return gt.use(...e),X.defaults=gt.defaults,te(X.defaults),X},X.walkTokens=function(e,t){return gt.walkTokens(e,t)},X.parseInline=gt.parseInline,X.Parser=Y,X.parser=Y.parse,X.Renderer=pt,X.TextRenderer=mt,X.Lexer=J,X.lexer=J.lex,X.Tokenizer=ft,X.Hooks=ht,X.parse=X,X.options,X.setOptions,X.use,X.walkTokens,X.parseInline,Y.parse,J.lex;function _t(e){let t={},n=e;if(e.startsWith(`---`)){let r=e.indexOf(`
---`,3);if(r!==-1){let i=e.slice(3,r).trim();n=e.slice(r+4).trim();for(let e of i.split(`
`)){let n=e.indexOf(`:`);if(n===-1)continue;let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();(i.startsWith(`"`)&&i.endsWith(`"`)||i.startsWith(`'`)&&i.endsWith(`'`))&&(i=i.slice(1,-1)),/^\d{4}-\d{2}-\d{2}$/.test(i)?i=new Date(i):i===`true`?i=!0:i===`false`&&(i=!1),t[r]=i}}}return{metadata:t,html:X.parse(n)}}var Z=l(o(((e,t)=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw Error(`map is read-only`)}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw Error(`set is read-only`)}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{let r=e[t],i=typeof r;(i===`object`||i===`function`)&&!Object.isFrozen(r)&&n(r)}),e}var r=class{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}};function i(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`)}function a(e,...t){let n=Object.create(null);for(let t in e)n[t]=e[t];return t.forEach(function(e){for(let t in e)n[t]=e[t]}),n}var o=`</span>`,s=e=>!!e.scope,c=(e,{prefix:t})=>{if(e.startsWith(`language:`))return e.replace(`language:`,`language-`);if(e.includes(`.`)){let n=e.split(`.`);return[`${t}${n.shift()}`,...n.map((e,t)=>`${e}${`_`.repeat(t+1)}`)].join(` `)}return`${t}${e}`},l=class{constructor(e,t){this.buffer=``,this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=i(e)}openNode(e){if(!s(e))return;let t=c(e.scope,{prefix:this.classPrefix});this.span(t)}closeNode(e){s(e)&&(this.buffer+=o)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}},u=(e={})=>{let t={children:[]};return Object.assign(t,e),t},d=class e{constructor(){this.rootNode=u(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){let t=u({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t==`string`?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(t=>this._walk(e,t)),e.closeNode(t)),e}static _collapse(t){typeof t!=`string`&&t.children&&(t.children.every(e=>typeof e==`string`)?t.children=[t.children.join(``)]:t.children.forEach(t=>{e._collapse(t)}))}},f=class extends d{constructor(e){super(),this.options=e}addText(e){e!==``&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,t){let n=e.root;t&&(n.scope=`language:${t}`),this.add(n)}toHTML(){return new l(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}};function p(e){return e?typeof e==`string`?e:e.source:null}function m(e){return _(`(?=`,e,`)`)}function h(e){return _(`(?:`,e,`)*`)}function g(e){return _(`(?:`,e,`)?`)}function _(...e){return e.map(e=>p(e)).join(``)}function v(e){let t=e[e.length-1];return typeof t==`object`&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function y(...e){return`(`+(v(e).capture?``:`?:`)+e.map(e=>p(e)).join(`|`)+`)`}function b(e){return RegExp(e.toString()+`|`).exec(``).length-1}function x(e,t){let n=e&&e.exec(t);return n&&n.index===0}var ee=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function S(e,{joinWith:t}){let n=0;return e.map(e=>{n+=1;let t=n,r=p(e),i=``;for(;r.length>0;){let e=ee.exec(r);if(!e){i+=r;break}i+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),e[0][0]===`\\`&&e[1]?i+=`\\`+String(Number(e[1])+t):(i+=e[0],e[0]===`(`&&n++)}return i}).map(e=>`(${e})`).join(t)}var C=/\b\B/,w=`[a-zA-Z]\\w*`,T=`[a-zA-Z_]\\w*`,E=`\\b\\d+(\\.\\d+)?`,D=`(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)`,O=`\\b(0b[01]+)`,k=`!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~`,A=(e={})=>{let t=/^#![ ]*\//;return e.binary&&(e.begin=_(t,/.*\b/,e.binary,/\b.*/)),a({scope:`meta`,begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{e.index!==0&&t.ignoreMatch()}},e)},j={begin:`\\\\[\\s\\S]`,relevance:0},M={scope:`string`,begin:`'`,end:`'`,illegal:`\\n`,contains:[j]},N={scope:`string`,begin:`"`,end:`"`,illegal:`\\n`,contains:[j]},P={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},F=function(e,t,n={}){let r=a({scope:`comment`,begin:e,end:t,contains:[]},n);r.contains.push({scope:`doctag`,begin:`[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)`,end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});let i=y(`I`,`a`,`is`,`so`,`us`,`to`,`at`,`if`,`in`,`it`,`on`,/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:_(/[ ]+/,`(`,i,/[.]?[:]?([.][ ]|[ ])/,`){3}`)}),r},I=F(`//`,`$`),L=F(`/\\*`,`\\*/`),te=F(`#`,`$`),R={scope:`number`,begin:E,relevance:0},z={scope:`number`,begin:D,relevance:0},ne={scope:`number`,begin:O,relevance:0},B={scope:`regexp`,begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[j,{begin:/\[/,end:/\]/,relevance:0,contains:[j]}]},re={scope:`title`,begin:w,relevance:0},ie={scope:`title`,begin:T,relevance:0},ae={begin:`\\.\\s*`+T,relevance:0},V=Object.freeze({__proto__:null,APOS_STRING_MODE:M,BACKSLASH_ESCAPE:j,BINARY_NUMBER_MODE:ne,BINARY_NUMBER_RE:O,COMMENT:F,C_BLOCK_COMMENT_MODE:L,C_LINE_COMMENT_MODE:I,C_NUMBER_MODE:z,C_NUMBER_RE:D,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})},HASH_COMMENT_MODE:te,IDENT_RE:w,MATCH_NOTHING_RE:C,METHOD_GUARD:ae,NUMBER_MODE:R,NUMBER_RE:E,PHRASAL_WORDS_MODE:P,QUOTE_STRING_MODE:N,REGEXP_MODE:B,RE_STARTERS_RE:k,SHEBANG:A,TITLE_MODE:re,UNDERSCORE_IDENT_RE:T,UNDERSCORE_TITLE_MODE:ie});function oe(e,t){e.input[e.index-1]===`.`&&t.ignoreMatch()}function se(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function ce(e,t){t&&e.beginKeywords&&(e.begin=`\\b(`+e.beginKeywords.split(` `).join(`|`)+`)(?!\\.)(?=\\b|\\s)`,e.__beforeBegin=oe,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function le(e,t){Array.isArray(e.illegal)&&(e.illegal=y(...e.illegal))}function ue(e,t){if(e.match){if(e.begin||e.end)throw Error(`begin & end are not supported with match`);e.begin=e.match,delete e.match}}function de(e,t){e.relevance===void 0&&(e.relevance=1)}var fe=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw Error(`beforeMatch cannot be used with starts`);let n=Object.assign({},e);Object.keys(e).forEach(t=>{delete e[t]}),e.keywords=n.keywords,e.begin=_(n.beforeMatch,m(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},pe=[`of`,`and`,`for`,`in`,`not`,`or`,`if`,`then`,`parent`,`list`,`value`],me=`keyword`;function he(e,t,n=me){let r=Object.create(null);return typeof e==`string`?i(n,e.split(` `)):Array.isArray(e)?i(n,e):Object.keys(e).forEach(function(n){Object.assign(r,he(e[n],t,n))}),r;function i(e,n){t&&(n=n.map(e=>e.toLowerCase())),n.forEach(function(t){let n=t.split(`|`);r[n[0]]=[e,ge(n[0],n[1])]})}}function ge(e,t){return t?Number(t):+!_e(e)}function _e(e){return pe.includes(e.toLowerCase())}var ve={},H=e=>{console.error(e)},ye=(e,...t)=>{console.log(`WARN: ${e}`,...t)},U=(e,t)=>{ve[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),ve[`${e}/${t}`]=!0)},be=Error();function xe(e,t,{key:n}){let r=0,i=e[n],a={},o={};for(let e=1;e<=t.length;e++)o[e+r]=i[e],a[e+r]=!0,r+=b(t[e-1]);e[n]=o,e[n]._emit=a,e[n]._multi=!0}function Se(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw H(`skip, excludeBegin, returnBegin not compatible with beginScope: {}`),be;if(typeof e.beginScope!=`object`||e.beginScope===null)throw H(`beginScope must be object`),be;xe(e,e.begin,{key:`beginScope`}),e.begin=S(e.begin,{joinWith:``})}}function Ce(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw H(`skip, excludeEnd, returnEnd not compatible with endScope: {}`),be;if(typeof e.endScope!=`object`||e.endScope===null)throw H(`endScope must be object`),be;xe(e,e.end,{key:`endScope`}),e.end=S(e.end,{joinWith:``})}}function we(e){e.scope&&typeof e.scope==`object`&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Te(e){we(e),typeof e.beginScope==`string`&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope==`string`&&(e.endScope={_wrap:e.endScope}),Se(e),Ce(e)}function W(e){function t(t,n){return new RegExp(p(t),`m`+(e.case_insensitive?`i`:``)+(e.unicodeRegex?`u`:``)+(n?`g`:``))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=b(e)+1}compile(){this.regexes.length===0&&(this.exec=()=>null),this.matcherRe=t(S(this.regexes.map(e=>e[1]),{joinWith:`|`}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;let t=this.matcherRe.exec(e);if(!t)return null;let n=t.findIndex((e,t)=>t>0&&e!==void 0),r=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,r)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];let t=new n;return this.rules.slice(e).forEach(([e,n])=>t.addRule(e,n)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),t.type===`begin`&&this.count++}exec(e){let t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition()&&!(n&&n.index===this.lastIndex)){let t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}function i(e){let t=new r;return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:`begin`})),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:`end`}),e.illegal&&t.addRule(e.illegal,{type:`illegal`}),t}function o(n,r){let a=n;if(n.isCompiled)return a;[se,ue,Te,fe].forEach(e=>e(n,r)),e.compilerExtensions.forEach(e=>e(n,r)),n.__beforeBegin=null,[ce,le,de].forEach(e=>e(n,r)),n.isCompiled=!0;let s=null;return typeof n.keywords==`object`&&n.keywords.$pattern&&(n.keywords=Object.assign({},n.keywords),s=n.keywords.$pattern,delete n.keywords.$pattern),s||=/\w+/,n.keywords&&=he(n.keywords,e.case_insensitive),a.keywordPatternRe=t(s,!0),r&&(n.begin||=/\B|\b/,a.beginRe=t(a.begin),!n.end&&!n.endsWithParent&&(n.end=/\B|\b/),n.end&&(a.endRe=t(a.end)),a.terminatorEnd=p(a.end)||``,n.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(n.end?`|`:``)+r.terminatorEnd)),n.illegal&&(a.illegalRe=t(n.illegal)),n.contains||=[],n.contains=[].concat(...n.contains.map(function(e){return De(e===`self`?n:e)})),n.contains.forEach(function(e){o(e,a)}),n.starts&&o(n.starts,r),a.matcher=i(a),a}if(e.compilerExtensions||=[],e.contains&&e.contains.includes(`self`))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),o(e)}function Ee(e){return e?e.endsWithParent||Ee(e.starts):!1}function De(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return a(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:Ee(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}var Oe=`11.11.1`,ke=class extends Error{constructor(e,t){super(e),this.name=`HTMLInjectionError`,this.html=t}},Ae=i,je=a,Me=Symbol(`nomatch`),Ne=7,Pe=function(e){let t=Object.create(null),i=Object.create(null),a=[],o=!0,s=`Could not find the language '{}', did you forget to load/include a language module?`,c={disableAutodetect:!0,name:`Plain text`,contains:[]},l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:`hljs-`,cssSelector:`pre code`,languages:null,__emitter:f};function u(e){return l.noHighlightRe.test(e)}function d(e){let t=e.className+` `;t+=e.parentNode?e.parentNode.className:``;let n=l.languageDetectRe.exec(t);if(n){let t=M(n[1]);return t||(ye(s.replace(`{}`,n[1])),ye(`Falling back to no-highlight mode for this block.`,e)),t?n[1]:`no-highlight`}return t.split(/\s+/).find(e=>u(e)||M(e))}function p(e,t,n){let r=``,i=``;typeof t==`object`?(r=e,n=t.ignoreIllegals,i=t.language):(U(`10.7.0`,`highlight(lang, code, ...args) has been deprecated.`),U(`10.7.0`,`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),i=e,r=t),n===void 0&&(n=!0);let a={code:r,language:i};te(`before:highlight`,a);let o=a.result?a.result:v(a.language,a.code,n);return o.code=a.code,te(`after:highlight`,o),o}function v(e,n,i,a){let c=Object.create(null);function u(e,t){return e.keywords[t]}function d(){if(!k.keywords){j.addText(N);return}let e=0;k.keywordPatternRe.lastIndex=0;let t=k.keywordPatternRe.exec(N),n=``;for(;t;){n+=N.substring(e,t.index);let r=E.case_insensitive?t[0].toLowerCase():t[0],i=u(k,r);if(i){let[e,a]=i;if(j.addText(n),n=``,c[r]=(c[r]||0)+1,c[r]<=Ne&&(P+=a),e.startsWith(`_`))n+=t[0];else{let n=E.classNameAliases[e]||e;m(t[0],n)}}else n+=t[0];e=k.keywordPatternRe.lastIndex,t=k.keywordPatternRe.exec(N)}n+=N.substring(e),j.addText(n)}function f(){if(N===``)return;let e=null;if(typeof k.subLanguage==`string`){if(!t[k.subLanguage]){j.addText(N);return}e=v(k.subLanguage,N,!0,A[k.subLanguage]),A[k.subLanguage]=e._top}else e=ee(N,k.subLanguage.length?k.subLanguage:null);k.relevance>0&&(P+=e.relevance),j.__addSublanguage(e._emitter,e.language)}function p(){k.subLanguage==null?d():f(),N=``}function m(e,t){e!==``&&(j.startScope(t),j.addText(e),j.endScope())}function h(e,t){let n=1,r=t.length-1;for(;n<=r;){if(!e._emit[n]){n++;continue}let r=E.classNameAliases[e[n]]||e[n],i=t[n];r?m(i,r):(N=i,d(),N=``),n++}}function g(e,t){return e.scope&&typeof e.scope==`string`&&j.openNode(E.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(m(N,E.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),N=``):e.beginScope._multi&&(h(e.beginScope,t),N=``)),k=Object.create(e,{parent:{value:k}}),k}function _(e,t,n){let i=x(e.endRe,n);if(i){if(e[`on:end`]){let n=new r(e);e[`on:end`](t,n),n.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return _(e.parent,t,n)}function y(e){return k.matcher.regexIndex===0?(N+=e[0],1):(L=!0,0)}function b(e){let t=e[0],n=e.rule,i=new r(n),a=[n.__beforeBegin,n[`on:begin`]];for(let n of a)if(n&&(n(e,i),i.isMatchIgnored))return y(t);return n.skip?N+=t:(n.excludeBegin&&(N+=t),p(),!n.returnBegin&&!n.excludeBegin&&(N=t)),g(n,e),n.returnBegin?0:t.length}function S(e){let t=e[0],r=n.substring(e.index),i=_(k,e,r);if(!i)return Me;let a=k;k.endScope&&k.endScope._wrap?(p(),m(t,k.endScope._wrap)):k.endScope&&k.endScope._multi?(p(),h(k.endScope,e)):a.skip?N+=t:(a.returnEnd||a.excludeEnd||(N+=t),p(),a.excludeEnd&&(N=t));do k.scope&&j.closeNode(),!k.skip&&!k.subLanguage&&(P+=k.relevance),k=k.parent;while(k!==i.parent);return i.starts&&g(i.starts,e),a.returnEnd?0:t.length}function C(){let e=[];for(let t=k;t!==E;t=t.parent)t.scope&&e.unshift(t.scope);e.forEach(e=>j.openNode(e))}let w={};function T(t,r){let a=r&&r[0];if(N+=t,a==null)return p(),0;if(w.type===`begin`&&r.type===`end`&&w.index===r.index&&a===``){if(N+=n.slice(r.index,r.index+1),!o){let t=Error(`0 width match regex (${e})`);throw t.languageName=e,t.badRule=w.rule,t}return 1}if(w=r,r.type===`begin`)return b(r);if(r.type===`illegal`&&!i){let e=Error(`Illegal lexeme "`+a+`" for mode "`+(k.scope||`<unnamed>`)+`"`);throw e.mode=k,e}else if(r.type===`end`){let e=S(r);if(e!==Me)return e}if(r.type===`illegal`&&a===``)return N+=`
`,1;if(I>1e5&&I>r.index*3)throw Error(`potential infinite loop, way more iterations than matches`);return N+=a,a.length}let E=M(e);if(!E)throw H(s.replace(`{}`,e)),Error(`Unknown language: "`+e+`"`);let D=W(E),O=``,k=a||D,A={},j=new l.__emitter(l);C();let N=``,P=0,F=0,I=0,L=!1;try{if(E.__emitTokens)E.__emitTokens(n,j);else{for(k.matcher.considerAll();;){I++,L?L=!1:k.matcher.considerAll(),k.matcher.lastIndex=F;let e=k.matcher.exec(n);if(!e)break;let t=T(n.substring(F,e.index),e);F=e.index+t}T(n.substring(F))}return j.finalize(),O=j.toHTML(),{language:e,value:O,relevance:P,illegal:!1,_emitter:j,_top:k}}catch(t){if(t.message&&t.message.includes(`Illegal`))return{language:e,value:Ae(n),illegal:!0,relevance:0,_illegalBy:{message:t.message,index:F,context:n.slice(F-100,F+100),mode:t.mode,resultSoFar:O},_emitter:j};if(o)return{language:e,value:Ae(n),illegal:!1,relevance:0,errorRaised:t,_emitter:j,_top:k};throw t}}function b(e){let t={value:Ae(e),illegal:!1,relevance:0,_top:c,_emitter:new l.__emitter(l)};return t._emitter.addText(e),t}function ee(e,n){n=n||l.languages||Object.keys(t);let r=b(e),i=n.filter(M).filter(P).map(t=>v(t,e,!1));i.unshift(r);let[a,o]=i.sort((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(M(e.language).supersetOf===t.language)return 1;if(M(t.language).supersetOf===e.language)return-1}return 0}),s=a;return s.secondBest=o,s}function S(e,t,n){let r=t&&i[t]||n;e.classList.add(`hljs`),e.classList.add(`language-${r}`)}function C(e){let t=null,n=d(e);if(u(n))return;if(te(`before:highlightElement`,{el:e,language:n}),e.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e);return}if(e.children.length>0&&(l.ignoreUnescapedHTML||(console.warn(`One of your code blocks includes unescaped HTML. This is a potentially serious security risk.`),console.warn(`https://github.com/highlightjs/highlight.js/wiki/security`),console.warn(`The element with unescaped HTML:`),console.warn(e)),l.throwUnescapedHTML))throw new ke(`One of your code blocks includes unescaped HTML.`,e.innerHTML);t=e;let r=t.textContent,i=n?p(r,{language:n,ignoreIllegals:!0}):ee(r);e.innerHTML=i.value,e.dataset.highlighted=`yes`,S(e,n,i.language),e.result={language:i.language,re:i.relevance,relevance:i.relevance},i.secondBest&&(e.secondBest={language:i.secondBest.language,relevance:i.secondBest.relevance}),te(`after:highlightElement`,{el:e,result:i,text:r})}function w(e){l=je(l,e)}let T=()=>{O(),U(`10.6.0`,`initHighlighting() deprecated.  Use highlightAll() now.`)};function E(){O(),U(`10.6.0`,`initHighlightingOnLoad() deprecated.  Use highlightAll() now.`)}let D=!1;function O(){function e(){O()}if(document.readyState===`loading`){D||window.addEventListener(`DOMContentLoaded`,e,!1),D=!0;return}document.querySelectorAll(l.cssSelector).forEach(C)}function k(n,r){let i=null;try{i=r(e)}catch(e){if(H(`Language definition for '{}' could not be registered.`.replace(`{}`,n)),o)H(e);else throw e;i=c}i.name||=n,t[n]=i,i.rawDefinition=r.bind(null,e),i.aliases&&N(i.aliases,{languageName:n})}function A(e){delete t[e];for(let t of Object.keys(i))i[t]===e&&delete i[t]}function j(){return Object.keys(t)}function M(e){return e=(e||``).toLowerCase(),t[e]||t[i[e]]}function N(e,{languageName:t}){typeof e==`string`&&(e=[e]),e.forEach(e=>{i[e.toLowerCase()]=t})}function P(e){let t=M(e);return t&&!t.disableAutodetect}function F(e){e[`before:highlightBlock`]&&!e[`before:highlightElement`]&&(e[`before:highlightElement`]=t=>{e[`before:highlightBlock`](Object.assign({block:t.el},t))}),e[`after:highlightBlock`]&&!e[`after:highlightElement`]&&(e[`after:highlightElement`]=t=>{e[`after:highlightBlock`](Object.assign({block:t.el},t))})}function I(e){F(e),a.push(e)}function L(e){let t=a.indexOf(e);t!==-1&&a.splice(t,1)}function te(e,t){let n=e;a.forEach(function(e){e[n]&&e[n](t)})}function R(e){return U(`10.7.0`,`highlightBlock will be removed entirely in v12.0`),U(`10.7.0`,`Please use highlightElement now.`),C(e)}Object.assign(e,{highlight:p,highlightAuto:ee,highlightAll:O,highlightElement:C,highlightBlock:R,configure:w,initHighlighting:T,initHighlightingOnLoad:E,registerLanguage:k,unregisterLanguage:A,listLanguages:j,getLanguage:M,registerAliases:N,autoDetection:P,inherit:je,addPlugin:I,removePlugin:L}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=Oe,e.regex={concat:_,lookahead:m,either:y,optional:g,anyNumberOfTimes:h};for(let e in V)typeof V[e]==`object`&&n(V[e]);return Object.assign(e,V),e},G=Pe({});G.newInstance=()=>Pe({}),t.exports=G,G.HighlightJS=G,G.default=G}))()).default,vt=`[A-Za-z$_][0-9A-Za-z$_]*`,yt=`as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using`.split(`.`),bt=[`true`,`false`,`null`,`undefined`,`NaN`,`Infinity`],xt=`Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly`.split(`.`),St=[`Error`,`EvalError`,`InternalError`,`RangeError`,`ReferenceError`,`SyntaxError`,`TypeError`,`URIError`],Ct=[`setInterval`,`setTimeout`,`clearInterval`,`clearTimeout`,`require`,`exports`,`eval`,`isFinite`,`isNaN`,`parseFloat`,`parseInt`,`decodeURI`,`decodeURIComponent`,`encodeURI`,`encodeURIComponent`,`escape`,`unescape`],wt=[`arguments`,`this`,`super`,`console`,`window`,`document`,`localStorage`,`sessionStorage`,`module`,`global`],Tt=[].concat(Ct,xt,St);function Et(e){let t=e.regex,n=(e,{after:t})=>{let n=`</`+e[0].slice(1);return e.input.indexOf(n,t)!==-1},r=vt,i={begin:`<>`,end:`</>`},a=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{let r=e[0].length+e.index,i=e.input[r];if(i===`<`||i===`,`){t.ignoreMatch();return}i===`>`&&(n(e,{after:r})||t.ignoreMatch());let a,o=e.input.substring(r);if(a=o.match(/^\s*=/)){t.ignoreMatch();return}if((a=o.match(/^\s+extends\s+/))&&a.index===0){t.ignoreMatch();return}}},s={$pattern:vt,keyword:yt,literal:bt,built_in:Tt,"variable.language":wt},c=`[0-9](_?[0-9])*`,l=`\\.(${c})`,u=`0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`,d={className:`number`,variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:`\\b(0|[1-9](_?[0-9])*)n\\b`},{begin:`\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b`},{begin:`\\b0[bB][0-1](_?[0-1])*n?\\b`},{begin:`\\b0[oO][0-7](_?[0-7])*n?\\b`},{begin:`\\b0[0-7]+n?\\b`}],relevance:0},f={className:`subst`,begin:`\\$\\{`,end:`\\}`,keywords:s,contains:[]},p={begin:".?html`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`xml`}},m={begin:".?css`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`css`}},h={begin:".?gql`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`graphql`}},g={className:`string`,begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,f]},_={className:`comment`,variants:[e.COMMENT(/\/\*\*(?!\/)/,`\\*/`,{relevance:0,contains:[{begin:`(?=@[A-Za-z]+)`,relevance:0,contains:[{className:`doctag`,begin:`@[A-Za-z]+`},{className:`type`,begin:`\\{`,end:`\\}`,excludeEnd:!0,excludeBegin:!0,relevance:0},{className:`variable`,begin:r+`(?=\\s*(-)|$)`,endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,{match:/\$\d+/},d];f.contains=v.concat({begin:/\{/,end:/\}/,keywords:s,contains:[`self`].concat(v)});let y=[].concat(_,f.contains),b=y.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:[`self`].concat(y)}]),x={className:`params`,begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b},ee={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,`(`,t.concat(/\./,r),`)*`)],scope:{1:`keyword`,3:`title.class`,5:`keyword`,7:`title.class.inherited`}},{match:[/class/,/\s+/,r],scope:{1:`keyword`,3:`title.class`}}]},S={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:`title.class`,keywords:{_:[...xt,...St]}},C={label:`use_strict`,className:`meta`,relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},w={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:`keyword`,3:`title.function`},label:`func.def`,contains:[x],illegal:/%/},T={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:`variable.constant`};function E(e){return t.concat(`(?!`,e.join(`|`),`)`)}let D={match:t.concat(/\b/,E([...Ct,`super`,`import`].map(e=>`${e}\\s*\\(`)),r,t.lookahead(/\s*\(/)),className:`title.function`,relevance:0},O={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:`prototype`,className:`property`,relevance:0},k={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:`keyword`,3:`title.function`},contains:[{begin:/\(\)/},x]},A=`(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|`+e.UNDERSCORE_IDENT_RE+`)\\s*=>`,j={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(A)],keywords:`async`,className:{1:`keyword`,3:`title.function`},contains:[x]};return{name:`JavaScript`,aliases:[`js`,`jsx`,`mjs`,`cjs`],keywords:s,exports:{PARAMS_CONTAINS:b,CLASS_REFERENCE:S},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:`shebang`,binary:`node`,relevance:5}),C,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,_,{match:/\$\d+/},d,S,{scope:`attr`,match:r+t.lookahead(`:`),relevance:0},j,{begin:`(`+e.RE_STARTERS_RE+`|\\b(case|return|throw)\\b)\\s*`,keywords:`return throw case`,relevance:0,contains:[_,e.REGEXP_MODE,{className:`function`,begin:A,returnBegin:!0,end:`\\s*=>`,contains:[{className:`params`,variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:a},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:`xml`,contains:[{begin:o.begin,end:o.end,skip:!0,contains:[`self`]}]}]},w,{beginKeywords:`while if switch catch for`},{begin:`\\b(?!function)`+e.UNDERSCORE_IDENT_RE+`\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{`,returnBegin:!0,label:`func.def`,contains:[x,e.inherit(e.TITLE_MODE,{begin:r,className:`title.function`})]},{match:/\.\.\./,relevance:0},O,{match:`\\$`+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:`title.function`},contains:[x]},D,T,ee,k,{match:/\$[(.]/}]}}var Dt=`[A-Za-z$_][0-9A-Za-z$_]*`,Ot=`as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using`.split(`.`),kt=[`true`,`false`,`null`,`undefined`,`NaN`,`Infinity`],At=`Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly`.split(`.`),jt=[`Error`,`EvalError`,`InternalError`,`RangeError`,`ReferenceError`,`SyntaxError`,`TypeError`,`URIError`],Mt=[`setInterval`,`setTimeout`,`clearInterval`,`clearTimeout`,`require`,`exports`,`eval`,`isFinite`,`isNaN`,`parseFloat`,`parseInt`,`decodeURI`,`decodeURIComponent`,`encodeURI`,`encodeURIComponent`,`escape`,`unescape`],Nt=[`arguments`,`this`,`super`,`console`,`window`,`document`,`localStorage`,`sessionStorage`,`module`,`global`],Pt=[].concat(Mt,At,jt);function Ft(e){let t=e.regex,n=(e,{after:t})=>{let n=`</`+e[0].slice(1);return e.input.indexOf(n,t)!==-1},r=Dt,i={begin:`<>`,end:`</>`},a=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{let r=e[0].length+e.index,i=e.input[r];if(i===`<`||i===`,`){t.ignoreMatch();return}i===`>`&&(n(e,{after:r})||t.ignoreMatch());let a,o=e.input.substring(r);if(a=o.match(/^\s*=/)){t.ignoreMatch();return}if((a=o.match(/^\s+extends\s+/))&&a.index===0){t.ignoreMatch();return}}},s={$pattern:Dt,keyword:Ot,literal:kt,built_in:Pt,"variable.language":Nt},c=`[0-9](_?[0-9])*`,l=`\\.(${c})`,u=`0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`,d={className:`number`,variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:`\\b(0|[1-9](_?[0-9])*)n\\b`},{begin:`\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b`},{begin:`\\b0[bB][0-1](_?[0-1])*n?\\b`},{begin:`\\b0[oO][0-7](_?[0-7])*n?\\b`},{begin:`\\b0[0-7]+n?\\b`}],relevance:0},f={className:`subst`,begin:`\\$\\{`,end:`\\}`,keywords:s,contains:[]},p={begin:".?html`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`xml`}},m={begin:".?css`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`css`}},h={begin:".?gql`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`graphql`}},g={className:`string`,begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,f]},_={className:`comment`,variants:[e.COMMENT(/\/\*\*(?!\/)/,`\\*/`,{relevance:0,contains:[{begin:`(?=@[A-Za-z]+)`,relevance:0,contains:[{className:`doctag`,begin:`@[A-Za-z]+`},{className:`type`,begin:`\\{`,end:`\\}`,excludeEnd:!0,excludeBegin:!0,relevance:0},{className:`variable`,begin:r+`(?=\\s*(-)|$)`,endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,{match:/\$\d+/},d];f.contains=v.concat({begin:/\{/,end:/\}/,keywords:s,contains:[`self`].concat(v)});let y=[].concat(_,f.contains),b=y.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:[`self`].concat(y)}]),x={className:`params`,begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b},ee={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,`(`,t.concat(/\./,r),`)*`)],scope:{1:`keyword`,3:`title.class`,5:`keyword`,7:`title.class.inherited`}},{match:[/class/,/\s+/,r],scope:{1:`keyword`,3:`title.class`}}]},S={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:`title.class`,keywords:{_:[...At,...jt]}},C={label:`use_strict`,className:`meta`,relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},w={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:`keyword`,3:`title.function`},label:`func.def`,contains:[x],illegal:/%/},T={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:`variable.constant`};function E(e){return t.concat(`(?!`,e.join(`|`),`)`)}let D={match:t.concat(/\b/,E([...Mt,`super`,`import`].map(e=>`${e}\\s*\\(`)),r,t.lookahead(/\s*\(/)),className:`title.function`,relevance:0},O={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:`prototype`,className:`property`,relevance:0},k={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:`keyword`,3:`title.function`},contains:[{begin:/\(\)/},x]},A=`(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|`+e.UNDERSCORE_IDENT_RE+`)\\s*=>`,j={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(A)],keywords:`async`,className:{1:`keyword`,3:`title.function`},contains:[x]};return{name:`JavaScript`,aliases:[`js`,`jsx`,`mjs`,`cjs`],keywords:s,exports:{PARAMS_CONTAINS:b,CLASS_REFERENCE:S},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:`shebang`,binary:`node`,relevance:5}),C,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,_,{match:/\$\d+/},d,S,{scope:`attr`,match:r+t.lookahead(`:`),relevance:0},j,{begin:`(`+e.RE_STARTERS_RE+`|\\b(case|return|throw)\\b)\\s*`,keywords:`return throw case`,relevance:0,contains:[_,e.REGEXP_MODE,{className:`function`,begin:A,returnBegin:!0,end:`\\s*=>`,contains:[{className:`params`,variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:a},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:`xml`,contains:[{begin:o.begin,end:o.end,skip:!0,contains:[`self`]}]}]},w,{beginKeywords:`while if switch catch for`},{begin:`\\b(?!function)`+e.UNDERSCORE_IDENT_RE+`\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{`,returnBegin:!0,label:`func.def`,contains:[x,e.inherit(e.TITLE_MODE,{begin:r,className:`title.function`})]},{match:/\.\.\./,relevance:0},O,{match:`\\$`+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:`title.function`},contains:[x]},D,T,ee,k,{match:/\$[(.]/}]}}function It(e){let t=e.regex,n=Ft(e),r=Dt,i=[`any`,`void`,`number`,`boolean`,`string`,`object`,`never`,`symbol`,`bigint`,`unknown`],a={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:`keyword`,3:`title.class`}},o={beginKeywords:`interface`,end:/\{/,excludeEnd:!0,keywords:{keyword:`interface extends`,built_in:i},contains:[n.exports.CLASS_REFERENCE]},s={className:`meta`,relevance:10,begin:/^\s*['"]use strict['"]/},c={$pattern:Dt,keyword:Ot.concat([`type`,`interface`,`public`,`private`,`protected`,`implements`,`declare`,`abstract`,`readonly`,`enum`,`override`,`satisfies`]),literal:kt,built_in:Pt.concat(i),"variable.language":Nt},l={className:`meta`,begin:`@`+r},u=(e,t,n)=>{let r=e.contains.findIndex(e=>e.label===t);if(r===-1)throw Error(`can not find mode to replace`);e.contains.splice(r,1,n)};Object.assign(n.keywords,c),n.exports.PARAMS_CONTAINS.push(l);let d=n.contains.find(e=>e.scope===`attr`),f=Object.assign({},d,{match:t.concat(r,t.lookahead(/\s*\?:/))});n.exports.PARAMS_CONTAINS.push([n.exports.CLASS_REFERENCE,d,f]),n.contains=n.contains.concat([l,a,o,f]),u(n,`shebang`,e.SHEBANG()),u(n,`use_strict`,s);let p=n.contains.find(e=>e.label===`func.def`);return p.relevance=0,Object.assign(n,{name:`TypeScript`,aliases:[`ts`,`tsx`,`mts`,`cts`]}),n}function Lt(e){let t=e.regex,n=/[\p{XID_Start}_]\p{XID_Continue}*/u,r=`and.as.assert.async.await.break.case.class.continue.def.del.elif.else.except.finally.for.from.global.if.import.in.is.lambda.match.nonlocal|10.not.or.pass.raise.return.try.while.with.yield`.split(`.`),i={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:r,built_in:`__import__.abs.all.any.ascii.bin.bool.breakpoint.bytearray.bytes.callable.chr.classmethod.compile.complex.delattr.dict.dir.divmod.enumerate.eval.exec.filter.float.format.frozenset.getattr.globals.hasattr.hash.help.hex.id.input.int.isinstance.issubclass.iter.len.list.locals.map.max.memoryview.min.next.object.oct.open.ord.pow.print.property.range.repr.reversed.round.set.setattr.slice.sorted.staticmethod.str.sum.super.tuple.type.vars.zip`.split(`.`),literal:[`__debug__`,`Ellipsis`,`False`,`None`,`NotImplemented`,`True`],type:[`Any`,`Callable`,`Coroutine`,`Dict`,`List`,`Literal`,`Generic`,`Optional`,`Sequence`,`Set`,`Tuple`,`Type`,`Union`]},a={className:`meta`,begin:/^(>>>|\.\.\.) /},o={className:`subst`,begin:/\{/,end:/\}/,keywords:i,illegal:/#/},s={begin:/\{\{/,relevance:0},c={className:`string`,contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,a,s,o]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,a,s,o]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,s,o]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,s,o]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},l=`[0-9](_?[0-9])*`,u=`(\\b(${l}))?\\.(${l})|\\b(${l})\\.`,d=`\\b|${r.join(`|`)}`,f={className:`number`,relevance:0,variants:[{begin:`(\\b(${l})|(${u}))[eE][+-]?(${l})[jJ]?(?=${d})`},{begin:`(${u})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${d})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${d})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})`},{begin:`\\b(${l})[jJ](?=${d})`}]},p={className:`comment`,begin:t.lookahead(/# type:/),end:/$/,keywords:i,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},m={className:`params`,variants:[{className:``,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:[`self`,a,f,c,e.HASH_COMMENT_MODE]}]};return o.contains=[c,f,a],{name:`Python`,aliases:[`py`,`gyp`,`ipython`],unicodeRegex:!0,keywords:i,illegal:/(<\/|\?)|=>/,contains:[a,f,{scope:`variable.language`,match:/\bself\b/},{beginKeywords:`if`,relevance:0},{match:/\bor\b/,scope:`keyword`},c,p,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,n],scope:{1:`keyword`,3:`title.function`},contains:[m]},{variants:[{match:[/\bclass/,/\s+/,n,/\s*/,/\(\s*/,n,/\s*\)/]},{match:[/\bclass/,/\s+/,n]}],scope:{1:`keyword`,3:`title.class`,6:`title.class.inherited`}},{className:`meta`,begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[f,m,c]}]}}function Rt(e){let t=e.regex,n={},r={begin:/\$\{/,end:/\}/,contains:[`self`,{begin:/:-/,contains:[n]}]};Object.assign(n,{className:`variable`,variants:[{begin:t.concat(/\$[\w\d#@][\w\d_]*/,`(?![\\w\\d])(?![$])`)},r]});let i={className:`subst`,begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},a=e.inherit(e.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:`comment`}}),o={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:`string`})]}},s={className:`string`,begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,i]};i.contains.push(s);let c={match:/\\"/},l={className:`string`,begin:/'/,end:/'/},u={match:/\\'/},d={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:`number`},e.NUMBER_MODE,n]},f=e.SHEBANG({binary:`(${[`fish`,`bash`,`zsh`,`sh`,`csh`,`ksh`,`tcsh`,`dash`,`scsh`].join(`|`)})`,relevance:10}),p={className:`function`,begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},m=[`if`,`then`,`else`,`elif`,`fi`,`time`,`for`,`while`,`until`,`in`,`do`,`done`,`case`,`esac`,`coproc`,`function`,`select`],h=[`true`,`false`],g={match:/(\/[a-z._-]+)+/},_=[`break`,`cd`,`continue`,`eval`,`exec`,`exit`,`export`,`getopts`,`hash`,`pwd`,`readonly`,`return`,`shift`,`test`,`times`,`trap`,`umask`,`unset`],v=[`alias`,`bind`,`builtin`,`caller`,`command`,`declare`,`echo`,`enable`,`help`,`let`,`local`,`logout`,`mapfile`,`printf`,`read`,`readarray`,`source`,`sudo`,`type`,`typeset`,`ulimit`,`unalias`],y=`autoload.bg.bindkey.bye.cap.chdir.clone.comparguments.compcall.compctl.compdescribe.compfiles.compgroups.compquote.comptags.comptry.compvalues.dirs.disable.disown.echotc.echoti.emulate.fc.fg.float.functions.getcap.getln.history.integer.jobs.kill.limit.log.noglob.popd.print.pushd.pushln.rehash.sched.setcap.setopt.stat.suspend.ttyctl.unfunction.unhash.unlimit.unsetopt.vared.wait.whence.where.which.zcompile.zformat.zftp.zle.zmodload.zparseopts.zprof.zpty.zregexparse.zsocket.zstyle.ztcp`.split(`.`),b=`chcon.chgrp.chown.chmod.cp.dd.df.dir.dircolors.ln.ls.mkdir.mkfifo.mknod.mktemp.mv.realpath.rm.rmdir.shred.sync.touch.truncate.vdir.b2sum.base32.base64.cat.cksum.comm.csplit.cut.expand.fmt.fold.head.join.md5sum.nl.numfmt.od.paste.ptx.pr.sha1sum.sha224sum.sha256sum.sha384sum.sha512sum.shuf.sort.split.sum.tac.tail.tr.tsort.unexpand.uniq.wc.arch.basename.chroot.date.dirname.du.echo.env.expr.factor.groups.hostid.id.link.logname.nice.nohup.nproc.pathchk.pinky.printenv.printf.pwd.readlink.runcon.seq.sleep.stat.stdbuf.stty.tee.test.timeout.tty.uname.unlink.uptime.users.who.whoami.yes`.split(`.`);return{name:`Bash`,aliases:[`sh`,`zsh`],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:m,literal:h,built_in:[..._,...v,`set`,`shopt`,...y,...b]},contains:[f,e.SHEBANG(),p,d,a,o,g,s,c,l,u,n]}}var zt=e=>({IMPORTANT:{scope:`meta`,begin:`!important`},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:`number`,begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:`built_in`,begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:`selector-attr`,begin:/\[/,end:/\]/,illegal:`$`,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:`number`,begin:e.NUMBER_RE+`(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?`,relevance:0},CSS_VARIABLE:{className:`attr`,begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Bt=`a.abbr.address.article.aside.audio.b.blockquote.body.button.canvas.caption.cite.code.dd.del.details.dfn.div.dl.dt.em.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.html.i.iframe.img.input.ins.kbd.label.legend.li.main.mark.menu.nav.object.ol.optgroup.option.p.picture.q.quote.samp.section.select.source.span.strong.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.ul.var.video`.split(`.`),Vt=`defs.g.marker.mask.pattern.svg.switch.symbol.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feFlood.feGaussianBlur.feImage.feMerge.feMorphology.feOffset.feSpecularLighting.feTile.feTurbulence.linearGradient.radialGradient.stop.circle.ellipse.image.line.path.polygon.polyline.rect.text.use.textPath.tspan.foreignObject.clipPath`.split(`.`),Ht=[...Bt,...Vt],Ut=`any-hover.any-pointer.aspect-ratio.color.color-gamut.color-index.device-aspect-ratio.device-height.device-width.display-mode.forced-colors.grid.height.hover.inverted-colors.monochrome.orientation.overflow-block.overflow-inline.pointer.prefers-color-scheme.prefers-contrast.prefers-reduced-motion.prefers-reduced-transparency.resolution.scan.scripting.update.width.min-width.max-width.min-height.max-height`.split(`.`).sort().reverse(),Wt=`active.any-link.blank.checked.current.default.defined.dir.disabled.drop.empty.enabled.first.first-child.first-of-type.fullscreen.future.focus.focus-visible.focus-within.has.host.host-context.hover.indeterminate.in-range.invalid.is.lang.last-child.last-of-type.left.link.local-link.not.nth-child.nth-col.nth-last-child.nth-last-col.nth-last-of-type.nth-of-type.only-child.only-of-type.optional.out-of-range.past.placeholder-shown.read-only.read-write.required.right.root.scope.target.target-within.user-invalid.valid.visited.where`.split(`.`).sort().reverse(),Gt=[`after`,`backdrop`,`before`,`cue`,`cue-region`,`first-letter`,`first-line`,`grammar-error`,`marker`,`part`,`placeholder`,`selection`,`slotted`,`spelling-error`].sort().reverse(),Kt=`accent-color.align-content.align-items.align-self.alignment-baseline.all.anchor-name.animation.animation-composition.animation-delay.animation-direction.animation-duration.animation-fill-mode.animation-iteration-count.animation-name.animation-play-state.animation-range.animation-range-end.animation-range-start.animation-timeline.animation-timing-function.appearance.aspect-ratio.backdrop-filter.backface-visibility.background.background-attachment.background-blend-mode.background-clip.background-color.background-image.background-origin.background-position.background-position-x.background-position-y.background-repeat.background-size.baseline-shift.block-size.border.border-block.border-block-color.border-block-end.border-block-end-color.border-block-end-style.border-block-end-width.border-block-start.border-block-start-color.border-block-start-style.border-block-start-width.border-block-style.border-block-width.border-bottom.border-bottom-color.border-bottom-left-radius.border-bottom-right-radius.border-bottom-style.border-bottom-width.border-collapse.border-color.border-end-end-radius.border-end-start-radius.border-image.border-image-outset.border-image-repeat.border-image-slice.border-image-source.border-image-width.border-inline.border-inline-color.border-inline-end.border-inline-end-color.border-inline-end-style.border-inline-end-width.border-inline-start.border-inline-start-color.border-inline-start-style.border-inline-start-width.border-inline-style.border-inline-width.border-left.border-left-color.border-left-style.border-left-width.border-radius.border-right.border-right-color.border-right-style.border-right-width.border-spacing.border-start-end-radius.border-start-start-radius.border-style.border-top.border-top-color.border-top-left-radius.border-top-right-radius.border-top-style.border-top-width.border-width.bottom.box-align.box-decoration-break.box-direction.box-flex.box-flex-group.box-lines.box-ordinal-group.box-orient.box-pack.box-shadow.box-sizing.break-after.break-before.break-inside.caption-side.caret-color.clear.clip.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.color-scheme.column-count.column-fill.column-gap.column-rule.column-rule-color.column-rule-style.column-rule-width.column-span.column-width.columns.contain.contain-intrinsic-block-size.contain-intrinsic-height.contain-intrinsic-inline-size.contain-intrinsic-size.contain-intrinsic-width.container.container-name.container-type.content.content-visibility.counter-increment.counter-reset.counter-set.cue.cue-after.cue-before.cursor.cx.cy.direction.display.dominant-baseline.empty-cells.enable-background.field-sizing.fill.fill-opacity.fill-rule.filter.flex.flex-basis.flex-direction.flex-flow.flex-grow.flex-shrink.flex-wrap.float.flood-color.flood-opacity.flow.font.font-display.font-family.font-feature-settings.font-kerning.font-language-override.font-optical-sizing.font-palette.font-size.font-size-adjust.font-smooth.font-smoothing.font-stretch.font-style.font-synthesis.font-synthesis-position.font-synthesis-small-caps.font-synthesis-style.font-synthesis-weight.font-variant.font-variant-alternates.font-variant-caps.font-variant-east-asian.font-variant-emoji.font-variant-ligatures.font-variant-numeric.font-variant-position.font-variation-settings.font-weight.forced-color-adjust.gap.glyph-orientation-horizontal.glyph-orientation-vertical.grid.grid-area.grid-auto-columns.grid-auto-flow.grid-auto-rows.grid-column.grid-column-end.grid-column-start.grid-gap.grid-row.grid-row-end.grid-row-start.grid-template.grid-template-areas.grid-template-columns.grid-template-rows.hanging-punctuation.height.hyphenate-character.hyphenate-limit-chars.hyphens.icon.image-orientation.image-rendering.image-resolution.ime-mode.initial-letter.initial-letter-align.inline-size.inset.inset-area.inset-block.inset-block-end.inset-block-start.inset-inline.inset-inline-end.inset-inline-start.isolation.justify-content.justify-items.justify-self.kerning.left.letter-spacing.lighting-color.line-break.line-height.line-height-step.list-style.list-style-image.list-style-position.list-style-type.margin.margin-block.margin-block-end.margin-block-start.margin-bottom.margin-inline.margin-inline-end.margin-inline-start.margin-left.margin-right.margin-top.margin-trim.marker.marker-end.marker-mid.marker-start.marks.mask.mask-border.mask-border-mode.mask-border-outset.mask-border-repeat.mask-border-slice.mask-border-source.mask-border-width.mask-clip.mask-composite.mask-image.mask-mode.mask-origin.mask-position.mask-repeat.mask-size.mask-type.masonry-auto-flow.math-depth.math-shift.math-style.max-block-size.max-height.max-inline-size.max-width.min-block-size.min-height.min-inline-size.min-width.mix-blend-mode.nav-down.nav-index.nav-left.nav-right.nav-up.none.normal.object-fit.object-position.offset.offset-anchor.offset-distance.offset-path.offset-position.offset-rotate.opacity.order.orphans.outline.outline-color.outline-offset.outline-style.outline-width.overflow.overflow-anchor.overflow-block.overflow-clip-margin.overflow-inline.overflow-wrap.overflow-x.overflow-y.overlay.overscroll-behavior.overscroll-behavior-block.overscroll-behavior-inline.overscroll-behavior-x.overscroll-behavior-y.padding.padding-block.padding-block-end.padding-block-start.padding-bottom.padding-inline.padding-inline-end.padding-inline-start.padding-left.padding-right.padding-top.page.page-break-after.page-break-before.page-break-inside.paint-order.pause.pause-after.pause-before.perspective.perspective-origin.place-content.place-items.place-self.pointer-events.position.position-anchor.position-visibility.print-color-adjust.quotes.r.resize.rest.rest-after.rest-before.right.rotate.row-gap.ruby-align.ruby-position.scale.scroll-behavior.scroll-margin.scroll-margin-block.scroll-margin-block-end.scroll-margin-block-start.scroll-margin-bottom.scroll-margin-inline.scroll-margin-inline-end.scroll-margin-inline-start.scroll-margin-left.scroll-margin-right.scroll-margin-top.scroll-padding.scroll-padding-block.scroll-padding-block-end.scroll-padding-block-start.scroll-padding-bottom.scroll-padding-inline.scroll-padding-inline-end.scroll-padding-inline-start.scroll-padding-left.scroll-padding-right.scroll-padding-top.scroll-snap-align.scroll-snap-stop.scroll-snap-type.scroll-timeline.scroll-timeline-axis.scroll-timeline-name.scrollbar-color.scrollbar-gutter.scrollbar-width.shape-image-threshold.shape-margin.shape-outside.shape-rendering.speak.speak-as.src.stop-color.stop-opacity.stroke.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.tab-size.table-layout.text-align.text-align-all.text-align-last.text-anchor.text-combine-upright.text-decoration.text-decoration-color.text-decoration-line.text-decoration-skip.text-decoration-skip-ink.text-decoration-style.text-decoration-thickness.text-emphasis.text-emphasis-color.text-emphasis-position.text-emphasis-style.text-indent.text-justify.text-orientation.text-overflow.text-rendering.text-shadow.text-size-adjust.text-transform.text-underline-offset.text-underline-position.text-wrap.text-wrap-mode.text-wrap-style.timeline-scope.top.touch-action.transform.transform-box.transform-origin.transform-style.transition.transition-behavior.transition-delay.transition-duration.transition-property.transition-timing-function.translate.unicode-bidi.user-modify.user-select.vector-effect.vertical-align.view-timeline.view-timeline-axis.view-timeline-inset.view-timeline-name.view-transition-name.visibility.voice-balance.voice-duration.voice-family.voice-pitch.voice-range.voice-rate.voice-stress.voice-volume.white-space.white-space-collapse.widows.width.will-change.word-break.word-spacing.word-wrap.writing-mode.x.y.z-index.zoom`.split(`.`).sort().reverse();function qt(e){let t=e.regex,n=zt(e),r={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},i=/@-?\w[\w]*(-\w+)*/,a=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:`CSS`,case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:`from to`},classNameAliases:{keyframePosition:`selector-tag`},contains:[n.BLOCK_COMMENT,r,n.CSS_NUMBER_MODE,{className:`selector-id`,begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:`selector-class`,begin:`\\.[a-zA-Z-][a-zA-Z0-9_-]*`,relevance:0},n.ATTRIBUTE_SELECTOR_MODE,{className:`selector-pseudo`,variants:[{begin:`:(`+Wt.join(`|`)+`)`},{begin:`:(:)?(`+Gt.join(`|`)+`)`}]},n.CSS_VARIABLE,{className:`attribute`,begin:`\\b(`+Kt.join(`|`)+`)\\b`},{begin:/:/,end:/[;}{]/,contains:[n.BLOCK_COMMENT,n.HEXCOLOR,n.IMPORTANT,n.CSS_NUMBER_MODE,...a,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:`url data-uri`},contains:[...a,{className:`string`,begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},n.FUNCTION_DISPATCH]},{begin:t.lookahead(/@/),end:`[{;]`,relevance:0,illegal:/:/,contains:[{className:`keyword`,begin:i},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:`and or not only`,attribute:Ut.join(` `)},contains:[{begin:/[a-z-]+(?=:)/,className:`attribute`},...a,n.CSS_NUMBER_MODE]}]},{className:`selector-tag`,begin:`\\b(`+Ht.join(`|`)+`)\\b`}]}}function Jt(e){let t={className:`attr`,begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},n={match:/[{}[\],:]/,className:`punctuation`,relevance:0},r=[`true`,`false`,`null`],i={scope:`literal`,beginKeywords:r.join(` `)};return{name:`JSON`,aliases:[`jsonc`],keywords:{literal:r},contains:[t,n,e.QUOTE_STRING_MODE,i,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:`\\S`}}function Yt(e){let t=e.regex,n=t.concat(/[\p{L}_]/u,t.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),r=/[\p{L}0-9._:-]+/u,i={className:`symbol`,begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},a={begin:/\s/,contains:[{className:`keyword`,begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=e.inherit(a,{begin:/\(/,end:/\)/}),s=e.inherit(e.APOS_STRING_MODE,{className:`string`}),c=e.inherit(e.QUOTE_STRING_MODE,{className:`string`}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:`attr`,begin:r,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:`string`,endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[i]},{begin:/'/,end:/'/,contains:[i]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:`HTML, XML`,aliases:[`html`,`xhtml`,`rss`,`atom`,`xjb`,`xsd`,`xsl`,`plist`,`wsf`,`svg`],case_insensitive:!0,unicodeRegex:!0,contains:[{className:`meta`,begin:/<![a-z]/,end:/>/,relevance:10,contains:[a,c,s,o,{begin:/\[/,end:/\]/,contains:[{className:`meta`,begin:/<![a-z]/,end:/>/,contains:[a,o,c,s]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},i,{className:`meta`,end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:`tag`,begin:/<style(?=\s|>)/,end:/>/,keywords:{name:`style`},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:[`css`,`xml`]}},{className:`tag`,begin:/<script(?=\s|>)/,end:/>/,keywords:{name:`script`},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:[`javascript`,`handlebars`,`xml`]}},{className:`tag`,begin:/<>|<\/>/},{className:`tag`,begin:t.concat(/</,t.lookahead(t.concat(n,t.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:`name`,begin:n,relevance:0,starts:l}]},{className:`tag`,begin:t.concat(/<\//,t.lookahead(t.concat(n,/>/))),contains:[{className:`name`,begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function Xt(e){let t=e.regex,n=e.COMMENT(`--`,`$`),r={scope:`string`,variants:[{begin:/'/,end:/'/,contains:[{match:/''/}]}]},i={begin:/"/,end:/"/,contains:[{match:/""/}]},a=[`true`,`false`,`unknown`],o=[`double precision`,`large object`,`with timezone`,`without timezone`],s=`bigint.binary.blob.boolean.char.character.clob.date.dec.decfloat.decimal.float.int.integer.interval.nchar.nclob.national.numeric.real.row.smallint.time.timestamp.varchar.varying.varbinary`.split(`.`),c=[`add`,`asc`,`collation`,`desc`,`final`,`first`,`last`,`view`],l=`abs.acos.all.allocate.alter.and.any.are.array.array_agg.array_max_cardinality.as.asensitive.asin.asymmetric.at.atan.atomic.authorization.avg.begin.begin_frame.begin_partition.between.bigint.binary.blob.boolean.both.by.call.called.cardinality.cascaded.case.cast.ceil.ceiling.char.char_length.character.character_length.check.classifier.clob.close.coalesce.collate.collect.column.commit.condition.connect.constraint.contains.convert.copy.corr.corresponding.cos.cosh.count.covar_pop.covar_samp.create.cross.cube.cume_dist.current.current_catalog.current_date.current_default_transform_group.current_path.current_role.current_row.current_schema.current_time.current_timestamp.current_path.current_role.current_transform_group_for_type.current_user.cursor.cycle.date.day.deallocate.dec.decimal.decfloat.declare.default.define.delete.dense_rank.deref.describe.deterministic.disconnect.distinct.double.drop.dynamic.each.element.else.empty.end.end_frame.end_partition.end-exec.equals.escape.every.except.exec.execute.exists.exp.external.extract.false.fetch.filter.first_value.float.floor.for.foreign.frame_row.free.from.full.function.fusion.get.global.grant.group.grouping.groups.having.hold.hour.identity.in.indicator.initial.inner.inout.insensitive.insert.int.integer.intersect.intersection.interval.into.is.join.json_array.json_arrayagg.json_exists.json_object.json_objectagg.json_query.json_table.json_table_primitive.json_value.lag.language.large.last_value.lateral.lead.leading.left.like.like_regex.listagg.ln.local.localtime.localtimestamp.log.log10.lower.match.match_number.match_recognize.matches.max.member.merge.method.min.minute.mod.modifies.module.month.multiset.national.natural.nchar.nclob.new.no.none.normalize.not.nth_value.ntile.null.nullif.numeric.octet_length.occurrences_regex.of.offset.old.omit.on.one.only.open.or.order.out.outer.over.overlaps.overlay.parameter.partition.pattern.per.percent.percent_rank.percentile_cont.percentile_disc.period.portion.position.position_regex.power.precedes.precision.prepare.primary.procedure.ptf.range.rank.reads.real.recursive.ref.references.referencing.regr_avgx.regr_avgy.regr_count.regr_intercept.regr_r2.regr_slope.regr_sxx.regr_sxy.regr_syy.release.result.return.returns.revoke.right.rollback.rollup.row.row_number.rows.running.savepoint.scope.scroll.search.second.seek.select.sensitive.session_user.set.show.similar.sin.sinh.skip.smallint.some.specific.specifictype.sql.sqlexception.sqlstate.sqlwarning.sqrt.start.static.stddev_pop.stddev_samp.submultiset.subset.substring.substring_regex.succeeds.sum.symmetric.system.system_time.system_user.table.tablesample.tan.tanh.then.time.timestamp.timezone_hour.timezone_minute.to.trailing.translate.translate_regex.translation.treat.trigger.trim.trim_array.true.truncate.uescape.union.unique.unknown.unnest.update.upper.user.using.value.values.value_of.var_pop.var_samp.varbinary.varchar.varying.versioning.when.whenever.where.width_bucket.window.with.within.without.year`.split(`.`),u=`abs.acos.array_agg.asin.atan.avg.cast.ceil.ceiling.coalesce.corr.cos.cosh.count.covar_pop.covar_samp.cume_dist.dense_rank.deref.element.exp.extract.first_value.floor.json_array.json_arrayagg.json_exists.json_object.json_objectagg.json_query.json_table.json_table_primitive.json_value.lag.last_value.lead.listagg.ln.log.log10.lower.max.min.mod.nth_value.ntile.nullif.percent_rank.percentile_cont.percentile_disc.position.position_regex.power.rank.regr_avgx.regr_avgy.regr_count.regr_intercept.regr_r2.regr_slope.regr_sxx.regr_sxy.regr_syy.row_number.sin.sinh.sqrt.stddev_pop.stddev_samp.substring.substring_regex.sum.tan.tanh.translate.translate_regex.treat.trim.trim_array.unnest.upper.value_of.var_pop.var_samp.width_bucket`.split(`.`),d=[`current_catalog`,`current_date`,`current_default_transform_group`,`current_path`,`current_role`,`current_schema`,`current_transform_group_for_type`,`current_user`,`session_user`,`system_time`,`system_user`,`current_time`,`localtime`,`current_timestamp`,`localtimestamp`],f=[`create table`,`insert into`,`primary key`,`foreign key`,`not null`,`alter table`,`add constraint`,`grouping sets`,`on overflow`,`character set`,`respect nulls`,`ignore nulls`,`nulls first`,`nulls last`,`depth first`,`breadth first`],p=u,m=[...l,...c].filter(e=>!u.includes(e)),h={scope:`variable`,match:/@[a-z0-9][a-z0-9_]*/},g={scope:`operator`,match:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0},_={match:t.concat(/\b/,t.either(...p),/\s*\(/),relevance:0,keywords:{built_in:p}};function v(e){return t.concat(/\b/,t.either(...e.map(e=>e.replace(/\s+/,`\\s+`))),/\b/)}let y={scope:`keyword`,match:v(f),relevance:0};function b(e,{exceptions:t,when:n}={}){let r=n;return t||=[],e.map(e=>e.match(/\|\d+$/)||t.includes(e)?e:r(e)?`${e}|0`:e)}return{name:`SQL`,case_insensitive:!0,illegal:/[{}]|<\//,keywords:{$pattern:/\b[\w\.]+/,keyword:b(m,{when:e=>e.length<3}),literal:a,type:s,built_in:d},contains:[{scope:`type`,match:v(o)},y,_,h,r,i,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,n,g]}}function Zt(e){let t=`true false yes no null`,n=`[\\w#;/?:@&=+$,.~*'()[\\]]+`,r={className:`attr`,variants:[{begin:/[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/},{begin:/"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/},{begin:/'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/}]},i={className:`template-variable`,variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},a={className:`string`,relevance:0,begin:/'/,end:/'/,contains:[{match:/''/,scope:`char.escape`,relevance:0}]},o={className:`string`,relevance:0,variants:[{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,i]},s=e.inherit(o,{variants:[{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),c={className:`number`,begin:`\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b`},l={end:`,`,endsWithParent:!0,excludeEnd:!0,keywords:t,relevance:0},u={begin:/\{/,end:/\}/,contains:[l],illegal:`\\n`,relevance:0},d={begin:`\\[`,end:`\\]`,contains:[l],illegal:`\\n`,relevance:0},f=[r,{className:`meta`,begin:`^---\\s*$`,relevance:10},{className:`string`,begin:`[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*`},{begin:`<%[%=-]?`,end:`[%-]?%>`,subLanguage:`ruby`,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:`type`,begin:`!\\w+!`+n},{className:`type`,begin:`!<`+n+`>`},{className:`type`,begin:`!`+n},{className:`type`,begin:`!!`+n},{className:`meta`,begin:`&`+e.UNDERSCORE_IDENT_RE+`$`},{className:`meta`,begin:`\\*`+e.UNDERSCORE_IDENT_RE+`$`},{className:`bullet`,begin:`-(?=[ ]|$)`,relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:t,keywords:{literal:t}},c,{className:`number`,begin:e.C_NUMBER_RE+`\\b`,relevance:0},u,d,a,o],p=[...f];return p.pop(),p.push(s),l.contains=p,{name:`YAML`,case_insensitive:!0,aliases:[`yml`],contains:f}}Z.registerLanguage(`javascript`,Et),Z.registerLanguage(`js`,Et),Z.registerLanguage(`typescript`,It),Z.registerLanguage(`ts`,It),Z.registerLanguage(`python`,Lt),Z.registerLanguage(`py`,Lt),Z.registerLanguage(`bash`,Rt),Z.registerLanguage(`shell`,Rt),Z.registerLanguage(`sh`,Rt),Z.registerLanguage(`css`,qt),Z.registerLanguage(`json`,Jt),Z.registerLanguage(`xml`,Yt),Z.registerLanguage(`html`,Yt),Z.registerLanguage(`sql`,Xt),Z.registerLanguage(`yaml`,Zt),Z.registerLanguage(`yml`,Zt);function Qt(e){e.querySelectorAll(`pre code`).forEach(e=>{if(e.dataset.highlighted===``)return;let t=[...e.classList].find(e=>e.startsWith(`language-`)),n=t?t.replace(`language-`,``):``,r=e.textContent,i;i=n&&Z.getLanguage(n)?Z.highlight(r,{language:n}):Z.highlightAuto(r),e.innerHTML=i.value,e.dataset.highlighted=``})}var $t=8,en=``,Q=1;function tn(){en=``,Q=1}function nn(e,t){if(!t)return!0;let n=t.toLowerCase();return[e.title,e.date,e.description].some(e=>(e instanceof Date?pn(e):String(e??``)).toLowerCase().includes(n))}function rn(){let e;try{e=F()}catch(e){return console.error(`Failed to load articles:`,e),`<section class="section-content"><h1>随笔</h1><p class="md-empty">加载文章列表失败</p></section>`}let t=e.map(e=>{try{let{metadata:t}=_t(e.raw);return{slug:e.slug,...t}}catch(t){return console.error(`Failed to parse`,e.slug,t),{slug:e.slug,title:e.slug,date:``,description:`(解析失败)`}}}).sort((e,t)=>new Date(t.date||0)-new Date(e.date||0)).filter(e=>nn(e,en));if(t.length===0){let e=en?`没有找到匹配的随笔`:`暂无文章`;return`<section class="section-content"><h1>随笔</h1>${un()}<p class="md-empty">${e}</p></section>`}let n=Math.ceil(t.length/$t);Q>n&&(Q=n),Q<1&&(Q=1);let r=(Q-1)*$t,i=t.slice(r,r+$t).map(e=>`
    <article class="essay-item">
      <a href="#essay/${e.slug}" class="essay-link">
        <h3>${$(e.title||e.slug)}</h3>
        <div class="meta">${$(pn(e.date))}</div>
        <p>${$(e.description||``)}</p>
      </a>
    </article>`).join(``);return`<section class="section-content"><h1>随笔</h1>${un()}<div class="essay-list">${i}</div>${n>1?dn(Q,n):``}</section>`}function an(e){let t=e===`essays`||e.startsWith(`essay/`);return`
    <nav>
      <a href="#home" class="${e===`home`||e===``?`active`:``}">首页</a>
      <a href="#resume" class="${e===`resume`?`active`:``}">简历</a>
      <a href="#projects" class="${e===`projects`?`active`:``}">项目</a>
      <a href="#essays" class="${t?`active`:``}">随笔</a>
    </nav>`}function on(){return`<footer><p>&copy; 2026 xxSak1xx · Built with Vite</p></footer>`}function sn(e,t){return`${an(e)}<main>${t}</main>${on()}`}var cn={home:()=>`
    <section class="section-content">
      <div class="hero-container">
        <img src="${u}" class="hero-image" alt="Avatar">
      </div>
      <div class="welcome-text">
        <h1>欢迎来到我的博客</h1>
        <p>这里记录了我的成长历程、项目实践以及一些琐碎的随笔。</p>
      </div>
    </section>
  `,resume:()=>`
    <section class="section-content resume-section">
      <div class="resume-header">
        <h1>个人简历</h1>
        <p>热爱技术，不断探索的开发者</p>
      </div>

      <div class="resume-group">
        <h2>教育背景</h2>
        <div class="resume-item">
          <h3>某某大学 · 计算机科学与技术</h3>
          <p class="date">2020.09 - 2024.06</p>
          <p>主修课程：数据结构、算法分析、操作系统、计算机网络、数据库系统等。</p>
        </div>
      </div>

      <div class="resume-group">
        <h2>工作经历</h2>
        <div class="resume-item">
          <h3>某某科技公司 · 前端开发实习生</h3>
          <p class="date">2023.07 - 2023.12</p>
          <p>负责公司内部管理系统的维护与新功能开发，使用 React 和 Tailwind CSS 提升了页面性能和开发效率。</p>
        </div>
      </div>

      <div class="resume-group">
        <h2>技能专长</h2>
        <div class="skills-tags">
          <span>JavaScript</span>
          <span>Vue</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Tailwind CSS</span>
          <span>Git</span>
        </div>
      </div>
    </section>
  `,projects:()=>`
    <section class="section-content">
      <div class="projects-header">
        <h1>项目介绍</h1>
      </div>
      <div class="projects-grid">
        <div class="project-card">
          <h3>个人博客网站</h3>
          <p>基于 Vite + Tailwind CSS 开发的响应式个人博客，支持深色模式与科技风主题。</p>
          <div class="tags">
            <span class="tag">Vite</span>
            <span class="tag">Tailwind</span>
          </div>
        </div>
        <div class="project-card">
          <h3>任务管理系统</h3>
          <p>一个简单易用的待办事项管理应用，支持任务分类、优先级设置和本地存储。</p>
          <div class="tags">
            <span class="tag">Vue 3</span>
            <span class="tag">Pinia</span>
          </div>
        </div>
        <div class="project-card">
          <h3>数据可视化看板</h3>
          <p>使用 ECharts 展示实时数据动态，提供多种图表交互与数据洞察功能。</p>
          <div class="tags">
            <span class="tag">React</span>
            <span class="tag">ECharts</span>
          </div>
        </div>
      </div>
    </section>
  `,essays:()=>rn()};function ln(e,t){let n=F().find(e=>e.slug===t);if(!n)return sn(e,`
      <section class="section-content">
        <h1>404</h1>
        <p>文章不存在。</p>
        <a href="#essays" class="md-back-link">← 返回随笔列表</a>
      </section>`);let{metadata:r,html:i}=_t(n.raw);return sn(e,`
    <article class="section-content md-content">
      <a href="#essays" class="md-back-link">← 返回随笔列表</a>
      <h1>${$(r.title||t)}</h1>
      <div class="md-meta">${$(pn(r.date))}</div>
      <div class="md-body">${i}</div>
    </article>`)}function un(){return`<input
    class="essay-search"
    type="text"
    placeholder="搜索标题、日期、描述..."
    value="${$(en)}"
    data-essay-search
  >`}function dn(e,t){return`
  <div class="pagination">
    <span class="pagination-btn ${e<=1?`pagination-btn--disabled`:``}" data-page="prev">← 上一页</span>
    <span class="pagination-info">
      第
      <input class="page-jump-input" type="text" value="${e}" data-page-jump>
      / ${t} 页
    </span>
    <span class="page-jump-btn" data-page-go>跳转</span>
    <span class="pagination-btn ${e>=t?`pagination-btn--disabled`:``}" data-page="next">下一页 →</span>
  </div>`}function $(e){return e==null?``:String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function fn(){let e=document.querySelector(`[data-essay-search]`);if(e){e.addEventListener(`input`,e=>{en=e.target.value,Q=1,mn()}),e.focus();let t=e.value.length;e.setSelectionRange(t,t)}let t=document.querySelector(`[data-page="prev"]`),n=document.querySelector(`[data-page="next"]`);t&&!t.classList.contains(`pagination-btn--disabled`)&&t.addEventListener(`click`,()=>{Q>1&&(Q--,mn())}),n&&!n.classList.contains(`pagination-btn--disabled`)&&n.addEventListener(`click`,()=>{Q++,mn()});let r=document.querySelector(`[data-page-jump]`),i=document.querySelector(`[data-page-go]`);if(r&&i){let e=()=>{let e=r.value.trim(),t=Math.ceil(F().map(e=>{try{return _t(e.raw).metadata}catch{return{}}}).filter(e=>nn(e,en)).length/$t)||1;if(e===``)return;let n=Number(e);if(!Number.isInteger(n)||e.includes(`.`)){r.classList.add(`page-jump-input--error`),r.value=Q,setTimeout(()=>r.classList.remove(`page-jump-input--error`),400);return}let i=n;i<1&&(i=1),i>t&&(i=t),i!==Q&&(Q=i,mn())};i.addEventListener(`click`,e),r.addEventListener(`keydown`,t=>{t.key===`Enter`&&e()})}}function pn(e){return e?e instanceof Date&&!isNaN(e)?e.getFullYear()+`-`+String(e.getMonth()+1).padStart(2,`0`)+`-`+String(e.getDate()).padStart(2,`0`):String(e):``}function mn(){let e=document.querySelector(`#app`);if(!e){console.error(`App element not found!`);return}let t=window.location.hash.slice(1)||`home`;if(t.startsWith(`essay`)||tn(),t.startsWith(`essay/`)){let n=t.slice(6);try{e.innerHTML=ln(t,n);let r=document.querySelector(`.md-body`);r&&Qt(r),fn()}catch(n){console.error(`Essay detail render failed:`,n),e.innerHTML=sn(t,`<section class="section-content"><h1>文章加载失败</h1><p>${$(n instanceof Error?n.message:String(n))}</p><a href="#essays" class="md-back-link">← 返回随笔列表</a></section>`)}return}try{e.innerHTML=sn(t,(cn[t]||cn.home)()),fn()}catch(n){console.error(`Route render failed:`,n),e.innerHTML=sn(t,`<section class="section-content"><h1>出错了</h1><p>${$(n.message)}</p></section>`)}}window.addEventListener(`hashchange`,mn),window.addEventListener(`DOMContentLoaded`,mn),mn();