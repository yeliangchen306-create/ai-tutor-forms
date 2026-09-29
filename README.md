# 知问 AI 助教 · 注册与登录页面

课程作业用的静态前端页面。使用原生 HTML、CSS、JavaScript，无需安装依赖。

## 运行

用 VS Code 打开本目录，然后直接在浏览器打开 `index.html`（登录页），或使用 Live Server 预览。注册页为 `register.html`，页面之间可以互相跳转。

## 表单与 HTML5

- `form`、`label`、`select`、`datalist`：有标签的输入与学习方向建议。
- `type="email"`、`required`、`minlength`、`maxlength`：浏览器原生格式和必填校验。
- `autocomplete`、`inputmode`：改善自动填充与手机键盘体验。
- `type="password"` 配合 `setCustomValidity()`：字母加数字规则及两次密码一致性校验。
- `meter`：密码强度提示；`dialog`：提交后的演示反馈。
- `meta viewport`、语义化 `main`/`section`/`aside`：响应式布局和页面结构。

这只是前端表单演示，不连接服务端；提交不会创建账号或验证身份，也不会保存密码。真实应用需要服务端接口、密码哈希、会话管理和相应的安全设计。
登录页的“记住邮箱”只在当前浏览器保存邮箱地址，取消勾选并提交会清除该记录。

## Gitee 提交

在 Gitee 创建空仓库后，在本目录运行：

```bash
git init
git add .
git commit -m "完成 AI 助教注册与登录页面"
git branch -M main
git remote add origin https://gitee.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

将 Gitee 仓库地址及 `index.html`、`register.html` 页面截图填写到课程文档中。多轮对话截图须从本人 VS Code/Codex 的真实对话中截取。
