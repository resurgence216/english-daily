/**
 * 每日英语 - 核心应用逻辑
 */

// ==================== 初始化 ====================
const GRADE_OPTIONS = ['7a','7b','8a','8b','9'];
const GRADE_LABELS = { '7a':'七年级上','7b':'七年级下','8a':'八年级上','8b':'八年级下','9':'九年级' };
const DAILY_TARGET = 10; // 每天学 10 个词
const STORAGE_KEY = 'englishDailyApp';
const TASKS = ['recite','spell','quiz','review'];
const WEEKDAYS = ['日','一','二','三','四','五','六'];
const MONTHS = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

// ==================== 语法题库 ====================
const GRAMMAR_QUESTIONS = [
  { q: 'I ___ a student.', opts: ['am','is','are','be'], ans: 0, explain: 'I 搭配 am' },
  { q: 'She ___ to school every day.', opts: ['go','goes','going','went'], ans: 1, explain: '第三人称单数加 -es' },
  { q: 'They ___ playing football now.', opts: ['is','am','are','be'], ans: 2, explain: 'They 搭配 are' },
  { q: 'There ___ a book on the desk.', opts: ['is','are','am','be'], ans: 0, explain: '单数名词用 There is' },
  { q: '___ you like apples?', opts: ['Do','Does','Are','Is'], ans: 0, explain: 'You 前用 Do' },
  { q: 'He ___ a new bike yesterday.', opts: ['get','gets','got','getting'], ans: 2, explain: 'yesterday 过去时' },
  { q: 'We ___ go to the park tomorrow.', opts: ['will','are','do','did'], ans: 0, explain: 'tomorrow 将来时用 will' },
  { q: 'This is ___ apple.', opts: ['a','an','the','/'], ans: 1, explain: 'apple 以元音开头用 an' },
  { q: 'She is ___ than me.', opts: ['tall','taller','tallest','more tall'], ans: 1, explain: '比较级加 -er' },
  { q: 'He runs ___.', opts: ['quick','quickly','quicker','quickest'], ans: 1, explain: '副词修饰动词' },
  { q: 'My mother is a ___.', opts: ['teach','teacher','teaching','taught'], ans: 1, explain: '-er 表示职业' },
  { q: 'I have ___ orange.', opts: ['a','an','the','/'], ans: 1, explain: 'orange 元音开头用 an' },
  { q: 'We ___ playing games when he came.', opts: ['are','were','was','will'], ans: 1, explain: '过去进行时 were doing' },
  { q: '___ a beautiful flower!', opts: ['What','How','Which','Where'], ans: 0, explain: '感叹句 What + 名词' },
  { q: 'Can you ___ me?', opts: ['help','helps','helped','helping'], ans: 0, explain: 'can 后接动词原形' },
  { q: 'I have two ___.', opts: ['pen','pens','penes','pen\'s'], ans: 1, explain: 'two 后接复数' },
  { q: 'He ___ from China.', opts: ['come','comes','coming','came'], ans: 1, explain: '第三人称加 -s' },
  { q: 'Let\'s ___ a rest.', opts: ['have','has','had','having'], ans: 0, explain: 'Let\'s 后接动词原形' },
  { q: 'I ___ finished my homework.', opts: ['have','has','had','having'], ans: 0, explain: '现在完成时 I have' },
  { q: 'She ___ to the library yesterday.', opts: ['go','goes','went','gone'], ans: 2, explain: 'yesterday 过去时' },
  { q: 'The cat is ___ the box.', opts: ['in','on','at','of'], ans: 0, explain: '在里面用 in' },
  { q: 'What time ___ you get up?', opts: ['do','does','are','is'], ans: 0, explain: 'you 用 do' },
  { q: 'It\'s time ___ go to school.', opts: ['to','for','at','in'], ans: 0, explain: 'It\'s time to do sth' },
  { q: 'I like ___ basketball.', opts: ['play','playing','played','plays'], ans: 1, explain: 'like doing 喜欢做某事' },
  { q: 'He is good ___ math.', opts: ['at','in','on','for'], ans: 0, explain: 'be good at 擅长' },
  { q: 'There ___ many books in the library.', opts: ['is','are','am','be'], ans: 1, explain: '复数名词用 There are' },
  { q: 'My father ___ a car.', opts: ['have','has','had','having'], ans: 1, explain: '第三人称用 has' },
  { q: '___ interesting story it is!', opts: ['What','What an','How','How an'], ans: 1, explain: 'What + a/an + 形容词 + 名词' },
  { q: 'I often go to school ___ bus.', opts: ['by','on','in','take'], ans: 0, explain: 'by + 交通工具' },
  { q: 'She ___ like swimming.', opts: ['don\'t','doesn\'t','isn\'t','aren\'t'], ans: 1, explain: '第三人称否定用 doesn\'t' },
];

