const ASSET_BASE = "assets/mfft";
const MFFT_STORAGE_KEY = "cognitive-style-mfft-session-v2";
const ILS_STORAGE_KEY = "cognitive-style-ils-sg-session-v1";
const VISUAL_VERBAL_STORAGE_KEY = "cognitive-style-ils-vv-session-v1";

const practiceItems = [
  { id: "practice-1", label: "练习一", prefix: "train1P" },
  { id: "practice-2", label: "练习二", prefix: "train2P" },
];

const formalItems = [
  { id: "chess", label: "棋子", prefix: "chess" },
  { id: "handstand", label: "倒立人物", prefix: "handstand" },
  { id: "stethoscope", label: "听诊器", prefix: "steth" },
  { id: "fan", label: "风扇", prefix: "fan" },
  { id: "lighthouse", label: "灯塔", prefix: "lighthouse" },
  { id: "elephant", label: "大象", prefix: "elephant" },
  { id: "plant", label: "植物", prefix: "plant" },
  { id: "key", label: "钥匙", prefix: "key" },
  { id: "elk", label: "鹿", prefix: "elk" },
  { id: "leaf", label: "叶片", prefix: "leaf" },
  { id: "globe", label: "地球仪", prefix: "globe" },
  { id: "calm", label: "冥想人物", prefix: "calm" },
  { id: "cards", label: "纸牌", prefix: "cards" },
  { id: "binocular", label: "望远镜", prefix: "binocular" },
  { id: "lily", label: "百合", prefix: "lily" },
  { id: "fish", label: "鱼", prefix: "fish" },
  { id: "shell", label: "贝壳", prefix: "shell" },
  { id: "flag", label: "旗帜", prefix: "flag" },
  { id: "trumpet", label: "喇叭", prefix: "trumpet" },
  { id: "teapot", label: "茶壶", prefix: "teapot" },
];

const practiceCorrectPositions = [5, 2];
const formalCorrectPositionPool = [
  1, 2, 3, 4, 5, 6,
  1, 2, 3, 4, 5, 6,
  1, 2, 3, 4, 5, 6,
  5, 6,
];

const mfft2021Reference = {
  meanFirstResponseSeconds: 29.4,
  accuracyScore: 86.95,
};

const combinedLearningProfiles = {
  "reflective-global-visual": {
    number: 1,
    label: "沉思型 + 整体型 + 视觉型",
    suitable:
      "先用概念图、知识地图或总览图呈现学习目标和知识全貌，再进入具体内容；保留充分的观察、规划与复核时间，并通过图示比较和总结性问题帮助整合知识。",
    avoid:
      "避免把知识拆成缺少联系的碎片、频繁要求立即作答，也避免使用与学习目标无关的装饰性图片干扰观察。",
  },
  "reflective-global-verbal": {
    number: 2,
    label: "沉思型 + 整体型 + 言语型",
    suitable:
      "先用简洁的文字或口头讲述说明整体目标、知识框架和主题之间的联系；提供结构清楚的文字提纲，并安排比较、解释和反思性问题。",
    avoid:
      "避免只给图示而没有语言解释、在学生尚未充分思考时连续催促作答，也避免没有层次和结构的大段文字。",
  },
  "reflective-sequential-visual": {
    number: 3,
    label: "沉思型 + 序列型 + 视觉型",
    suitable:
      "使用带标注的流程图、步骤图和示意图逐步呈现内容；明确每一步与前一步的关系，并在进入下一步前留出观察、推理和检查时间。",
    avoid:
      "避免跳过推导过程直接给出结论、一次展示过多步骤，或在学生尚未核验当前步骤时强制快速推进。",
  },
  "reflective-sequential-verbal": {
    number: 4,
    label: "沉思型 + 序列型 + 言语型",
    suitable:
      "采用编号步骤、清晰定义、文字案例和完整例题依次讲解；要求学生先写出或说出推理依据，再确认答案，并给予复查时间。",
    avoid:
      "避免设置不必要的时间压力、用复杂图表替代必要的文字说明，或只要求快速选择答案而不呈现思考过程。",
  },
  "impulsive-global-visual": {
    number: 5,
    label: "冲动型 + 整体型 + 视觉型",
    suitable:
      "先用一屏式知识地图说明整体目标和主要联系，再将内容拆成短小的视觉模块；在关键节点要求先观察、寻找图中证据并完成核验后再作答。",
    avoid:
      "避免复杂或无关的视觉元素分散注意力、以速度作为奖励，也避免看到选项后未经比较就立即提交。",
  },
  "impulsive-global-verbal": {
    number: 6,
    label: "冲动型 + 整体型 + 言语型",
    suitable:
      "先用简短的文字或讲述交代整体脉络和学习目标，再分段说明内容；设置频繁但简短的总结检查点，提交前要求用一句话说明理由。",
    avoid:
      "避免长时间不分段的连续讲述、缺少结构的大段文字，以及没有复核机会便直接提交答案。",
  },
  "impulsive-sequential-visual": {
    number: 7,
    label: "冲动型 + 序列型 + 视觉型",
    suitable:
      "通过流程图、步骤图或分步动画一次呈现一个关键步骤；每一步都设置观察、比较和确认环节，发现错误时允许返回修正。",
    avoid:
      "避免同时展示全部步骤造成信息拥挤、鼓励快速连续点击，或在没有检查当前步骤时直接进入下一步。",
  },
  "impulsive-sequential-verbal": {
    number: 8,
    label: "冲动型 + 序列型 + 言语型",
    suitable:
      "使用短句、编号指令和分步例题，一次处理一个问题；要求学生复述当前步骤的理由，并在提交前完成一次明确确认。",
    avoid:
      "避免一次给出冗长指令、使用容易一键猜测的交互，也避免只反馈对错而不提示核验依据和纠错步骤。",
  },
};

const ilsContexts = [
  {
    id: "new-course",
    number: "情境一",
    title: "进入一门陌生课程",
    description:
      "新学期，你开始学习一门内容复杂、与以往知识有联系但并不熟悉的课程。请根据自己在多数课程中的自然学习方式作答。",
    questions: [
      {
        id: "ils-4",
        originalItem: 4,
        prompt: "学习一段时间后，哪种情况更像你？",
        options: [
          { value: "sequential", text: "我通常先弄清具体内容和细节，但对课程的整体结构可能仍有些模糊。" },
          { value: "global", text: "我通常先把握课程的整体结构，但对其中一些细节可能仍有些模糊。" },
        ],
      },
      {
        id: "ils-8",
        originalItem: 8,
        prompt: "面对由许多部分组成的知识体系时，哪种理解过程更像你？",
        options: [
          { value: "sequential", text: "理解各个部分之后，我才逐渐理解整个知识体系。" },
          { value: "global", text: "先理解整个知识体系之后，我才看清各部分之间的关系。" },
        ],
      },
      {
        id: "ils-20",
        originalItem: 20,
        prompt: "课程刚开始时，哪种教师讲解方式对你更重要？",
        options: [
          { value: "sequential", text: "按照清晰的先后顺序，一步一步展开课程内容。" },
          { value: "global", text: "先给出课程的整体图景，并说明它与其他学科或知识的联系。" },
        ],
      },
      {
        id: "ils-24",
        originalItem: 24,
        prompt: "随着课程推进，你的理解过程通常更接近哪一种？",
        options: [
          { value: "sequential", text: "理解以比较稳定的速度逐步增长；只要持续学习，我通常会一点点掌握。" },
          { value: "global", text: "理解常常断续发生；我可能困惑一段时间，然后某一刻突然全部贯通。" },
        ],
      },
    ],
  },
  {
    id: "problem-project",
    number: "情境二",
    title: "解决问题并完成课程任务",
    description:
      "课程进入作业和项目阶段，你需要处理陌生问题、整理大量材料并与同学讨论方案。请选择更符合你通常做法的一项。",
    questions: [
      {
        id: "ils-12",
        originalItem: 12,
        prompt: "解决一道陌生的计算题或专业问题时，你通常怎样接近答案？",
        options: [
          { value: "sequential", text: "从已知条件开始，一步一步推到答案。" },
          { value: "global", text: "常常先看出答案或大致方向，之后再回头梳理得到它的具体步骤。" },
        ],
      },
      {
        id: "ils-28",
        originalItem: 28,
        prompt: "面对一批需要整理和理解的信息时，你更可能怎样处理？",
        options: [
          { value: "sequential", text: "先关注具体细节，有时会暂时忽略整体图景。" },
          { value: "global", text: "先尝试理解整体图景，再进入具体细节。" },
        ],
      },
      {
        id: "ils-32",
        originalItem: 32,
        prompt: "撰写课程论文时，哪种过程更像你？",
        options: [
          { value: "sequential", text: "从文章开头开始思考或写作，再依照顺序向后推进。" },
          { value: "global", text: "先分别思考或写出文章的不同部分，之后再安排它们的顺序。" },
        ],
      },
      {
        id: "ils-44",
        originalItem: 44,
        prompt: "小组共同解决问题时，你更可能首先想到什么？",
        options: [
          { value: "sequential", text: "解决这个问题需要依次完成哪些步骤。" },
          { value: "global", text: "这个方案在不同领域可能带来哪些结果或应用。" },
        ],
      },
    ],
  },
  {
    id: "reading-links",
    number: "情境三",
    title: "阅读材料并建立知识联系",
    description:
      "课程要求你分析材料、深入学习一个新主题，并借助教师提供的课程提纲组织理解。请按自己更常出现的倾向作答。",
    questions: [
      {
        id: "ils-16",
        originalItem: 16,
        prompt: "分析一篇案例或叙事性材料时，哪种过程更像你？",
        options: [
          { value: "sequential", text: "先梳理其中发生的事件，再把它们联系起来归纳主题。" },
          { value: "global", text: "读完后往往先把握主题，再回到材料中寻找能够说明主题的事件。" },
        ],
      },
      {
        id: "ils-36",
        originalItem: 36,
        prompt: "深入学习一个新主题时，你更愿意怎样进行？",
        options: [
          { value: "sequential", text: "持续聚焦这个主题，尽可能把它本身学得深入、完整。" },
          { value: "global", text: "一边学习这个主题，一边寻找它与其他相关主题的联系。" },
        ],
      },
      {
        id: "ils-40",
        originalItem: 40,
        prompt: "有些教师会在讲课前提供本节课的内容提纲。这样的提纲对你通常有多大帮助？",
        options: [
          { value: "sequential", text: "对我有一些帮助。" },
          { value: "global", text: "对我有很大帮助。" },
        ],
      },
    ],
  },
];

