---
title: 你好，世界
published: 2026-10-03
description: 这是「一片叶子」的第一篇文章，说说这个博客会写些什么，以及它是怎么搭起来的。
tags: [随笔, 建站]
category: 随笔
draft: false
---

欢迎来到 **一片叶子**。

这是一片普通的叶子，也是一个普通的博客。开这个站的理由很简单：平时学到的东西散落在收藏夹、笔记软件和各种聊天记录里，过一阵子就找不到了。写下来，既是对自己的整理，也算留个脚印。

## 这里会写什么

- **技术笔记**：踩过的坑、读过的源码、觉得好用的工具
- **折腾记录**：搭环境、配服务、修各种奇怪的问题
- **偶尔的随笔**：不一定和技术有关

更新频率不承诺，写得出就写，写不出就不写。

## 这个博客是怎么搭的

整站是纯静态的，没有数据库、没有服务器，成本为零。

| 环节 | 方案 |
| --- | --- |
| 框架 | [Astro](https://astro.build) |
| 主题 | [Fuwari](https://github.com/saicaca/fuwari) |
| 代码与文章 | GitHub 仓库 |
| 部署 | Vercel（推送到 `main` 分支即自动重新构建） |

工作流大概是这样：

```shellsession
$ pnpm new-post 我的新文章    # 生成文章文件
$ pnpm dev                    # 本地预览，localhost:4321
$ git add . && git commit -m "post: 我的新文章"
$ git push                    # 推上去，Vercel 自动部署
```

## 关于 Markdown 写法

Fuwari 在标准 Markdown 之外支持一些好用的扩展语法，示例：

:::note
这是 `note` 提示块，同系列还有 `tip`、`important`、`warning`、`caution`。
:::

代码块会带上语言标签、行号和复制按钮。

> 引用块也支持得很好。

就写到这里。下一篇见。