let state = {
  grade: '7a',
  unit: 1,
  todayWords: [],
  currentCardIndex: 0,
  spellIndex: 0,
  spellCorrect: 0,
  spellWrong: 0,
  quizCorrect: 0,
  quizWrong: 0,
  quizCurrent: null,
  quizQuestions: [],
  quizQIndex: 0,
  transIndex: 0,
  transCorrect: 0,
  transWrong: 0,
  transZhMode: false,
};

let data = loadData();

function getDefaultData() {
  const now = new Date();
  return {
    settings: { grade: '7a', dailyTarget: 10, startDate: formatDate(now) },
    dailyLogs: {},
    masteredWords: {},
    wrongWords: [],
    tasks: {},
  };
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const d = JSON.parse(raw);
      // 合并默认值
      const def = getDefaultData();
      for (const k in def) { if (!(k in d)) d[k] = def[k]; }
      return d;
    }
  } catch (e) { console.warn('Failed to load data', e); }
  return getDefaultData();
}

function saveData() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
  catch (e) { console.warn('Failed to save data', e); }
}

function formatDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function todayStr() { return formatDate(new Date()); }

function getDateInfo(dStr) {
  const parts = dStr.split('-');
  return new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));
}

// ==================== DOM 引用 ====================
const $ = id => document.getElementById(id);

// ==================== 页面切换 ====================
function switchPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  $(`page-${page}`).classList.add('active');
  document.querySelector(`.nav-item[onclick*="${page}"]`).classList.add('active');
  if (page === 'progress') renderProgress();
}

// ==================== 年级选择 ====================
function initGradeSelect() {
  const sel = $('gradeSelect');
  sel.innerHTML = '';
  for (const g of GRADE_OPTIONS) {
    const opt = document.createElement('option');
    opt.value = g;
    opt.textContent = GRADE_LABELS[g];
    sel.appendChild(opt);
  }
  sel.value = data.settings.grade || '7a';
  state.grade = sel.value;
}

function onGradeChange() {
  state.grade = $('gradeSelect').value;
  data.settings.grade = state.grade;
  saveData();
  prepareTodayWords();
  startFlashcard();
  startSpell();
  startQuiz();
  startTranslate();
}

// ==================== 今日单词 ====================
function prepareTodayWords() {
  const gradeWords = WORDS.filter(w => w.grade === state.grade);
  if (gradeWords.length === 0) return;

  // 找出之前学过但还没掌握（错过的）的单词
  const gradeWrong = data.wrongWords.filter(w =>
    WORDS.some(x => x.en === w && x.grade === state.grade)
  );

  // 优先复习错词
  const today = [];
  const wrongToReview = gradeWrong.slice(0, Math.min(5, gradeWrong.length));
  for (const w of wrongToReview) {
    const word = WORDS.find(x => x.en === w);
    if (word) today.push(word);
  }

  // 补齐到目标数：选没学过的
  const learned = Object.keys(data.masteredWords);
  const unlearned = gradeWords.filter(w => !learned.includes(w.en) && !today.includes(w));
  const shuffled = unlearned.sort(() => Math.random() - 0.5);
  const need = DAILY_TARGET - today.length;
  for (let i = 0; i < Math.min(need, shuffled.length); i++) {
    today.push(shuffled[i]);
  }

  // 如果还不够，复用一些已学的
  if (today.length < DAILY_TARGET) {
    const recycled = gradeWords.filter(w => learned.includes(w.en) && !today.includes(w));
    const shuffledR = recycled.sort(() => Math.random() - 0.5);
    for (let i = 0; i < Math.min(DAILY_TARGET - today.length, shuffledR.length); i++) {
      today.push(shuffledR[i]);
    }
  }

  state.todayWords = today;
  state.currentCardIndex = 0;
  updateTodayStats();
}

