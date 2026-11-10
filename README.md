# Siyu’s Archive · GitHub Pages 部署核对清单

## 1. 新建仓库

- [ ] 登录 GitHub，点击右上角 **+ → New repository**。
- [ ] 仓库名建议使用 `siyus-archive`，可自行更换。
- [ ] 选择 **Public**，勾选 **Add README**，点击 **Create repository**。
- [ ] 确认默认分支是 `main`。GitHub Free 的 Pages 使用公开仓库即可。[官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## 2. 上传文件

- [ ] 解压 `Siyus-Archive-GitHub-Pages.zip`。
- [ ] 在仓库 **Code → Add file → Upload files**，上传解压得到的全部文件和 `assets` 文件夹，保留文件夹结构。**上传 ZIP 本身不会发布网站，也不要再套一层总文件夹。**
- [ ] 点击 **Commit changes**，提交到 `main`。
- [ ] 根目录结构应如下；文件名大小写保持一致：

```text
仓库根目录/
├── index.html
├── styles.css
├── app.js
├── .nojekyll
├── README.md
└── assets/
    ├── fonts/
    │   ├── PinyonScript-Regular.ttf
    │   └── OFL.txt
    └── images/
        └── 图片与 paper-grain.svg（全部保留）
```

- [ ] 如果系统隐藏 `.nojekyll`，在 GitHub 上用 **Add file → Create new file** 新建同名文件，写一行空白并提交即可。此文件用于跳过 Jekyll 处理。
- [ ] 确认在仓库第一层能直接看到 `index.html`、`styles.css`、`app.js` 和 `assets`。

## 3. Settings → Pages 配置

- [ ] 进入仓库 **Settings → Pages**。
- [ ] 在 **Build and deployment → Source** 选择 **Deploy from a branch**。
- [ ] **Branch** 选择 **main**，文件夹选择 **/(root)**，点击 **Save**。
- [ ] 到 **Actions** 查看 `pages build and deployment`，等待成功标记；发布可能需要数分钟。

上述分支与根目录配置遵循 [GitHub Pages 官方发布源说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。本项目无需安装依赖、运行构建或配置环境变量。

## 4. 获取公开链接

- [ ] 返回 **Settings → Pages**，点击 **Visit site**，复制页面显示的 HTTPS 网站地址。
- [ ] 若仓库名为 `siyus-archive`，通常为 `https://你的GitHub用户名.github.io/siyus-archive/`。这里是地址格式示意，实际链接以 Pages 页面为准。
- [ ] 若仓库名为 `你的GitHub用户名.github.io`，则通常为 `https://你的GitHub用户名.github.io/`。
- [ ] 分享 **github.io 网站链接**，而不是仓库地址、HTML 源码地址或本机预览地址。发布成功后，访客无需登录 GitHub 即可浏览。

## 5. 发布后验收

- [ ] 用浏览器无痕窗口打开公开链接，确认无需登录。
- [ ] 点击信封，检查展开动画、两张照片、英文便签及星形贴纸。
- [ ] 点击 Welcome，进入目录，依次打开 About me、Resonance、Future、Process。
- [ ] 打开两个项目详情，检查所有图片及放大、Close、Escape 关闭功能。
- [ ] 检查 About me 索引滚动、Menu、Back 和浏览器前进/后退。
- [ ] 直接打开 `网站地址#about`，刷新后应仍显示个人档案；其他章节也使用 `#` 地址，无需额外服务器路由规则。
- [ ] 用手机或窄窗口查看，检查文字、相框、按钮和图片。
- [ ] 检查结尾照片与返回入口。

## 常见问题

- **首页 404**：核对 Actions 是否成功、Pages 是否选择 main + /(root)、index.html 是否在根目录；首次发布等待几分钟后重试。
- **图片或样式缺失**：检查 assets 是否完整、文件名大小写是否一致，styles.css 与 app.js 是否和 index.html 同层。不要改为本机路径或以 `/assets/` 开头的路径。
- **修改后还是旧版**：确认已提交到 main，等待新一次部署完成，再强制刷新或用无痕窗口打开。
- **Pages 没有 main 可选**：先完成一次文件提交，让 main 分支存在，再返回配置。

## 交付包说明

已保留当前网站的内容、布局、动画与交互。图片、纹理和字体全部随包提供，使用相对路径；个人照片已等比例优化体积，未拉伸人物。没有外部字体/CDN 或构建依赖。

本地已检查 JavaScript 语法、9 个页面渲染、14 张图片引用、导航/索引/弹窗逻辑，并在模拟仓库子目录的 HTTP 地址中预览。GitHub 上的构建成功与公开访问需按上述步骤完成最终验收。此交付包尚未上传或发布到 GitHub，尚未生成实际公开链接。
