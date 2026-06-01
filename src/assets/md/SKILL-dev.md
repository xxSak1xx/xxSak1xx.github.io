---
title: SKILL开发心得
date: 2026-06-01
description: 总结在SKILL开发中的一点经验心得与思考
---

## SKILL开发心得

### 对SKILL的认识

在初了解到技能的概念时，人们会误认为这不过是一段可复用的`prompt`;实际上技能的内涵远不止于此。在系统介绍并规范技能标准的网站[Agent Skill](https://agentskills.io/home)中，技能被如此定义：

> <i> Agent Skills are a lightweight, open format for extending AI agent capabilities with specialized knowledge and workflows. </i>

技能的外在表现可以简单得看起来只是一段`prompt`，比如著名的[Karpathy Guidelines](https://github.com/multica-ai/andrej-karpathy-skills)，取材自Andrej Karpathy对大语言模型编码中常见问题的观察，其实质内容只有四条编码原则及释义；也可以是一个完整的独立王国。Agent Skill推荐的目录结构如下：
```
my-skill/
├── SKILL.md          # Required: metadata + instructions
├── scripts/          # Optional: executable code
├── references/       # Optional: documentation
├── assets/           # Optional: templates, resources
└── ...               # Any additional files or directories
```

这其中包含了`agent`可读的技能描述、可执行脚本、符合渐进式披露的参考资料等。

这与人类掌握一门技能类似。比如学习绘画，教师要教学生怎么握笔、怎么使用颜料，也要告诉他什么时候如实临摹，什么时候可以自由发挥；用普通的签字笔不行，画室还要提供专门的画笔工具；许多深奥的理论学生记不住，也能花点时间翻阅文献资料，再回过头来应用。"技能"可以不必这么复杂，或许只是固定下来的`workflow`。比如每天起床后要喝一杯水，不需要额外的工具或复杂的指示，只要记在脑子里照做即可。

技能开发同样，可以赋予`agent`某种新能力，也可以是对已有成熟流程的沉淀和优化。因此不必拘泥于形式，而应该关注实际问题是否得到解决，解决得是否合乎要求。



### 开发中的抉择

在开发过程中，会有这样的情况：一个`workflow`的每一个环节，都可以（或已经）产生一个单独的`skill`。这就会引发对`skill`定位的考虑：应该选择**大而全**还是**小而专**？

我曾试着开发过这样一个`skill`：根据用户的需求，从`arxiv`上爬取指定信息的论文并阅读，结合工作目录和用户提示词，用`draw.io CLI`生成图表，并综合以上内容生成`ppt`；最后再仿照导师的偏好和语气加以指导修改。其初版结构为：
```
├─scripts
└─skills
    ├─academic-pptx-skill
    ├─arxiv-retrieval-skill
    ├─create-supervisor-skill
    ├─drawio-skill
    └─ppt-agent-skill
```
以及必要的`SKILL.md`。根目录里有编排整个工作流的脚本，而每个子技能的结构都是完整的，可以被抽取为独立的`skill`。

这种组织形式有两个问题：
1. **显而易见的臃肿**。事实上嵌套形式的`skill`并不能被`agent`正确识别到，错误的描述反而让它自己尝试编写本应提供的工具——不仅效果大打折扣，还增加了开销。
2. **过于大包大揽**。退一步讲，即使将其注册为`plugin`（允许内含多个`skill`），它的功能也太多了，很容易与其他已有的`skill`冲突，造成调用的混乱。

我们的出发点很合理。这是一个有着明确编排、可以复用的`workflow`，完全可以设计成`skill`；只是实现有些问题。这种**大而全**的结构显然与`skill`的初衷不符。我们可以无脑地将其注册为`plugin`，或重新设计一下`SKILL.md`，使`agent`可以递归地检索子技能并调用。**但有没有更好的解决方法呢？**

一种自然的想法是**将原先的子技能展开到根目录，统一归类`scripts`和`references`**，使结构扁平化。这其实是掩耳盗铃。递归地检索子技能至少还有独立的`SKILL.md`以供`agent`认知，现在却要集合到单一的说明中——依旧造出了一个巨无霸，更别说繁多的脚本文件。

另一种想法是采用类似**管理依赖**的方法。软件开发中，我们秉持不重复造轮子的理念，因此通过库依赖来解决功能复用。但`skill`的管理还不像经典的包管理一样方便，没有一份`requirements.txt`可以同步依赖；而现在为`agent`注册一个`skill`的方法也是千奇百怪，有的是`npm`全局安装，有的是`github`仓库拉取，甚至还可以用解压缩这种传统的方式——究其根本，是跨语言开发的困境。

目前可以有这样的权宜之计：在`SKILL.md`中写明所依赖的功能（并不是某个具体的`skill`），如果本地有就正常调用；如果本地没有，就以写明的方式下载默认依赖`skill`。以`agent`的智能程度，解决这样的依赖关系还是轻而易举的。只不过现在缺少一种将各种下载途径包装并智能路由的`skill`管理器。

### 思考

1. **编排类型的`skill`应该被特殊设计**。这种`skill`本身并不提供能力，只是将若干已有能力组合使用；此时尤其要考虑前述的依赖问题。`agent`本身当然也可以决策，但对成熟的`workflow`应该加以固定。
2. **降低`skill`内容的重叠度**。保持`skill`的小而专，不要试图找到某种once-and-for-all的方案——这其实是开发上的偷懒。
3. **当一个`workflow`中的某个环节可以被复用在除这个工作流以外的其他场景，它就应该被单独拆出，作为`skill`依赖调用。** 以上文的实际开发场景为例，除了学术风的`ppt`，用户还可能想做商业风、科技风等一系列其他风格，那么就应该将`ppt`生成引擎单独剥离。