function updateTodayStats() {
  const log = data.dailyLogs[todayStr()] || {};
  const done = log.wordsLearned ? log.wordsLearned.length : 0;
  const total = state.todayWords ? state.todayWords.length : 0;
  const mastered = Object.keys(data.masteredWords).length;
  $('todayTarget').textContent = total;
  $('todayDone').textContent = done;
  $('totalMastered').textContent = mastered;
  $('streakBadge').textContent = `🔥 ${getStreak()}`;
}

// ==================== 连续打卡 ====================
function getStreak() {
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dStr = formatDate(d);
    const log = data.dailyLogs[dStr];
    if (log && log.completed && log.wordsLearned && log.wordsLearned.length > 0) {
      streak++;
    } else if (i > 0) { break; }
  }
  return streak;
}

// ==================== 语音朗读 (Web Speech API) ====================
function speakWord() {
  const words = state.todayWords;
  let text = '';
  if (state.currentCardIndex < words.length) {
    text = words[state.currentCardIndex].en;
  } else if (state.spellIndex < words.length) {
    text = words[state.spellIndex].en;
  } else if (state.quizCurrent) {
    text = state.quizCurrent.en;
  }
  if (!text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.85;
  utterance.pitch = 1;
  // 选一个美式女声
  window.speechSynthesis.cancel();
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Female'))
    || voices.find(v => v.lang.startsWith('en-US'))
    || voices.find(v => v.lang.startsWith('en'));
  if (enVoice) utterance.voice = enVoice;
  window.speechSynthesis.speak(utterance);
}

// 预加载语音
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}
let cardFlipped = false;

function startFlashcard() {
  state.currentCardIndex = 0;
  cardFlipped = false;
  showCard();
}

function showCard() {
  const words = state.todayWords;
  if (!words || words.length === 0) {
    $('cardWord').textContent = '🎉 暂无单词';
    $('cardMeaning').textContent = '请先选择一个年级';
    $('cardProgress').textContent = '0 / 0';
    return;
  }
  const idx = state.currentCardIndex;
  const word = words[idx];
  $('cardWord').textContent = word.en;
  $('cardMeaning').textContent = word.zh;
  $('cardPos').textContent = word.pos || '';
  $('cardPosBack').textContent = word.pos || '';
  $('cardProgress').textContent = `${idx + 1} / ${words.length}`;
  // 切词时立即显示正面，避免翻转闪烁
  const inner = $('cardInner');
  inner.style.transition = 'none';
  inner.classList.remove('flipped');
  cardFlipped = false;
  // 强制重绘后再恢复动画
  inner.offsetHeight;
  inner.style.transition = '';
}

function flipCard() {
  $('cardInner').classList.toggle('flipped');
  cardFlipped = !cardFlipped;
}

function nextCard() {
  if (state.currentCardIndex < state.todayWords.length - 1) {
    state.currentCardIndex++;
    showCard();
  }
}

function prevCard() {
  if (state.currentCardIndex > 0) {
    state.currentCardIndex--;
    showCard();
  }
}

function shuffleCards() {
  state.todayWords = state.todayWords.sort(() => Math.random() - 0.5);
  state.currentCardIndex = 0;
  showCard();
}

