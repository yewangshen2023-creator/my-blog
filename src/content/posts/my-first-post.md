---
title: "我的第一篇文章"
published: 2026-10-03
description: ""
tags: []
category: ""
draft: false
---

在这里写正文，用普通 Markdown 语法就行。

写完保存，然后运行 publish.cmd 就会自动发布到两个平台。

几件要知道的事：

- **上面的 `tags` 和 `category` 可以自己改**。标签格式是 `[标签一, 标签二]`，
  分类只有一个词。只影响归档页的筛选，不写也能发。
- **`draft: true` 表示草稿**：只在本地预览可见，不会出现在网站上。
  准备好发布时把它改成 `false`。
- **`description` 是摘要**，显示在首页文章卡片上，建议写一句。
- **想插图片**：建一个同名文件夹，把 `index.md` 和图片放进去，
  然后在头部加一行 `image: ./封面图.png`。
- **提示块语法**：

```markdown
:::note
这是提示块，同系列还有 tip / important / warning / caution
:::
```
