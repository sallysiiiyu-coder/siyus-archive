const pictures = {
  "avatar": "./assets/images/avatar.png",
  "cover-evening": "./assets/images/cover-evening.jpg",
  "piano": "./assets/images/piano.jpg",
  "portrait-about": "./assets/images/portrait-about.jpg",
  "portrait-soft": "./assets/images/portrait-soft.jpg",
  "poster": "./assets/images/poster.jpg",
  "poster-detail": "./assets/images/poster-detail.jpg",
  "river": "./assets/images/river.jpg",
  "sunset": "./assets/images/sunset.jpg",
  "waterfront-new": "./assets/images/waterfront-new.jpg",
  "workbench": "./assets/images/workbench.jpg",
  "workbench-backup": "./assets/images/workbench-backup.jpg",
  "workbench-review": "./assets/images/workbench-review.jpg",
  "workbench-task": "./assets/images/workbench-task.jpg"
};
const app = document.querySelector('#app');
const topbar = document.querySelector('#top');
const photo = document.querySelector('#photo');

const views = ['prelude','menu','about','resonance','future','process','archive-project','course-project','bye'];
let page = 'prelude';
let moving = false;



const headings = (label, title, description = '') => `<div class="page-title"><span class="eyebrow">${label}</span><h1>${title}</h1>${description ? `<p class="muted">${description}</p>` : ''}</div>`;
const bulldog = (classes) => `<svg class="${classes}" viewBox="0 0 74 62" aria-hidden="true"><defs><linearGradient id="steel-${classes.split(' ')[0]}" x2=".15" y2="1"><stop stop-color="#77737a"/><stop offset=".24" stop-color="#faf9fc"/><stop offset=".53" stop-color="#a5a0a7"/><stop offset=".76" stop-color="#eee9ed"/><stop offset="1" stop-color="#777079"/></linearGradient></defs><path d="M27 23a12 12 0 1 1 20 0l2 14h16a5 5 0 0 1 5 5v12H4V42a5 5 0 0 1 5-5h16z M33 14a4 4 0 1 0 8 0 4 4 0 1 0-8 0" fill="url(#steel-${classes.split(' ')[0]})" fill-rule="evenodd" stroke="#837c84" stroke-width="1.5"/><path d="M7 46h60m-60 5h60" stroke="#fff" stroke-opacity=".65"/></svg>`;
const wireStar = (classes) => `<svg class="${classes}" viewBox="0 0 54 55" aria-hidden="true"><path d="m31 45-4-8-14 7c-2 1-4-1-3-3l3-13L3 17c-1-2 0-3 2-3l14-1L25 3c1-2 3-2 4 0l6 11 15 2c2 0 3 2 1 4L40 29l2 16c0 2-1 3-3 2l-16-8" fill="none" stroke="#8b8188" stroke-width="3.1" stroke-linecap="round" stroke-linejoin="round"/><path d="m31 44-4-8-14 7m-9-26 15-2 7-12m9 12 15 2" fill="none" stroke="#fdf8f5" stroke-width="1" stroke-linecap="round"/></svg>`;
const next = (route,label) => `<div class="next"><button class="word" data-go="${route}">${label} →</button></div>`;
const image = (key, alt) => `<img src="${pictures[key]}" alt="${alt}" draggable="false">`;

