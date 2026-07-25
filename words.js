/**
 * 人教版初中英语词汇表 (PEP Junior High School English Vocabulary)
 * 按年级和单元分组，涵盖 7-9 年级核心词汇
 * 
 * 格式: { en: "英文", zh: "中文", pos: "词性", grade: 年级, unit: 单元 }
 * grade: 7a=七年级上, 7b=七年级下, 8a=八年级上, 8b=八年级下, 9=九年级
 * pos: n.=名词 v.=动词 adj.=形容词 adv.=副词 pron.=代词 prep.=介词 conj.=连词 int.=感叹词 modal v.=情态动词
 */

const WORDS = [
  {
    "en": "good",
    "zh": "好的",
    "grade": "7a",
    "unit": 1,
    "pos": "adj."
  },
  {
    "en": "morning",
    "zh": "早晨；上午",
    "grade": "7a",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "hello",
    "zh": "你好",
    "grade": "7a",
    "unit": 1,
    "pos": "int."
  },
  {
    "en": "hi",
    "zh": "嗨；你好",
    "grade": "7a",
    "unit": 1,
    "pos": "int."
  },
  {
    "en": "afternoon",
    "zh": "下午",
    "grade": "7a",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "evening",
    "zh": "晚上；傍晚",
    "grade": "7a",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "fine",
    "zh": "好的；健康的",
    "grade": "7a",
    "unit": 1,
    "pos": "adj."
  },
  {
    "en": "OK",
    "zh": "好；不错",
    "grade": "7a",
    "unit": 1,
    "pos": "—"
  },
  {
    "en": "thanks",
    "zh": "感谢；谢谢",
    "grade": "7a",
    "unit": 1,
    "pos": "n./v."
  },
  {
    "en": "what",
    "zh": "什么",
    "grade": "7a",
    "unit": 2,
    "pos": "pron."
  },
  {
    "en": "is",
    "zh": "是",
    "grade": "7a",
    "unit": 2,
    "pos": "v."
  },
  {
    "en": "this",
    "zh": "这个",
    "grade": "7a",
    "unit": 2,
    "pos": "pron."
  },
  {
    "en": "that",
    "zh": "那个",
    "grade": "7a",
    "unit": 2,
    "pos": "pron."
  },
  {
    "en": "yes",
    "zh": "是的；可以",
    "grade": "7a",
    "unit": 2,
    "pos": "adv."
  },
  {
    "en": "no",
    "zh": "不；不是",
    "grade": "7a",
    "unit": 2,
    "pos": "adv./adj."
  },
  {
    "en": "not",
    "zh": "不；没有",
    "grade": "7a",
    "unit": 2,
    "pos": "adv."
  },
  {
    "en": "map",
    "zh": "地图",
    "grade": "7a",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "cup",
    "zh": "杯子",
    "grade": "7a",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "ruler",
    "zh": "尺子",
    "grade": "7a",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "pen",
    "zh": "钢笔",
    "grade": "7a",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "orange",
    "zh": "橙子",
    "grade": "7a",
    "unit": 2,
    "pos": "n./adj."
  },
  {
    "en": "jacket",
    "zh": "夹克衫",
    "grade": "7a",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "key",
    "zh": "钥匙",
    "grade": "7a",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "spell",
    "zh": "拼写",
    "grade": "7a",
    "unit": 2,
    "pos": "v."
  },
  {
    "en": "color",
    "zh": "颜色",
    "grade": "7a",
    "unit": 2,
    "pos": "n./v."
  },
  {
    "en": "red",
    "zh": "红色",
    "grade": "7a",
    "unit": 2,
    "pos": "adj./n."
  },
  {
    "en": "yellow",
    "zh": "黄色",
    "grade": "7a",
    "unit": 3,
    "pos": "adj./n."
  },
  {
    "en": "green",
    "zh": "绿色",
    "grade": "7a",
    "unit": 3,
    "pos": "adj./n."
  },
  {
    "en": "blue",
    "zh": "蓝色",
    "grade": "7a",
    "unit": 3,
    "pos": "adj./n."
  },
  {
    "en": "black",
    "zh": "黑色",
    "grade": "7a",
    "unit": 3,
    "pos": "adj./n."
  },
  {
    "en": "white",
    "zh": "白色",
    "grade": "7a",
    "unit": 3,
    "pos": "adj./n."
  },
  {
    "en": "purple",
    "zh": "紫色",
    "grade": "7a",
    "unit": 3,
    "pos": "adj./n."
  },
  {
    "en": "brown",
    "zh": "棕色",
    "grade": "7a",
    "unit": 3,
    "pos": "adj./n."
  },
  {
    "en": "name",
    "zh": "名字",
    "grade": "7a",
    "unit": 3,
    "pos": "n./v."
  },
  {
    "en": "my",
    "zh": "我的",
    "grade": "7a",
    "unit": 3,
    "pos": "pron."
  },
  {
    "en": "your",
    "zh": "你的；你们的",
    "grade": "7a",
    "unit": 3,
    "pos": "pron."
  },
  {
    "en": "meet",
    "zh": "遇见；相逢",
    "grade": "7a",
    "unit": 3,
    "pos": "v."
  },
  {
    "en": "nice",
    "zh": "令人愉快的",
    "grade": "7a",
    "unit": 3,
    "pos": "adj."
  },
  {
    "en": "too",
    "zh": "也；又；太",
    "grade": "7a",
    "unit": 3,
    "pos": "adv."
  },
  {
    "en": "friend",
    "zh": "朋友",
    "grade": "7a",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "telephone",
    "zh": "电话",
    "grade": "7a",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "number",
    "zh": "号码；数字",
    "grade": "7a",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "school",
    "zh": "学校",
    "grade": "7a",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "family",
    "zh": "家；家庭",
    "grade": "7a",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "father",
    "zh": "父亲；爸爸",
    "grade": "7a",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "mother",
    "zh": "母亲；妈妈",
    "grade": "7a",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "brother",
    "zh": "兄；弟",
    "grade": "7a",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "sister",
    "zh": "姐；妹",
    "grade": "7a",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "uncle",
    "zh": "叔叔；舅舅",
    "grade": "7a",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "aunt",
    "zh": "阿姨；姑姑",
    "grade": "7a",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "son",
    "zh": "儿子",
    "grade": "7a",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "daughter",
    "zh": "女儿",
    "grade": "7a",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "cousin",
    "zh": "表兄弟；表姐妹",
    "grade": "7a",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "grandfather",
    "zh": "祖父；外祖父",
    "grade": "7a",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "grandmother",
    "zh": "祖母；外祖母",
    "grade": "7a",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "who",
    "zh": "谁",
    "grade": "7a",
    "unit": 4,
    "pos": "pron."
  },
  {
    "en": "these",
    "zh": "这些",
    "grade": "7a",
    "unit": 4,
    "pos": "pron."
  },
  {
    "en": "those",
    "zh": "那些",
    "grade": "7a",
    "unit": 4,
    "pos": "pron."
  },
  {
    "en": "have",
    "zh": "有",
    "grade": "7a",
    "unit": 5,
    "pos": "v."
  },
  {
    "en": "has",
    "zh": "有（第三人称单数）",
    "grade": "7a",
    "unit": 5,
    "pos": "v."
  },
  {
    "en": "ball",
    "zh": "球",
    "grade": "7a",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "soccer",
    "zh": "英式足球",
    "grade": "7a",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "basketball",
    "zh": "篮球",
    "grade": "7a",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "volleyball",
    "zh": "排球",
    "grade": "7a",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "tennis",
    "zh": "网球",
    "grade": "7a",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "ping-pong",
    "zh": "乒乓球",
    "grade": "7a",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "baseball",
    "zh": "棒球",
    "grade": "7a",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "sport",
    "zh": "体育运动",
    "grade": "7a",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "let",
    "zh": "让",
    "grade": "7a",
    "unit": 5,
    "pos": "v."
  },
  {
    "en": "play",
    "zh": "玩；打（球）",
    "grade": "7a",
    "unit": 5,
    "pos": "v."
  },
  {
    "en": "sound",
    "zh": "听起来",
    "grade": "7a",
    "unit": 5,
    "pos": "v./n."
  },
  {
    "en": "great",
    "zh": "很好的；伟大的",
    "grade": "7a",
    "unit": 5,
    "pos": "adj."
  },
  {
    "en": "difficult",
    "zh": "困难的",
    "grade": "7a",
    "unit": 5,
    "pos": "adj."
  },
  {
    "en": "easy",
    "zh": "容易的",
    "grade": "7a",
    "unit": 5,
    "pos": "adj."
  },
  {
    "en": "boring",
    "zh": "无聊的；令人生厌的",
    "grade": "7a",
    "unit": 5,
    "pos": "adj."
  },
  {
    "en": "fun",
    "zh": "有趣的；乐趣",
    "grade": "7a",
    "unit": 5,
    "pos": "n./adj."
  },
  {
    "en": "interesting",
    "zh": "有趣的",
    "grade": "7a",
    "unit": 5,
    "pos": "adj."
  },
  {
    "en": "relaxing",
    "zh": "令人放松的",
    "grade": "7a",
    "unit": 5,
    "pos": "adj."
  },
  {
    "en": "like",
    "zh": "喜欢",
    "grade": "7a",
    "unit": 6,
    "pos": "v./prep."
  },
  {
    "en": "food",
    "zh": "食物",
    "grade": "7a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "banana",
    "zh": "香蕉",
    "grade": "7a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "apple",
    "zh": "苹果",
    "grade": "7a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "pear",
    "zh": "梨",
    "grade": "7a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "chicken",
    "zh": "鸡肉",
    "grade": "7a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "rice",
    "zh": "米饭",
    "grade": "7a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "bread",
    "zh": "面包",
    "grade": "7a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "milk",
    "zh": "牛奶",
    "grade": "7a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "egg",
    "zh": "鸡蛋",
    "grade": "7a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "water",
    "zh": "水",
    "grade": "7a",
    "unit": 6,
    "pos": "n./v."
  },
  {
    "en": "hamburger",
    "zh": "汉堡包",
    "grade": "7a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "tomato",
    "zh": "西红柿；番茄",
    "grade": "7a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "carrot",
    "zh": "胡萝卜",
    "grade": "7a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "fruit",
    "zh": "水果",
    "grade": "7a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "vegetable",
    "zh": "蔬菜",
    "grade": "7a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "how",
    "zh": "怎么；怎样",
    "grade": "7a",
    "unit": 7,
    "pos": "adv."
  },
  {
    "en": "much",
    "zh": "多少；很多",
    "grade": "7a",
    "unit": 7,
    "pos": "adj./adv."
  },
  {
    "en": "dollar",
    "zh": "美元",
    "grade": "7a",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "price",
    "zh": "价格",
    "grade": "7a",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "buy",
    "zh": "买",
    "grade": "7a",
    "unit": 7,
    "pos": "v."
  },
  {
    "en": "sell",
    "zh": "卖；出售",
    "grade": "7a",
    "unit": 7,
    "pos": "v."
  },
  {
    "en": "clothes",
    "zh": "衣服",
    "grade": "7a",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "shirt",
    "zh": "衬衫",
    "grade": "7a",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "skirt",
    "zh": "裙子",
    "grade": "7a",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "sweater",
    "zh": "毛衣",
    "grade": "7a",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "shoe",
    "zh": "鞋",
    "grade": "7a",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "short",
    "zh": "短裤",
    "grade": "7a",
    "unit": 7,
    "pos": "adj./n."
  },
  {
    "en": "big",
    "zh": "大的；广大的",
    "grade": "7a",
    "unit": 7,
    "pos": "adj."
  },
  {
    "en": "small",
    "zh": "小的",
    "grade": "7a",
    "unit": 7,
    "pos": "adj."
  },
  {
    "en": "long",
    "zh": "长的",
    "grade": "7a",
    "unit": 7,
    "pos": "adj."
  },
  {
    "en": "store",
    "zh": "商店",
    "grade": "7a",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "when",
    "zh": "什么时候",
    "grade": "7a",
    "unit": 8,
    "pos": "adv./conj."
  },
  {
    "en": "month",
    "zh": "月份",
    "grade": "7a",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "January",
    "zh": "一月",
    "grade": "7a",
    "unit": 8,
    "pos": "—"
  },
  {
    "en": "February",
    "zh": "二月",
    "grade": "7a",
    "unit": 8,
    "pos": "—"
  },
  {
    "en": "March",
    "zh": "三月",
    "grade": "7a",
    "unit": 8,
    "pos": "—"
  },
  {
    "en": "April",
    "zh": "四月",
    "grade": "7a",
    "unit": 8,
    "pos": "—"
  },
  {
    "en": "May",
    "zh": "五月",
    "grade": "7a",
    "unit": 8,
    "pos": "—"
  },
  {
    "en": "June",
    "zh": "六月",
    "grade": "7a",
    "unit": 8,
    "pos": "—"
  },
  {
    "en": "July",
    "zh": "七月",
    "grade": "7a",
    "unit": 8,
    "pos": "adv."
  },
  {
    "en": "August",
    "zh": "八月",
    "grade": "7a",
    "unit": 8,
    "pos": "—"
  },
  {
    "en": "September",
    "zh": "九月",
    "grade": "7a",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "October",
    "zh": "十月",
    "grade": "7a",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "November",
    "zh": "十一月",
    "grade": "7a",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "December",
    "zh": "十二月",
    "grade": "7a",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "birthday",
    "zh": "生日",
    "grade": "7a",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "happy",
    "zh": "快乐的；高兴的",
    "grade": "7a",
    "unit": 8,
    "pos": "adj."
  },
  {
    "en": "old",
    "zh": "老的；旧的",
    "grade": "7a",
    "unit": 8,
    "pos": "adj."
  },
  {
    "en": "subject",
    "zh": "学科；科目",
    "grade": "7a",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "Chinese",
    "zh": "语文；中国人",
    "grade": "7a",
    "unit": 9,
    "pos": "n./adj."
  },
  {
    "en": "English",
    "zh": "英语",
    "grade": "7a",
    "unit": 9,
    "pos": "n./adj."
  },
  {
    "en": "math",
    "zh": "数学",
    "grade": "7a",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "history",
    "zh": "历史",
    "grade": "7a",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "science",
    "zh": "科学",
    "grade": "7a",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "music",
    "zh": "音乐",
    "grade": "7a",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "art",
    "zh": "美术；艺术",
    "grade": "7a",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "Monday",
    "zh": "星期一",
    "grade": "7a",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "Tuesday",
    "zh": "星期二",
    "grade": "7a",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "Wednesday",
    "zh": "星期三",
    "grade": "7a",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "Thursday",
    "zh": "星期四",
    "grade": "7a",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "Friday",
    "zh": "星期五",
    "grade": "7a",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "Saturday",
    "zh": "星期六",
    "grade": "7a",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "Sunday",
    "zh": "星期日",
    "grade": "7a",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "free",
    "zh": "空闲的；免费的",
    "grade": "7a",
    "unit": 9,
    "pos": "adj."
  },
  {
    "en": "busy",
    "zh": "忙的",
    "grade": "7a",
    "unit": 9,
    "pos": "adj."
  },
  {
    "en": "guitar",
    "zh": "吉他",
    "grade": "7b",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "dance",
    "zh": "跳舞",
    "grade": "7b",
    "unit": 1,
    "pos": "v./n."
  },
  {
    "en": "swim",
    "zh": "游泳",
    "grade": "7b",
    "unit": 1,
    "pos": "v./n."
  },
  {
    "en": "sing",
    "zh": "唱歌",
    "grade": "7b",
    "unit": 1,
    "pos": "v."
  },
  {
    "en": "draw",
    "zh": "画",
    "grade": "7b",
    "unit": 1,
    "pos": "v."
  },
  {
    "en": "tell",
    "zh": "告诉",
    "grade": "7b",
    "unit": 1,
    "pos": "v."
  },
  {
    "en": "story",
    "zh": "故事",
    "grade": "7b",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "write",
    "zh": "写作；写",
    "grade": "7b",
    "unit": 1,
    "pos": "v."
  },
  {
    "en": "show",
    "zh": "展示；演出",
    "grade": "7b",
    "unit": 1,
    "pos": "v./n."
  },
  {
    "en": "talk",
    "zh": "说话；谈话",
    "grade": "7b",
    "unit": 1,
    "pos": "v./n."
  },
  {
    "en": "or",
    "zh": "或者",
    "grade": "7b",
    "unit": 1,
    "pos": "conj."
  },
  {
    "en": "people",
    "zh": "人；人们",
    "grade": "7b",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "time",
    "zh": "时间",
    "grade": "7b",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "morning",
    "zh": "早晨",
    "grade": "7b",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "usually",
    "zh": "通常",
    "grade": "7b",
    "unit": 2,
    "pos": "adv."
  },
  {
    "en": "get",
    "zh": "到达；得到",
    "grade": "7b",
    "unit": 2,
    "pos": "v."
  },
  {
    "en": "dressed",
    "zh": "穿好衣服",
    "grade": "7b",
    "unit": 2,
    "pos": "v./adj."
  },
  {
    "en": "brush",
    "zh": "刷",
    "grade": "7b",
    "unit": 2,
    "pos": "v./n."
  },
  {
    "en": "tooth",
    "zh": "牙齿",
    "grade": "7b",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "shower",
    "zh": "淋浴",
    "grade": "7b",
    "unit": 2,
    "pos": "n./v."
  },
  {
    "en": "homework",
    "zh": "家庭作业",
    "grade": "7b",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "take",
    "zh": "带走；花费",
    "grade": "7b",
    "unit": 3,
    "pos": "v."
  },
  {
    "en": "train",
    "zh": "火车",
    "grade": "7b",
    "unit": 3,
    "pos": "n./v."
  },
  {
    "en": "bus",
    "zh": "公共汽车",
    "grade": "7b",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "subway",
    "zh": "地铁",
    "grade": "7b",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "ride",
    "zh": "骑",
    "grade": "7b",
    "unit": 3,
    "pos": "v./n."
  },
  {
    "en": "bike",
    "zh": "自行车",
    "grade": "7b",
    "unit": 3,
    "pos": "n./v."
  },
  {
    "en": "drive",
    "zh": "开车",
    "grade": "7b",
    "unit": 3,
    "pos": "v./n."
  },
  {
    "en": "car",
    "zh": "小汽车",
    "grade": "7b",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "live",
    "zh": "居住；生活",
    "grade": "7b",
    "unit": 3,
    "pos": "v."
  },
  {
    "en": "stop",
    "zh": "停止；车站",
    "grade": "7b",
    "unit": 3,
    "pos": "v./n."
  },
  {
    "en": "far",
    "zh": "远",
    "grade": "7b",
    "unit": 3,
    "pos": "adj./adv."
  },
  {
    "en": "every",
    "zh": "每个",
    "grade": "7b",
    "unit": 3,
    "pos": "adj."
  },
  {
    "en": "must",
    "zh": "必须",
    "grade": "7b",
    "unit": 4,
    "pos": "modal v."
  },
  {
    "en": "rule",
    "zh": "规则",
    "grade": "7b",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "arrive",
    "zh": "到达",
    "grade": "7b",
    "unit": 4,
    "pos": "v."
  },
  {
    "en": "quiet",
    "zh": "安静的",
    "grade": "7b",
    "unit": 4,
    "pos": "adj."
  },
  {
    "en": "dirty",
    "zh": "脏的",
    "grade": "7b",
    "unit": 4,
    "pos": "adj."
  },
  {
    "en": "kitchen",
    "zh": "厨房",
    "grade": "7b",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "important",
    "zh": "重要的",
    "grade": "7b",
    "unit": 4,
    "pos": "adj."
  },
  {
    "en": "bring",
    "zh": "带来",
    "grade": "7b",
    "unit": 4,
    "pos": "v."
  },
  {
    "en": "feel",
    "zh": "感觉",
    "grade": "7b",
    "unit": 5,
    "pos": "v."
  },
  {
    "en": "panda",
    "zh": "熊猫",
    "grade": "7b",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "elephant",
    "zh": "大象",
    "grade": "7b",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "lion",
    "zh": "狮子",
    "grade": "7b",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "giraffe",
    "zh": "长颈鹿",
    "grade": "7b",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "animal",
    "zh": "动物",
    "grade": "7b",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "cute",
    "zh": "可爱的",
    "grade": "7b",
    "unit": 5,
    "pos": "adj."
  },
  {
    "en": "lazy",
    "zh": "懒惰的",
    "grade": "7b",
    "unit": 5,
    "pos": "adj."
  },
  {
    "en": "smart",
    "zh": "聪明的",
    "grade": "7b",
    "unit": 5,
    "pos": "adj."
  },
  {
    "en": "beautiful",
    "zh": "美丽的",
    "grade": "7b",
    "unit": 5,
    "pos": "adj."
  },
  {
    "en": "scary",
    "zh": "吓人的",
    "grade": "7b",
    "unit": 5,
    "pos": "adj."
  },
  {
    "en": "weather",
    "zh": "天气",
    "grade": "7b",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "rain",
    "zh": "下雨；雨",
    "grade": "7b",
    "unit": 7,
    "pos": "v./n."
  },
  {
    "en": "snow",
    "zh": "下雪；雪",
    "grade": "7b",
    "unit": 7,
    "pos": "v./n."
  },
  {
    "en": "windy",
    "zh": "有风的",
    "grade": "7b",
    "unit": 7,
    "pos": "adj."
  },
  {
    "en": "cloudy",
    "zh": "多云的",
    "grade": "7b",
    "unit": 7,
    "pos": "adj."
  },
  {
    "en": "sunny",
    "zh": "晴朗的",
    "grade": "7b",
    "unit": 7,
    "pos": "adj."
  },
  {
    "en": "cold",
    "zh": "冷的",
    "grade": "7b",
    "unit": 7,
    "pos": "adj./n."
  },
  {
    "en": "hot",
    "zh": "热的",
    "grade": "7b",
    "unit": 7,
    "pos": "adj."
  },
  {
    "en": "warm",
    "zh": "温暖的",
    "grade": "7b",
    "unit": 7,
    "pos": "adj./v."
  },
  {
    "en": "cool",
    "zh": "凉爽的；酷的",
    "grade": "7b",
    "unit": 7,
    "pos": "adj."
  },
  {
    "en": "would",
    "zh": "愿意",
    "grade": "7b",
    "unit": 10,
    "pos": "modal v."
  },
  {
    "en": "order",
    "zh": "点菜；订购",
    "grade": "7b",
    "unit": 10,
    "pos": "v./n."
  },
  {
    "en": "noodle",
    "zh": "面条",
    "grade": "7b",
    "unit": 10,
    "pos": "n."
  },
  {
    "en": "beef",
    "zh": "牛肉",
    "grade": "7b",
    "unit": 10,
    "pos": "n."
  },
  {
    "en": "mutton",
    "zh": "羊肉",
    "grade": "7b",
    "unit": 10,
    "pos": "n."
  },
  {
    "en": "potato",
    "zh": "土豆",
    "grade": "7b",
    "unit": 10,
    "pos": "n."
  },
  {
    "en": "size",
    "zh": "大小；尺码",
    "grade": "7b",
    "unit": 10,
    "pos": "n."
  },
  {
    "en": "large",
    "zh": "大的",
    "grade": "7b",
    "unit": 10,
    "pos": "adj."
  },
  {
    "en": "special",
    "zh": "特色菜；特别的",
    "grade": "7b",
    "unit": 10,
    "pos": "adj./n."
  },
  {
    "en": "tofu",
    "zh": "豆腐",
    "grade": "7b",
    "unit": 10,
    "pos": "n."
  },
  {
    "en": "left",
    "zh": "左边",
    "grade": "7b",
    "unit": 8,
    "pos": "adj./n./adv."
  },
  {
    "en": "right",
    "zh": "右边",
    "grade": "7b",
    "unit": 8,
    "pos": "adj./n./adv."
  },
  {
    "en": "straight",
    "zh": "直的",
    "grade": "7b",
    "unit": 8,
    "pos": "adj./adv."
  },
  {
    "en": "street",
    "zh": "街道",
    "grade": "7b",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "hotel",
    "zh": "旅馆",
    "grade": "7b",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "restaurant",
    "zh": "餐馆",
    "grade": "7b",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "bank",
    "zh": "银行",
    "grade": "7b",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "hospital",
    "zh": "医院",
    "grade": "7b",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "park",
    "zh": "公园",
    "grade": "7b",
    "unit": 8,
    "pos": "n./v."
  },
  {
    "en": "crossing",
    "zh": "十字路口",
    "grade": "7b",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "neighborhood",
    "zh": "街区；附近",
    "grade": "7b",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "cow",
    "zh": "奶牛",
    "grade": "7b",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "horse",
    "zh": "马",
    "grade": "7b",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "farm",
    "zh": "农场",
    "grade": "7b",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "visit",
    "zh": "参观；拜访",
    "grade": "7b",
    "unit": 9,
    "pos": "v./n."
  },
  {
    "en": "countryside",
    "zh": "乡村；农村",
    "grade": "7b",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "worry",
    "zh": "担心",
    "grade": "7b",
    "unit": 9,
    "pos": "v."
  },
  {
    "en": "pick",
    "zh": "摘；挑选",
    "grade": "7b",
    "unit": 9,
    "pos": "v."
  },
  {
    "en": "camp",
    "zh": "扎营；露营",
    "grade": "7b",
    "unit": 9,
    "pos": "v./n."
  },
  {
    "en": "lake",
    "zh": "湖",
    "grade": "7b",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "beach",
    "zh": "海滩",
    "grade": "7b",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "museum",
    "zh": "博物馆",
    "grade": "7b",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "past",
    "zh": "过去的；通过",
    "grade": "7b",
    "unit": 12,
    "pos": "adj./n./prep."
  },
  {
    "en": "camp",
    "zh": "露营",
    "grade": "7b",
    "unit": 12,
    "pos": "v./n."
  },
  {
    "en": "fire",
    "zh": "火",
    "grade": "7b",
    "unit": 12,
    "pos": "n."
  },
  {
    "en": "natural",
    "zh": "自然的",
    "grade": "7b",
    "unit": 12,
    "pos": "adj."
  },
  {
    "en": "anyone",
    "zh": "任何人",
    "grade": "8a",
    "unit": 1,
    "pos": "pron."
  },
  {
    "en": "wonderful",
    "zh": "精彩的；绝妙的",
    "grade": "8a",
    "unit": 1,
    "pos": "adj."
  },
  {
    "en": "bored",
    "zh": "感到无聊的",
    "grade": "8a",
    "unit": 1,
    "pos": "adj."
  },
  {
    "en": "decide",
    "zh": "决定",
    "grade": "8a",
    "unit": 1,
    "pos": "v."
  },
  {
    "en": "try",
    "zh": "尝试；努力",
    "grade": "8a",
    "unit": 1,
    "pos": "v./n."
  },
  {
    "en": "seem",
    "zh": "好像；似乎",
    "grade": "8a",
    "unit": 1,
    "pos": "v."
  },
  {
    "en": "enough",
    "zh": "足够的",
    "grade": "8a",
    "unit": 1,
    "pos": "adj./adv."
  },
  {
    "en": "difference",
    "zh": "差别；不同",
    "grade": "8a",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "exercise",
    "zh": "锻炼；练习",
    "grade": "8a",
    "unit": 2,
    "pos": "n./v."
  },
  {
    "en": "hardly",
    "zh": "几乎不",
    "grade": "8a",
    "unit": 2,
    "pos": "adv."
  },
  {
    "en": "ever",
    "zh": "曾经",
    "grade": "8a",
    "unit": 2,
    "pos": "adv."
  },
  {
    "en": "once",
    "zh": "一次；曾经",
    "grade": "8a",
    "unit": 2,
    "pos": "adv./conj."
  },
  {
    "en": "twice",
    "zh": "两次；两倍",
    "grade": "8a",
    "unit": 2,
    "pos": "adv."
  },
  {
    "en": "program",
    "zh": "节目；程序",
    "grade": "8a",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "swing",
    "zh": "摇摆；秋千",
    "grade": "8a",
    "unit": 2,
    "pos": "v./n."
  },
  {
    "en": "maybe",
    "zh": "也许",
    "grade": "8a",
    "unit": 2,
    "pos": "adv."
  },
  {
    "en": "less",
    "zh": "更少的",
    "grade": "8a",
    "unit": 2,
    "pos": "adj./adv."
  },
  {
    "en": "outgoing",
    "zh": "外向的",
    "grade": "8a",
    "unit": 3,
    "pos": "adj."
  },
  {
    "en": "better",
    "zh": "更好的",
    "grade": "8a",
    "unit": 3,
    "pos": "adj./adv."
  },
  {
    "en": "best",
    "zh": "最好的",
    "grade": "8a",
    "unit": 3,
    "pos": "adj./adv./n."
  },
  {
    "en": "loudly",
    "zh": "大声地",
    "grade": "8a",
    "unit": 3,
    "pos": "adv."
  },
  {
    "en": "hard-working",
    "zh": "努力工作的",
    "grade": "8a",
    "unit": 3,
    "pos": "adj."
  },
  {
    "en": "competition",
    "zh": "比赛；竞争",
    "grade": "8a",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "fantastic",
    "zh": "极好的",
    "grade": "8a",
    "unit": 3,
    "pos": "adj."
  },
  {
    "en": "clearly",
    "zh": "清楚地",
    "grade": "8a",
    "unit": 3,
    "pos": "adv."
  },
  {
    "en": "win",
    "zh": "赢得",
    "grade": "8a",
    "unit": 3,
    "pos": "v./n."
  },
  {
    "en": "theater",
    "zh": "剧场；电影院",
    "grade": "8a",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "comfortable",
    "zh": "舒适的",
    "grade": "8a",
    "unit": 4,
    "pos": "adj."
  },
  {
    "en": "screen",
    "zh": "屏幕",
    "grade": "8a",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "close",
    "zh": "接近的；关闭",
    "grade": "8a",
    "unit": 4,
    "pos": "v./adj."
  },
  {
    "en": "cheap",
    "zh": "便宜的",
    "grade": "8a",
    "unit": 4,
    "pos": "adj."
  },
  {
    "en": "popular",
    "zh": "流行的；受欢迎的",
    "grade": "8a",
    "unit": 4,
    "pos": "adj."
  },
  {
    "en": "fresh",
    "zh": "新鲜的",
    "grade": "8a",
    "unit": 4,
    "pos": "adj."
  },
  {
    "en": "service",
    "zh": "服务",
    "grade": "8a",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "sitcom",
    "zh": "情景喜剧",
    "grade": "8a",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "news",
    "zh": "新闻",
    "grade": "8a",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "soap",
    "zh": "肥皂剧",
    "grade": "8a",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "mind",
    "zh": "介意；思想",
    "grade": "8a",
    "unit": 5,
    "pos": "v./n."
  },
  {
    "en": "stand",
    "zh": "站立；忍受",
    "grade": "8a",
    "unit": 5,
    "pos": "v./n."
  },
  {
    "en": "educational",
    "zh": "有教育意义的",
    "grade": "8a",
    "unit": 5,
    "pos": "adj."
  },
  {
    "en": "plan",
    "zh": "计划",
    "grade": "8a",
    "unit": 6,
    "pos": "n./v."
  },
  {
    "en": "engineer",
    "zh": "工程师",
    "grade": "8a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "programmer",
    "zh": "程序员",
    "grade": "8a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "cook",
    "zh": "厨师；做饭",
    "grade": "8a",
    "unit": 6,
    "pos": "v./n."
  },
  {
    "en": "violinist",
    "zh": "小提琴手",
    "grade": "8a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "pilot",
    "zh": "飞行员",
    "grade": "8a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "scientist",
    "zh": "科学家",
    "grade": "8a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "college",
    "zh": "大学",
    "grade": "8a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "university",
    "zh": "大学",
    "grade": "8a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "meaning",
    "zh": "意义；意思",
    "grade": "8a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "promise",
    "zh": "承诺；保证",
    "grade": "8a",
    "unit": 6,
    "pos": "v./n."
  },
  {
    "en": "hobby",
    "zh": "业余爱好",
    "grade": "8a",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "shake",
    "zh": "摇动；抖动",
    "grade": "8a",
    "unit": 8,
    "pos": "v./n."
  },
  {
    "en": "pour",
    "zh": "倒；倾倒",
    "grade": "8a",
    "unit": 8,
    "pos": "v."
  },
  {
    "en": "peel",
    "zh": "削皮",
    "grade": "8a",
    "unit": 8,
    "pos": "v."
  },
  {
    "en": "mix",
    "zh": "混合",
    "grade": "8a",
    "unit": 8,
    "pos": "v./n."
  },
  {
    "en": "add",
    "zh": "增加",
    "grade": "8a",
    "unit": 8,
    "pos": "v."
  },
  {
    "en": "salt",
    "zh": "盐",
    "grade": "8a",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "sugar",
    "zh": "糖",
    "grade": "8a",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "cheese",
    "zh": "奶酪",
    "grade": "8a",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "corn",
    "zh": "玉米",
    "grade": "8a",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "popcorn",
    "zh": "爆米花",
    "grade": "8a",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "yogurt",
    "zh": "酸奶",
    "grade": "8a",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "traditional",
    "zh": "传统的",
    "grade": "8a",
    "unit": 8,
    "pos": "adj."
  },
  {
    "en": "finally",
    "zh": "最后",
    "grade": "8a",
    "unit": 8,
    "pos": "adv."
  },
  {
    "en": "meeting",
    "zh": "会议",
    "grade": "8a",
    "unit": 10,
    "pos": "n."
  },
  {
    "en": "video",
    "zh": "录像；视频",
    "grade": "8a",
    "unit": 10,
    "pos": "n."
  },
  {
    "en": "organize",
    "zh": "组织",
    "grade": "8a",
    "unit": 10,
    "pos": "v."
  },
  {
    "en": "advice",
    "zh": "建议",
    "grade": "8a",
    "unit": 10,
    "pos": "n."
  },
  {
    "en": "travel",
    "zh": "旅行",
    "grade": "8a",
    "unit": 10,
    "pos": "v./n."
  },
  {
    "en": "experience",
    "zh": "经验；经历",
    "grade": "8a",
    "unit": 10,
    "pos": "n./v."
  },
  {
    "en": "remember",
    "zh": "记住",
    "grade": "8a",
    "unit": 10,
    "pos": "v."
  },
  {
    "en": "understand",
    "zh": "理解",
    "grade": "8a",
    "unit": 10,
    "pos": "v."
  },
  {
    "en": "certainly",
    "zh": "当然",
    "grade": "8a",
    "unit": 10,
    "pos": "adv."
  },
  {
    "en": "chocolate",
    "zh": "巧克力",
    "grade": "8a",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "pie",
    "zh": "馅饼",
    "grade": "8a",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "famous",
    "zh": "著名的",
    "grade": "8a",
    "unit": 7,
    "pos": "adj."
  },
  {
    "en": "robot",
    "zh": "机器人",
    "grade": "8a",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "plate",
    "zh": "盘子",
    "grade": "8a",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "matter",
    "zh": "事情；问题",
    "grade": "8b",
    "unit": 1,
    "pos": "n./v."
  },
  {
    "en": "stomachache",
    "zh": "胃疼",
    "grade": "8b",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "fever",
    "zh": "发烧",
    "grade": "8b",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "rest",
    "zh": "休息",
    "grade": "8b",
    "unit": 1,
    "pos": "n./v."
  },
  {
    "en": "cough",
    "zh": "咳嗽",
    "grade": "8b",
    "unit": 1,
    "pos": "v./n."
  },
  {
    "en": "toothache",
    "zh": "牙疼",
    "grade": "8b",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "headache",
    "zh": "头疼",
    "grade": "8b",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "medicine",
    "zh": "药",
    "grade": "8b",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "temperature",
    "zh": "温度",
    "grade": "8b",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "hurt",
    "zh": "受伤；疼痛",
    "grade": "8b",
    "unit": 1,
    "pos": "v./adj."
  },
  {
    "en": "volunteer",
    "zh": "志愿者",
    "grade": "8b",
    "unit": 2,
    "pos": "n./v."
  },
  {
    "en": "satisfy",
    "zh": "满足；使满意",
    "grade": "8b",
    "unit": 2,
    "pos": "v."
  },
  {
    "en": "several",
    "zh": "几个",
    "grade": "8b",
    "unit": 2,
    "pos": "adj./pron."
  },
  {
    "en": "strong",
    "zh": "强壮的",
    "grade": "8b",
    "unit": 2,
    "pos": "adj."
  },
  {
    "en": "sick",
    "zh": "生病的",
    "grade": "8b",
    "unit": 2,
    "pos": "adj."
  },
  {
    "en": "raise",
    "zh": "提高；筹集",
    "grade": "8b",
    "unit": 2,
    "pos": "v."
  },
  {
    "en": "repair",
    "zh": "修理",
    "grade": "8b",
    "unit": 2,
    "pos": "v./n."
  },
  {
    "en": "fix",
    "zh": "修理；安装",
    "grade": "8b",
    "unit": 2,
    "pos": "v."
  },
  {
    "en": "broken",
    "zh": "破损的",
    "grade": "8b",
    "unit": 2,
    "pos": "adj."
  },
  {
    "en": "wheel",
    "zh": "轮子",
    "grade": "8b",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "chore",
    "zh": "杂务；家务活",
    "grade": "8b",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "sweep",
    "zh": "扫除",
    "grade": "8b",
    "unit": 3,
    "pos": "v."
  },
  {
    "en": "floor",
    "zh": "地板",
    "grade": "8b",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "trash",
    "zh": "垃圾",
    "grade": "8b",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "fold",
    "zh": "折叠",
    "grade": "8b",
    "unit": 3,
    "pos": "v."
  },
  {
    "en": "dish",
    "zh": "盘子；碟子",
    "grade": "8b",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "neighbor",
    "zh": "邻居",
    "grade": "8b",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "drop",
    "zh": "落下；掉下",
    "grade": "8b",
    "unit": 3,
    "pos": "v./n."
  },
  {
    "en": "fair",
    "zh": "公平的",
    "grade": "8b",
    "unit": 3,
    "pos": "adj."
  },
  {
    "en": "unfair",
    "zh": "不公平的",
    "grade": "8b",
    "unit": 3,
    "pos": "adj."
  },
  {
    "en": "allow",
    "zh": "允许",
    "grade": "8b",
    "unit": 4,
    "pos": "v."
  },
  {
    "en": "wrong",
    "zh": "错误的",
    "grade": "8b",
    "unit": 4,
    "pos": "adj."
  },
  {
    "en": "guess",
    "zh": "猜测",
    "grade": "8b",
    "unit": 4,
    "pos": "v./n."
  },
  {
    "en": "offer",
    "zh": "主动提出",
    "grade": "8b",
    "unit": 4,
    "pos": "v./n."
  },
  {
    "en": "communicate",
    "zh": "交流",
    "grade": "8b",
    "unit": 4,
    "pos": "v."
  },
  {
    "en": "explain",
    "zh": "解释",
    "grade": "8b",
    "unit": 4,
    "pos": "v."
  },
  {
    "en": "relation",
    "zh": "关系",
    "grade": "8b",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "argue",
    "zh": "争论",
    "grade": "8b",
    "unit": 4,
    "pos": "v."
  },
  {
    "en": "nervous",
    "zh": "紧张不安的",
    "grade": "8b",
    "unit": 4,
    "pos": "adj."
  },
  {
    "en": "proper",
    "zh": "合适的",
    "grade": "8b",
    "unit": 4,
    "pos": "adj."
  },
  {
    "en": "storm",
    "zh": "暴风雨",
    "grade": "8b",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "wind",
    "zh": "风",
    "grade": "8b",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "light",
    "zh": "光线；灯",
    "grade": "8b",
    "unit": 5,
    "pos": "n./adj./v."
  },
  {
    "en": "report",
    "zh": "报道；报告",
    "grade": "8b",
    "unit": 5,
    "pos": "v./n."
  },
  {
    "en": "area",
    "zh": "地区；区域",
    "grade": "8b",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "wood",
    "zh": "木头",
    "grade": "8b",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "match",
    "zh": "火柴；比赛",
    "grade": "8b",
    "unit": 5,
    "pos": "n./v."
  },
  {
    "en": "beat",
    "zh": "打败；敲打",
    "grade": "8b",
    "unit": 5,
    "pos": "v."
  },
  {
    "en": "against",
    "zh": "对抗；反对",
    "grade": "8b",
    "unit": 5,
    "pos": "prep."
  },
  {
    "en": "shocked",
    "zh": "震惊的",
    "grade": "8b",
    "unit": 5,
    "pos": "adj."
  },
  {
    "en": "fairy",
    "zh": "仙女",
    "grade": "8b",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "tale",
    "zh": "故事",
    "grade": "8b",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "shine",
    "zh": "发光；照耀",
    "grade": "8b",
    "unit": 6,
    "pos": "v."
  },
  {
    "en": "brave",
    "zh": "勇敢的",
    "grade": "8b",
    "unit": 6,
    "pos": "adj."
  },
  {
    "en": "stone",
    "zh": "石头",
    "grade": "8b",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "marry",
    "zh": "结婚",
    "grade": "8b",
    "unit": 6,
    "pos": "v."
  },
  {
    "en": "entire",
    "zh": "全部的",
    "grade": "8b",
    "unit": 6,
    "pos": "adj."
  },
  {
    "en": "excite",
    "zh": "使兴奋",
    "grade": "8b",
    "unit": 6,
    "pos": "v."
  },
  {
    "en": "wife",
    "zh": "妻子",
    "grade": "8b",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "husband",
    "zh": "丈夫",
    "grade": "8b",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "land",
    "zh": "陆地；着陆",
    "grade": "8b",
    "unit": 7,
    "pos": "n./v."
  },
  {
    "en": "desert",
    "zh": "沙漠",
    "grade": "8b",
    "unit": 7,
    "pos": "n./v."
  },
  {
    "en": "population",
    "zh": "人口",
    "grade": "8b",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "ocean",
    "zh": "海洋",
    "grade": "8b",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "protect",
    "zh": "保护",
    "grade": "8b",
    "unit": 7,
    "pos": "v."
  },
  {
    "en": "environment",
    "zh": "环境",
    "grade": "8b",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "achieve",
    "zh": "实现；达到",
    "grade": "8b",
    "unit": 7,
    "pos": "v."
  },
  {
    "en": "include",
    "zh": "包括",
    "grade": "8b",
    "unit": 7,
    "pos": "v."
  },
  {
    "en": "condition",
    "zh": "条件；状况",
    "grade": "8b",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "deep",
    "zh": "深的",
    "grade": "8b",
    "unit": 7,
    "pos": "adj."
  },
  {
    "en": "treasure",
    "zh": "财宝；珍宝",
    "grade": "8b",
    "unit": 8,
    "pos": "n./v."
  },
  {
    "en": "island",
    "zh": "岛",
    "grade": "8b",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "ship",
    "zh": "船",
    "grade": "8b",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "tool",
    "zh": "工具",
    "grade": "8b",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "gun",
    "zh": "枪",
    "grade": "8b",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "mark",
    "zh": "记号；分数",
    "grade": "8b",
    "unit": 8,
    "pos": "n./v."
  },
  {
    "en": "land",
    "zh": "陆地",
    "grade": "8b",
    "unit": 8,
    "pos": "n./v."
  },
  {
    "en": "fiction",
    "zh": "小说",
    "grade": "8b",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "science",
    "zh": "科学",
    "grade": "8b",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "technology",
    "zh": "技术",
    "grade": "8b",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "invent",
    "zh": "发明",
    "grade": "8b",
    "unit": 9,
    "pos": "v."
  },
  {
    "en": "amusement",
    "zh": "娱乐",
    "grade": "8b",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "ride",
    "zh": "骑；乘坐",
    "grade": "8b",
    "unit": 9,
    "pos": "v./n."
  },
  {
    "en": "neither",
    "zh": "两者都不",
    "grade": "8b",
    "unit": 9,
    "pos": "pron./adv."
  },
  {
    "en": "theme",
    "zh": "主题",
    "grade": "8b",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "whatever",
    "zh": "无论什么",
    "grade": "8b",
    "unit": 9,
    "pos": "pron."
  },
  {
    "en": "quickly",
    "zh": "迅速地",
    "grade": "8b",
    "unit": 10,
    "pos": "adv."
  },
  {
    "en": "especially",
    "zh": "尤其",
    "grade": "8b",
    "unit": 10,
    "pos": "adv."
  },
  {
    "en": "honest",
    "zh": "诚实的",
    "grade": "8b",
    "unit": 10,
    "pos": "adj."
  },
  {
    "en": "shame",
    "zh": "羞耻",
    "grade": "8b",
    "unit": 10,
    "pos": "n."
  },
  {
    "en": "search",
    "zh": "搜索；搜查",
    "grade": "8b",
    "unit": 10,
    "pos": "v./n."
  },
  {
    "en": "forever",
    "zh": "永远",
    "grade": "8b",
    "unit": 10,
    "pos": "adv."
  },
  {
    "en": "regard",
    "zh": "把……看作",
    "grade": "8b",
    "unit": 10,
    "pos": "v./n."
  },
  {
    "en": "especially",
    "zh": "尤其；特别",
    "grade": "8b",
    "unit": 10,
    "pos": "adv."
  },
  {
    "en": "textbook",
    "zh": "教科书",
    "grade": "9",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "conversation",
    "zh": "对话",
    "grade": "9",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "pronounce",
    "zh": "发音",
    "grade": "9",
    "unit": 1,
    "pos": "v."
  },
  {
    "en": "increase",
    "zh": "增加",
    "grade": "9",
    "unit": 1,
    "pos": "v./n."
  },
  {
    "en": "ability",
    "zh": "能力",
    "grade": "9",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "active",
    "zh": "积极的；活跃的",
    "grade": "9",
    "unit": 1,
    "pos": "adj."
  },
  {
    "en": "attention",
    "zh": "注意",
    "grade": "9",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "connect",
    "zh": "连接",
    "grade": "9",
    "unit": 1,
    "pos": "v."
  },
  {
    "en": "review",
    "zh": "复习；回顾",
    "grade": "9",
    "unit": 1,
    "pos": "v./n."
  },
  {
    "en": "knowledge",
    "zh": "知识",
    "grade": "9",
    "unit": 1,
    "pos": "n."
  },
  {
    "en": "wisely",
    "zh": "明智地",
    "grade": "9",
    "unit": 1,
    "pos": "adv."
  },
  {
    "en": "lantern",
    "zh": "灯笼",
    "grade": "9",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "relative",
    "zh": "亲戚；相对的",
    "grade": "9",
    "unit": 2,
    "pos": "n./adj."
  },
  {
    "en": "garden",
    "zh": "花园",
    "grade": "9",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "tradition",
    "zh": "传统",
    "grade": "9",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "celebrate",
    "zh": "庆祝",
    "grade": "9",
    "unit": 2,
    "pos": "v."
  },
  {
    "en": "dumpling",
    "zh": "饺子",
    "grade": "9",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "Christmas",
    "zh": "圣诞节",
    "grade": "9",
    "unit": 2,
    "pos": "n."
  },
  {
    "en": "treat",
    "zh": "招待；对待",
    "grade": "9",
    "unit": 2,
    "pos": "v./n."
  },
  {
    "en": "lie",
    "zh": "躺；位于；说谎",
    "grade": "9",
    "unit": 2,
    "pos": "v./n."
  },
  {
    "en": "novel",
    "zh": "小说",
    "grade": "9",
    "unit": 2,
    "pos": "n./adj."
  },
  {
    "en": "stranger",
    "zh": "陌生人",
    "grade": "9",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "mail",
    "zh": "邮件",
    "grade": "9",
    "unit": 3,
    "pos": "n./v."
  },
  {
    "en": "suggest",
    "zh": "建议",
    "grade": "9",
    "unit": 3,
    "pos": "v."
  },
  {
    "en": "pass",
    "zh": "通过；传递",
    "grade": "9",
    "unit": 3,
    "pos": "v./n."
  },
  {
    "en": "staff",
    "zh": "员工",
    "grade": "9",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "course",
    "zh": "课程",
    "grade": "9",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "request",
    "zh": "请求",
    "grade": "9",
    "unit": 3,
    "pos": "n./v."
  },
  {
    "en": "polite",
    "zh": "礼貌的",
    "grade": "9",
    "unit": 3,
    "pos": "adj."
  },
  {
    "en": "direction",
    "zh": "方向",
    "grade": "9",
    "unit": 3,
    "pos": "n."
  },
  {
    "en": "correct",
    "zh": "正确的",
    "grade": "9",
    "unit": 3,
    "pos": "adj./v."
  },
  {
    "en": "humor",
    "zh": "幽默",
    "grade": "9",
    "unit": 4,
    "pos": "n."
  },
  {
    "en": "silent",
    "zh": "沉默的",
    "grade": "9",
    "unit": 4,
    "pos": "adj."
  },
  {
    "en": "helpful",
    "zh": "有帮助的",
    "grade": "9",
    "unit": 4,
    "pos": "adj."
  },
  {
    "en": "require",
    "zh": "需要；要求",
    "grade": "9",
    "unit": 4,
    "pos": "v."
  },
  {
    "en": "European",
    "zh": "欧洲的",
    "grade": "9",
    "unit": 4,
    "pos": "adj./n."
  },
  {
    "en": "African",
    "zh": "非洲的",
    "grade": "9",
    "unit": 4,
    "pos": "adj./n."
  },
  {
    "en": "private",
    "zh": "私人的",
    "grade": "9",
    "unit": 4,
    "pos": "adj."
  },
  {
    "en": "guard",
    "zh": "守卫；警卫",
    "grade": "9",
    "unit": 4,
    "pos": "n./v."
  },
  {
    "en": "introduce",
    "zh": "介绍",
    "grade": "9",
    "unit": 4,
    "pos": "v."
  },
  {
    "en": "produce",
    "zh": "生产；出产",
    "grade": "9",
    "unit": 5,
    "pos": "v."
  },
  {
    "en": "widely",
    "zh": "广泛地",
    "grade": "9",
    "unit": 5,
    "pos": "adv."
  },
  {
    "en": "process",
    "zh": "过程；加工",
    "grade": "9",
    "unit": 5,
    "pos": "n./v."
  },
  {
    "en": "France",
    "zh": "法国",
    "grade": "9",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "chopstick",
    "zh": "筷子",
    "grade": "9",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "coin",
    "zh": "硬币",
    "grade": "9",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "fork",
    "zh": "叉子",
    "grade": "9",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "blouse",
    "zh": "女衬衫",
    "grade": "9",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "silver",
    "zh": "银",
    "grade": "9",
    "unit": 5,
    "pos": "n./adj."
  },
  {
    "en": "glass",
    "zh": "玻璃",
    "grade": "9",
    "unit": 5,
    "pos": "n."
  },
  {
    "en": "electricity",
    "zh": "电",
    "grade": "9",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "inventor",
    "zh": "发明家",
    "grade": "9",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "translate",
    "zh": "翻译",
    "grade": "9",
    "unit": 6,
    "pos": "v."
  },
  {
    "en": "pocket",
    "zh": "口袋",
    "grade": "9",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "daily",
    "zh": "日常的；每日的",
    "grade": "9",
    "unit": 6,
    "pos": "adj./adv."
  },
  {
    "en": "website",
    "zh": "网站",
    "grade": "9",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "pioneer",
    "zh": "先锋；先驱",
    "grade": "9",
    "unit": 6,
    "pos": "n."
  },
  {
    "en": "mention",
    "zh": "提到",
    "grade": "9",
    "unit": 6,
    "pos": "v."
  },
  {
    "en": "gradually",
    "zh": "逐渐地",
    "grade": "9",
    "unit": 6,
    "pos": "adv."
  },
  {
    "en": "teammate",
    "zh": "队友",
    "grade": "9",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "support",
    "zh": "支持",
    "grade": "9",
    "unit": 7,
    "pos": "v./n."
  },
  {
    "en": "choice",
    "zh": "选择",
    "grade": "9",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "achieve",
    "zh": "完成；实现",
    "grade": "9",
    "unit": 7,
    "pos": "v."
  },
  {
    "en": "manage",
    "zh": "管理；设法完成",
    "grade": "9",
    "unit": 7,
    "pos": "v."
  },
  {
    "en": "society",
    "zh": "社会",
    "grade": "9",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "education",
    "zh": "教育",
    "grade": "9",
    "unit": 7,
    "pos": "n."
  },
  {
    "en": "complete",
    "zh": "完成；完整的",
    "grade": "9",
    "unit": 7,
    "pos": "v./adj."
  },
  {
    "en": "smell",
    "zh": "气味；闻",
    "grade": "9",
    "unit": 8,
    "pos": "v./n."
  },
  {
    "en": "belong",
    "zh": "属于",
    "grade": "9",
    "unit": 8,
    "pos": "v."
  },
  {
    "en": "possibly",
    "zh": "可能地",
    "grade": "9",
    "unit": 8,
    "pos": "adv."
  },
  {
    "en": "noise",
    "zh": "噪音",
    "grade": "9",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "wolf",
    "zh": "狼",
    "grade": "9",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "laboratory",
    "zh": "实验室",
    "grade": "9",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "enemy",
    "zh": "敌人",
    "grade": "9",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "valuable",
    "zh": "有价值的",
    "grade": "9",
    "unit": 8,
    "pos": "adj."
  },
  {
    "en": "purpose",
    "zh": "目的",
    "grade": "9",
    "unit": 8,
    "pos": "n."
  },
  {
    "en": "praise",
    "zh": "赞扬",
    "grade": "9",
    "unit": 9,
    "pos": "v./n."
  },
  {
    "en": "sad",
    "zh": "伤心的",
    "grade": "9",
    "unit": 9,
    "pos": "adj."
  },
  {
    "en": "reflection",
    "zh": "反映；反射",
    "grade": "9",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "perform",
    "zh": "表演",
    "grade": "9",
    "unit": 9,
    "pos": "v."
  },
  {
    "en": "master",
    "zh": "大师；掌握",
    "grade": "9",
    "unit": 9,
    "pos": "n./v."
  },
  {
    "en": "pity",
    "zh": "遗憾；怜悯",
    "grade": "9",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "total",
    "zh": "总计的；完全的",
    "grade": "9",
    "unit": 9,
    "pos": "adj./n."
  },
  {
    "en": "wound",
    "zh": "伤口",
    "grade": "9",
    "unit": 9,
    "pos": "n./v."
  },
  {
    "en": "smooth",
    "zh": "平滑的",
    "grade": "9",
    "unit": 9,
    "pos": "adj."
  },
  {
    "en": "instrument",
    "zh": "乐器；工具",
    "grade": "9",
    "unit": 9,
    "pos": "n."
  },
  {
    "en": "absent",
    "zh": "缺席的",
    "grade": "9",
    "unit": 10,
    "pos": "adj."
  },
  {
    "en": "effort",
    "zh": "努力",
    "grade": "9",
    "unit": 10,
    "pos": "n."
  },
  {
    "en": "custom",
    "zh": "风俗；习惯",
    "grade": "9",
    "unit": 10,
    "pos": "n."
  },
  {
    "en": "value",
    "zh": "价值；重视",
    "grade": "9",
    "unit": 10,
    "pos": "n./v."
  },
  {
    "en": "exchange",
    "zh": "交换",
    "grade": "9",
    "unit": 10,
    "pos": "v./n."
  },
  {
    "en": "gradually",
    "zh": "逐渐地",
    "grade": "9",
    "unit": 10,
    "pos": "adv."
  },
  {
    "en": "mad",
    "zh": "疯狂的",
    "grade": "9",
    "unit": 10,
    "pos": "adj."
  },
  {
    "en": "prefer",
    "zh": "更喜欢",
    "grade": "9",
    "unit": 11,
    "pos": "v."
  },
  {
    "en": "examine",
    "zh": "检查",
    "grade": "9",
    "unit": 11,
    "pos": "v."
  },
  {
    "en": "wealth",
    "zh": "财富",
    "grade": "9",
    "unit": 11,
    "pos": "n."
  },
  {
    "en": "power",
    "zh": "权力；力量",
    "grade": "9",
    "unit": 11,
    "pos": "n."
  },
  {
    "en": "comfort",
    "zh": "安慰；舒适",
    "grade": "9",
    "unit": 11,
    "pos": "n./v."
  },
  {
    "en": "speech",
    "zh": "演讲",
    "grade": "9",
    "unit": 12,
    "pos": "n."
  },
  {
    "en": "discover",
    "zh": "发现",
    "grade": "9",
    "unit": 12,
    "pos": "v."
  },
  {
    "en": "cancel",
    "zh": "取消",
    "grade": "9",
    "unit": 12,
    "pos": "v."
  },
  {
    "en": "unexpected",
    "zh": "出乎意料的",
    "grade": "9",
    "unit": 12,
    "pos": "adj."
  },
  {
    "en": "embarrass",
    "zh": "使尴尬",
    "grade": "9",
    "unit": 12,
    "pos": "v."
  },
  {
    "en": "rush",
    "zh": "冲；匆忙",
    "grade": "9",
    "unit": 12,
    "pos": "v./n."
  },
  {
    "en": "market",
    "zh": "市场",
    "grade": "9",
    "unit": 12,
    "pos": "n."
  },
  {
    "en": "appear",
    "zh": "出现",
    "grade": "9",
    "unit": 12,
    "pos": "v."
  },
  {
    "en": "remain",
    "zh": "保持；剩下",
    "grade": "9",
    "unit": 12,
    "pos": "v."
  },
  {
    "en": "succeed",
    "zh": "成功",
    "grade": "9",
    "unit": 14,
    "pos": "v."
  },
  {
    "en": "passage",
    "zh": "章节；段落",
    "grade": "9",
    "unit": 14,
    "pos": "n."
  },
  {
    "en": "degree",
    "zh": "学位；程度",
    "grade": "9",
    "unit": 14,
    "pos": "n."
  },
  {
    "en": "manager",
    "zh": "经理",
    "grade": "9",
    "unit": 14,
    "pos": "n."
  },
  {
    "en": "gentleman",
    "zh": "绅士",
    "grade": "9",
    "unit": 14,
    "pos": "n."
  },
  {
    "en": "congratulate",
    "zh": "祝贺",
    "grade": "9",
    "unit": 14,
    "pos": "v."
  },
  {
    "en": "responsible",
    "zh": "有责任心的",
    "grade": "9",
    "unit": 14,
    "pos": "adj."
  },
  {
    "en": "separate",
    "zh": "分开；分离",
    "grade": "9",
    "unit": 14,
    "pos": "v./adj."
  },
  {
    "en": "wing",
    "zh": "翅膀；翅膀",
    "grade": "9",
    "unit": 14,
    "pos": "n."
  },
  {
    "en": "province",
    "zh": "省份",
    "grade": "9",
    "unit": 13,
    "pos": "n."
  },
  {
    "en": "pollution",
    "zh": "污染",
    "grade": "9",
    "unit": 13,
    "pos": "n."
  },
  {
    "en": "afford",
    "zh": "负担得起",
    "grade": "9",
    "unit": 13,
    "pos": "v."
  },
  {
    "en": "recycle",
    "zh": "回收利用",
    "grade": "9",
    "unit": 13,
    "pos": "v."
  },
  {
    "en": "plastic",
    "zh": "塑料的",
    "grade": "9",
    "unit": 13,
    "pos": "adj./n."
  },
  {
    "en": "industry",
    "zh": "工业",
    "grade": "9",
    "unit": 13,
    "pos": "n."
  },
  {
    "en": "law",
    "zh": "法律",
    "grade": "9",
    "unit": 13,
    "pos": "n."
  },
  {
    "en": "inspire",
    "zh": "激励；鼓舞",
    "grade": "9",
    "unit": 14,
    "pos": "v."
  },
  {
    "en": "overcome",
    "zh": "克服",
    "grade": "9",
    "unit": 14,
    "pos": "v."
  },
  {
    "en": "caring",
    "zh": "体贴人的",
    "grade": "9",
    "unit": 14,
    "pos": "adj."
  },
  {
    "en": "thankful",
    "zh": "感激的",
    "grade": "9",
    "unit": 14,
    "pos": "adj."
  }
];

// 工具函数...
function getWordsByGrade(grade) {
  return WORDS.filter(w => w.grade === grade);
}

function getWordsByUnit(grade, unit) {
  return WORDS.filter(w => w.grade === grade && w.unit === unit);
}

function getGrades() {
  return [
    { id: "7a", label: "七年级上", unitCount: 9 },
    { id: "7b", label: "七年级下", unitCount: 12 },
    { id: "8a", label: "八年级上", unitCount: 10 },
    { id: "8b", label: "八年级下", unitCount: 10 },
    { id: "9", label: "九年级", unitCount: 14 },
  ];
}

function getRandomWords(words, count) {
  const shuffled = [...words].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, words.length));
}