function switchLearnMode(mode) {
  document.querySelectorAll('.learn-mode').forEach(m => m.classList.remove('active'));
  document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
  $(`mode-${mode}`).classList.add('active');
  document.querySelector(`.mode-tab[onclick*="${mode}"]`).classList.add('active');
  if (mode === 'flashcard') startFlashcard();
  if (mode === 'spell') startSpell();
  if (mode === 'quiz') startQuiz();
  if (mode === 'translate') startTranslate();
}

// ==================== 拼写模式 ====================
function startSpell() {
  state.spellIndex = 0;
  state.spellCorrect = 0;
  state.spellWrong = 0;
  $('spellCorrect').textContent = '0';
  $('spellWrong').textContent = '0';
  $('spellAccuracy').textContent = '0%';
  $('spellInput').value = '';
  $('spellResult').textContent = '';
  $('spellInput').className = 'spell-input';
  showSpellQuestion();
}

function showSpellQuestion() {
  const words = state.todayWords;
  if (!words || words.length === 0 || state.spellIndex >= words.length) {
    // 全部完成
    $('spellPrompt').textContent = '🎉 拼写练习已完成！重新开始吧';
    $('spellInput').disabled = true;
    return;
  }
  $('spellPrompt').textContent = `✍️ 请拼写 (${state.spellIndex + 1}/${words.length})`;
  const w = words[state.spellIndex];
  $('spellPrompt').innerHTML += `<br><span style="font-size:14px;color:var(--gray-400)">${w.pos || ''}</span>
    <br><span style="font-size:20px;color:var(--primary)">${w.zh}</span>`;
  $('spellInput').disabled = false;
  $('spellInput').value = '';
  $('spellInput').focus();
  $('spellInput').className = 'spell-input';
  $('spellResult').textContent = '';
}

function checkSpell() {
  const input = $('spellInput').value.trim().toLowerCase();
  const word = state.todayWords[state.spellIndex];
  if (!word) return;
  if (input === word.en.toLowerCase()) {
    $('spellInput').className = 'spell-input correct';
    $('spellResult').textContent = '✅ 正确！';
    $('spellResult').style.color = 'var(--success)';
    state.spellCorrect++;
    markWordLearned(word.en);
    // 从错词中移除
    data.wrongWords = data.wrongWords.filter(w => w !== word.en);
    saveData();
  } else {
    $('spellInput').className = 'spell-input wrong';
    $('spellResult').textContent = `❌ 正确答案: ${word.en}`;
    $('spellResult').style.color = 'var(--danger)';
    state.spellWrong++;
    addWrongWord(word.en);
  }
  $('spellCorrect').textContent = state.spellCorrect;
  $('spellWrong').textContent = state.spellWrong;
  const total = state.spellCorrect + state.spellWrong;
  $('spellAccuracy').textContent = total > 0 ? Math.round(state.spellCorrect / total * 100) + '%' : '0%';
}

function showHint() {
  const word = state.todayWords[state.spellIndex];
  if (!word) return;
  const en = word.en;
  const hint = en[0] + '_'.repeat(en.length - 1);
  $('spellResult').textContent = `💡 提示: ${hint} (${en.length} 个字母)`;
  $('spellResult').style.color = 'var(--warning)';
}

function nextSpell() {
  state.spellIndex++;
  showSpellQuestion();
}

// ==================== 语法选择题模式 ====================
function startQuiz() {
  state.quizCorrect = 0;
  state.quizWrong = 0;
  state.quizQIndex = 0;
  state.quizQuestions = [...GRAMMAR_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 10);
  $('quizCorrect').textContent = '0';
  $('quizWrong').textContent = '0';
  $('quizResult').textContent = '';
  showQuizQuestion();
}