const visualVerbalContexts = [
  {
    id: "course-input",
    number: "情境一",
    title: "在课堂中接收新信息",
    description:
      "教师正在讲授一组陌生的课程内容，并提供教材、板书和数据资料。请根据你在多数课程中更自然的接收方式作答。",
    questions: [
      {
        id: "ils-vv-7",
        originalItem: 7,
        prompt: "接触一组新信息时，你通常更希望它以哪种方式呈现？",
        options: [
          { value: "visual", text: "使用图片、示意图、图表或地图呈现。" },
          { value: "verbal", text: "使用书面说明或口头讲解呈现。" },
        ],
      },
      {
        id: "ils-vv-11",
        originalItem: 11,
        prompt: "阅读一本同时包含大量图片、图表和文字的教材时，你更可能怎样做？",
        options: [
          { value: "visual", text: "仔细查看其中的图片和图表。" },
          { value: "verbal", text: "把注意力主要放在书面文字上。" },
        ],
      },
      {
        id: "ils-vv-15",
        originalItem: 15,
        prompt: "课堂讲解中，你通常更喜欢哪种教师呈现方式？",
        options: [
          { value: "visual", text: "教师在板书或课件中使用较多图形和示意图。" },
          { value: "verbal", text: "教师花较多时间用语言进行解释。" },
        ],
      },
      {
        id: "ils-vv-31",
        originalItem: 31,
        prompt: "别人向你展示一组数据时，你通常更喜欢哪种表达？",
        options: [
          { value: "visual", text: "用图表或曲线展示数据。" },
          { value: "verbal", text: "用文字概括和说明结果。" },
        ],
      },
    ],
  },
  {
    id: "memory-recall",
    number: "情境二",
    title: "在课后回忆与复习",
    description:
      "课程结束后，你开始回顾当天经历、课堂内容以及与同学的交流。请选择更符合你通常记忆和回想方式的一项。",
    questions: [
      {
        id: "ils-vv-3",
        originalItem: 3,
        prompt: "回想昨天发生的事情时，你脑中更可能首先出现什么？",
        options: [
          { value: "visual", text: "相关的画面或场景。" },
          { value: "verbal", text: "相关的词语或语言内容。" },
        ],
      },
      {
        id: "ils-vv-19",
        originalItem: 19,
        prompt: "一般来说，哪类信息更容易被你记住？",
        options: [
          { value: "visual", text: "我看到的内容。" },
          { value: "verbal", text: "我听到的内容。" },
        ],
      },
      {
        id: "ils-vv-27",
        originalItem: 27,
        prompt: "课堂上看到一张图示，同时听到教师讲解后，你更可能记住什么？",
        options: [
          { value: "visual", text: "图示本身的样子。" },
          { value: "verbal", text: "教师围绕图示说过的话。" },
        ],
      },
      {
        id: "ils-vv-35",
        originalItem: 35,
        prompt: "在校园活动中第一次认识一些同学后，你更可能记住什么？",
        options: [
          { value: "visual", text: "他们的外貌和样子。" },
          { value: "verbal", text: "他们介绍自己时说过的内容。" },
        ],
      },
    ],
  },
  {
    id: "daily-representation",
    number: "情境三",
    title: "在校园生活中表征信息",
    description:
      "离开课堂后，你需要寻找地点、安排休闲活动并回想熟悉的校园场所。请按自己更常出现的倾向作答。",
    questions: [
      {
        id: "ils-vv-23",
        originalItem: 23,
        prompt: "前往一个不熟悉的校园地点时，你更希望获得什么？",
        options: [
          { value: "visual", text: "一张标明路线的地图。" },
          { value: "verbal", text: "一份用文字写出的路线说明。" },
        ],
      },
      {
        id: "ils-vv-39",
        originalItem: 39,
        prompt: "在课余时间放松时，你通常更愿意选择什么？",
        options: [
          { value: "visual", text: "观看影视节目。" },
          { value: "verbal", text: "阅读一本书。" },
        ],
      },
      {
        id: "ils-vv-43",
        originalItem: 43,
        prompt: "回想自己去过的校园场所时，哪种情况更像你？",
        options: [
          { value: "visual", text: "我很容易在脑中形成比较准确、清晰的场景。" },
          { value: "verbal", text: "我不太容易形成场景，脑中的视觉细节也比较少。" },
        ],
      },
    ],
  },
];

const app = document.querySelector("#app");
const homeButton = document.querySelector("#homeButton");
const sourceButton = document.querySelector("#sourceButton");
const sourceDialog = document.querySelector("#sourceDialog");
const closeSourceButton = document.querySelector("#closeSourceButton");
const confirmDialog = document.querySelector("#confirmDialog");
const cancelResetButton = document.querySelector("#cancelResetButton");
const confirmResetButton = document.querySelector("#confirmResetButton");

const state = {
  view: "overview",
  phase: null,
  queue: [],
  queueIndex: -1,
  currentItem: null,
  candidateOrder: [],
  correctPositions: [],
  trialStart: 0,
  firstResponseMs: null,
  selections: [],
  locked: false,
  paused: false,
  pauseStart: null,
  interruptions: 0,
  session: null,
  activeModule: null,
  ilsSession: null,
  ilsContextIndex: 0,
  visualVerbalSession: null,
  visualVerbalContextIndex: 0,
  resetTarget: null,
};

function getImagePath(item, candidateNumber) {
  return `${ASSET_BASE}/${item.prefix}${candidateNumber}.png`;
}

function randomIndex(max) {
  if (max <= 0) return 0;
  const limit = Math.floor(0x100000000 / max) * max;
  const values = new Uint32Array(1);
  do {
    crypto.getRandomValues(values);
  } while (values[0] >= limit);
  return values[0] % max;
}

