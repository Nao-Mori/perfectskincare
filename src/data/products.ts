import { Product } from '@/types/core';

export const products: Product[] = [
  {
    id: 1,
    name: 'CeraVe Moisturizing Cream',
    image: 'uploads/1756450115635-0a0f8f64-abc9-4d70-b666-6101429b6cd5.webp',
    category: 'cream',
    reviews: [
      {
        rate: 9,
        skinType: 2,
        concerns: ['dryness', 'sensitivity'],
        comment: 'Super hydrating, calms redness.',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['dryness', 'lightWrinkles'],
        comment: 'Good for night use.',
      },
      {
        rate: 7,
        skinType: 3,
        concerns: ['sensitivity', 'dryness'],
        comment: 'Texture is rich but not greasy.',
      },
      {
        rate: 9,
        skinType: 2,
        concerns: ['dryness', 'darkSpots'],
        comment: 'Perfect for winter dry patches.',
      },
      {
        rate: 8,
        skinType: 5,
        concerns: ['redness', 'sensitivity'],
        comment: 'Lightweight yet nourishing.',
      },
    ],
  },
  {
    id: 2,
    name: 'La Roche-Posay Toleriane Purifying Foaming Cleanser',
    image: 'uploads/1756453461585-1da63b4f-6291-4654-a124-7d98d24ba29c.webp',
    category: 'faceWash',
    reviews: [
      {
        rate: 8,
        skinType: 7,
        concerns: ['oiliness', 'acne'],
        comment: 'Gently cleans without over-drying.',
      },
      {
        rate: 7,
        skinType: 6,
        concerns: ['acne', 'pores'],
        comment: 'Helps with breakouts over time.',
      },
      {
        rate: 9,
        skinType: 7,
        concerns: ['oiliness', 'sensitivity'],
        comment: 'Very gentle yet effective.',
      },
      {
        rate: 6,
        skinType: 6,
        concerns: ['acne', 'unevenTexture'],
        comment: 'A bit foamy for sensitive skin.',
      },
      {
        rate: 8,
        skinType: 5,
        concerns: ['pores', 'oiliness'],
        comment: 'Great morning cleanser.',
      },
    ],
  },
  {
    id: 3,
    name: 'Neutrogena Hydro Boost Water Gel',
    image: 'uploads/1756453311500-08cb0807-ebcd-408e-8565-261d9ad837f7.webp',
    category: 'cream',
    reviews: [
      {
        rate: 9,
        skinType: 3,
        concerns: ['lightWrinkles', 'dryness'],
        comment: 'Instant hydration, no residue.',
      },
      {
        rate: 7,
        skinType: 5,
        concerns: ['dryness', 'unevenTexture'],
        comment: 'Light gel absorbs fast.',
      },
      {
        rate: 9,
        skinType: 4,
        concerns: ['dryness', 'lightWrinkles'],
        comment: 'Good under makeup.',
      },
      {
        rate: 6,
        skinType: 6,
        concerns: ['pores', 'acne'],
        comment: 'May cause breakouts on oily skin.',
      },
      {
        rate: 8,
        skinType: 2,
        concerns: ['dryness'],
        comment: 'Great for dry to combination.',
      },
    ],
  },
];