function showQuizQuestion() {
  if (state.quizQIndex >= state.quizQuestions.length) {
    $('quizQuestion').textContent = '🎉 语法练习完成！';
    $('quizWord').textContent = `正确 ${state.quizCorrect}/${state.quizQuestions.length}`;
    $('quizOptions').innerHTML = '<button class="btn btn-primary" onclick="startQuiz()">重新开始</button>';
    return;
  }
  const q = state.quizQuestions[state.quizQIndex];
  state.quizCurrent = q;
  $('quizQuestion').textContent = '🧠 语法填空';
  $('quizWord').textContent = q.q;
  const optDiv = $('quizOptions');
  optDiv.innerHTML = '';
  for (let i = 0; i < q.opts.length; i++) {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = q.opts[i];
    btn.onclick = () => selectQuizOption(btn, i, q);
    optDiv.appendChild(btn);
  }
  $('quizResult').textContent = '';
}

function selectQuizOption(btn, selected, q) {
  document.querySelectorAll('.quiz-option').forEach(o => o.classList.add('disabled'));
  if (selected === q.ans) {
    btn.classList.add('selected-correct');
    $('quizResult').textContent = `✅ 正确！${q.explain}`;
    $('quizResult').style.color = 'var(--success)';
    state.quizCorrect++;
  } else {
    btn.classList.add('selected-wrong');
    document.querySelectorAll('.quiz-option').forEach(o => {
      if (o.textContent === q.opts[q.ans]) o.classList.add('selected-correct');
    });
    $('quizResult').textContent = `❌ ${q.explain}`;
    $('quizResult').style.color = 'var(--danger)';
    state.quizWrong++;
  }
  $('quizCorrect').textContent = state.quizCorrect;
  $('quizWrong').textContent = state.quizWrong;
  saveData();
}

function nextQuiz() {
  state.quizQIndex++;
  showQuizQuestion();
}

// ==================== 翻译模式 ====================
function startTranslate() {
  state.transIndex = 0;
  state.transCorrect = 0;
  state.transWrong = 0;
  $('transCorrect').textContent = '0';
  $('transWrong').textContent = '0';
  $('transResult').textContent = '';
  $('transInput').value = '';
  showTransQuestion();
}

function showTransQuestion() {
  const words = state.todayWords;
  if (!words || words.length === 0 || state.transIndex >= words.length) {
    $('transWord').textContent = '🎉 翻译完成！';
    $('transDirection').textContent = `正确 ${state.transCorrect}/${state.transIndex}`;
    $('transInput').disabled = true;
    return;
  }
  const w = words[state.transIndex];
  if (state.transZhMode) {
    $('transDirection').textContent = `中译英 (${state.transIndex+1}/${words.length})`;
    $('transWord').textContent = `${w.zh} (${w.pos || '—'})`;
  } else {
    $('transDirection').textContent = `英译中 (${state.transIndex+1}/${words.length})`;
    $('transWord').textContent = w.en;
  }
  $('transInput').disabled = false;
  $('transInput').value = '';
  $('transInput').focus();
  $('transInput').className = 'spell-input';
  $('transResult').textContent = '';
}

function checkTranslation() {
  const words = state.todayWords;
  if (!words || state.transIndex >= words.length) return;
  const w = words[state.transIndex];
  const input = $('transInput').value.trim().toLowerCase();

  if (state.transZhMode) {
    // 中译英
    if (input === w.en.toLowerCase()) {
      $('transInput').className = 'spell-input correct';
      $('transResult').textContent = '✅ 正确！';
      $('transResult').style.color = 'var(--success)';
      state.transCorrect++;
      markWordLearned(w.en);
    } else {
      $('transInput').className = 'spell-input wrong';
      $('transResult').textContent = `❌ 正确答案: ${w.en}`;
      $('transResult').style.color = 'var(--danger)';
      state.transWrong++;
      addWrongWord(w.en);
    }
  } else {
    // 英译中（模糊匹配）
    const zh = w.zh.split('；')[0].split('；')[0].toLowerCase();
    const match = input.includes(zh) || zh.includes(input) || w.zh.includes(input);
    if (match) {
      $('transInput').className = 'spell-input correct';
      $('transResult').textContent = `✅ 正确！(${w.zh})`;
      $('transResult').style.color = 'var(--success)';
      state.transCorrect++;
      markWordLearned(w.en);
    } else {
      $('transInput').className = 'spell-input wrong';
      $('transResult').textContent = `❌ 参考翻译: ${w.zh}`;
      $('transResult').style.color = 'var(--danger)';
      state.transWrong++;
      addWrongWord(w.en);
    }
  }
  $('transCorrect').textContent = state.transCorrect;
  $('transWrong').textContent = state.transWrong;
  saveData();
}

