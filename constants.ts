import { QuizQuestion, Category } from './types';

export const QUIZ_DATA: QuizQuestion[] = [
  {
    sentence: ["わたし", " なまえは キムです。"],
    options: ["は", "が", "の", "を"],
    answer: "の",
    translation: "제 이름은 김입니다.",
    explanations: {
        "は": "'는/은'이라는 뜻으로 문장의 큰 주제를 나타냅니다. 여기서는 '나의 이름'이라는 소유 관계가 필요하므로 어색합니다.",
        "が": "'이/가'라는 뜻으로 주어를 나타냅니다. '이름이 김입니다'는 가능하지만, '나의 이름'을 표현할 때는 'の'가 더 자연스럽습니다.",
        "の": "'의'라는 뜻으로, 명사와 명사를 연결하여 소유나 소속을 나타냅니다. '나의 이름'이라는 의미이므로 정답입니다.",
        "を": "'을/를'이라는 뜻으로 동사의 목적어를 나타냅니다. '이름을 입니다'는 문법적으로 맞지 않습니다."
    },
    example: {
        sentence: "これは私のかばんです。",
        translation: "이것은 제 가방입니다."
    },
    vocabulary: [
        { word: "わたし (私)", reading: "watashi", meaning: "저, 나" },
        { word: "なまえ (名前)", reading: "namae", meaning: "이름" },
        { word: "キム", reading: "kimu", meaning: "김 (고유명사)" },
        { word: "です", reading: "desu", meaning: "~입니다" }
    ],
    category: Category.Particles
  },
  {
    sentence: ["これ", "ほんです。"],
    options: ["は", "が", "も", "に"],
    answer: "は",
    translation: "이것은 책입니다.",
    explanations: {
        "は": "'는/은'이라는 뜻으로, 문장의 주제를 나타냅니다. '이것은 책입니다'라고 소개하는 상황이므로 가장 자연스럽습니다.",
        "が": "'이/가'라는 뜻으로, 주어를 강조할 때 씁니다. '이것이 책입니다' (다른 것이 아니라)라고 강조하는 느낌이 되어, 일반적인 소개문과는 뉘앙스가 다릅니다.",
        "も": "'~도'라는 뜻으로, 앞서 말한 것과 같다는 것을 나타냅니다. '저것도 책이고, 이것도 책입니다'와 같은 문맥에서 사용합니다.",
        "に": "'~에'라는 뜻으로, 장소나 시간을 나타낼 때 주로 사용합니다. 문법적으로 맞지 않습니다."
    },
    example: {
        sentence: "今日はいい天気ですね。",
        translation: "오늘은 날씨가 좋네요."
    },
    vocabulary: [
        { word: "これ", reading: "kore", meaning: "이것" },
        { word: "ほん (本)", reading: "hon", meaning: "책" },
        { word: "です", reading: "desu", meaning: "~입니다" }
    ],
    category: Category.Particles
  },
  {
    sentence: ["スーパー", "いきます。"],
    options: ["で", "に", "へ", "を"],
    answer: "へ",
    translation: "슈퍼에 갑니다.",
    explanations: {
        "で": "'~에서'라는 뜻으로, 장소에서 일어나는 행동을 나타냅니다. '슈퍼에서 갑니다'는 어색합니다. 'スーパーで買い物をします(슈퍼에서 쇼핑을 합니다)'처럼 사용합니다.",
        "に": "'~에'라는 뜻으로 목적지를 나타낼 수 있지만, '行きます(가다)'와 같은 이동 동사와 함께 쓰일 때는 방향성을 강조하는 'へ'가 더 자연스러울 때가 많습니다.",
        "へ": "'~에, ~로'라는 뜻으로, 이동의 방향을 나타냅니다. '行きます(가다), 来ます(오다)' 등과 함께 쓰여 목적지를 나타냅니다.",
        "を": "'~을/를'이라는 뜻으로 목적어를 나타내므로 맞지 않습니다."
    },
    example: {
        sentence: "明日、学校へ行きますか。",
        translation: "내일 학교에 갑니까?"
    },
    vocabulary: [
        { word: "スーパー", reading: "sūpā", meaning: "슈퍼마켓" },
        { word: "いきます (行きます)", reading: "ikimasu", meaning: "갑니다" }
    ],
    category: Category.Particles
  },
  {
    sentence: ["ごはん", "たべます。"],
    options: ["は", "が", "の", "を"],
    answer: "を",
    translation: "밥을 먹습니다.",
    explanations: {
        "は": "'는/은'이라는 뜻으로 주제를 나타냅니다. '밥은 먹습니다 (다른 것은 안 먹고)' 라는 특별한 강조의 의미가 아니라면 어색합니다.",
        "が": "'이/가'라는 뜻으로 주어를 나타냅니다. '밥이 먹습니다'는 문법적으로 틀립니다.",
        "の": "'의'라는 뜻으로 소유를 나타내므로 맞지 않습니다.",
        "を": "'을/를'이라는 뜻으로, '食べます(먹다)'와 같은 동사의 목적어를 나타냅니다. '밥을 먹습니다'가 가장 자연스럽습니다."
    },
    example: {
        sentence: "水を飲みます。",
        translation: "물을 마십니다."
    },
    vocabulary: [
        { word: "ごはん (ご飯)", reading: "gohan", meaning: "밥, 식사" },
        { word: "たべます (食べます)", reading: "tabemasu", meaning: "먹습니다" }
    ],
    category: Category.Particles
  },
  {
    sentence: ["えき", "ともだちにあいます。"],
    options: ["で", "に", "へ", "も"],
    answer: "で",
    translation: "역에서 친구를 만납니다.",
     explanations: {
        "で": "'~에서'라는 뜻으로, 동작이 이루어지는 장소를 나타냅니다. '역에서' 만나는 것이므로 정답입니다.",
        "に": "'~에'라는 뜻으로, 존재의 위치나 목적지를 나타냅니다. '역에 친구를 만납니다'는 어색합니다.",
        "へ": "'~로'라는 뜻으로, 이동의 방향을 나타내므로 맞지 않습니다.",
        "も": "'~도'라는 뜻이므로 문맥에 맞지 않습니다."
    },
    example: {
        sentence: "図書館で本を読みます。",
        translation: "도서관에서 책을 읽습니다."
    },
    vocabulary: [
        { word: "えき (駅)", reading: "eki", meaning: "역" },
        { word: "ともだち (友達)", reading: "tomodachi", meaning: "친구" },
        { word: "あいます (会います)", reading: "aimasu", meaning: "만납니다" }
    ],
    category: Category.Particles
  },
  {
    sentence: ["いま なんじ", "か。"],
    options: ["です", "ます", "でした", "だ"],
    answer: "です",
    translation: "지금 몇 시입니까?",
    explanations: {
        "です": "'~입니다'라는 뜻으로, 명사나 형용사 뒤에 붙어 정중한 문장을 만듭니다. '何時(몇 시)'라는 명사 뒤에 붙어 '몇 시입니까?'라는 질문을 만듭니다.",
        "ます": "'~합니다'라는 뜻으로, 동사 뒤에 붙어 정중한 문장을 만듭니다. 명사 뒤에는 올 수 없습니다.",
        "でした": "'~였습니다'라는 뜻으로, 'です'의 과거형입니다. '지금 몇 시였습니까?'는 어색합니다.",
        "だ": "'~이다'라는 뜻으로, 'です'의 보통체(반말)입니다. 문장의 끝에 'か'가 붙어 질문을 만들 때는 보통 정중체인 'です'를 사용합니다."
    },
    example: {
        sentence: "明日は休みです。",
        translation: "내일은 휴일입니다."
    },
    vocabulary: [
        { word: "いま (今)", reading: "ima", meaning: "지금" },
        { word: "なんじ (何時)", reading: "nanji", meaning: "몇 시" },
        { word: "か", reading: "ka", meaning: "~까? (의문을 나타냄)" },
        { word: "です", reading: "desu", meaning: "~입니다" }
    ],
    category: Category.Endings
  },
  {
    sentence: ["わたしも がくせい", "。"],
    options: ["です", "ます", "でした", "だ"],
    answer: "です",
    translation: "저도 학생입니다.",
    explanations: {
        "です": "'~입니다'라는 뜻으로, '学生(학생)'이라는 명사 뒤에 붙어 '학생입니다'라는 정중한 문장을 완성합니다.",
        "ます": "'~합니다'라는 뜻으로 동사 뒤에 붙으므로 명사인 '学生' 뒤에는 올 수 없습니다.",
        "でした": "'~였습니다'라는 뜻으로 과거형입니다. '저도 학생이었습니다'라는 의미가 되므로 현재를 나타내는 문장에는 어울리지 않습니다.",
        "だ": "'~이다'라는 뜻의 보통체(반말)입니다. 정중한 문장을 만드는 상황에서는 'です'가 맞습니다."
    },
    example: {
        sentence: "これは日本の車です。",
        translation: "이것은 일본 차입니다."
    },
    vocabulary: [
        { word: "わたし (私)", reading: "watashi", meaning: "저, 나" },
        { word: "も", reading: "mo", meaning: "~도" },
        { word: "がくせい (学生)", reading: "gakusei", meaning: "학생" },
        { word: "です", reading: "desu", meaning: "~입니다" }
    ],
    category: Category.Endings
  },
  {
    sentence: ["きのう えいが", "みました。"],
    options: ["を", "は", "に", "が"],
    answer: "を",
    translation: "어제 영화를 봤습니다.",
    explanations: {
        "を": "'을/를'이라는 뜻으로, '見ました(봤습니다)'라는 동사의 목적어인 '映画(영화)' 뒤에 붙는 것이 자연스럽습니다.",
        "は": "'는/은'이라는 뜻으로 주제를 나타냅니다. '어제 영화는 봤습니다 (다른 것은 안 보고)'와 같이 강조의 의미가 아니라면 어색합니다.",
        "に": "'~에'라는 뜻으로 장소나 시간을 나타내므로 맞지 않습니다.",
        "が": "'이/가'라는 뜻으로 주어를 나타냅니다. '영화가 봤습니다'는 문법적으로 틀립니다."
    },
    example: {
        sentence: "音楽を聴きます。",
        translation: "음악을 듣습니다."
    },
    vocabulary: [
        { word: "きのう (昨日)", reading: "kinō", meaning: "어제" },
        { word: "えいが (映画)", reading: "eiga", meaning: "영화" },
        { word: "みました (見ました)", reading: "mimashita", meaning: "봤습니다" }
    ],
    category: Category.Particles
  },
  {
    sentence: ["つくえの うえ", "ねこが います。"],
    options: ["で", "に", "へ", "と"],
    answer: "に",
    translation: "책상 위에 고양이가 있습니다.",
    explanations: {
        "で": "'~에서'라는 뜻으로 동작이 일어나는 장소를 나타냅니다. 'います(있습니다)'와 같이 존재를 나타내는 동사와는 보통 함께 쓰이지 않습니다.",
        "に": "'~에'라는 뜻으로, 사람이나 동물이 있는 장소를 나타낼 때 사용합니다. '책상 위에' 고양이가 '있습니다'이므로 정답입니다.",
        "へ": "'~로'라는 뜻으로 이동의 방향을 나타내므로 맞지 않습니다.",
        "と": "'~와/과'라는 뜻으로, 함께하는 대상을 나타낼 때 사용합니다."
    },
    example: {
        sentence: "公園に犬がいます。",
        translation: "공원에 개가 있습니다."
    },
    vocabulary: [
        { word: "つくえ (机)", reading: "tsukue", meaning: "책상" },
        { word: "うえ (上)", reading: "ue", meaning: "위" },
        { word: "ねこ (猫)", reading: "neko", meaning: "고양이" },
        { word: "います", reading: "imasu", meaning: "있습니다 (사람/동물)" }
    ],
    category: Category.Particles
  },
  {
    sentence: ["バス", "がっこうに きます。"],
    options: ["で", "に", "を", "から"],
    answer: "で",
    translation: "버스로 학교에 옵니다.",
    explanations: {
        "で": "'~으로'라는 뜻으로, 교통수단이나 방법을 나타낼 때 사용합니다. '버스로' 학교에 오므로 정답입니다.",
        "に": "'~에'라는 뜻으로 장소를 나타내므로, '버스에 학교에 옵니다'는 어색합니다.",
        "を": "'~을/를'이라는 뜻으로 목적어를 나타냅니다. '버스를 탑니다(バスに乗ります)'와 같이 사용합니다.",
        "から": "'~부터'라는 뜻으로 출발점을 나타냅니다. '집에서(家から) 학교에 옵니다'처럼 사용합니다."
    },
    example: {
        sentence: "電車で会社へ行きます。",
        translation: "전철로 회사에 갑니다."
    },
    vocabulary: [
        { word: "バス", reading: "basu", meaning: "버스" },
        { word: "がっこう (学校)", reading: "gakkō", meaning: "학교" },
        { word: "きます (来ます)", reading: "kimasu", meaning: "옵니다" }
    ],
    category: Category.Particles
  },
];