export const manyProducts = [
  ...products,
  {
    name: 'shu uemura ultime8∞ sublime beauty cleansing oil 50ml',
    image: 'uploads/shucleanser.jpg',
    category: 'cleanser',
    reviews: [
      {
        rate: 9,
        skinType: 3,
        concerns: ['redness', 'sensitivity', 'unevenTexture'],
        comment:
          '濃いメイクもするっと落ちるのにつっぱらない。赤みが出にくくてもちっと肌。',
      },
      {
        rate: 9,
        skinType: 4,
        concerns: ['pores', 'unevenTexture', 'redness'],
        comment:
          'Emulsifies to milk and rinses clean—no film when done right. Texture looks smoother.',
      },
      {
        rate: 8,
        skinType: 6,
        concerns: ['oiliness', 'blackheads', 'pores'],
        comment:
          '지복합인데 블랙헤드가 덜 끼고 모공이 깔끔. 이중 세안하면 완벽.',
      },
      {
        rate: 7,
        skinType: 7,
        concerns: ['oiliness', 'pores', 'blackheads'],
        comment:
          'Great cleanse but a bit rich for very oily skin; second cleanse helps.',
      },
      {
        rate: 8,
        skinType: 2,
        concerns: ['dryness', 'lightWrinkles', 'unevenTexture'],
        comment: '冬でもつっぱらずふっくら。細かい乾燥小じわが気になりにくい。',
      },
      {
        rate: 9,
        skinType: 5,
        concerns: ['unevenTexture', 'darkSpots', 'redness'],
        comment: '몇 주 쓰니 톤이 맑아지고 결이 매끈. 자극 없이 편안해요.',
      },
      {
        rate: 8,
        skinType: 1,
        concerns: ['dryness', 'sensitivity', 'redness'],
        comment:
          'Hydrating cleanse that doesn’t sting on sensitive days; slight herbal scent.',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['acne', 'redness', 'unevenTexture'],
        comment:
          '白ニキビのざらつきが減って、赤みも落ち着く。乳化が早くて使いやすい。',
      },
      {
        rate: 8,
        skinType: 6,
        concerns: ['oiliness', 'pores', 'blackheads'],
        comment:
          '에멀전처럼 잘 풀려서 잔여감 없음. T존 유분도 과하지 않게 정돈.',
      },
      {
        rate: 9,
        skinType: 3,
        concerns: ['pores', 'unevenTexture', 'redness'],
        comment:
          'Removes sunscreen & long-wear makeup effortlessly; bouncy feel, refined pores.',
      },
    ],
  },
  {
    name: 'Etude SoonJung pH 6.5 Whip Facial Cleanser',
    image: 'etudesoonj',
    category: 'cleanser',
  },
  {
    name: 'Cosrx Low-pH Good Morning Gel Cleanser',
    image: 'cosrxgel',
    category: 'cleanser',
  },
  {
    name: 'Anua Heartleaf Quercetinol Pore Deep Cleansing Foam',
    image: 'uploads/anuapore.jpg',
    category: 'cleanser',
    reviews: [
      {
        rate: 9,
        skinType: 4,
        concerns: ['pores', 'unevenTexture', 'redness'],
        comment:
          'Deep cleanse without the tight feel—pores look refined and skin feels calm.',
      },
      {
        rate: 9,
        skinType: 6,
        concerns: ['oiliness', 'pores', 'blackheads'],
        comment: '유분은 싹 잡아주는데 뻑뻑하지 않아요. 모공 정돈 효과도 깔끔!',
      },
      {
        rate: 9,
        skinType: 1,
        concerns: ['dryness', 'sensitivity'],
        comment: 'つっぱらずにしっとり。低刺激でやさしい洗い上がりが好き。',
      },
      {
        rate: 8,
        skinType: 7,
        concerns: ['oiliness', 'acne', 'blackheads'],
        comment:
          'Keeps me matte without over-stripping; breakouts stay in check.',
      },
      {
        rate: 8,
        skinType: 2,
        concerns: ['dryness', 'redness'],
        comment:
          '거품 부드럽고 세정 후 당김이 적어요. 보습만 얹어주면 딱 좋아요.',
      },
      {
        rate: 9,
        skinType: 5,
        concerns: ['pores', 'unevenTexture', 'oiliness'],
        comment:
          '日焼け止めもすっきり落ちて、肌がすべすべに。さっぱりだけど快適。',
      },
      {
        rate: 8,
        skinType: 3,
        concerns: ['sensitivity', 'redness'],
        comment:
          'No sting, no fragrance overload—leaves skin balanced and comfy.',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['acne', 'blackheads', 'pores'],
        comment: '꾸준히 쓰니 화이트헤드가 덜 올라와요. 메이크업도 잘 지워짐.',
      },
      {
        rate: 9,
        skinType: 6,
        concerns: ['oiliness', 'pores'],
        comment: '夏でもテカりにくく、毛穴のざらつきが軽くなる感じ。',
      },
      {
        rate: 8,
        skinType: 5,
        concerns: ['unevenTexture', 'darkSpots'],
        comment:
          'Thorough cleanse gives a brighter look and smoother texture over time.',
      },
    ],
  },
  {
    name: 'Then I Met You Living Cleansing Balm',
    image: 'thenbalm',
    category: 'cleanser',
  },
  {
    name: 'Ma:nyo Pure Cleansing Oil',
    image: 'uploads/manyooil.jpg',
    category: 'cleanser',
    reviews: [
      {
        rate: 8,
        skinType: 7,
        concerns: ['oiliness', 'pores', 'blackheads'],
        comment:
          'Controls shine all day, pores look tighter; gentle foam for daily use.',
      },
      {
        rate: 8,
        skinType: 6,
        concerns: ['oiliness', 'acne', 'pores'],
        comment: '皮脂バランスが整ってテカり激減。つっぱり感は少なめ。',
      },
      {
        rate: 7,
        skinType: 5,
        concerns: ['blackheads', 'pores', 'unevenTexture'],
        comment: '세정력 깔끔, 트러블 유발 없이 산뜻해요. 블랙헤드도 덜 보임.',
      },
      {
        rate: 6,
        skinType: 4,
        concerns: ['pores', 'unevenTexture'],
        comment:
          'Nice cleanse but a bit stripping if I double-cleanse; neutral overall.',
      },
      {
        rate: 6,
        skinType: 3,
        concerns: ['redness', 'sensitivity', 'unevenTexture'],
        comment:
          'メイクは落ちるけど、洗い上がりがややドライ。敏感日は避けたい。',
      },
      {
        rate: 5,
        skinType: 2,
        concerns: ['dryness', 'lightWrinkles'],
        comment: '거품 풍성하지만 씻고 나면 당김... 보습 빨리 해줘야 함.',
      },
      {
        rate: 4,
        skinType: 1,
        concerns: ['dryness', 'redness', 'sensitivity'],
        comment:
          'Too drying for very dry skin—tight feeling and some redness afterward.',
      },
      {
        rate: 8,
        skinType: 7,
        concerns: ['oiliness', 'acne', 'pores'],
        comment: '피지 컨트롤 탁월! 저녁까지 번들거림 덜함. 재구매 의사 있음.',
      },
      {
        rate: 7,
        skinType: 6,
        concerns: ['blackheads', 'pores', 'unevenTexture'],
        comment:
          'Helps with blackheads and keeps T-zone balanced; slight fragrance.',
      },
      {
        rate: 6,
        skinType: 4,
        concerns: ['pores', 'unevenTexture', 'oiliness'],
        comment: 'さっぱり系。毛穴のざらつきは軽くなるけど、保湿は必須。',
      },
    ],
  },
  {
    name: 'Banila Co Clean It Zero Calming Cleansing Balm',
    image: 'uploads/banilacocalm.jpg',
    category: 'cleanser',
    reviews: [
      {
        rate: 9,
        skinType: 3,
        concerns: ['redness', 'sensitivity', 'unevenTexture'],
        comment:
          '자극 없이 메이크업이 싹 녹아요. 세안 후도 편안해서 홍조가 덜 올라와요.',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['acne', 'redness', 'pores'],
        comment:
          'Melts sunscreen fast, rinses clean. Helps calm inflamed spots overnight.',
      },
      {
        rate: 8,
        skinType: 2,
        concerns: ['dryness', 'lightWrinkles', 'sensitivity'],
        comment: 'とろける使用感でつっぱりなし。やさしく落ちて、翌朝ふっくら。',
      },
      {
        rate: 7,
        skinType: 6,
        concerns: ['oiliness', 'blackheads', 'pores'],
        comment:
          '세정력은 좋은데 지성은 2차 세안 필수. 블랙헤드는 조금 남는 편.',
      },
      {
        rate: 9,
        skinType: 1,
        concerns: ['dryness', 'redness', 'sensitivity'],
        comment:
          'Ultra gentle balm—no fragrance sting. Redness cools down and skin feels cushy.',
      },
      {
        rate: 8,
        skinType: 5,
        concerns: ['acne', 'acneScars', 'unevenTexture'],
        comment:
          'メイク落ちは完璧。連用でざらつき減って、ニキビあとも目立ちにくい。',
      },
      {
        rate: 6,
        skinType: 7,
        concerns: ['oiliness', 'pores', 'blackheads'],
        comment:
          'Feels a bit heavy for very oily skin; minor residue unless I double cleanse.',
      },
      {
        rate: 7,
        skinType: 3,
        concerns: ['blackheads', 'pores', 'redness'],
        comment:
          '블랙헤드가 당장 사라지진 않지만, 자극이 없어서 꾸준히 쓰기 좋음.',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['sensitivity', 'redness', 'unevenTexture'],
        comment:
          'Soft balm → milk cleanse. No tightness, barrier feels intact after wash.',
      },
      {
        rate: 9,
        skinType: 2,
        concerns: ['dryness', 'redness', 'sensitivity'],
        comment:
          '敏感肌でもしみない。しっとりオフで、赤みが出にくくなった気がする。',
      },
    ],
  },
  {
    name: 'Dr. Althea Pure Grinding Cleansing Balm',
    image: 'altheabalm',
    category: 'cleanser',
  },
  {
    name: 'HaruHaru Wonder Black Rice Moisture Cleansing Oil',
    image: 'haruharuoil',
    category: 'cleanser',
  },

  // --- Face Wash (American & JP additions) ---
  {
    name: 'CeraVe Foaming Facial Cleanser',
    image: 'uploads/ceravefoam.webp',
    category: 'faceWash',
    reviews: [
      {
        rate: 9,
        skinType: 6,
        concerns: ['oiliness', 'acne', 'pores'],
        comment:
          'Keeps my T-zone matte without stripping. Breakouts calmed in a week.',
      },
      {
        rate: 8,
        skinType: 7,
        concerns: ['oiliness', 'blackheads', 'pores'],
        comment:
          '皮脂オフはしっかり、つっぱり感は少なめ。毛穴のざらつきが軽くなる。',
      },
      {
        rate: 8,
        skinType: 5,
        concerns: ['pores', 'unevenTexture', 'redness'],
        comment:
          '거품이 미세해서 세정력 굿. 세안 후 당김 거의 없고 붉은기도 덜함.',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['acne', 'redness', 'oiliness'],
        comment:
          'Fragrance-free and gentle; helps with small whiteheads and post-workout redness.',
      },
      {
        rate: 6,
        skinType: 2,
        concerns: ['dryness', 'sensitivity', 'lightWrinkles'],
        comment: '洗い上がりがさっぱりしすぎて、乾燥肌には保湿速攻必須。',
      },
      {
        rate: 5,
        skinType: 1,
        concerns: ['dryness', 'sensitivity', 'redness'],
        comment:
          'Gentle but a bit drying for very dry skin—tight feeling unless I layer toner.',
      },
      {
        rate: 8,
        skinType: 3,
        concerns: ['redness', 'unevenTexture', 'pores'],
        comment: '민감한 날에도 따갑지 않고 결이 매끈. 메이크업 밀착이 좋아짐.',
      },
      {
        rate: 9,
        skinType: 6,
        concerns: ['oiliness', 'acne', 'blackheads'],
        comment: '皮脂コントロール優秀。ニキビ前兆が出ても悪化しにくい感じ。',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['pores', 'blackheads', 'oiliness'],
        comment:
          'Non-comedogenic gel that foams nicely; pores look cleaner over time.',
      },
      {
        rate: 8,
        skinType: 5,
        concerns: ['acne', 'pores', 'unevenTexture'],
        comment:
          '세라마이드라 그런지 세안 후 장벽이 덜 흔들려요. 데일리로 무난 최고.',
      },
    ],
  },
  {
    name: 'Neutrogena Hydro Boost Hydrating Cleansing Gel',
    image: 'neutrohboost',
    category: 'faceWash',
  },
  {
    name: 'Kiehl’s Ultra Facial Cleanser',
    image: 'kiehlsultra',
    category: 'faceWash',
  },
  {
    name: 'Philosophy Purity Made Simple Cleanser',
    image: 'philosophy',
    category: 'faceWash',
  },
  {
    name: 'Shiseido Senka Perfect Whip',
    image: 'senkawhip',
    category: 'faceWash',
  },
  {
    name: 'Bioré Deep Pore Charcoal Cleanser',
    image: 'biorecharcoal',
    category: 'faceWash',
  },
  {
    name: 'Cetaphil Daily Facial Cleanser',
    image: 'cetaphilclean',
    category: 'faceWash',
  },
  { name: 'DHC Deep Cleansing Oil', image: 'dhcoil', category: 'faceWash' },
  { name: 'Fresh Soy Face Cleanser', image: 'freshsoy', category: 'faceWash' },
  {
    name: 'Hada Labo Gokujyun Foaming Face Wash',
    image: 'hadafoam',
    category: 'faceWash',
  },

  // --- Toner (Korean & Japanese) ---
  {
    name: 'Anua Heartleaf 77 Soothing Toner',
    image: 'uploads/anuatoner.webp',
    category: 'toner',
    reviews: [
      {
        rate: 8,
        skinType: 6,
        concerns: ['acne', 'redness', 'oiliness'],
        comment:
          'Calms active pimples fast; takes down redness without feeling sticky.',
      },
      {
        rate: 8,
        skinType: 7,
        concerns: ['acne', 'redness', 'pores'],
        comment: '트러블 진정 빨라요. 번들거림 덜하고 모공 결도 살짝 정돈됨.',
      },
      {
        rate: 7,
        skinType: 5,
        concerns: ['acne', 'blackheads', 'pores'],
        comment: 'テカりを抑えて、白黒ずみも少し落ち着く。使い心地はさっぱり。',
      },
      {
        rate: 7,
        skinType: 4,
        concerns: ['redness', 'sensitivity', 'unevenTexture'],
        comment:
          'Helps with post-workout redness; mild tingle on sensitive days.',
      },
      {
        rate: 9,
        skinType: 6,
        concerns: ['acne', 'redness'],
        comment: '赤みがスッと引いて新しいニキビができにくくなった。リピ確定！',
      },
      {
        rate: 6,
        skinType: 2,
        concerns: ['dryness', 'sensitivity', 'redness'],
        comment: '수분감이 살짝 부족해요. 건성은 보습 레이어링 필수.',
      },
      {
        rate: 7,
        skinType: 3,
        concerns: ['redness', 'acneScars', 'unevenTexture'],
        comment:
          'Redness goes down and old marks fade slowly; texture looks smoother.',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['acne', 'redness', 'oiliness'],
        comment: '화장 전에도 산뜻. 여드름 올라올 때 이걸로 진정되더라구요.',
      },
      {
        rate: 7,
        skinType: 1,
        concerns: ['dryness', 'sensitivity', 'redness'],
        comment: '低刺激だけど、乾燥肌には保湿追加しないとつっぱるかも。',
      },
      {
        rate: 8,
        skinType: 5,
        concerns: ['acne', 'redness', 'hyperPigmentation'],
        comment:
          'Keeps blemishes in check and evens tone over time. Great as a daily toner.',
      },
    ],
  },
  { name: "I'm From Rice Toner", image: 'imfromrice', category: 'toner' },
  {
    name: 'Beauty of Joseon Glow Replenishing Toner',
    image: 'bojtoner',
    category: 'toner',
  },
  {
    name: 'Hada Labo Gokujun Premium Hyaluronic Solution',
    image: 'hadahyalu',
    category: 'toner',
  },
  {
    name: 'Curel Hydrating Water Essence Toner',
    image: 'curelh2o',
    category: 'toner',
  },
  {
    name: 'Kikumasamune Face & Body Moisturizing Lotion',
    image: 'kikumasaloc',
    category: 'toner',
  },
  {
    name: 'Naturie Hatomugi Skin Conditioner',
    image: 'naturiehat',
    category: 'toner',
  },
  {
    name: 'Muji Sensitive Skin Light Toning Water',
    image: 'mujitoning',
    category: 'toner',
  },
  {
    name: 'Albion Medicated Skin Conditioner',
    image: 'albionmedic',
    category: 'toner',
  },
  {
    name: 'SK-II Facial Treatment Clear Lotion',
    image: 'sk2clear',
    category: 'toner',
  },
  {
    name: 'SHISEIDO Elixir Lift Moist Lotion',
    image: 'elixirtoner.webp',
    category: 'toner',
    reviews: [
      {
        rate: 9,
        skinType: 2,
        concerns: ['dryness', 'lightWrinkles', 'sagging'],
        comment:
          'とろみがすっと入ってふっくら。目元のちりめんジワが目立ちにくい。',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['unevenTexture', 'redness', 'pores'],
        comment:
          'Silky hydration without stickiness; leaves a calm, glassy finish.',
      },
      {
        rate: 8,
        skinType: 3,
        concerns: ['dryness', 'lightWrinkles', 'darkSpots'],
        comment: '수분 막이 오래가고 윤광이 돌아요. 얇게 레이어링하기 좋아요.',
      },
      {
        rate: 9,
        skinType: 1,
        concerns: ['dryness', 'sensitivity', 'deepWrinkles'],
        comment: 'しみずにしっとり。朝까지 탄탄한 느낌으로 메이크업도 덜 뜸。',
      },
      {
        rate: 7,
        skinType: 6,
        concerns: ['oiliness', 'pores', 'redness'],
        comment:
          'Great bounce but a bit rich on my T-zone—better at night for oily skin.',
      },
      {
        rate: 8,
        skinType: 5,
        concerns: ['unevenTexture', 'sagging', 'lightWrinkles'],
        comment: '결이 매끈해지고 볼쪽이 통통해 보여요. 탄력감이 은근 좋아요.',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['lightWrinkles', 'darkSpots', 'hyperPigmentation'],
        comment: '透明感アップ。重すぎず、重ねてもベタつかないのが良い。',
      },
      {
        rate: 7,
        skinType: 7,
        concerns: ['oiliness', 'pores', 'redness'],
        comment:
          'Hydrating but a tad tacky on very oily days; needs lighter layers.',
      },
      {
        rate: 9,
        skinType: 2,
        concerns: ['dryness', 'sagging', 'lightWrinkles'],
        comment: '탄력이 살아나고 속당김 해결. 향은 은은해서 데일리로 무난.',
      },
      {
        rate: 8,
        skinType: 3,
        concerns: ['redness', 'sensitivity', 'unevenTexture'],
        comment:
          'Calms mild redness and leaves a dewy, bouncy feel—layers well with serum.',
      },
    ],
  },

  // --- Serum (American & Korean) ---
  {
    name: 'SHISEIDO Ultimune',
    image: 'ultimune.jpg',
    category: 'serum',
    reviews: [
      {
        rate: 9,
        skinType: 2,
        concerns: ['dryness', 'lightWrinkles', 'unevenTexture'],
        comment:
          'さらっと入って内側ふっくら。キメが整って、朝の化粧ノリが安定。',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['redness', 'sensitivity', 'unevenTexture'],
        comment:
          'Makes my skin feel resilient and calm—less redness, smoother texture overall.',
      },
      {
        rate: 8,
        skinType: 3,
        concerns: ['dryness', 'sensitivity', 'redness'],
        comment:
          '흡수 빠르고 자극감 거의 없음. 다음 단계 제품도 잘 먹어서 윤기 나요.',
      },
      {
        rate: 7,
        skinType: 6,
        concerns: ['oiliness', 'pores', 'redness'],
        comment:
          'Nice glow but a bit silicone-slip on oily T-zone; better at night than AM.',
      },
      {
        rate: 8,
        skinType: 1,
        concerns: ['dryness', 'deepWrinkles', 'sensitivity'],
        comment:
          '香りはありだけど刺激は感じにくい。もっちり潤って目元の乾燥ジワが楽。',
      },
      {
        rate: 9,
        skinType: 5,
        concerns: ['lightWrinkles', 'sagging', 'darkSpots'],
        comment:
          '한 달 쓰니 탄력감이 업, 잔주름이 완만해지고 톤도 맑아진 느낌.',
      },
      {
        rate: 7,
        skinType: 7,
        concerns: ['oiliness', 'pores', 'acne'],
        comment:
          'Too dewy for very oily days; love the radiance, but I keep it to 2–3 drops.',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['lightWrinkles', 'redness', 'unevenTexture'],
        comment:
          'ブースターとして使うと後の美容液のなじみが良い。赤みも落ち着く。',
      },
      {
        rate: 8,
        skinType: 3,
        concerns: ['sensitivity', 'acneScars', 'redness'],
        comment:
          '직접 트러블을 없애진 않지만, 장벽이 안정되니 자국이 빨리 가라앉아요.',
      },
      {
        rate: 8,
        skinType: 2,
        concerns: ['hyperPigmentation', 'unevenTexture', 'dryness'],
        comment:
          'Hydration + smoothness without heaviness; gentle brightening over weeks.',
      },
    ],
  },
  {
    name: 'SkinCeuticals C E Ferulic',
    image: 'uploads/sceferulic.webp',
    category: 'serum',
    reviews: [
      {
        rate: 9,
        skinType: 3,
        concerns: ['darkSpots', 'lightWrinkles', 'unevenTexture'],
        comment:
          'トーンアップが早い。キメが整って、小じわも目立ちにくくなった。',
      },
      {
        rate: 9,
        skinType: 4,
        concerns: ['darkSpots', 'hyperPigmentation', 'redness'],
        comment:
          'Brightens fast and evens tone; redness after workouts calms down too.',
      },
      {
        rate: 8,
        skinType: 2,
        concerns: ['dryness', 'lightWrinkles', 'sensitivity'],
        comment: '초반 살짝 따끔했지만 금방 적응. 속부터 촉촉+광채 살아나요.',
      },
      {
        rate: 9,
        skinType: 5,
        concerns: ['unevenTexture', 'lightWrinkles', 'darkSpots'],
        comment:
          'Smoother texture by week 2; makeup sits better and spots fade gradually.',
      },
      {
        rate: 8,
        skinType: 1,
        concerns: ['dryness', 'deepWrinkles', 'darkSpots'],
        comment: 'しっとり感あり。ハリが出て、くすみも少しずつクリアに。',
      },
      {
        rate: 8,
        skinType: 6,
        concerns: ['oiliness', 'pores', 'redness'],
        comment: '흡수는 빠르지만 살짝 점성 있음. 그래도 톤업/진정 효과 확실.',
      },
      {
        rate: 7,
        skinType: 7,
        concerns: ['oiliness', 'acne', 'blackheads'],
        comment:
          'Good glow but a bit heavy for very oily skin; metallic scent lingers.',
      },
      {
        rate: 9,
        skinType: 4,
        concerns: ['darkSpots', 'lightWrinkles', 'hyperPigmentation'],
        comment:
          '色ムラが均一に。ハリ感アップで朝の肌が違う。価格以外は満点級。',
      },
      {
        rate: 8,
        skinType: 3,
        concerns: ['redness', 'acneScars', 'unevenTexture'],
        comment:
          'Fades post-acne marks and smooths texture without irritating.',
      },
      {
        rate: 8,
        skinType: 2,
        concerns: ['lightWrinkles', 'deepWrinkles', 'darkSpots'],
        comment: '자극 적고 광채 피부로. 비싼 게 흠이지만 결과는 납득.',
      },
    ],
  },
  {
    name: 'SkinMedica TNS Advanced+ Serum',
    image: 'skinmedicatsn',
    category: 'serum',
  },
  {
    name: 'La Roche-Posay Hyalu B5 Serum',
    image: 'larochehyalu',
    category: 'serum',
  },
  {
    name: 'Kiehl’s Ultra Pure Niacinamide Serum 5.0%',
    image: 'kiehlnia',
    category: 'serum',
  },
  {
    name: 'Revision Skincare C+ Correcting Complex 30%',
    image: 'revisioncplus',
    category: 'serum',
  },
  { name: 'Augustinus Bader The Serum', image: 'augserum', category: 'serum' },
  {
    name: 'TruSkin Vitamin C Super Serum',
    image: 'truskinvc',
    category: 'serum',
  },
  {
    name: 'Cetaphil Retinol Alternative Serum',
    image: 'cetaphilret',
    category: 'serum',
  },
  {
    name: 'PSA Visible Improvement Peptide Serum',
    image: 'psasera',
    category: 'serum',
  },
  {
    name: 'Peach & Lily Glass Skin Refining Serum',
    image: 'peachlily',
    category: 'serum',
  },

  // --- Lotion (Japanese / Korean style “乳液”) ---
  {
    name: 'SHISEIDO Elixir Lift Moist Emulsion',
    image: 'elixirlotion.jpg',
    category: 'lotion',
    reviews: [
      {
        rate: 9,
        skinType: 2,
        concerns: ['dryness', 'lightWrinkles', 'sagging'],
        comment:
          'とろみミルクがすっと浸透。ふっくらしてハリ戻る、メイクのりも◎',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['unevenTexture', 'redness', 'lightWrinkles'],
        comment:
          'Silky, bouncy finish without stickiness—great prep under sunscreen.',
      },
      {
        rate: 8,
        skinType: 3,
        concerns: ['dryness', 'sensitivity', 'lightWrinkles'],
        comment:
          '은은한 윤광 + 자극 없음. 각질 부각이 줄고 잔주름이 덜 보여요.',
      },
      {
        rate: 9,
        skinType: 1,
        concerns: ['dryness', 'deepWrinkles', 'sagging'],
        comment:
          '濃密なのに重くない。朝までもちっとして年齢サインが和らぐ感じ。',
      },
      {
        rate: 7,
        skinType: 6,
        concerns: ['oiliness', 'pores', 'redness'],
        comment:
          'Rich for daytime on oily T-zone, but at night it leaves a smooth, calm glow.',
      },
      {
        rate: 8,
        skinType: 5,
        concerns: ['unevenTexture', 'lightWrinkles', 'darkSpots'],
        comment: '결이 보들보들해지고 톤이 맑아져요. 레이어링해도 밀림 적음.',
      },
      {
        rate: 6,
        skinType: 7,
        concerns: ['oiliness', 'pores', 'blackheads'],
        comment: 'テカりやすい日は少し重い。夏は量少なめ推奨。',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['lightWrinkles', 'sagging', 'redness'],
        comment:
          'Firming feel over weeks; calms mild redness, plays well with SPF.',
      },
      {
        rate: 9,
        skinType: 2,
        concerns: ['dryness', 'sensitivity', 'lightWrinkles'],
        comment: '속당김 해결! 민감한 날에도 편안하고 볼이 탱탱해 보여요.',
      },
      {
        rate: 8,
        skinType: 3,
        concerns: ['dryness', 'darkSpots', 'unevenTexture'],
        comment: 'しっとり艶。くすみがほぐれて、肌のキメがなめらかに。',
      },
    ],
  },
  {
    name: 'Orbis U Lotion',
    image: 'orbisu.webp',
    category: 'lotion',
    reviews: [
      {
        rate: 9,
        skinType: 3,
        concerns: ['dryness', 'redness', 'sensitivity'],
        comment:
          'とろみがすっと入ってぷるん。赤みも落ち着いて、朝までしっとり。',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['redness', 'unevenTexture', 'pores'],
        comment:
          'Hydrating veil without stickiness; calms redness and smooths texture nicely.',
      },
      {
        rate: 8,
        skinType: 6,
        concerns: ['oiliness', 'acne', 'pores'],
        comment:
          '오일 프리 느낌이라 번들거림 적고, 피지·모공 케어에 무난하게 좋아요.',
      },
      {
        rate: 8,
        skinType: 2,
        concerns: ['dryness', 'lightWrinkles', 'darkSpots'],
        comment: '乾燥小じわにふっくら。くすみも少しずつ明るくなった気がする。',
      },
      {
        rate: 6,
        skinType: 7,
        concerns: ['oiliness', 'blackheads', 'pores'],
        comment:
          'Feels a bit tacky on very oily skin—better at night; pores look slightly refined.',
      },
      {
        rate: 9,
        skinType: 5,
        concerns: ['unevenTexture', 'acneScars', 'hyperPigmentation'],
        comment:
          '결이 매끈해지고 트러블 자국 톤이 서서히 균일해져요. 메이크업 밀착 굿!',
      },
      {
        rate: 9,
        skinType: 1,
        concerns: ['dryness', 'sensitivity', 'lightWrinkles'],
        comment:
          'Super gentle and cushy hydration; no sting, perfect for sensitive dry days.',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['acne', 'redness', 'sensitivity'],
        comment:
          '敏感な日でもしみない。にきび前兆の赤みをすっと落ち着かせる感じ。',
      },
      {
        rate: 8,
        skinType: 6,
        concerns: ['oiliness', 'redness', 'pores'],
        comment:
          'Balances my T-zone and tones down redness; layers well without piling.',
      },
      {
        rate: 8,
        skinType: 3,
        concerns: ['darkSpots', 'hyperPigmentation', 'unevenTexture'],
        comment: '톤이 깨끗해지고 결이 정돈돼요. 무향무알코올 느낌이라 편안함.',
      },
    ],
  },
  {
    name: 'Rohto Hada Labo Gokujyun Alpha Lotion',
    image: 'rohtoalpha',
    category: 'lotion',
  },
  {
    name: 'Curel Moisture Lotion III Enrich',
    image: 'curellotion',
    category: 'lotion',
  },
  {
    name: 'Muji Moisturizing Milk High Moisture',
    image: 'mujimilkh',
    category: 'lotion',
  },
  {
    name: 'Kikumasamune Sake High Moist Lotion',
    image: 'kikumalotion',
    category: 'lotion',
  },
  {
    name: 'Etude House Moistfull Collagen Lotion',
    image: 'etudecollagen',
    category: 'lotion',
  },
  {
    name: 'Laneige Essential Power Skin Refiner Light',
    image: 'laneigelotion',
    category: 'lotion',
  },
  {
    name: 'Innisfree Green Tea Balancing Lotion',
    image: 'innisfreelotion',
    category: 'lotion',
  },
  {
    name: 'Shu Uemura Skin Purifier Lotion',
    image: 'shulotion',
    category: 'lotion',
  },

  // --- Cream (American / Korean) ---
  {
    name: 'Dr. Dennis Gross Advanced Retinol + Ferulic Wrinkle Cream',
    image: 'drgrosscream.jpg',
    category: 'cream',
  },
  {
    name: 'Dr. Dennis Gross Vitamin C Lactic Dewy Deep Cream',
    image: 'drgrosslactic',
    category: 'cream',
  },
  {
    name: 'Clinique Moisture Surge 100H Auto-Replenishing Hydrator',
    image: 'cliniquesurge',
    category: 'cream',
  },
  {
    name: 'Kiehl’s Ultra Facial Cream',
    image: 'kiehlsultra',
    category: 'cream',
  },
  {
    name: 'Belif The True Cream Aqua Bomb',
    image: 'belifaquabomb',
    category: 'cream',
  },
  {
    name: 'Sulwhasoo Concentrated Ginseng Renewing Cream',
    image: 'sulwhasoogin',
    category: 'cream',
  },
  {
    name: 'Laneige Water Bank Blue Hyaluronic Cream',
    image: 'laneigeblue.jpg',
    category: 'cream',
  },
  {
    name: 'Origins GinZing Oil-Free Energy-Boosting Gel Cream',
    image: 'originsginzing',
    category: 'cream',
  },
  { name: 'Augustinus Bader The Cream', image: 'augcream', category: 'cream' },
];