function showTransHint() {
  const w = state.todayWords[state.transIndex];
  if (!w) return;
  if (state.transZhMode) {
    $('transResult').textContent = `💡 提示: ${w.en.length} 个字母，以 ${w.en[0]} 开头`;
  } else {
    $('transResult').textContent = `💡 提示: 词性 ${w.pos || '—'}，意思是 ${w.zh.slice(0, 6)}...`;
  }
  $('transResult').style.color = 'var(--warning)';
}

function nextTranslation() {
  state.transIndex++;
  showTransQuestion();
}

function toggleTransDirection() {
  state.transZhMode = $('transDirectionToggle').checked;
  state.transIndex = 0;
  state.transCorrect = 0;
  state.transWrong = 0;
  $('transCorrect').textContent = '0';
  $('transWrong').textContent = '0';
  showTransQuestion();
}

// ==================== 单词学习记录 ====================
function markWordLearned(en) {
  const log = data.dailyLogs[todayStr()] || { wordsLearned: [], completed: false };
  if (!log.wordsLearned) log.wordsLearned = [];
  if (!log.wordsLearned.includes(en)) log.wordsLearned.push(en);
  data.dailyLogs[todayStr()] = log;

  // 累计掌握
  if (!data.masteredWords[en]) data.masteredWords[en] = 0;
  data.masteredWords[en]++;
  saveData();
  updateTodayStats();
}

function addWrongWord(en) {
  if (!data.wrongWords.includes(en)) data.wrongWords.push(en);
  // 限制错词列表长度
  if (data.wrongWords.length > 100) data.wrongWords = data.wrongWords.slice(-100);
  saveData();
}

// ==================== 任务管理 ====================
function initTasks() {
  renderTasks();
  updateDailySummary();
}

function renderTasks() {
  const todayTasks = data.tasks[todayStr()] || {};
  for (const task of TASKS) {
    const el = $(`check-${task}`);
    const item = el?.closest('.task-item');
    if (todayTasks[task]) {
      if (el) el.textContent = '✅';
      if (item) item.classList.add('done');
    } else {
      if (el) el.textContent = '⬜';
      if (item) item.classList.remove('done');
    }
  }
  $('taskDate').textContent = todayStr();
}

function toggleTask(task) {
  // 有些任务需要先完成对应练习
  if (task === 'recite') {
    // 浏览完今日单词即可
  }
  if (task === 'spell' && state.spellCorrect + state.spellWrong < Math.min(5, state.todayWords.length)) {
    alert('💡 先去做拼写练习吧！至少做 5 题');
    switchPage('learn');
    switchLearnMode('spell');
    return;
  }
  if (task === 'quiz' && state.quizCorrect + state.quizWrong < Math.min(5, state.todayWords.length)) {
    alert('💡 先去做选择题吧！至少做 5 题');
    switchPage('learn');
    switchLearnMode('quiz');
    return;
  }

  const todayTasks = data.tasks[todayStr()] || {};
  if (todayTasks[task]) {
    delete todayTasks[task];
  } else {
    todayTasks[task] = true;
  }
  data.tasks[todayStr()] = todayTasks;
  saveData();
  renderTasks();
  updateDailySummary();
}

function updateDailySummary() {
  const todayTasks = data.tasks[todayStr()] || {};
  const done = TASKS.filter(t => todayTasks[t]).length;
  const total = TASKS.length;
  $('taskProgress').textContent = `${done}/${total}`;
  $('taskProgressFill').style.width = `${done / total * 100}%`;

  const allDone = done === total;
  const btn = $('completeBtn');
  if (allDone) {
    btn.disabled = false;
    btn.textContent = '🎉 今日任务全部完成！';
    btn.style.background = 'var(--success)';
  } else {
    btn.disabled = true;
    btn.textContent = `📋 完成 ${done}/${total} 个任务...`;
    btn.style.background = 'var(--gray-400)';
  }
}

