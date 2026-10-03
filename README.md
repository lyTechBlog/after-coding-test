# Next.js Hello World

用于测试部署平台的最小 Next.js App Router 项目，使用 JavaScript 和 npm。
首页显示 `Hello World!`，无需数据库、API Key 或其他外部服务。

## 本地开发

建议使用 Node.js 22（仓库包含 `.nvmrc`）。

```bash
npm ci
npm run dev
```

打开 http://localhost:3000。

## 生产运行

```bash
npm ci
npm run build
npm start
```

默认监听 `0.0.0.0:3000`，支持平台注入的 `PORT` 环境变量：

```bash
PORT=8080 npm start
```

健康检查：`GET /api/health` 返回 HTTP 200 和 `{"status":"ok"}`。

```bash
curl --fail http://localhost:3000/api/health
```

## 部署平台配置

| 配置项 | 值 |
| --- | --- |
| 项目根目录 | 仓库根目录 |
| 框架 | Next.js |
| Node.js | 22 |
| 安装命令 | `npm ci` |
| 构建命令 | `npm run build` |
| 启动命令 | `npm start` |
| 端口 | `3000`，或平台设置的 `PORT` |
| 健康检查路径 | `/api/health` |

这是 Node.js 服务，`.next` 是构建产物，不能直接作为普通静态站点目录发布。
部署到原生支持 Next.js 的平台时，使用其 Next.js 框架预设。

## Docker / Harness

```bash
docker build -t next-hello-world .
docker run --rm -p 3000:3000 next-hello-world
```

在 Harness 中可以使用此仓库的 `Dockerfile` 构建镜像，推送到你自己的镜像仓库，
再通过部署流水线发布到配置好的运行环境（例如 Kubernetes）。容器端口使用 `3000`，
HTTP 健康检查路径使用 `/api/health`。镜像仓库、连接器和部署目标需要在平台内配置。

## 修改首页

编辑 `app/page.js` 中的文字，重新构建并部署即可验证更新是否生效。

参考：[Next.js 部署文档](https://nextjs.org/docs/app/getting-started/deploying)、
[Harness](https://www.harness.io/)。