const pages = {
 prelude: () => `<section class="prelude-cover envelope-stage"><div class="salt-cover" inert><div class="cover-backing" aria-hidden="true"><span>SIYU / PERSONAL FILE</span></div><div class="salt-paper"><h1><span>Siyu<i class="cover-apostrophe">’</i>s</span><span>Archive</span></h1><p class="muted cover-subtitle">Rooted in Music.<br>Bound for More.</p><button type="button" class="word open-archive" data-go="menu">Welcome <svg class="welcome-arrow" viewBox="0 0 35 18" aria-hidden="true"><path d="M2 12c10 3 20 1 29-5m-8-1 9 1-4 8" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div><figure class="cover-print print-night">${image('cover-evening','思羽在水边的夜景半身肖像')}</figure><figure class="cover-print print-river">${image('sunset','思羽的夕阳回头照')}</figure><figure class="cover-print print-sunset"><span class="cover-photo-window">${image('piano','思羽在钢琴旁的白裙照片')}</span></figure><svg class="cover-safety-pin" viewBox="0 0 105 88" aria-hidden="true"><defs><linearGradient id="silver-pin" x2=".8" y2="1"><stop stop-color="#817d85"/><stop offset=".42" stop-color="#fdfcff"/><stop offset=".67" stop-color="#bcb9c0"/><stop offset="1" stop-color="#716b76"/></linearGradient></defs><path d="M33 60 88 24c15-10 6-28-6-23-6 2-13 8-16 11l5 7 10-8c5-4 10 3 5 8l-9 7" fill="none" stroke="#77717a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M33 60 88 24c15-10 6-28-6-23-6 2-13 8-16 11l5 7 10-8c5-4 10 3 5 8l-9 7M62 14l-10 7M29 59c-11 7-20-5-12-13 4-4 12-10 20-16" fill="none" stroke="url(#silver-pin)" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="23" cy="54" r="6.5" fill="none" stroke="#948f99" stroke-width="2"/><path d="M31 60v9m0 1c-9-9-16-2-12 5 3 6 12 11 12 11s10-5 13-12c3-8-6-11-13-4Z" fill="url(#silver-pin)" stroke="#7e7882" stroke-width="1.5"/></svg><span class="cover-star star-a silver-star" aria-hidden="true">★</span><span class="cover-star star-b" aria-hidden="true">✧</span><span class="cover-badge heart-button" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span class="cover-tape" aria-hidden="true"></span></div><button type="button" class="cover-envelope" aria-expanded="false" aria-label="Click the envelope"><span class="envelope-back"></span><span class="envelope-flap"></span><span class="envelope-front"></span><span class="opening-collage" aria-hidden="true"><span class="opening-stock"></span><span class="opening-print first">${image('portrait-soft','')}</span><span class="opening-print second">${image('waterfront-new','')}</span><span class="opening-note"><small>From Siyu</small><strong>Have a<br>good<br>day!</strong></span><span class="opening-star">★</span><svg class="pink-charm" viewBox="0 0 110 112" aria-hidden="true"><defs><linearGradient id="charm-pink" x2=".8" y2="1"><stop stop-color="#efbed1"/><stop offset="1" stop-color="#d997b1"/></linearGradient></defs><path d="M22 12Q14 8 14 19L15 44Q15 48 11 53L3 65Q-2 73 7 77L32 83Q37 84 41 90L51 106Q56 113 62 105L76 86Q80 81 85 80L103 75Q112 72 107 64L95 45Q92 41 93 35L94 16Q94 7 85 10L61 17Q55 19 49 17Z" fill="url(#charm-pink)" stroke="#f4c9da" stroke-width="3"/><path d="M22 17L49 23Q55 25 62 23L86 16Q89 15 88 20L87 36Q86 42 90 48L102 67Q104 70 99 71L83 75Q75 77 71 83L57 102 46 87Q41 80 34 78L9 72 17 57Q21 50 21 44Z" fill="none" stroke="#f9d8e5" stroke-width="1.4" opacity=".85"/><g fill="#fff2f4" text-anchor="middle" font-family="Pinyon, cursive" transform="rotate(-13 55 57)"><text x="55" y="53" font-size="26">Sweet</text><text x="55" y="76" font-size="26">Siyu</text></g></svg></span><svg class="opening-cord" viewBox="0 0 380 200" aria-hidden="true"><path d="M92 15C52 38 6 77 30 123c20 38 89 24 144-5 54-28 86 11 49 44-34 30-100 5-97-27 5-47 143-79 156-29 14 56-66 87-125 83-63-3-79-66-32-90 46-24 150 2 177-75" fill="none" stroke="#517891" stroke-opacity=".23" stroke-width="4" transform="translate(0 1)"/><path d="M92 15C52 38 6 77 30 123c20 38 89 24 144-5 54-28 86 11 49 44-34 30-100 5-97-27 5-47 143-79 156-29 14 56-66 87-125 83-63-3-79-66-32-90 46-24 150 2 177-75" fill="none" stroke="#f9fbf8" stroke-width="2.4" stroke-linecap="round"/><g fill="#fffefa" stroke="#c1d3db"><path d="M84 25l12-15 4 3-12 15z"/><ellipse cx="99" cy="9" rx="7" ry="5" transform="rotate(-30 99 9)"/><path d="M296 34l8-18 5 2-8 18z"/><ellipse cx="308" cy="14" rx="7" ry="5"/><rect x="169" y="185" width="17" height="6" rx="2"/></g></svg><span class="envelope-caption">Click the envelope</span></button></section>`,
 menu: () => `<section><div class="intro"><span class="eyebrow">Menu</span><h1>The archive desk</h1></div><div class="desk folder-desk">
 <svg class="folder-thread" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path class="thread-wide" d="M25 26 C40 7 55 9 70 25 C83 49 53 43 38 52 C25 57 19 65 34 70 C47 92 65 87 76 66"/><path class="thread-narrow" d="M48 19 C72 10 89 17 79 33 C80 49 26 41 20 55 C7 69 23 84 54 79"/></svg>
 ${[['about','About me','Identity'],['resonance','Resonance','Projects'],['future','Future','Plans'],['process','Process','Field notes']].map(([route,title,label],i)=>`<button class="object desk-${route}" data-go="${route}">${i===0?'<svg class="folder-paperclip" viewBox="0 0 24 57" aria-hidden="true"><path d="M17 16v29a7 7 0 0 1-14 0V11a9 9 0 0 1 18 0v32a5 5 0 0 1-10 0V16" fill="none" stroke="#746871" stroke-width="2.8" stroke-linecap="round"/><path d="M17 16v29a7 7 0 0 1-14 0V11a9 9 0 0 1 18 0v32a5 5 0 0 1-10 0V16" fill="none" stroke="#f6f1ed" stroke-width=".85" stroke-linecap="round" transform="translate(-.45 -.55)"/></svg>':i===1?'<i class="folder-washi" aria-hidden="true"></i>':i===2?bulldog('folder-binder'):wireStar('folder-star')}<small>FILE 0${i+1}</small><strong>${title}</strong><span class="sticky">${label}</span></button>`).join('')}
 <span class="star" aria-hidden="true">✧</span><span class="desk-dots" aria-hidden="true"></span>
 </div></section>`,
 about: () => `<article class="chapter">${headings('01 / Personal file','About me')}<div class="personal-stack"><nav class="archive-tabs" aria-label="个人档案索引">${[['portrait','Introduction'],['education','Education'],['skills','Skills'],['statement','Personal Statement']].map(([key,label])=>`<button type="button" data-scroll="${key}-file">${label}</button>`).join('')}</nav>
 <section class="paper dossier portrait-file"><svg class="dossier-binder" viewBox="0 0 60 62" aria-hidden="true"><path d="M20 37l-5-19q-1-5 6-7h18q7 2 6 7l-5 19M24 38l-3-14q-1-4 4-5h10q5 1 4 5l-3 14" fill="none" stroke="#80777e" stroke-width="3" stroke-linecap="round"/><path d="M20 35h20l10 17H10z" fill="#775969"/><path d="M10 52h40" stroke="#4f3544" stroke-width="3"/><path d="M16 48h28" stroke="#e0b9cc" stroke-width="1.2"/></svg><div class="portrait-print"><button type="button" class="about-photo" data-photo="portrait-about" aria-label="放大查看思羽的个人照片">${image('portrait-about','思羽的自然光半身肖像')}</button><span class="script">Siyu</span></div><div class="intro-copy" lang="zh-CN"><h2>01 Introduction</h2><p>你好，我是陶思羽（Siyu），三峡大学音乐学专业大三学生。自幼学习古典钢琴，如今将对声音的感知延伸至影像、叙事与交互，探索新媒体与 AI 辅助创作。</p></div></section>
 <section class="paper dossier education-file" lang="zh-CN"><i class="archive-pin" aria-hidden="true"></i><h2>02 Education</h2><div class="education-copy"><p>三峡大学 · 艺术学院</p><p>音乐学本科 · 大三在读</p><p>均分 90.05 / 100｜专业排名 3 / 85</p><p>辅修：AI 短视频与创意策划</p></div></section>
 <section class="paper dossier skills-file" lang="zh-CN"><span class="dossier-button" aria-hidden="true"></span><h2>03 Skills</h2><ul class="file-tags"><li>AI 辅助创作与工具协作</li><li>新媒体策划与社交媒体运营</li><li>短片编剧与导演</li><li>摄影与视频剪辑</li><li>文案写作与活动策划</li><li>交互设计基础与研究写作</li></ul></section>
 <section class="paper dossier statement-file" lang="zh-CN"><i class="folder-washi dossier-washi" aria-hidden="true"></i><h2>04 Personal Statement</h2><p>以音乐为起点，向更广阔的创意媒体探索。我关注声音、叙事与技术如何共同构成有温度的体验，希望借助 AI 拓展表达，让作品保留真实的情感与人的视角。</p></section>
 </div>${next('resonance','Resonance')}</article>`,
 resonance: () => `<article class="chapter">${headings('02 / Selected work','Resonance')}<div class="project-desk"><span class="project-index" aria-hidden="true">SELECTED / 01—02</span><button class="project-file archive-file" data-go="archive-project"><div class="project-thumb archive-preview"><span class="script">AI Poster</span><span class="mini-folders" aria-hidden="true"><i></i><i></i><i></i><i></i></span></div><span class="file-type">AIGC · Poster Design</span><h2>AI Poster</h2><p>《一江润荆楚》：以荆楚水文化连接生态守护与网络文明的公益海报。</p></button>
 <button class="project-file course-file" data-go="course-project"><div class="project-thumb archive-preview workbench-preview"><span class="script">Workbench</span><span class="mini-folders" aria-hidden="true"><i></i><i></i><i></i><i></i></span></div><span class="file-type">Digital workspace</span><h2>Workbench</h2><p>Siyu’s 工作台：整合任务、日程与复盘的个人网页工具。</p></button></div>${next('future','Future')}</article>`,
 future: () => `<article class="chapter future-chapter">${headings('03 / A letter','Future')}<div class="future-post"><div class="letter-envelope" aria-hidden="true"></div><div class="paper future-letter"><span class="mail-stamp" aria-hidden="true">✦<small>SIYU POST</small></span><span class="eyebrow">To myself / In three to five years</span><h2>Dear future me,</h2><p>我想继续做一些能让人停下来、愿意参与的作品。也许是一个可以亲手翻阅的故事，也许是一段会因观众的选择而改变的影像。</p><p>我想试着把互动叙事、影像和 AI 放进同一个小项目里，看看各自能带来什么。先从一个能被别人实际体验的原型开始，观察他们在哪一刻停留、在哪一刻想继续，再慢慢找到自己想做的方向。</p><p class="script signature">With love, Siyu</p></div><aside class="future-sticky"><span class="eyebrow">Note to self</span><p>先做一个小小的故事，让别人走进去。</p></aside></div>${next('process','Process')}</article>`,
 process: () => `<article class="chapter process-chapter">${headings('04 / Working notes','Process')}<div class="worktable">${bulldog('process-bulldog')}<span class="desk-tag" aria-hidden="true"></span>
 <section class="paper draft-slip"><h2>01 How it works</h2><p>点击信封展开拼贴封面，再从档案目录进入 About me、Resonance、Future 和 Process 四个章节。项目卡连接作品详情，作品图片可点击放大；通过 Menu 与 Back 自由往返，最后以收口档案袋结束翻阅。</p></section>
 <figure class="paper sketch-slip">${wireStar('sketch-wire')}<i class="tape" aria-hidden="true"></i><h2>02 Visitor flow</h2><svg viewBox="0 0 440 250" role="img" aria-label="信封、拼贴首页与档案目录的流程草图"><rect x="2" y="2" width="436" height="246" rx="5" fill="#faf1e6" stroke="#d9bbb3"/><rect x="22" y="35" width="154" height="150" rx="8" fill="#eed9df" stroke="#b88e91"/><text x="99" y="104" text-anchor="middle" fill="#50372f" font-family="Pinyon, cursive" font-size="26">Click the envelope</text><path d="M47 123h105v43H47z M47 123l52 27 53-27 M187 106q26-18 54 1m-10-9 10 9-12 4" fill="none" stroke="#a87880" stroke-width="2" stroke-linecap="round"/><g fill="#f1d7d7" stroke="#b98f92"><rect x="257" y="38" width="68" height="53" rx="4" transform="rotate(-7 291 64)"/><rect x="340" y="51" width="69" height="55" rx="4" transform="rotate(6 374 78)"/><rect x="259" y="119" width="66" height="53" rx="4" transform="rotate(6 292 145)"/><rect x="342" y="126" width="65" height="52" rx="4" transform="rotate(-6 374 152)"/></g><text x="332" y="213" text-anchor="middle" fill="#50372f" font-family="Pinyon, cursive" font-size="28">Archive desk</text></svg><figcaption class="note">打开信封 → 拼贴封面 → 四章目录 → 阅读档案与作品 → 收起档案</figcaption></figure>
 <aside class="inspiration-slip"><h2>03 Inspiration</h2><p>我想把个人网站做成一座可以亲手翻阅的档案馆。照片与身份卡介绍自己，项目夹收纳创作，信纸写下未来，制作笔记记录选择与调整。奶油白、粉蓝纸物和手写标题，让浏览像一次轻松的拆信。</p></aside>
 <section class="paper iterations-slip"><h2>04 Revision log</h2><div class="log-head" aria-hidden="true"><span>Version</span><span>Revision notes</span></div><ol class="revision-list"><li><b>V1</b> 确立奶油桌面和粉蓝纸物的视觉风格，加入本人Q版形象鼠标点击反馈。</li><li><b>V2</b> 将拼贴首页装进信封，用四个带索引的文件夹组织目录。</li><li><b>V3</b> 用玫瑰色曲线串起四个文件夹，结尾用夹着拍立得与票根的绕线档案袋收束。</li><li><b>V4</b> 网站以个人档案与两个创作项目为核心，照片以自然比例嵌入纸物拼贴，项目详情按图片与说明展开。</li></ol></section>
 <aside class="paper ai-slip"><h2>05 AI &amp; Me</h2><p>我把 AI 当作把想法变成可体验作品的协作者：用它梳理结构、辅助编写网页，再通过实际浏览和批注持续调整。内容、照片、视觉方向与最终取舍由我决定。</p><p>这次制作让我更关注如何提出具体问题、检查结果，把技术能力转化为有温度的表达。工具可以加快实现，人的感受与判断仍是创作的核心。</p></aside>
 </div>${next('bye','Until next time')}</article>`,
  'archive-project': () => `<article class="chapter detail portfolio-detail">${headings('File 01 / Public service advertising','AI Poster')}<section class="paper project-summary"><h2>一江润荆楚 · 网络守清流</h2><p>让江水的清澈，成为理解网络文明的一种温柔而直观的方式。</p><div class="project-meta"><span>陶思羽</span><span>2026.10</span><span>A3 竖版公益海报</span><span>AIGC · Poster Design</span></div><p>围绕湖北“新时代网络文明公益广告”征集命题，我以荆楚水文化为切入点，将江流、珍稀水生动物与“清流”的双重含义联系起来：守护自然生态，也守护我们共同生活的网络空间。</p></section><figure class="artwork-sheet poster-full"><button class="artwork-button" data-photo="poster" aria-label="放大查看一江润荆楚公益海报">${image('poster','一江润荆楚，网络守清流：A3竖版公益海报成品')}</button><figcaption>海报成品 · 点击查看大图</figcaption></figure><div class="project-notes"><section><h3>01 The idea</h3><p>“清流”既是清澈的江水，也是清朗的网络环境。“润”指向自然的滋养，“守”落在每个人可以参与的日常行动。以水流引出信息的流动与秩序，让地域意象与公益主张彼此呼应。</p></section><section><h3>02 Visual language</h3><p>纵向画面从自然景观、生命意象逐步推进至公益主张。山体、雾带与纸张肌理营造水墨气息，青绿江流串联江豚、中华鲟等生命形象，红色“网络守清流”强化阅读重点。</p></section></div><figure class="artwork-sheet"><button class="artwork-button" data-photo="poster-detail" aria-label="放大查看海报江流与水生动物细节">${image('poster-detail','海报局部：青绿江流、峡谷与珍稀水生动物')}</button><figcaption>视觉细节 · 用江流与生命意象建立荆楚地域辨识</figcaption></figure><div class="project-notes"><section><h3>03 My role</h3><p>负责主题立意、文案与构图，确定视觉重点，并审核辅助输出，让画面与公益主张保持一致。</p></section><section><h3>04 AI collaboration</h3><p>WorkBuddy 辅助纹理渲染、元素排布与图形运算代码。主题、构图和文案由本人主导，未使用 AI 图像生成模型。</p></section></div><section class="audience-note"><h3>Audience &amp; intention</h3><p>面向公众，尤其是青少年，以熟悉的江流意象传达共同守护网络文明的意义。拟用于校园、社区宣传栏与移动端，让公益主张更贴近日常。</p></section>${next('resonance','Resonance')}</article>`,
  'course-project': () => `<article class="chapter detail portfolio-detail workspace-detail">${headings('File 02 / Digital workspace','Workbench')}<figure class="artwork-sheet workspace-overview"><button class="artwork-button" data-photo="workbench" aria-label="放大查看Siyu’s 工作台全貌">${image('workbench','Siyu’s 工作台全貌')}</button><figcaption>网页成品 · 任务与日历优先，米白顶栏搭配低饱和芭蕾粉。截图均为演示数据，点击可查看大图。</figcaption></figure><section class="project-summary project-intro"><h2>Siyu’s 工作台</h2><p class="project-lead">把零散的待办、日程与创作念头，整理成可以回看的日常。</p><div class="project-meta"><span>陶思羽</span><span>2026.11</span><span>个人网页工具</span><span>AI 协作实现</span></div><p>课程与创作同时推进时，我需要一个能记录、安排和回看进度的工作空间。这是从个人需求出发，经过实际试用持续调整的工具。</p></section><div class="screen-pair feature-pair"><figure class="artwork-sheet "><button class="artwork-button" data-photo="workbench-task" aria-label="放大查看工作台任务与日程">${image('workbench-task','工作台任务与日程')}</button><figcaption><h3>01 Record &amp; plan</h3><p>集中记录任务、备忘与草稿，再为行动安排时间。日、周、月日历让待办与日程自然衔接。</p></figcaption></figure><figure class="artwork-sheet "><button class="artwork-button" data-photo="workbench-review" aria-label="放大查看工作台周报与复盘">${image('workbench-review','工作台周报与复盘')}</button><figcaption><h3>02 Review &amp; reflect</h3><p>回看任务、打卡与日程，整理本周进展和下一步。周报标明统计时间，区分实际记录与自动建议。</p></figcaption></figure></div><section class="detail-section editorial-section"><h3>03 Design decisions</h3><p>任务与日历放在首屏，资讯和灵感模块可按需隐藏。示例体验与个人记录分开，并明确提示缓存与加载状态，让信息更清楚、操作更专注。</p></section><div class="project-notes contribution-notes"><section><h3>04 My role</h3><p>负责需求定义、模块组织、命名与视觉方向，结合试用反馈确定功能优先级和迭代取舍。</p></section><section><h3>05 AI collaboration</h3><p>前期与 WorkBuddy 协作搭建，后续借助 Codex 修复、调整与部署；需求、体验方向和最终判断由本人负责。</p></section></div><figure class="artwork-sheet workspace-backup"><button class="artwork-button" data-photo="workbench-backup" aria-label="放大查看工作台备份与恢复">${image('workbench-backup','工作台备份与恢复')}</button><figcaption><h3>06 Keep &amp; carry</h3><p>记录保存在当前浏览器，可导出 JSON 并恢复，便于迁移设备或网址。在线版为私有演示，需本人账号登录。</p></figcaption></figure>${next('resonance','Resonance')}</article>`,
 bye: () => `<section class="bye"><div class="sealed-archive">
 <div class="closing-label"><h1>End of Archive</h1><p>谢谢你翻到这里。<br>把这一页也收好，下次再见。</p></div>
 <div class="closing-ticket" aria-label="档案收藏票根"><span>ARCHIVE TICKET</span><strong>Admit One</strong><span>SIYU’S COLLECTION</span></div>
 <button class="closing-print" type="button" data-photo="river" aria-label="查看思羽的水边照片">${image('river','思羽在水边的黑裙照片')}<span>Until next time</span></button>
 <svg class="closing-cord" viewBox="0 0 64 210" preserveAspectRatio="none" aria-hidden="true"><path d="M22 32 C21 20 43 20 43 32 L42 139 C42 155 23 155 23 141 L23 34 M43 34 C40 68 30 105 39 141 Q46 172 43 210" fill="none" stroke="#829bab" stroke-opacity=".46" stroke-width="4" transform="translate(1 1)"/><path d="M22 32 C21 20 43 20 43 32 L42 139 C42 155 23 155 23 141 L23 34 M43 34 C40 68 30 105 39 141 Q46 172 43 210" fill="none" stroke="#fff9ef" stroke-width="2.7"/></svg>
 <i class="closing-fastener first" aria-hidden="true"></i><i class="closing-fastener second" aria-hidden="true"></i>
 </div></section>`
};
const previous = {menu:'prelude',about:'menu',resonance:'about',future:'resonance',process:'future',bye:'process','archive-project':'resonance','course-project':'resonance'};