function completeDailyTasks() {
  const todayTasks = data.tasks[todayStr()] || {};
  if (TASKS.filter(t => todayTasks[t]).length === TASKS.length) {
    const log = data.dailyLogs[todayStr()] || {};
    log.completed = true;
    data.dailyLogs[todayStr()] = log;
    saveData();
    alert(`🎉 太棒了！今日任务全部完成！\n🔥 连续学习 ${getStreak()} 天`);
    updateTodayStats();
  }
}

// ==================== 进度页面 ====================
function renderProgress() {
  renderCalendar();
  renderWeeklyChart();
  renderGradeProgress();
  renderWrongWords();
}

function renderCalendar() {
  const cal = $('calendar');
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDay = firstDay.getDay();

  let html = '<div class="cal-day-header">日</div><div class="cal-day-header">一</div><div class="cal-day-header">二</div><div class="cal-day-header">三</div><div class="cal-day-header">四</div><div class="cal-day-header">五</div><div class="cal-day-header">六</div>';

  // 空白填充
  for (let i = 0; i < startDay; i++) {
    html += '<div class="cal-day"></div>';
  }

  // 日期
  for (let d = 1; d <= lastDay.getDate(); d++) {
    const date = new Date(year, month, d);
    const dStr = formatDate(date);
    const isToday = dStr === todayStr();
    const isFuture = date > new Date();
    const log = data.dailyLogs[dStr];
    let cls = 'cal-day';
    if (isToday) cls += ' today';
    if (isFuture) cls += ' future';
    else if (log && log.completed) cls += ' done';
    else cls += ' missed';

    const emoji = log && log.completed ? '✅' : (isFuture ? '' : '○');
    html += `<div class="${cls}">${emoji || d}</div>`;
  }

  cal.innerHTML = html;
}

function renderWeeklyChart() {
  const chart = $('weeklyChart');
  const now = new Date();
  let html = '';
  let maxVal = 0;
  const dayData = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dStr = formatDate(d);
    const log = data.dailyLogs[dStr];
    const count = log && log.wordsLearned ? log.wordsLearned.length : 0;
    const dayName = i === 0 ? '今天' : WEEKDAYS[d.getDay()];
    dayData.push({ day: dayName, count, done: log && log.completed });
    if (count > maxVal) maxVal = count;
  }

  for (const dd of dayData) {
    const h = maxVal > 0 ? Math.round(dd.count / maxVal * 80) + 2 : 4;
    html += `<div class="chart-bar-wrap">
      <div class="chart-bar ${dd.done ? 'done' : ''}" style="height:${h}px"></div>
      <div class="chart-label">${dd.day}</div>
      <div class="chart-label" style="font-size:9px;color:var(--gray-300)">${dd.count}</div>
    </div>`;
  }
  chart.innerHTML = html;
}

function renderGradeProgress() {
  const div = $('gradeProgressList');
  let html = '';
  for (const g of GRADE_OPTIONS) {
    const total = WORDS.filter(w => w.grade === g).length;
    const mastered = Object.keys(data.masteredWords).filter(en =>
      WORDS.some(w => w.en === en && w.grade === g)
    ).length;
    const pct = total > 0 ? Math.round(mastered / total * 100) : 0;
    html += `<div class="grade-progress-item">
      <span class="gp-label">${GRADE_LABELS[g]}</span>
      <div class="gp-bar-wrap"><div class="gp-bar-fill" style="width:${pct}%"></div></div>
      <span class="gp-num">${mastered}/${total}</span>
    </div>`;
  }
  div.innerHTML = html;
}

