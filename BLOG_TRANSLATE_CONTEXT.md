【任务】把志成コンサル（日本补助金申请代办公司）官网博客文章从简体中文翻译成英文和日文，直接写盘。

【源目录】/home/userchaos/zhicheng-consul/content/posts/
【输出】每篇产出两个文件，文件名与源完全相同：
- 英文 → /home/userchaos/zhicheng-consul/content/posts/en/<同名>.md
- 日文 → /home/userchaos/zhicheng-consul/content/posts/ja/<同名>.md
（en/ja 目录已存在）

【每篇结构】YAML frontmatter（--- 包裹，含 title/date/excerpt/keywords）+ Markdown 正文。
1. title、excerpt 翻译；keywords 数组翻成对应语言关键词；**date 原样保留不动**。
2. 正文全文翻译，保留所有 Markdown 结构（## 标题、### Q1: 问答、列表、加粗一字不差）。
3. **金额/数字/比例/百分比照抄不改**（如「750万〜8,000万円」「92%」「3,000+」「¥8.5億」；英文金额用 JPY，日文保留「円」）。
4. frontmatter 双引号字段内若含英文双引号会破坏 YAML → 内层改中文引号「」，保证 YAML 合法。

【术语表·三语严格统一】
补助金=subsidy/補助金；助成金=grant/助成金；省力化补助金=Labor-Saving Subsidy/省力化補助金；AI导入补助金/IT导入补助金=AI / IT Adoption Subsidy/AI・IT導入補助金；员工转正助成金=Career-Up (Regularization) Grant/キャリアアップ助成金；员工培训助成金/人材开发支援助成金=Human Resource Development Grant/人材開発支援助成金；空调节能补助=Energy-Efficient AC Subsidy/空調省エネ補助；持续化补助金=Sustainability Subsidy/持続化補助金；事业承继=Business Succession/事業承継；行政书士=Gyoseishoshi/行政書士；税理士=Zeirishi/税理士；社会保险劳务士/社劳士=Sharoshi/社会保険労務士；中小企业诊断士=SME Management Consultant/中小企業診断士；在日华人企业主=Chinese business owners in Japan/在日華人の企業経営者；不获批不收费/成功报酬制=No approval, no fee / success-fee model/不採択なら無料 / 成功報酬制；免费诊断=free diagnosis/無料診断；企业微信=WeChat Work/企業WeChat；株式会社 志成コンサル=Shisei Consulting Co., Ltd./株式会社 志成コンサル；公募締切=public-offering deadline/公募締切；补助率=subsidy rate/補助率。

【合规红线】禁「保证获批/一定通过/最快N个月到账」承诺；成败表述保留「以主管机关审查结果为准」(en: subject to the reviewing authority's decision; ja: 審査結果によります)。原文有免责表述必须译出保留。

【日文用敬体（です・ます），英文用清晰专业商务英语，都要地道非机翻腔。】
【流程】read_file 读源 → 翻译 → write_file 写 en/ja 两个文件。完成后 terminal 列出你写入的文件名，报告实际写入数。