function draw(route) {
 page=route;
 const inner=!['prelude','menu'].includes(route);
 topbar.innerHTML=`${inner?'<button class="nav" data-go="menu">Menu</button>':'<span></span>'}<span class="script logo">Siyu's</span>${previous[route]?'<button class="back" data-back>Back</button>':'<span></span>'}`;
  
 app.innerHTML=pages[route]();
 app.className='swap';
 window.scrollTo(0,0);

}
function navigate(route,update=true) {
 if(!views.includes(route)||route===page||moving)return;
 moving=true;
 app.className='out';
 window.setTimeout(()=>{
  if(update) history.pushState(null,'',route==='prelude'?'#prelude':'#'+route);
  draw(route);moving=false;
 },matchMedia('(prefers-reduced-motion: reduce)').matches?80:200);
}
document.addEventListener('click',event=>{
 if(event.button!==0)return;
 if(event.detail!==0){
  const sprite=document.createElement('span');sprite.className='sprite';sprite.setAttribute('aria-hidden','true');const drawing=document.createElement('img');drawing.src=pictures.avatar;drawing.alt='';sprite.append(drawing);
  sprite.style.left=Math.max(2,Math.min(innerWidth-45,event.clientX+12))+'px';
  sprite.style.top=Math.max(12,Math.min(innerHeight-52,event.clientY-48))+'px';
  (photo.open ? photo : document.body).append(sprite);sprite.addEventListener('animationend',()=>sprite.remove(),{once:true});
 }
 const mail=event.target.closest('.cover-envelope');
 if(mail){
  const stage=mail.closest('.envelope-stage');
  if(!stage.classList.contains('unsealed')){
   stage.classList.add('unsealed');mail.classList.add('opened');
   mail.setAttribute('aria-expanded','true');
   const cover=stage.querySelector('.salt-cover');
   cover.inert=false;
   cover.querySelector('.open-archive').focus({preventScroll:true});
   mail.disabled=true;
  }
  return;
 }
 const tab=event.target.closest('[data-scroll]');
 if(tab){
  document.querySelector('.'+tab.dataset.scroll)?.scrollIntoView({
   behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',
   block:'start'
  });
  return;
 }
 const target=event.target.closest('[data-go],[data-back],[data-photo]');
 if(!target||target.disabled)return;
 if(target.hasAttribute('data-back')){navigate(previous[page]);}
 else if(target.dataset.photo){photo.querySelector('img').src=pictures[target.dataset.photo];photo.showModal();}
 else navigate(target.dataset.go);
});
photo.querySelector('button').addEventListener('click',()=>photo.close());
photo.addEventListener('click',e=>{if(e.target===photo)photo.close()});
window.addEventListener('popstate',()=>navigate(location.hash.slice(1)||'prelude',false));
const entry=location.hash.slice(1);
draw(views.includes(entry)?entry:'prelude');