function renderWrongWords() {
  const div = $('wrongWordsList');
  const wrong = data.wrongWords.slice(0, 20);
  if (wrong.length === 0) {
    div.innerHTML = '<p class="empty-state">暂无错词，继续加油！🎉</p>';
    return;
  }
  let html = '';
  for (const en of wrong) {
    const word = WORDS.find(w => w.en === en);
    if (word) {
      html += `<div class="wrong-word-item"><span>${word.en}</span><span style="color:var(--gray-400)">${word.zh}</span></div>`;
    }
  }
  div.innerHTML = html;
}

// ==================== 家长面板 ====================
function showParentView() {
  const modal = $('parentModal');
  modal.classList.add('show');

  // 统计数字
  const totalDays = Object.keys(data.dailyLogs).length;
  const now = new Date();
  let weekDays = 0;
  for (let i = 0; i < 7; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const log = data.dailyLogs[formatDate(d)];
    if (log && log.completed) weekDays++;
  }
  const mastered = Object.keys(data.masteredWords).length;
  const totalQuiz = state.quizCorrect + state.quizWrong;
  const accuracy = totalQuiz > 0 ? Math.round(state.quizCorrect / totalQuiz * 100) + '%' : '0%';

  $('pTotalDays').textContent = totalDays;
  $('pWeekDays').textContent = weekDays;
  $('pMastered').textContent = mastered;
  $('pAccuracy').textContent = accuracy;

  // 周进度图（家长版 - 更大）
  let chartHtml = '<h3 style="font-size:14px;margin-bottom:8px;">📊 近7天学习量</h3><div style="display:flex;gap:6px;align-items:flex-end;height:100px;">';
  let maxCount = 0;
  const counts = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const log = data.dailyLogs[formatDate(d)];
    const c = log && log.wordsLearned ? log.wordsLearned.length : 0;
    counts.push(c);
    if (c > maxCount) maxCount = c;
  }
  for (let i = 0; i < 7; i++) {
    const h = maxCount > 0 ? Math.round(counts[i] / maxCount * 80) + 4 : 4;
    const dayName = i === 6 ? '今天' : `周${['日','一','二','三','四','五','六'][new Date(new Date().setDate(new Date().getDate() - (6-i))).getDay()]}`;
    chartHtml += `<div style="flex:1;display:flex;flex-direction:column;align-items:center;">
      <div style="width:100%;max-width:30px;background:var(--primary-light);border-radius:4px 4px 0 0;height:${h}px;transition:height 0.5s;"></div>
      <span style="font-size:10px;color:var(--gray-400);margin-top:4px;">${dayName}</span>
      <span style="font-size:9px;color:var(--gray-300)">${counts[i]}</span>
    </div>`;
  }
  chartHtml += '</div>';
  $('parentChart').innerHTML = chartHtml;

  // 学习日志
  const logList = $('parentLogList');
  const days = Object.keys(data.dailyLogs).sort().reverse().slice(0, 14);
  if (days.length === 0) {
    logList.innerHTML = '<p style="color:var(--gray-400);text-align:center;padding:16px;">暂无学习记录</p>';
  } else {
    let logHtml = '';
    for (const d of days) {
      const log = data.dailyLogs[d];
      const words = log.wordsLearned ? log.wordsLearned.length : 0;
      const done = log.completed ? '✅' : '⏳';
      logHtml += `<div class="parent-log-item">
        <span>${d} ${done}</span>
        <span>学习了 ${words} 个词</span>
      </div>`;
    }
    logList.innerHTML = logHtml;
  }
}

function closeParentView(e) {
  if (e && e.target !== $('parentModal')) return;
  $('parentModal').classList.remove('show');
}

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
  // 显示日期
  const now = new Date();
  $('todayDate').textContent = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日`;
  $('taskDate').textContent = todayStr();

  initGradeSelect();
  prepareTodayWords();
  startFlashcard();
  startSpell();
  startQuiz();
  startTranslate();
  initTasks();
  updateTodayStats();

  // 键盘支持
  $('spellInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkSpell();
  });
  $('transInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkTranslation();
  });
});
