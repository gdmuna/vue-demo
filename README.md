# vue-demo

一个基于 Vue.js 框架构建的前端服务 Demo 。

## 技术栈

- 框架
    - [Vue.js](https://vuejs.org/)
- 构建工具
    - [Vite](https://vitejs.dev/)
- 代码规范
    - [ESLint](https://eslint.org/)
    - [Prettier](https://prettier.io/)
- 路由
    - [Vue Router](https://router.vuejs.org/)
- 状态管理
    - [Pinia](https://pinia.vuejs.org/)
- 样式
    - [Tailwind CSS](https://tailwindcss.com/)
- HTTP 请求
    - [fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)
- UI 组件库
    - [daisyUI](https://daisyui.com/)
- 图标库
    - [FontAwesome](https://fontawesome.com/)
- 字体库
    - [字图 CDN](https://chinese-font.netlify.app/zh-cn/cdn) / [抖音美好体](https://chinese-font.netlify.app/zh-cn/fonts/dymh/DouyinSansBold)

## 项目结构

    ```plaintext
    .
    ├── .husky              # Git 钩子
    ├── .vscode             # VSCode 配置与扩展
    ├── config              # 项目配置文件
    ├── node_modules        # 项目依赖
    ├── public              # 静态资源
    ├── src                 # 源码
    │   ├── assets          # 静态资源
    │   ├── components      # 组件
    │   ├── pages           # 页面
    │   ├── router          # 路由
    │   ├── stores          # 状态管理
    │   ├── utils           # 工具函数
    │   ├── App.vue         # 根组件
    │   ├── main.js         # 入口文件
    │   └── styles.css      # 样式
    ├── .gitattributes      # Git 格式化提交配置
    ├── .gitignore          # Git 代码跟踪忽略规则
    ├── .npmrc              # NPM 镜像源配置
    ├── .prettierrc.cjs     # Prettier 配置
    ├── eslint.config.js    # ESLint 配置
    ├── index.html          # HTML 模板
    ├── LICENSE             # 开源协议
    ├── package.json        # 项目信息
    ├── README.md           # 项目说明
    ├── vercel.json         # Vercel 部署配置
    └── vite.config.js      # Vite 配置
    ```

## 如何运行项目

1. 前置条件

    - Node.js 22 LTS 及以上版本
    - NPM / Yarn / PNPM

2. 安装依赖

    ```bash
    pnpm i
    ```

3. 启动项目

    ```bash
    pnpm dev
    ```

4. 打包构建项目

    ```bash
    pnpm build
    ```