function shuffle(values) {
  const copy = [...values];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = randomIndex(index + 1);
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function makeCandidateOrder(correctPosition) {
  const distractors = shuffle([2, 3, 4, 5, 6]);
  const order = [];
  for (let position = 1; position <= 6; position += 1) {
    order.push(position === correctPosition ? 1 : distractors.shift());
  }
  return order;
}

function makeSession() {
  return {
    schemaVersion: 2,
    instrument: "MFFT-2021 web implementation",
    sessionId: crypto.randomUUID?.() || `mfft-${Date.now()}-${randomIndex(100000)}`,
    startedAt: new Date().toISOString(),
    completedAt: null,
    formalItemOrder: [],
    formalCorrectPositionOrder: [],
    practice: [],
    formal: [],
    events: [],
  };
}

function loadCompletedSession() {
  try {
    const saved = localStorage.getItem(MFFT_STORAGE_KEY);
    if (!saved) return null;
    const parsed = JSON.parse(saved);
    return parsed?.completedAt ? parsed : null;
  } catch {
    return null;
  }
}

function saveSession() {
  if (!state.session) return;
  localStorage.setItem(MFFT_STORAGE_KEY, JSON.stringify(state.session));
}

function loadCompletedIlsSession() {
  try {
    const saved = localStorage.getItem(ILS_STORAGE_KEY);
    if (!saved) return null;
    const parsed = JSON.parse(saved);
    return parsed?.completedAt ? parsed : null;
  } catch {
    return null;
  }
}

function saveIlsSession() {
  if (!state.ilsSession) return;
  localStorage.setItem(ILS_STORAGE_KEY, JSON.stringify(state.ilsSession));
}

function loadCompletedVisualVerbalSession() {
  try {
    const saved = localStorage.getItem(VISUAL_VERBAL_STORAGE_KEY);
    if (!saved) return null;
    const parsed = JSON.parse(saved);
    return parsed?.completedAt ? parsed : null;
  } catch {
    return null;
  }
}

function saveVisualVerbalSession() {
  if (!state.visualVerbalSession) return;
  localStorage.setItem(VISUAL_VERBAL_STORAGE_KEY, JSON.stringify(state.visualVerbalSession));
}

function focusApp() {
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function getCombinedAssessment() {
  const mfftSession = loadCompletedSession();
  const ilsSession = loadCompletedIlsSession();
  const visualVerbalSession = loadCompletedVisualVerbalSession();
  const sessions = [mfftSession, ilsSession, visualVerbalSession];
  const completedCount = sessions.filter(Boolean).length;

  if (completedCount !== 3) {
    return { isComplete: false, completedCount };
  }

  const mfftSummary = calculateSummary(mfftSession);
  const ilsSummary = calculateIlsSummary(ilsSession);
  const visualVerbalSummary = calculateVisualVerbalSummary(visualVerbalSession);
  const mfftProfile = classifyProfile(mfftSummary);
  const ilsProfile = classifyIlsProfile(ilsSummary);
  const visualVerbalProfile = classifyVisualVerbalProfile(visualVerbalSummary);
  const isCanonicalDecisionProfile = ["reflective", "impulsive"].includes(mfftProfile.tone);
  const profileKey = isCanonicalDecisionProfile
    ? `${mfftProfile.tone}-${ilsProfile.tone}-${visualVerbalProfile.tone}`
    : null;

  return {
    isComplete: true,
    completedCount,
    sessions: { mfftSession, ilsSession, visualVerbalSession },
    summaries: { mfftSummary, ilsSummary, visualVerbalSummary },
    profiles: { mfftProfile, ilsProfile, visualVerbalProfile },
    strategy: profileKey ? combinedLearningProfiles[profileKey] : null,
  };
}

function combinedSummaryButton(label = "查看综合学习画像") {
  const assessment = getCombinedAssessment();
  if (!assessment.isComplete) return "";
  return `<button class="primary-button" id="combinedSummaryButton" type="button">${label}</button>`;
}

function bindCombinedSummaryButton() {
  document
    .querySelector("#combinedSummaryButton")
    ?.addEventListener("click", renderCombinedSummary);
}

function renderOverview() {
  state.view = "overview";
  state.activeModule = null;
  const completed = loadCompletedSession();
  const ilsCompleted = loadCompletedIlsSession();
  const visualVerbalCompleted = loadCompletedVisualVerbalSession();
  const combinedAssessment = getCombinedAssessment();
  app.innerHTML = `
    <section class="screen" aria-labelledby="overview-title">
      <div class="overview-heading">
        <p class="eyebrow">认知加工倾向</p>
        <h1 id="overview-title">从三个维度了解你的学习方式</h1>
        <p class="lead">
          测评由三个独立板块组成。每个板块关注一种信息加工过程，所有任务均面向大学生设计。
        </p>
      </div>

      <div class="dimension-list" aria-label="认知风格测评板块">
        <article class="dimension-row is-ready">
          <div class="dimension-number" aria-hidden="true">01</div>
          <div class="dimension-title">
            <h2>决策节奏</h2>
            <div class="poles">
              <span>沉思</span><span class="pole-separator">/</span><span>冲动</span>
            </div>
            <span class="status-tag ready">${completed ? "已完成" : "可开始"}</span>
          </div>
          <div class="dimension-detail">
            <p>通过图形匹配任务，记录首次反应时间与错误次数。包含2道练习和20道正式题。</p>
          </div>
          <div class="dimension-action">
            <button class="primary-button button-with-arrow" id="openModuleButton" type="button">
              ${completed ? "查看或重测" : "进入板块"}
            </button>
          </div>
        </article>

        <article class="dimension-row is-ready">
          <div class="dimension-number" aria-hidden="true">02</div>
          <div class="dimension-title">
            <h2>知识组织</h2>
            <div class="poles">
              <span>整体</span><span class="pole-separator">/</span><span>序列</span>
            </div>
            <span class="status-tag ready">${ilsCompleted ? "已完成" : "可开始"}</span>
          </div>
          <div class="dimension-detail">
            <p>通过3个大学学习情境中的11个选择，考察建立整体联系或依照逻辑顺序推进的偏好。</p>
          </div>
          <div class="dimension-action">
            <button class="primary-button button-with-arrow" id="openIlsModuleButton" type="button">
              ${ilsCompleted ? "查看或重测" : "进入板块"}
            </button>
          </div>
        </article>

        <article class="dimension-row is-ready">
          <div class="dimension-number" aria-hidden="true">03</div>
          <div class="dimension-title">
            <h2>信息表征</h2>
            <div class="poles">
              <span>言语</span><span class="pole-separator">/</span><span>视觉</span>
            </div>
            <span class="status-tag ready">${visualVerbalCompleted ? "已完成" : "可开始"}</span>
          </div>
          <div class="dimension-detail">
            <p>通过3个大学学习与生活情境中的11个选择，考察使用图像或言语接收和回想信息的偏好。</p>
          </div>
          <div class="dimension-action">
            <button class="primary-button button-with-arrow" id="openVisualVerbalModuleButton" type="button">
              ${visualVerbalCompleted ? "查看或重测" : "进入板块"}
            </button>
          </div>
        </article>
      </div>

      <section class="summary-entry ${combinedAssessment.isComplete ? "is-ready" : ""}" aria-labelledby="summary-entry-title">
        <div>
          <p class="eyebrow">完成进度 · ${combinedAssessment.completedCount}/3</p>
          <h2 id="summary-entry-title">综合学习画像</h2>
          <p>
            ${combinedAssessment.isComplete
              ? "三个板块均已完成。查看你的认知风格组合，以及今后 AI 辅助教学应默认沿用的呈现方式和注意事项。"
              : "完成全部三个板块后，系统将组合三个维度的结果，并给出长期教学呈现建议。"}
          </p>
        </div>
        <button class="primary-button button-with-arrow" id="overviewCombinedButton" type="button" ${combinedAssessment.isComplete ? "" : "disabled"}>
          ${combinedAssessment.isComplete ? "查看综合结果" : `还需完成 ${3 - combinedAssessment.completedCount} 个板块`}
        </button>
      </section>

      <div class="privacy-note">
        本页面用于教学研究，不构成心理诊断。当前版本不会采集姓名、学号等身份信息。
      </div>
    </section>
  `;

  document.querySelector("#openModuleButton").addEventListener("click", () => {
    state.activeModule = "mfft";
    if (completed) {
      renderCompletedChoice(completed);
    } else {
      renderModuleIntro();
    }
  });
  document.querySelector("#openIlsModuleButton").addEventListener("click", () => {
    state.activeModule = "ils";
    if (ilsCompleted) {
      renderIlsCompletedChoice(ilsCompleted);
    } else {
      renderIlsIntro();
    }
  });
  document.querySelector("#openVisualVerbalModuleButton").addEventListener("click", () => {
    state.activeModule = "visual-verbal";
    if (visualVerbalCompleted) {
      renderVisualVerbalCompletedChoice(visualVerbalCompleted);
    } else {
      renderVisualVerbalIntro();
    }
  });
  document.querySelector("#overviewCombinedButton").addEventListener("click", renderCombinedSummary);
  focusApp();
}

function combinedDimensionItem(number, title, profile, detail) {
  return `
    <article class="combined-dimension">
      <span class="combined-dimension-number" aria-hidden="true">0${number}</span>
      <div>
        <span class="combined-dimension-title">${title}</span>
        <h3>${profile.label}</h3>
        <p>${detail}</p>
      </div>
    </article>
  `;
}

function composeExtendedGuidance(decisionTone, organizationTone, representationTone) {
  const decisionRules = {
    efficient: {
      suitable: "保持较高效的理解和判断节奏，并在高难度或关键任务提交前设置一次最终复核，让速度与准确性同时得到发挥。",
      avoid: "避免仅因作答较快就将学生视为冲动型，也不必人为拖慢所有学习任务或反复增加无意义的等待。",
    },
    mixed: {
      suitable: "适当降低单次任务的信息负荷，先用示例确认任务要求，再分段练习并针对错误原因给予具体反馈。",
      avoid: "避免只延长作答时间却不分析错误来源，也避免在当前步骤尚未理解时继续增加难度或加快进度。",
    },
  };
  const organizationRules = {
    global: {
      suitable: "开始学习时先呈现整体目标、知识框架和主题之间的联系，并在学习过程中反复回到整体结构进行总结。",
      avoid: "避免直接进入彼此孤立的细节，使学生无法判断当前内容在整个知识体系中的位置。",
    },
    sequential: {
      suitable: "按照先修知识和逻辑关系，用编号步骤、分步示例和阶段检查依次展开内容，并在最后补充整体总结。",
      avoid: "避免跳过中间步骤、突然改变讲解顺序，或在前一步尚未掌握时直接进入后续内容。",
    },
  };
  const representationRules = {
    visual: {
      suitable: "优先使用带标注的流程图、步骤图、图表和示意图呈现关键信息，同时保留必要的简短文字说明。",
      avoid: "避免一次堆叠过多视觉信息，也避免使用与学习目标无关的装饰性图片或缺少标注的复杂图表。",
    },
    verbal: {
      suitable: "优先使用简洁的书面说明、口头讲解、定义和总结，并通过复述或自我解释帮助巩固理解。",
      avoid: "避免只提供图示而没有语言解释，也避免连续呈现缺少结构的大段文字或长时间讲述。",
    },
  };
  const rules = [
    decisionRules[decisionTone],
    organizationRules[organizationTone],
    representationRules[representationTone],
  ];

  return {
    suitable: rules.map((rule) => rule.suitable).join(" "),
    avoid: rules.map((rule) => rule.avoid).join(" "),
  };
}

function teachingGuidancePanels(strategy) {
  return `
    <div class="teaching-guidance" aria-label="长期教学建议">
      <article class="guidance-panel guidance-panel--suitable">
        <span class="guidance-index" aria-hidden="true">01</span>
        <div>
          <p class="guidance-kicker">今后默认沿用</p>
          <h2>更适合的教学与学习方式</h2>
          <p>${strategy.suitable}</p>
        </div>
      </article>
      <article class="guidance-panel guidance-panel--avoid">
        <span class="guidance-index" aria-hidden="true">02</span>
        <div>
          <p class="guidance-kicker">设计时持续检查</p>
          <h2>需要避免</h2>
          <p>${strategy.avoid}</p>
        </div>
      </article>
    </div>
  `;
}

function renderCombinedSummary() {
  const assessment = getCombinedAssessment();
  if (!assessment.isComplete) {
    renderOverview();
    return;
  }

  state.view = "combined-summary";
  state.activeModule = null;
  const { mfftProfile, ilsProfile, visualVerbalProfile } = assessment.profiles;
  const { ilsSummary, visualVerbalSummary } = assessment.summaries;
  const combinationLabel = `${mfftProfile.label} · ${ilsProfile.label} · ${visualVerbalProfile.label}`;
  const dimensionItems = `
    <div class="combined-dimensions" aria-label="三个维度的测评结果">
      ${combinedDimensionItem(1, "决策节奏", mfftProfile, mfftProfile.description)}
      ${combinedDimensionItem(2, "知识组织", ilsProfile, `${ilsProfile.description} 偏好强度：${ilsSummary.strength}。`)}
      ${combinedDimensionItem(3, "信息表征", visualVerbalProfile, `${visualVerbalProfile.description} 偏好强度：${visualVerbalSummary.strength}。`)}
    </div>
  `;

  if (!assessment.strategy) {
    const extendedGuidance = composeExtendedGuidance(
      mfftProfile.tone,
      ilsProfile.tone,
      visualVerbalProfile.tone,
    );
    app.innerHTML = `
      <section class="screen narrow" aria-labelledby="combined-summary-title">
        <button class="breadcrumb-button" id="backToOverviewButton" type="button">返回测评概览</button>
        <div class="results-heading">
          <div>
            <p class="eyebrow">三个板块 · 已全部完成</p>
            <h1 id="combined-summary-title">你的综合学习画像</h1>
            <p>系统已汇总三个维度，并根据本次实际结果生成可在后续 AI 辅助教学中持续使用的建议。</p>
          </div>
          <span class="status-tag ready">3/3 已完成</span>
        </div>

        <section class="combination-hero combination-hero--unassigned" aria-label="当前认知风格组合">
          <span>当前结果</span>
          <h2>${combinationLabel}</h2>
          <p>“${mfftProfile.label}”在经典 MFFT 分类中是独立结果，因此不强行改称沉思型或冲动型；下方仍会结合三个维度提供完整的长期教学建议。</p>
        </section>

        ${dimensionItems}

        ${teachingGuidancePanels(extendedGuidance)}

        <div class="continuity-note">
          <strong>长期使用说明</strong>
          <p>“更适合的教学与学习方式”和“需要避免”将作为后续 AI 讲解、课程材料、PPT 和学习视频的默认条件持续沿用，同时可根据具体课程任务进行必要调整。</p>
        </div>

        <div class="interpretation-note">
          <span class="note-mark" aria-hidden="true">i</span>
          <div>
            <h2>需要先确定二分类规则</h2>
            <p>当前教学建议可以直接使用；如果正式研究必须把所有学生严格归入八类，则仍需为目标大学生样本确定经过验证的沉思—冲动二分类计分规则。</p>
          </div>
        </div>

        <div class="results-actions">
          <button class="primary-button" id="reviewMfftButton" type="button">查看决策节奏结果</button>
          <button class="secondary-button" id="overviewButton" type="button">返回测评概览</button>
        </div>
      </section>
    `;
    document.querySelector("#backToOverviewButton").addEventListener("click", renderOverview);
    document.querySelector("#overviewButton").addEventListener("click", renderOverview);
    document.querySelector("#reviewMfftButton").addEventListener("click", renderResults);
    focusApp();
    return;
  }

  const strategy = assessment.strategy;
  app.innerHTML = `
    <section class="screen narrow" aria-labelledby="combined-summary-title">
      <button class="breadcrumb-button" id="backToOverviewButton" type="button">返回测评概览</button>
      <div class="results-heading">
        <div>
          <p class="eyebrow">三个板块 · 已全部完成</p>
          <h1 id="combined-summary-title">你的综合学习画像</h1>
          <p>系统已将三个独立测评结果组合，并匹配到八类认知风格方案中的一类。</p>
        </div>
        <span class="status-tag ready">3/3 已完成</span>
      </div>

      <section class="combination-hero" aria-label="当前认知风格组合">
        <span>八类组合中的第 ${strategy.number} 类</span>
        <h2>${strategy.label}</h2>
        <p>今后的 AI 辅助讲解、课程材料、PPT 和学习视频可将以下内容作为默认呈现规则，并贯穿后续学习过程。</p>
      </section>

      ${dimensionItems}

      ${teachingGuidancePanels(strategy)}

      <div class="continuity-note">
        <strong>长期使用说明</strong>
        <p>这两项将作为后续 AI 教学的默认条件持续沿用，但不是固定能力标签。当课程内容或具体任务有特殊要求时，可以在保留核心偏好的基础上补充其他呈现方式。</p>
      </div>

      <div class="results-actions">
        <button class="primary-button" id="overviewButton" type="button">完成并返回概览</button>
      </div>
    </section>
  `;
  document.querySelector("#backToOverviewButton").addEventListener("click", renderOverview);
  document.querySelector("#overviewButton").addEventListener("click", renderOverview);
  focusApp();
}

function renderCompletedChoice(completed) {
  state.activeModule = "mfft";
  state.session = completed;
  const summary = calculateSummary(completed);
  const profile = classifyProfile(summary);
  state.view = "completed-choice";
  app.innerHTML = `
    <section class="screen narrow" aria-labelledby="completed-title">
      <button class="breadcrumb-button" id="backToOverviewButton" type="button">返回测评概览</button>
      <p class="eyebrow">板块一 · 已完成</p>
      <h1 id="completed-title">你已完成视觉信息核验任务</h1>
      <p class="lead">可查看上次结果，也可以清空记录后重新完成本板块。</p>
      ${profileResult(profile)}
      <div class="metric-grid">
        ${metricCard("平均首次反应", summary.meanFirstResponseSeconds, "秒")}
        ${metricCard("错误总数", summary.totalErrors, "次")}
        ${metricCard("准确性得分", summary.accuracyScore, "/ 100")}
      </div>
      <div class="results-actions">
        ${combinedSummaryButton()}
        <button class="primary-button" id="viewResultButton" type="button">查看完整结果</button>
        <button class="secondary-button" id="restartButton" type="button">重新测评</button>
      </div>
    </section>
  `;
  document.querySelector("#backToOverviewButton").addEventListener("click", renderOverview);
  bindCombinedSummaryButton();
  document.querySelector("#viewResultButton").addEventListener("click", renderResults);
  document.querySelector("#restartButton").addEventListener("click", () => requestReset("mfft"));
  focusApp();
}

function makeIlsSession() {
  return {
    schemaVersion: 1,
    instrument: "Contextualized Chinese adaptation of the ILS Sequential-Global subscale",
    sessionId: crypto.randomUUID?.() || `ils-sg-${Date.now()}-${randomIndex(100000)}`,
    startedAt: new Date().toISOString(),
    completedAt: null,
    contextOrder: ilsContexts.map((context) => context.id),
    responses: [],
  };
}

function calculateIlsSummary(session) {
  const responses = session?.responses || [];
  const sequentialCount = responses.filter((response) => response.selected === "sequential").length;
  const globalCount = responses.filter((response) => response.selected === "global").length;
  const score = sequentialCount - globalCount;
  const absoluteScore = Math.abs(score);
  let strength = "轻度偏好（较为平衡）";
  if (absoluteScore >= 9) strength = "强偏好";
  else if (absoluteScore >= 5) strength = "中等偏好";

  return {
    sequentialCount,
    globalCount,
    score,
    absoluteScore,
    strength,
    completedItems: responses.length,
  };
}

function classifyIlsProfile(summary) {
  const isSequential = summary.score > 0;
  const direction = isSequential ? "序列" : "整体";
  let description;

  if (summary.absoluteScore <= 3) {
    description = `你在两种知识组织方式之间较为平衡，本次作答略偏${direction}型。这个方向较弱，在不同课程或任务中可能发生变化。`;
  } else if (isSequential) {
    description =
      summary.absoluteScore >= 9
        ? "你明显偏好按照清晰顺序、从局部到整体地建立理解，并倾向于逐步推进问题解决过程。"
        : "你较常按照清晰顺序和连续步骤建立理解，同时在部分任务中也会使用整体联系。";
  } else {
    description =
      summary.absoluteScore >= 9
        ? "你明显偏好先把握整体图景和跨主题联系，理解过程也可能在积累后突然贯通。"
        : "你较常先把握整体图景和知识联系，再回到具体细节，同时也会在部分任务中逐步推进。";
  }

  return {
    label: `偏${direction}型`,
    tone: isSequential ? "sequential" : "global",
    description,
  };
}

function formatSignedScore(score) {
  return score > 0 ? `+${score}` : String(score);
}

function ilsProfileResult(profile, summary) {
  return `
    <section class="profile-result profile-result--${profile.tone}" aria-label="本维度判断结果">
      <div>
        <span class="profile-kicker">本维度独立结论 · ${summary.strength}</span>
        <h2>${profile.label}</h2>
        <p>${profile.description}</p>
      </div>
      <p class="profile-reference">
        ILS差值为 ${formatSignedScore(summary.score)}。负值指向整体型，正值指向序列型；该结果表示学习偏好，不表示能力高低。
      </p>
    </section>
  `;
}

function renderIlsCompletedChoice(completed) {
  state.activeModule = "ils";
  state.ilsSession = completed;
  const summary = calculateIlsSummary(completed);
  const profile = classifyIlsProfile(summary);
  state.view = "ils-completed-choice";
  app.innerHTML = `
    <section class="screen narrow" aria-labelledby="ils-completed-title">
      <button class="breadcrumb-button" id="backToOverviewButton" type="button">返回测评概览</button>
      <p class="eyebrow">板块二 · 已完成</p>
      <h1 id="ils-completed-title">你已完成知识组织偏好测评</h1>
      <p class="lead">可查看上次结果，也可以清空记录后重新完成本板块。</p>
      ${ilsProfileResult(profile, summary)}
      <div class="metric-grid">
        ${metricCard("偏好差值", formatSignedScore(summary.score), "")}
        ${metricCard("序列选项", summary.sequentialCount, "项")}
        ${metricCard("整体选项", summary.globalCount, "项")}
      </div>
      <div class="results-actions">
        ${combinedSummaryButton()}
        <button class="primary-button" id="viewIlsResultButton" type="button">查看完整结果</button>
        <button class="secondary-button" id="restartIlsButton" type="button">重新测评</button>
      </div>
    </section>
  `;
  document.querySelector("#backToOverviewButton").addEventListener("click", renderOverview);
  bindCombinedSummaryButton();
  document.querySelector("#viewIlsResultButton").addEventListener("click", renderIlsResults);
  document.querySelector("#restartIlsButton").addEventListener("click", () => requestReset("ils"));
  focusApp();
}

function renderIlsIntro() {
  state.activeModule = "ils";
  state.view = "ils-intro";
  app.innerHTML = `
    <section class="screen narrow" aria-labelledby="ils-module-title">
      <button class="breadcrumb-button" id="backToOverviewButton" type="button">返回测评概览</button>
      <div class="module-intro-grid">
        <div>
          <p class="eyebrow">板块二 · 知识组织</p>
          <h1 id="ils-module-title">大学学习情境选择</h1>
          <p class="lead">
            你将进入3个常见的大学学习情境。每道题没有正确答案，请选择在多数课程中更常符合你的做法。
          </p>
          <ol class="instruction-list">
            <li>不要选择你认为更优秀的做法，只需按照自己的自然倾向作答。</li>
            <li>如果两个选项都适用，请选择在不同课程中出现得更频繁的一项。</li>
            <li>完成11题后，本板块会立即给出整体—序列偏好及强度。</li>
          </ol>
          <button class="primary-button button-with-arrow" id="startIlsButton" type="button">进入第一个情境</button>
        </div>
        <aside class="module-facts" aria-label="任务信息">
          <h2>任务信息</h2>
          <dl class="fact-list">
            <div><dt>情境数量</dt><dd>3个</dd></div>
            <div><dt>正式题目</dt><dd>11题</dd></div>
            <div><dt>预计用时</dt><dd>3–5分钟</dd></div>
            <div><dt>作答方式</dt><dd>每题二选一</dd></div>
            <div><dt>测量内核</dt><dd>ILS 序列—整体维度</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  `;
  document.querySelector("#backToOverviewButton").addEventListener("click", renderOverview);
  document.querySelector("#startIlsButton").addEventListener("click", startIlsAssessment);
  focusApp();
}

function startIlsAssessment() {
  state.activeModule = "ils";
  state.ilsSession = makeIlsSession();
  state.ilsContextIndex = 0;
  saveIlsSession();
  renderIlsContext();
}

function getIlsQuestionNumber(questionId) {
  const questions = ilsContexts.flatMap((context) => context.questions);
  return questions.findIndex((question) => question.id === questionId) + 1;
}

function renderIlsContext() {
  const context = ilsContexts[state.ilsContextIndex];
  const savedAnswers = new Map(
    (state.ilsSession?.responses || []).map((response) => [response.questionId, response.selected]),
  );
  const cumulativeQuestions = ilsContexts
    .slice(0, state.ilsContextIndex + 1)
    .reduce((total, item) => total + item.questions.length, 0);
  const firstQuestion = cumulativeQuestions - context.questions.length + 1;
  const questionMarkup = context.questions
    .map((question) => {
      const questionNumber = getIlsQuestionNumber(question.id);
      const options = question.options
        .map((option, optionIndex) => {
          const optionId = `${question.id}-${option.value}`;
          const checked = savedAnswers.get(question.id) === option.value ? "checked" : "";
          return `
            <label class="preference-option" for="${optionId}">
              <input
                id="${optionId}"
                type="radio"
                name="${question.id}"
                value="${option.value}"
                ${checked}
                required
              />
              <span class="option-letter" aria-hidden="true">${optionIndex === 0 ? "A" : "B"}</span>
              <span>${option.text}</span>
            </label>
          `;
        })
        .join("");
      return `
        <fieldset class="preference-question">
          <legend><span>题目 ${questionNumber}</span>${question.prompt}</legend>
          <div class="preference-options">${options}</div>
        </fieldset>
      `;
    })
    .join("");

  state.view = "ils-test";
  app.innerHTML = `
    <section class="screen context-screen" aria-labelledby="context-title">
      <div class="test-progress">
        <span class="phase-label">${context.number}</span>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="width: ${((state.ilsContextIndex + 1) / ilsContexts.length) * 100}%"></div>
        </div>
        <span class="progress-count">${firstQuestion}-${cumulativeQuestions} / 11</span>
      </div>

      <header class="scenario-heading">
        <span class="scenario-index" aria-hidden="true">0${state.ilsContextIndex + 1}</span>
        <div>
          <p class="eyebrow">大学学习情境</p>
          <h1 id="context-title">${context.title}</h1>
          <p>${context.description}</p>
        </div>
      </header>

      <form class="preference-form" id="ilsContextForm">
        <div class="question-list">${questionMarkup}</div>
        <div class="context-actions">
          ${state.ilsContextIndex > 0 ? '<button class="secondary-button" id="previousIlsContextButton" type="button">上一个情境</button>' : ""}
          <button class="primary-button button-with-arrow" type="submit">
            ${state.ilsContextIndex === ilsContexts.length - 1 ? "提交并查看结果" : "进入下一个情境"}
          </button>
        </div>
      </form>
    </section>
  `;

  document.querySelector("#ilsContextForm").addEventListener("submit", handleIlsContextSubmit);
  document.querySelector("#previousIlsContextButton")?.addEventListener("click", () => {
    collectIlsContextResponses(context, false);
    state.ilsContextIndex -= 1;
    renderIlsContext();
  });
  focusApp();
}

function collectIlsContextResponses(context, requireAll) {
  const form = document.querySelector("#ilsContextForm");
  if (!form) return false;
  const formData = new FormData(form);
  if (requireAll && context.questions.some((question) => !formData.get(question.id))) {
    form.reportValidity();
    return false;
  }

  context.questions.forEach((question) => {
    const selected = formData.get(question.id);
    if (!selected) return;
    const record = {
      questionId: question.id,
      originalItem: question.originalItem,
      contextId: context.id,
      selected,
      answeredAt: new Date().toISOString(),
    };
    const existingIndex = state.ilsSession.responses.findIndex(
      (response) => response.questionId === question.id,
    );
    if (existingIndex >= 0) state.ilsSession.responses[existingIndex] = record;
    else state.ilsSession.responses.push(record);
  });
  saveIlsSession();
  return true;
}

function handleIlsContextSubmit(event) {
  event.preventDefault();
  const context = ilsContexts[state.ilsContextIndex];
  if (!collectIlsContextResponses(context, true)) return;

  if (state.ilsContextIndex < ilsContexts.length - 1) {
    state.ilsContextIndex += 1;
    renderIlsContext();
    return;
  }

  state.ilsSession.completedAt = new Date().toISOString();
  saveIlsSession();
  if (getCombinedAssessment().isComplete) renderCombinedSummary();
  else renderIlsResults();
}

function renderIlsResults() {
  state.activeModule = "ils";
  state.view = "ils-results";
  const session = state.ilsSession || loadCompletedIlsSession();
  if (!session || session.responses?.length !== 11) {
    renderOverview();
    return;
  }
  state.ilsSession = session;
  const summary = calculateIlsSummary(session);
  const profile = classifyIlsProfile(summary);
  const markerPosition = ((summary.score + 11) / 22) * 100;
  app.innerHTML = `
    <section class="screen narrow" aria-labelledby="ils-results-title">
      <div class="results-heading">
        <div>
          <p class="eyebrow">板块二 · 已完成</p>
          <h1 id="ils-results-title">知识组织偏好结果</h1>
          <p>结果来自3个大学学习情境中的11道选择题，并使用 ILS 序列—整体分量表的差值规则计分。</p>
        </div>
        <span class="status-tag ready">记录已保存在本机</span>
      </div>

      ${ilsProfileResult(profile, summary)}

      <div class="score-continuum" aria-label="整体型到序列型偏好位置">
        <span>整体</span>
        <div class="continuum-track" aria-hidden="true">
          <span class="continuum-center"></span>
          <span class="continuum-marker" style="left: ${markerPosition}%"></span>
        </div>
        <span>序列</span>
      </div>

      <div class="metric-grid">
        ${metricCard("偏好差值", formatSignedScore(summary.score), "")}
        ${metricCard("序列选项", summary.sequentialCount, "项")}
        ${metricCard("整体选项", summary.globalCount, "项")}
      </div>

      <div class="interpretation-note">
        <span class="note-mark" aria-hidden="true">i</span>
        <div>
          <h2>这是当前板块的独立判断</h2>
          <p>无需等待另外两个板块。该版本保留原量表的11题测量内核，但增加了中文大学学习情境，属于研究用情境化改编版；正式应用前仍需完成翻译回译、专家评审和目标大学生样本验证。</p>
        </div>
      </div>

      <div class="results-actions">
        ${combinedSummaryButton()}
        <button class="primary-button" id="exportIlsButton" type="button">导出本次数据</button>
        <button class="secondary-button" id="overviewButton" type="button">返回测评概览</button>
        <button class="secondary-button" id="restartIlsButton" type="button">重新测评</button>
      </div>
    </section>
  `;
  bindCombinedSummaryButton();
  document.querySelector("#exportIlsButton").addEventListener("click", exportIlsSession);
  document.querySelector("#overviewButton").addEventListener("click", renderOverview);
  document.querySelector("#restartIlsButton").addEventListener("click", () => requestReset("ils"));
  focusApp();
}

function exportIlsSession() {
  const summary = calculateIlsSummary(state.ilsSession);
  const profile = classifyIlsProfile(summary);
  const content = JSON.stringify({ ...state.ilsSession, summary, profile }, null, 2);
  const blob = new Blob([content], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `ils-sequential-global-${state.ilsSession.sessionId}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function makeVisualVerbalSession() {
  return {
    schemaVersion: 1,
    instrument: "Contextualized Chinese adaptation of the ILS Visual-Verbal subscale",
    sessionId: crypto.randomUUID?.() || `ils-vv-${Date.now()}-${randomIndex(100000)}`,
    startedAt: new Date().toISOString(),
    completedAt: null,
    contextOrder: visualVerbalContexts.map((context) => context.id),
    responses: [],
  };
}

function calculateVisualVerbalSummary(session) {
  const responses = session?.responses || [];
  const visualCount = responses.filter((response) => response.selected === "visual").length;
  const verbalCount = responses.filter((response) => response.selected === "verbal").length;
  const score = visualCount - verbalCount;
  const absoluteScore = Math.abs(score);
  let strength = "轻度偏好（较为平衡）";
  if (absoluteScore >= 9) strength = "强偏好";
  else if (absoluteScore >= 5) strength = "中等偏好";

  return {
    visualCount,
    verbalCount,
    score,
    absoluteScore,
    strength,
    completedItems: responses.length,
  };
}

function classifyVisualVerbalProfile(summary) {
  const isVisual = summary.score > 0;
  const direction = isVisual ? "视觉" : "言语";
  let description;

  if (summary.absoluteScore <= 3) {
    description = `你对视觉和言语呈现方式的偏好较为平衡，本次作答略偏${direction}型。这个方向较弱，可能随课程内容和任务形式变化。`;
  } else if (isVisual) {
    description =
      summary.absoluteScore >= 9
        ? "你明显偏好通过图像、图表、示意图和视觉场景接收与回想信息。"
        : "你较常借助图像、图表和视觉场景理解与记忆信息，同时也会使用文字和口头说明。";
  } else {
    description =
      summary.absoluteScore >= 9
        ? "你明显偏好通过书面文字和口头说明接收与回想信息。"
        : "你较常借助书面文字和口头说明理解与记忆信息，同时也会使用图像和图表。";
  }

  return {
    label: `偏${direction}型`,
    tone: isVisual ? "visual" : "verbal",
    description,
  };
}

function visualVerbalProfileResult(profile, summary) {
  return `
    <section class="profile-result profile-result--${profile.tone}" aria-label="本维度判断结果">
      <div>
        <span class="profile-kicker">本维度独立结论 · ${summary.strength}</span>
        <h2>${profile.label}</h2>
        <p>${profile.description}</p>
      </div>
      <p class="profile-reference">
        ILS差值为 ${formatSignedScore(summary.score)}。负值指向言语型，正值指向视觉型；该结果表示信息呈现偏好，不表示语言或视觉能力高低。
      </p>
    </section>
  `;
}

function renderVisualVerbalCompletedChoice(completed) {
  state.activeModule = "visual-verbal";
  state.visualVerbalSession = completed;
  const summary = calculateVisualVerbalSummary(completed);
  const profile = classifyVisualVerbalProfile(summary);
  state.view = "visual-verbal-completed-choice";
  app.innerHTML = `
    <section class="screen narrow" aria-labelledby="vv-completed-title">
      <button class="breadcrumb-button" id="backToOverviewButton" type="button">返回测评概览</button>
      <p class="eyebrow">板块三 · 已完成</p>
      <h1 id="vv-completed-title">你已完成信息表征偏好测评</h1>
      <p class="lead">可查看上次结果，也可以清空记录后重新完成本板块。</p>
      ${visualVerbalProfileResult(profile, summary)}
      <div class="metric-grid">
        ${metricCard("偏好差值", formatSignedScore(summary.score), "")}
        ${metricCard("视觉选项", summary.visualCount, "项")}
        ${metricCard("言语选项", summary.verbalCount, "项")}
      </div>
      <div class="results-actions">
        ${combinedSummaryButton()}
        <button class="primary-button" id="viewVisualVerbalResultButton" type="button">查看完整结果</button>
        <button class="secondary-button" id="restartVisualVerbalButton" type="button">重新测评</button>
      </div>
    </section>
  `;
  document.querySelector("#backToOverviewButton").addEventListener("click", renderOverview);
  bindCombinedSummaryButton();
  document.querySelector("#viewVisualVerbalResultButton").addEventListener("click", renderVisualVerbalResults);
  document
    .querySelector("#restartVisualVerbalButton")
    .addEventListener("click", () => requestReset("visual-verbal"));
  focusApp();
}

function renderVisualVerbalIntro() {
  state.activeModule = "visual-verbal";
  state.view = "visual-verbal-intro";
  app.innerHTML = `
    <section class="screen narrow" aria-labelledby="vv-module-title">
      <button class="breadcrumb-button" id="backToOverviewButton" type="button">返回测评概览</button>
      <div class="module-intro-grid">
        <div>
          <p class="eyebrow">板块三 · 信息表征</p>
          <h1 id="vv-module-title">信息呈现偏好情境选择</h1>
          <p class="lead">
            你将进入3个大学学习与生活情境。每道题没有正确答案，请选择在多数课程和日常活动中更常符合你的方式。
          </p>
          <ol class="instruction-list">
            <li>按照真实偏好选择，不要把某一种呈现方式理解为更优秀的答案。</li>
            <li>如果两个选项都适用，请选择在不同情境中出现得更频繁的一项。</li>
            <li>完成11题后，本板块会立即给出视觉—言语偏好及强度。</li>
          </ol>
          <button class="primary-button button-with-arrow" id="startVisualVerbalButton" type="button">进入第一个情境</button>
        </div>
        <aside class="module-facts" aria-label="任务信息">
          <h2>任务信息</h2>
          <dl class="fact-list">
            <div><dt>情境数量</dt><dd>3个</dd></div>
            <div><dt>正式题目</dt><dd>11题</dd></div>
            <div><dt>预计用时</dt><dd>3–5分钟</dd></div>
            <div><dt>作答方式</dt><dd>每题二选一</dd></div>
            <div><dt>测量内核</dt><dd>ILS 视觉—言语维度</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  `;
  document.querySelector("#backToOverviewButton").addEventListener("click", renderOverview);
  document.querySelector("#startVisualVerbalButton").addEventListener("click", startVisualVerbalAssessment);
  focusApp();
}

function startVisualVerbalAssessment() {
  state.activeModule = "visual-verbal";
  state.visualVerbalSession = makeVisualVerbalSession();
  state.visualVerbalContextIndex = 0;
  saveVisualVerbalSession();
  renderVisualVerbalContext();
}

function getVisualVerbalQuestionNumber(questionId) {
  const questions = visualVerbalContexts.flatMap((context) => context.questions);
  return questions.findIndex((question) => question.id === questionId) + 1;
}

function renderVisualVerbalContext() {
  const context = visualVerbalContexts[state.visualVerbalContextIndex];
  const savedAnswers = new Map(
    (state.visualVerbalSession?.responses || []).map((response) => [response.questionId, response.selected]),
  );
  const cumulativeQuestions = visualVerbalContexts
    .slice(0, state.visualVerbalContextIndex + 1)
    .reduce((total, item) => total + item.questions.length, 0);
  const firstQuestion = cumulativeQuestions - context.questions.length + 1;
  const questionMarkup = context.questions
    .map((question) => {
      const questionNumber = getVisualVerbalQuestionNumber(question.id);
      const options = question.options
        .map((option, optionIndex) => {
          const optionId = `${question.id}-${option.value}`;
          const checked = savedAnswers.get(question.id) === option.value ? "checked" : "";
          return `
            <label class="preference-option" for="${optionId}">
              <input
                id="${optionId}"
                type="radio"
                name="${question.id}"
                value="${option.value}"
                ${checked}
                required
              />
              <span class="option-letter" aria-hidden="true">${optionIndex === 0 ? "A" : "B"}</span>
              <span>${option.text}</span>
            </label>
          `;
        })
        .join("");
      return `
        <fieldset class="preference-question">
          <legend><span>题目 ${questionNumber}</span>${question.prompt}</legend>
          <div class="preference-options">${options}</div>
        </fieldset>
      `;
    })
    .join("");

  state.view = "visual-verbal-test";
  app.innerHTML = `
    <section class="screen context-screen" aria-labelledby="vv-context-title">
      <div class="test-progress">
        <span class="phase-label">${context.number}</span>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="width: ${((state.visualVerbalContextIndex + 1) / visualVerbalContexts.length) * 100}%"></div>
        </div>
        <span class="progress-count">${firstQuestion}-${cumulativeQuestions} / 11</span>
      </div>

      <header class="scenario-heading scenario-heading--visual">
        <span class="scenario-index scenario-index--visual" aria-hidden="true">0${state.visualVerbalContextIndex + 1}</span>
        <div>
          <p class="eyebrow">大学学习与生活情境</p>
          <h1 id="vv-context-title">${context.title}</h1>
          <p>${context.description}</p>
        </div>
      </header>

      <form class="preference-form" id="visualVerbalContextForm">
        <div class="question-list">${questionMarkup}</div>
        <div class="context-actions">
          ${state.visualVerbalContextIndex > 0 ? '<button class="secondary-button" id="previousVisualVerbalContextButton" type="button">上一个情境</button>' : ""}
          <button class="primary-button button-with-arrow" type="submit">
            ${state.visualVerbalContextIndex === visualVerbalContexts.length - 1 ? "提交并查看结果" : "进入下一个情境"}
          </button>
        </div>
      </form>
    </section>
  `;

  document
    .querySelector("#visualVerbalContextForm")
    .addEventListener("submit", handleVisualVerbalContextSubmit);
  document.querySelector("#previousVisualVerbalContextButton")?.addEventListener("click", () => {
    collectVisualVerbalContextResponses(context, false);
    state.visualVerbalContextIndex -= 1;
    renderVisualVerbalContext();
  });
  focusApp();
}

function collectVisualVerbalContextResponses(context, requireAll) {
  const form = document.querySelector("#visualVerbalContextForm");
  if (!form) return false;
  const formData = new FormData(form);
  if (requireAll && context.questions.some((question) => !formData.get(question.id))) {
    form.reportValidity();
    return false;
  }

  context.questions.forEach((question) => {
    const selected = formData.get(question.id);
    if (!selected) return;
    const record = {
      questionId: question.id,
      originalItem: question.originalItem,
      contextId: context.id,
      selected,
      answeredAt: new Date().toISOString(),
    };
    const existingIndex = state.visualVerbalSession.responses.findIndex(
      (response) => response.questionId === question.id,
    );
    if (existingIndex >= 0) state.visualVerbalSession.responses[existingIndex] = record;
    else state.visualVerbalSession.responses.push(record);
  });
  saveVisualVerbalSession();
  return true;
}

function handleVisualVerbalContextSubmit(event) {
  event.preventDefault();
  const context = visualVerbalContexts[state.visualVerbalContextIndex];
  if (!collectVisualVerbalContextResponses(context, true)) return;

  if (state.visualVerbalContextIndex < visualVerbalContexts.length - 1) {
    state.visualVerbalContextIndex += 1;
    renderVisualVerbalContext();
    return;
  }

  state.visualVerbalSession.completedAt = new Date().toISOString();
  saveVisualVerbalSession();
  if (getCombinedAssessment().isComplete) renderCombinedSummary();
  else renderVisualVerbalResults();
}

function renderVisualVerbalResults() {
  state.activeModule = "visual-verbal";
  state.view = "visual-verbal-results";
  const session = state.visualVerbalSession || loadCompletedVisualVerbalSession();
  if (!session || session.responses?.length !== 11) {
    renderOverview();
    return;
  }
  state.visualVerbalSession = session;
  const summary = calculateVisualVerbalSummary(session);
  const profile = classifyVisualVerbalProfile(summary);
  const markerPosition = ((summary.score + 11) / 22) * 100;
  app.innerHTML = `
    <section class="screen narrow" aria-labelledby="vv-results-title">
      <div class="results-heading">
        <div>
          <p class="eyebrow">板块三 · 已完成</p>
          <h1 id="vv-results-title">信息表征偏好结果</h1>
          <p>结果来自3个大学学习与生活情境中的11道选择题，并使用 ILS 视觉—言语分量表的差值规则计分。</p>
        </div>
        <span class="status-tag ready">记录已保存在本机</span>
      </div>

      ${visualVerbalProfileResult(profile, summary)}

      <div class="score-continuum" aria-label="言语型到视觉型偏好位置">
        <span>言语</span>
        <div class="continuum-track continuum-track--visual-verbal" aria-hidden="true">
          <span class="continuum-center"></span>
          <span class="continuum-marker" style="left: ${markerPosition}%"></span>
        </div>
        <span>视觉</span>
      </div>

      <div class="metric-grid">
        ${metricCard("偏好差值", formatSignedScore(summary.score), "")}
        ${metricCard("视觉选项", summary.visualCount, "项")}
        ${metricCard("言语选项", summary.verbalCount, "项")}
      </div>

      <div class="interpretation-note">
        <span class="note-mark" aria-hidden="true">i</span>
        <div>
          <h2>这是当前板块的独立判断</h2>
          <p>无需等待另外两个板块。该结果描述信息呈现偏好，不是视觉或语言能力测试。当前版本保留原量表的11题测量内核，但增加了中文大学情境，正式应用前仍需完成翻译回译、专家评审和目标大学生样本验证。</p>
        </div>
      </div>

      <div class="results-actions">
        ${combinedSummaryButton()}
        <button class="primary-button" id="exportVisualVerbalButton" type="button">导出本次数据</button>
        <button class="secondary-button" id="overviewButton" type="button">返回测评概览</button>
        <button class="secondary-button" id="restartVisualVerbalButton" type="button">重新测评</button>
      </div>
    </section>
  `;
  bindCombinedSummaryButton();
  document.querySelector("#exportVisualVerbalButton").addEventListener("click", exportVisualVerbalSession);
  document.querySelector("#overviewButton").addEventListener("click", renderOverview);
  document
    .querySelector("#restartVisualVerbalButton")
    .addEventListener("click", () => requestReset("visual-verbal"));
  focusApp();
}

function exportVisualVerbalSession() {
  const summary = calculateVisualVerbalSummary(state.visualVerbalSession);
  const profile = classifyVisualVerbalProfile(summary);
  const content = JSON.stringify({ ...state.visualVerbalSession, summary, profile }, null, 2);
  const blob = new Blob([content], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `ils-visual-verbal-${state.visualVerbalSession.sessionId}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function renderModuleIntro() {
  state.activeModule = "mfft";
  state.view = "module-intro";
  app.innerHTML = `
    <section class="screen narrow" aria-labelledby="module-title">
      <button class="breadcrumb-button" id="backToOverviewButton" type="button">返回测评概览</button>
      <div class="module-intro-grid">
        <div>
          <p class="eyebrow">板块一 · 决策节奏</p>
          <h1 id="module-title">视觉信息核验挑战</h1>
          <p class="lead">
            每题左侧有一个目标图形，右侧有六个相似图形。请找出与目标完全一致的一项。
          </p>
          <ol class="instruction-list">
            <li>仔细比较图形中的线条、方向、比例、阴影和局部细节。</li>
            <li>选择错误时可以继续观察并重新选择，直到找到完全一致的图形。</li>
            <li>任务没有速度压力，请按照你自然的判断方式完成。</li>
          </ol>
          <button class="primary-button button-with-arrow" id="startPracticeButton" type="button">开始练习</button>
        </div>
        <aside class="module-facts" aria-label="任务信息">
          <h2>任务信息</h2>
          <dl class="fact-list">
            <div><dt>练习阶段</dt><dd>2题，不计入结果</dd></div>
            <div><dt>正式阶段</dt><dd>20题</dd></div>
            <div><dt>预计用时</dt><dd>12–15分钟</dd></div>
            <div><dt>记录指标</dt><dd>首次反应时间、错误数</dd></div>
            <div><dt>测评工具</dt><dd>MFFT-2021</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  `;
  document.querySelector("#backToOverviewButton").addEventListener("click", renderOverview);
  document.querySelector("#startPracticeButton").addEventListener("click", startPractice);
  focusApp();
}

function startPractice() {
  state.session = makeSession();
  state.phase = "practice";
  state.queue = [...practiceItems];
  state.correctPositions = [...practiceCorrectPositions];
  state.queueIndex = -1;
  state.session.events.push({ type: "practice_started", at: new Date().toISOString() });
  saveSession();
  renderTestShell();
  beginNextTrial();
}

function startFormal() {
  state.phase = "formal";
  state.queue = shuffle(formalItems);
  state.correctPositions = shuffle(formalCorrectPositionPool);
  state.queueIndex = -1;
  state.session.formalItemOrder = state.queue.map((item) => item.id);
  state.session.formalCorrectPositionOrder = [...state.correctPositions];
  state.session.events.push({ type: "formal_started", at: new Date().toISOString() });
  saveSession();
  renderTestShell();
  beginNextTrial();
}

function renderTestShell() {
  state.view = "test";
  app.innerHTML = `
    <section class="test-screen" aria-label="视觉信息核验任务">
      <div class="test-progress">
        <span class="phase-label" id="phaseLabel"></span>
        <div class="progress-track" aria-hidden="true"><div class="progress-fill" id="progressFill"></div></div>
        <span class="progress-count" id="progressCount"></span>
      </div>
      <div id="taskContainer" class="loading-state" aria-live="polite">正在准备图形…</div>
    </section>
  `;
  focusApp();
}

async function beginNextTrial() {
  state.queueIndex += 1;
  if (state.queueIndex >= state.queue.length) {
    if (state.phase === "practice") {
      renderPracticeComplete();
    } else {
      completeFormal();
    }
    return;
  }

  state.currentItem = state.queue[state.queueIndex];
  state.candidateOrder = makeCandidateOrder(state.correctPositions[state.queueIndex]);
  state.firstResponseMs = null;
  state.selections = [];
  state.locked = false;
  state.paused = false;
  state.pauseStart = null;
  state.interruptions = 0;
  updateProgress();

  const taskContainer = document.querySelector("#taskContainer");
  taskContainer.className = "loading-state";
  taskContainer.textContent = "正在准备图形…";

  try {
    await preloadCurrentItem();
    renderTrial();
  } catch {
    taskContainer.className = "error-state";
    taskContainer.innerHTML = `
      <div>
        <h2>图形加载失败</h2>
        <p>请检查 assets/mfft 目录后重试。</p>
        <button class="secondary-button" id="retryTrialButton" type="button">重新加载</button>
      </div>
    `;
    document.querySelector("#retryTrialButton").addEventListener("click", () => {
      state.queueIndex -= 1;
      beginNextTrial();
    });
  }
}

function preloadCurrentItem() {
  return Promise.all(
    [1, 2, 3, 4, 5, 6].map(
      (candidateNumber) =>
        new Promise((resolve, reject) => {
          const image = new Image();
          image.onload = resolve;
          image.onerror = reject;
          image.src = getImagePath(state.currentItem, candidateNumber);
        }),
    ),
  );
}

function updateProgress() {
  const phaseLabel = document.querySelector("#phaseLabel");
  const progressFill = document.querySelector("#progressFill");
  const progressCount = document.querySelector("#progressCount");
  if (!phaseLabel || !progressFill || !progressCount) return;
  const total = state.queue.length;
  const current = state.queueIndex + 1;
  phaseLabel.textContent = state.phase === "practice" ? "练习阶段" : "正式测评";
  progressCount.textContent = `${current} / ${total}`;
  progressFill.style.width = `${(current / total) * 100}%`;
}

function renderTrial() {
  const taskContainer = document.querySelector("#taskContainer");
  const candidates = state.candidateOrder
    .map(
      (candidateNumber, displayIndex) => `
        <button
          class="candidate-button"
          type="button"
          data-candidate="${candidateNumber}"
          aria-label="候选图形 ${displayIndex + 1}"
        >
          <span class="candidate-index" aria-hidden="true">${displayIndex + 1}</span>
          <img src="${getImagePath(state.currentItem, candidateNumber)}" alt="" draggable="false" />
        </button>
      `,
    )
    .join("");

  taskContainer.className = "task-workspace";
  taskContainer.innerHTML = `
    <section class="target-zone" aria-labelledby="target-heading">
      <div class="zone-heading">
        <div>
          <h1 id="target-heading">目标图形</h1>
          <p>候选项中只有一个完全一致</p>
        </div>
      </div>
      <div class="target-frame">
        <img src="${getImagePath(state.currentItem, 1)}" alt="本题目标图形" draggable="false" />
      </div>
    </section>
    <section class="candidate-zone" aria-labelledby="candidate-heading">
      <div class="zone-heading">
        <div>
          <h2 id="candidate-heading">请选择完全一致的图形</h2>
          <p>选错后可以继续选择</p>
        </div>
      </div>
      <div class="candidate-grid">${candidates}</div>
      <div class="feedback-line" id="feedbackLine" aria-live="assertive">请开始观察并作答</div>
    </section>
    <div class="pause-overlay" id="pauseOverlay" aria-hidden="true">
      <div class="pause-panel">
        <h2>测评已暂停</h2>
        <p>页面离开期间不计入反应时间。返回后请继续完成当前题目。</p>
        <button class="primary-button" id="continueButton" type="button">继续作答</button>
      </div>
    </div>
  `;

  taskContainer.querySelectorAll(".candidate-button").forEach((button) => {
    button.addEventListener("click", handleCandidateSelection);
  });
  document.querySelector("#continueButton").addEventListener("click", resumeTrial);

  requestAnimationFrame(() => {
    state.trialStart = performance.now();
  });
}

function handleCandidateSelection(event) {
  if (state.locked || state.paused) return;
  const button = event.currentTarget;
  if (button.disabled) return;

  const candidateNumber = Number(button.dataset.candidate);
  const responseMs = Math.max(0, Math.round(performance.now() - state.trialStart));
  const correct = candidateNumber === 1;
  if (state.firstResponseMs === null) state.firstResponseMs = responseMs;

  state.selections.push({
    candidateNumber,
    responseMs,
    correct,
  });

  const feedbackLine = document.querySelector("#feedbackLine");
  if (!correct) {
    button.disabled = true;
    button.classList.add("is-wrong");
    feedbackLine.className = "feedback-line is-wrong";
    feedbackLine.textContent = "不完全一致，请继续观察";
    return;
  }

  state.locked = true;
  button.classList.add("is-correct");
  document.querySelectorAll(".candidate-button").forEach((candidate) => {
    candidate.disabled = true;
  });
  feedbackLine.className = "feedback-line is-correct";
  feedbackLine.textContent = "选择正确";
  window.setTimeout(finishCurrentTrial, 520);
}

function finishCurrentTrial() {
  const errors = state.selections.filter((selection) => !selection.correct).length;
  const record = {
    itemId: state.currentItem.id,
    itemLabel: state.currentItem.label,
    presentedAt: new Date().toISOString(),
    candidateOrder: [...state.candidateOrder],
    correctPosition: state.candidateOrder.indexOf(1) + 1,
    firstResponseMs: state.firstResponseMs,
    errors,
    selections: state.selections.map((selection) => ({ ...selection })),
    interruptions: state.interruptions,
  };

  if (state.phase === "practice") {
    state.session.practice.push(record);
  } else {
    state.session.formal.push(record);
  }
  saveSession();
  beginNextTrial();
}

function renderPracticeComplete() {
  state.view = "practice-complete";
  state.session.events.push({ type: "practice_completed", at: new Date().toISOString() });
  saveSession();
  app.innerHTML = `
    <section class="interlude" aria-labelledby="practice-complete-title">
      <div class="interlude-panel">
        <p class="eyebrow">练习完成</p>
        <h1 id="practice-complete-title">接下来进入正式测评</h1>
        <p>
          正式阶段共有20题，作答方式与练习相同。题目顺序和正确选项位置会随机呈现，正式结果将记录反应时间和错误次数。
        </p>
        <button class="primary-button button-with-arrow" id="startFormalButton" type="button">开始正式测评</button>
      </div>
    </section>
  `;
  document.querySelector("#startFormalButton").addEventListener("click", startFormal);
  focusApp();
}

function completeFormal() {
  state.session.completedAt = new Date().toISOString();
  state.session.events.push({ type: "formal_completed", at: state.session.completedAt });
  saveSession();
  if (getCombinedAssessment().isComplete) renderCombinedSummary();
  else renderResults();
}

function calculateSummary(session) {
  const records = session?.formal || [];
  const totalErrors = records.reduce((sum, record) => sum + record.errors, 0);
  const totalFirstResponseMs = records.reduce((sum, record) => sum + (record.firstResponseMs || 0), 0);
  const meanFirstResponseSeconds = records.length
    ? (totalFirstResponseMs / records.length / 1000).toFixed(2)
    : "0.00";
  return {
    totalErrors,
    meanFirstResponseSeconds,
    accuracyScore: Math.max(0, 100 - totalErrors),
  };
}

function classifyProfile(summary) {
  const responseSeconds = Number(summary.meanFirstResponseSeconds);
  const slowerThanReference = responseSeconds >= mfft2021Reference.meanFirstResponseSeconds;
  const accurateThanReference = summary.accuracyScore >= mfft2021Reference.accuracyScore;

  if (slowerThanReference && accurateThanReference) {
    return {
      label: "偏沉思型",
      tone: "reflective",
      description: "你的首次判断时间较长，同时错误较少，呈现出先充分核验细节、再作出选择的典型沉思型模式。",
    };
  }

  if (!slowerThanReference && !accurateThanReference) {
    return {
      label: "偏冲动型",
      tone: "impulsive",
      description: "你的首次判断较快，同时错误相对较多，呈现出较快作答、较少核验细节的典型冲动型模式。",
    };
  }

  if (!slowerThanReference && accurateThanReference) {
    return {
      label: "快速准确型",
      tone: "efficient",
      description: "你的首次判断较快且错误较少。这代表较高的加工效率，不应仅因为作答快而判定为冲动型。",
    };
  }

  return {
    label: "慢速高错型",
    tone: "mixed",
    description: "你的首次判断较慢，但错误相对较多，未呈现典型沉思或冲动模式。注意力、任务熟悉度等因素可能影响本次表现。",
  };
}

function profileResult(profile) {
  return `
    <section class="profile-result profile-result--${profile.tone}" aria-label="本维度判断结果">
      <div>
        <span class="profile-kicker">本维度参考结论</span>
        <h2>${profile.label}</h2>
        <p>${profile.description}</p>
      </div>
      <p class="profile-reference">
        暂以 MFFT-2021 大学生样本均值为参照：平均首次反应 29.40 秒，准确性得分 86.95。
      </p>
    </section>
  `;
}

function metricCard(label, value, unit) {
  return `
    <article class="metric-card">
      <span class="metric-label">${label}</span>
      <span class="metric-value">${value}<span class="metric-unit">${unit}</span></span>
    </article>
  `;
}

function renderResults() {
  state.view = "results";
  const session = state.session || loadCompletedSession();
  if (!session) {
    renderOverview();
    return;
  }
  state.session = session;
  const summary = calculateSummary(session);
  const profile = classifyProfile(summary);
  app.innerHTML = `
    <section class="screen narrow" aria-labelledby="results-title">
      <div class="results-heading">
        <div>
          <p class="eyebrow">板块一 · 已完成</p>
          <h1 id="results-title">视觉信息核验结果</h1>
          <p>以下指标来自20道正式题。练习题不计入统计，完整逐题记录可导出用于后续研究分析。</p>
        </div>
        <span class="status-tag ready">记录已保存在本机</span>
      </div>

      ${profileResult(profile)}

      <div class="metric-grid">
        ${metricCard("平均首次反应", summary.meanFirstResponseSeconds, "秒")}
        ${metricCard("错误总数", summary.totalErrors, "次")}
        ${metricCard("准确性得分", summary.accuracyScore, "/ 100")}
      </div>

      <div class="interpretation-note">
        <span class="note-mark" aria-hidden="true">i</span>
        <div>
          <h2>这是当前板块的独立判断</h2>
          <p>无需等待另外两个板块。上述结论使用已发表大学生样本作为临时参照；形成正式研究工具时，应改用目标大学生预试样本建立本地判定标准。</p>
        </div>
      </div>

      <div class="results-actions">
        ${combinedSummaryButton()}
        <button class="primary-button" id="exportButton" type="button">导出本次数据</button>
        <button class="secondary-button" id="overviewButton" type="button">返回测评概览</button>
        <button class="secondary-button" id="restartButton" type="button">重新测评</button>
      </div>
    </section>
  `;
  bindCombinedSummaryButton();
  document.querySelector("#exportButton").addEventListener("click", exportSession);
  document.querySelector("#overviewButton").addEventListener("click", renderOverview);
  document.querySelector("#restartButton").addEventListener("click", () => requestReset("mfft"));
  focusApp();
}

function exportSession() {
  const content = JSON.stringify(state.session, null, 2);
  const blob = new Blob([content], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `mfft-${state.session.sessionId}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function resumeTrial() {
  if (!state.paused) return;
  const pauseDuration = performance.now() - state.pauseStart;
  state.trialStart += pauseDuration;
  state.paused = false;
  state.pauseStart = null;
  const overlay = document.querySelector("#pauseOverlay");
  overlay?.classList.remove("is-visible");
  overlay?.setAttribute("aria-hidden", "true");
  state.session.events.push({ type: "trial_resumed", itemId: state.currentItem.id, at: new Date().toISOString() });
}

function handleVisibilityChange() {
  if (state.view !== "test" || state.locked) return;
  if (document.hidden && !state.paused) {
    state.paused = true;
    state.pauseStart = performance.now();
    state.interruptions += 1;
    state.session.events.push({ type: "trial_paused", itemId: state.currentItem.id, at: new Date().toISOString() });
    return;
  }

  if (!document.hidden && state.paused) {
    const overlay = document.querySelector("#pauseOverlay");
    overlay?.classList.add("is-visible");
    overlay?.setAttribute("aria-hidden", "false");
    document.querySelector("#continueButton")?.focus();
  }
}

function requestReset(module) {
  state.resetTarget = module;
  const isIls = module === "ils";
  const isVisualVerbal = module === "visual-verbal";
  document.querySelector("#confirmTitle").textContent = "重新开始本板块？";
  document.querySelector("#confirmMessage").textContent = isVisualVerbal
    ? "当前信息表征测评记录将被清空，页面会返回板块说明。"
    : isIls
      ? "当前知识组织测评记录将被清空，页面会返回板块说明。"
      : "当前视觉信息核验记录将被清空，页面会返回板块说明。";
  confirmDialog.showModal();
}

homeButton.addEventListener("click", () => {
  if (state.view === "test" || state.view === "ils-test" || state.view === "visual-verbal-test") {
    requestReset(state.activeModule || "mfft");
  } else {
    renderOverview();
  }
});

sourceButton.addEventListener("click", () => sourceDialog.showModal());
closeSourceButton.addEventListener("click", () => sourceDialog.close());
sourceDialog.addEventListener("click", (event) => {
  if (event.target === sourceDialog) sourceDialog.close();
});

cancelResetButton.addEventListener("click", () => confirmDialog.close());
confirmResetButton.addEventListener("click", () => {
  confirmDialog.close();
  if (state.resetTarget === "visual-verbal") {
    localStorage.removeItem(VISUAL_VERBAL_STORAGE_KEY);
    state.visualVerbalSession = null;
    state.visualVerbalContextIndex = 0;
    state.resetTarget = null;
    renderVisualVerbalIntro();
    return;
  }

  if (state.resetTarget === "ils") {
    localStorage.removeItem(ILS_STORAGE_KEY);
    state.ilsSession = null;
    state.ilsContextIndex = 0;
    state.resetTarget = null;
    renderIlsIntro();
    return;
  }

  localStorage.removeItem(MFFT_STORAGE_KEY);
  state.session = null;
  state.phase = null;
  state.resetTarget = null;
  renderModuleIntro();
});

document.addEventListener("visibilitychange", handleVisibilityChange);
renderOverview();
