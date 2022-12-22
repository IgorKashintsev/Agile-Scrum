import imgAgeOfWonders1 from '../image/Age of Wonders Planetfall/1.jpg';
import imgAgeOfWonders2 from '../image/Age of Wonders Planetfall/2.jpg';
import imgAgeOfWonders3 from '../image/Age of Wonders Planetfall/3.jpg';
import imgAgeOfWonders4 from '../image/Age of Wonders Planetfall/4.jpg';
import imgAgeOfWonders5 from '../image/Age of Wonders Planetfall/5.jpg';
import imgDivinity1  from '../image/Divinity Original Sin 2/1.jpg';
import imgDivinity2  from '../image/Divinity Original Sin 2/2.jpg';
import imgDivinity3  from '../image/Divinity Original Sin 2/3.jpg';
import imgDivinity4  from '../image/Divinity Original Sin 2/4.jpg';
import imgDivinity5  from '../image/Divinity Original Sin 2/5.jpg';
import imgETS1 from '../image/Euro Truck Simulator 2/1.jpg';
import imgETS2 from '../image/Euro Truck Simulator 2/2.jpg';
import imgETS3 from '../image/Euro Truck Simulator 2/3.jpg';
import imgETS4 from '../image/Euro Truck Simulator 2/4.jpg';
import imgETS5 from '../image/Euro Truck Simulator 2/5.jpg';
import imgDetroitBH1 from '../image/Detroit Become Human/1.jpg';
import imgDetroitBH2 from '../image/Detroit Become Human/2.jpg';
import imgDetroitBH3 from '../image/Detroit Become Human/3.jpg';
import imgDetroitBH4 from '../image/Detroit Become Human/4.jpg';
import imgDetroitBH5 from '../image/Detroit Become Human/5.jpg';
import imgCivilizationVI1 from '../image/Civilization VI/1.jpg';
import imgCivilizationVI2 from '../image/Civilization VI/2.jpg';
import imgCivilizationVI3 from '../image/Civilization VI/3.jpg';
import imgCivilizationVI4 from '../image/Civilization VI/4.jpg';
import imgCivilizationVI5 from '../image/Civilization VI/5.jpg';
import imgMassEffectLE1 from '../image/Mass Effect Legendary Edition/1.jpg';
import imgMassEffectLE2 from '../image/Mass Effect Legendary Edition/2.jpg';
import imgMassEffectLE3 from '../image/Mass Effect Legendary Edition/3.jpg';
import imgMassEffectLE4 from '../image/Mass Effect Legendary Edition/4.jpg';
import imgMassEffectLE5 from '../image/Mass Effect Legendary Edition/5.jpg';
import imgGTA1 from '../image/Grand Theft Auto V/1.jpg';
import imgGTA2 from '../image/Grand Theft Auto V/2.jpg';
import imgGTA3 from '../image/Grand Theft Auto V/3.jpg';
import imgGTA4 from '../image/Grand Theft Auto V/4.jpg';
import imgGTA5 from '../image/Grand Theft Auto V/5.jpg';
import imgAssassinsCreed1 from '../image/Assassins Creed Origins/1.jpg';
import imgAssassinsCreed2 from '../image/Assassins Creed Origins/2.jpg';
import imgAssassinsCreed3 from '../image/Assassins Creed Origins/3.jpg';
import imgAssassinsCreed4 from '../image/Assassins Creed Origins/4.jpg';
import imgAssassinsCreed5 from '../image/Assassins Creed Origins/5.jpg';
import imgMafia1 from '../image/Mafia Definitive Edition/1.jpg';
import imgMafia2 from '../image/Mafia Definitive Edition/2.jpg';
import imgMafia3 from '../image/Mafia Definitive Edition/3.jpg';
import imgMafia4 from '../image/Mafia Definitive Edition/4.jpg';
import imgMafia5 from '../image/Mafia Definitive Edition/5.jpg';
import imgCyberpunk1 from '../image/Cyberpunk 2077/1.jpg';
import imgCyberpunk2 from '../image/Cyberpunk 2077/2.jpg';
import imgCyberpunk3 from '../image/Cyberpunk 2077/3.jpg';
import imgCyberpunk4 from '../image/Cyberpunk 2077/4.jpg';
import imgCyberpunk5 from '../image/Cyberpunk 2077/5.jpg';
import imgRDR1 from '../image/Red Dead Redemption 2/1.jpg';
import imgRDR2 from '../image/Red Dead Redemption 2/2.jpg';
import imgRDR3 from '../image/Red Dead Redemption 2/3.jpg';
import imgRDR4 from '../image/Red Dead Redemption 2/4.jpg';
import imgRDR5 from '../image/Red Dead Redemption 2/5.jpg';
import imgStellaris1 from '../image/Stellaris/1.jpg';
import imgStellaris2 from '../image/Stellaris/2.jpg';
import imgStellaris3 from '../image/Stellaris/3.jpg';
import imgStellaris4 from '../image/Stellaris/4.jpg';
import imgStellaris5 from '../image/Stellaris/5.jpg';
import imgCrusaderKings1 from '../image/Crusader Kings III/1.jpg';
import imgCrusaderKings2 from '../image/Crusader Kings III/2.jpg';
import imgCrusaderKings3 from '../image/Crusader Kings III/3.jpg';
import imgCrusaderKings4 from '../image/Crusader Kings III/4.jpg';
import imgCrusaderKings5 from '../image/Crusader Kings III/5.jpg';
import imgBaldursGate1 from '../image/Baldurs Gate 3/1.jpg';
import imgBaldursGate2 from '../image/Baldurs Gate 3/2.jpg';
import imgBaldursGate3 from '../image/Baldurs Gate 3/3.jpg';
import imgBaldursGate4 from '../image/Baldurs Gate 3/4.jpg';
import imgBaldursGate5 from '../image/Baldurs Gate 3/5.jpg';
import imgXCOM1 from '../image/XCOM 2/1.jpg';
import imgXCOM2 from '../image/XCOM 2/2.jpg';
import imgXCOM3 from '../image/XCOM 2/3.jpg';
import imgXCOM4 from '../image/XCOM 2/4.jpg';
import imgXCOM5 from '../image/XCOM 2/5.jpg';
import imgFallout1 from '../image/Fallout 4/1.jpg';
import imgFallout2 from '../image/Fallout 4/2.jpg';
import imgFallout3 from '../image/Fallout 4/3.jpg';
import imgFallout4 from '../image/Fallout 4/4.jpg';
import imgFallout5 from '../image/Fallout 4/5.jpg';

import { Items } from './types';

export const labels: { [index: number]: string } = {
  0.5: 'ужасный',
  1: 'ужасный+',
  1.5: 'низкий',
  2: 'низкий+',
  2.5: 'средний',
  3: 'средний+',
  3.5: 'хороший',
  4: 'хороший+',
  4.5: 'превосходный',
  5: 'превосходный+',
};

export const items = new Map<number, Items> (
  [
    [0, {
      images: 
        [
          imgAgeOfWonders1,
          imgAgeOfWonders2,
          imgAgeOfWonders3,
          imgAgeOfWonders4,
          imgAgeOfWonders5,
        ],
      name: `Age of Wonders: Planetfall`,
      text: `Помогите своему народу оправиться после краха галактической империи
      и приведите его к процветанию. Age of Wonders: Planetfall — это
      стратегическая игра от компании Triumph Studios, которая разработала
      популярную серию игр Age of Wonders. В новой игре вы сможете опробовать
      увлекательную тактику пошаговых сражений и продуманную систему развития
      государства, знакомую по ранним частям серии, в научно-фантастической
      вселенной. Постройте свою империю, возглавив одну из шести уникальных
      фракций, в том числе воинственных представителей Авангарда, кибернетических
      зомби из Ассамблеи и отважных амазонок, которые приручили динозавров.
      Проявите хитрость, стойкость, смелость и чудеса дипломатии, чтобы создать
      собственную утопию. Изучите историю сгинувшей цивилизации, исследуя
      разрушенные планеты и встречаясь с другими уцелевшими фракциями.
      Вам предстоит сражаться, строить, торговать и развивать технологии в
      однопользовательской кампании с глубоким сюжетом, в мирах, которые созданы
      случайным образом, или состязаться с друзьями в сетевой игре.`,
      rating: 4,
      genre: ['Стратегия', 'Пошаговая'],
    }],
    [1, {
      images: 
        [
          imgDivinity1,
          imgDivinity2,
          imgDivinity3,
          imgDivinity4,
          imgDivinity5,
        ],
      name: `Divinity: Original Sin 2 - Definitive Edition`,
      text: `Знаменитая ролевая игра от разработчиков Baldur's Gate 3. Соберите 
      отряд. Освойте мощную боевую систему. Пригласите с собой до трех друзей, но 
      помните, что только один из вас сможет стать богом.`,
      rating: 4.5,
      genre: ['Ролевая','Пошаговая'],
    }],
    [2, {
      images: 
        [
          imgETS1,
          imgETS2,
          imgETS3,
          imgETS4,
          imgETS5,
        ],
      name: `Euro Truck Simulator 2`,
      text: `Станьте королем европейских дорог — водителем грузовика, который 
      доставляет важные грузы на немалые расстояния! Вас ждут десятки городов 
      Великобритании, Бельгии, Германии, Италии, Нидерландов, Польши и не только. 
      Испытайте свои умения, выносливость и скорость. Докажите, что готовы стать
      частью элитного сообщества дальнобойщиков!`,
      rating: 5,
      genre: ['Автосимулятор'],
    }],
    [3, {
      images: 
        [
          imgDetroitBH1,
          imgDetroitBH2,
          imgDetroitBH3,
          imgDetroitBH4,
          imgDetroitBH5,
        ],
      name: `Detroit: Become Human`,
      text: `Детройт, 2038 год. Технологии развились до такой степени, что 
      человекообразные андроиды встречаются на каждом шагу. Они говорят, 
      двигаются, ведут себя словно человеческие существа, но они — лишь машины 
      в на службе у людей. Играйте за трех разных андроидов и наблюдайте мир на 
      грани хаоса — наше возможное будущее — их глазами. Каждое ваше решение 
      приведет к драматическим поворотам напряженного, ветвящегося сюжета игры. 
      Вы столкнетесь с моральными дилеммами, вам предстоит решать, кому жить и 
      кому умереть. Какими окажутся будущее Детройта и судьба человечества в 
      результате тысяч принятых вами решений и десятков возможных концовок?`,
      rating: 4.5,
      genre: ['Экшен', 'Интерактивное кино'],
    }],
    [4, {
      images: 
        [
          imgCivilizationVI1,
          imgCivilizationVI2,
          imgCivilizationVI3,
          imgCivilizationVI4,
          imgCivilizationVI5,
        ],
      name: `Sid Meier's Civilization VI: Platinum Edition`,
      text: `Созданная легендарным игровым дизайнером Сидом Мейером Civilization —
      это серия пошаговых стратегий, в которых вам нужно создать империю,
      способную выдержать испытание временем. Исследуйте новые земли, изучайте
      технологии, побеждайте врагов и бросайте вызов величайшим правителям в
      истории человечества, чтобы сделать свою нацию по-настоящему великой.
      Игра Civilization VI позволяет взаимодействовать с миром множеством новых
      способов: теперь города растут и постепенно заполняют пространство на
      карте; благодаря технологическим открытиям и приобретению культурных
      знаний появляются новые возможности; соперники преследуют свои цели,
      основанные на исторических предпочтениях, и пытаются опередить вас на
      пути к победе, которую можно одержать одним из пяти способов.
      Sid Meier's Civilization VI: Platinum Edition прекрасно подходит для
      первого знакомства игроков на ПК с захватывающим игровым процессом,
      благодаря которому Civilization стала одной из величайших игр в истории.
      В набор входят игра Sid Meier's Civilization VI, шесть наборов загружаемых
      материалов, а также дополнения Rise and Fall и Gathering Storm.`,
      rating: 4,
      genre: ['Стратегия', 'Пошаговая'],
    }],
    [5, {
      images:
        [
          imgMassEffectLE1,
          imgMassEffectLE2,
          imgMassEffectLE3,
          imgMassEffectLE4,
          imgMassEffectLE5,
        ],
      name: `Mass Effect: Legendary Edition`,
      text: `Один человек — это все, что стоит между человечеством и величайшей 
      угрозой всему живому. Вспомните легенду: капитан Шепард возвращается в 
      новом издании знаменитой трилогии Mass Effect — Mass Effect издание 
      Legendary. Содержит основной одиночный контент и более 40 дополнений 
      из Mass Effect, Mass Effect 2 и Mass Effect 3, а также бонусное оружие, 
      броню и наборы. Весь контент оптимизирован под разрешение 4K Ultra HD. 
      Исследуйте уголки невероятно богатой вселенной, где все ваши действия и 
      решения будут иметь последствия.`,
      rating: 4.5,
      genre: ['Экшен', 'Ролевая'],
    }],
    [6, {
      images:
        [
          imgGTA1,
          imgGTA2,
          imgGTA3,
          imgGTA4,
          imgGTA5,
        ],
      name: `Grand Theft Auto V`,
      text: `Когда молодой уличный жулик, отставной грабитель банков и опасный 
      для общества психопат оказываются втянуты в разборки с самыми пугающими и 
      сумасшедшими представителями криминального мира, правительства США и 
      индустрии развлечений, им приходится выполнить серию рискованных налетов, 
      чтобы выжить в безжалостном городе, где они не могут доверять никому – 
      и в первую очередь друг другу.
      Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир 
      Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров 
      в секунду.`,
      rating: 4,
      genre: ['Экшен'],
    }],
    [7, {
      images:
        [
          imgAssassinsCreed1,
          imgAssassinsCreed2,
          imgAssassinsCreed3,
          imgAssassinsCreed4,
          imgAssassinsCreed5,
        ],
      name: `Assassin's Creed® Origins`,
      text: `Раскройте тайны Древнего Египта и узнайте, как было создано 
      Братство ассасинов.
      *Интерактивный тур "Assassin's Creed®: Древний Египет" доступен в новом 
      обновлении!*
      НОВЫЕ ТЕРРИТОРИИ
      Воды Нила, таинственные пирамиды, дикие животные и беспощадные противники.
      НОВЫЕ ИСТОРИИ
      Многочисленные задания, захватывающие истории и колоритные персонажи - от 
      аристократов до нищих.
      ЭКШН-RPG
      Новая механика боя, разнообразное оружие, проработанная система прогресса 
      и уникальные боссы.`,
      rating: 4,
      genre: ['Экшен', 'Ролевая'],
    }],
    [8, {
      images:
        [
          imgMafia1,
          imgMafia2,
          imgMafia3,
          imgMafia4,
          imgMafia5,
        ],
      name: `Mafia: Definitive Edition`,
      text: `Первая часть криминальной саги Mafia — 30-е годы, Лост-Хэвен, 
      Иллинойс. Ремейк культовой игры, воссозданной с нуля. Постройте карьеру 
      мафиози во времена сухого закона. После случайной встречи с мафией таксист 
      Томми Анджело попадает в мир организованной преступности. Сначала он 
      настороженно относится к семье Сальери, но большие деньги меняют его 
      отношение.`,
      rating: 4,
      genre: ['Экшен'],
    }],
    [9, {
      images:
        [
          imgCyberpunk1,
          imgCyberpunk2,
          imgCyberpunk3,
          imgCyberpunk4,
          imgCyberpunk5,
        ],
      name: `Cyberpunk 2077`,
      text: `Cyberpunk 2077 — приключенческая ролевая игра с открытым миром, 
      рассказывающая о киберпанке-наёмнике Ви и борьбе за жизнь в мегаполисе 
      Найт-Сити, где выше всего ценятся власть, роскошь и модификации тела. 
      Мрачное будущее стало ещё более впечатляющим в улучшенной версии, 
      в которую вошли новые дополнительные материалы. Создайте персонажа, 
      выберите стиль игры и начните свой путь к высшей лиге, выполняя заказы, 
      улучшая репутацию и оттачивая навыки. Ваши поступки влияют на происходящее 
      и на весь город. В нём рождаются легенды. Какую сложат о вас?`,
      rating: 4,
      genre: ['Экшен', 'Ролевая'],
    }],
    [10, {
      images:
        [
          imgRDR1,
          imgRDR2,
          imgRDR3,
          imgRDR4,
          imgRDR5,
        ],
      name: `Red Dead Redemption 2`,
      text: `Америка, 1899 год.
      Артур Морган и другие подручные Датча ван дер Линде вынуждены пуститься в 
      бега. Их банде предстоит участвовать в кражах, грабежах и перестрелках в 
      самом сердце Америки. За ними по пятам идут федеральные агенты и лучшие в 
      стране охотники за головами, а саму банду разрывают внутренние противоречия.
      Артуру предстоит выбрать, что для него важнее: его собственные идеалы или 
      же верность людям, которые его взрастили.`,
      rating: 4.5,
      genre: ['Экшен'],
    }],
    [11, {
      images:
        [
          imgStellaris1,
          imgStellaris2,
          imgStellaris3,
          imgStellaris4,
          imgStellaris5,
        ],
      name: `Stellaris`,
      text: `Встречайте бесчисленное множество инопланетных рас и 
      взаимодействуйте с ними в своих межзвездных путешествиях. Создайте 
      галактическую империю: пусть научные корабли бороздят просторы вселенной, 
      а строительные суда окружают обнаруженные планеты станциями. Находите 
      таинственные сокровища, открывайте для себя чудеса космоса и направляйте 
      свой народ, расширяя или ограничивая возможности исследователей. Будьте 
      готовы ко всему — держитесь союзников и берегитесь врагов.
      Как и во всех наших глобальных стратегиях, в Stellaris со временем у вас 
      появляются новые возможности. А политика бесплатных обновлений, 
      существующая в каждой активно поддерживаемой игре от Paradox, позволит 
      вам еще больше усилить и расширить свою империю с новыми технологиями и 
      возможностями. Что же ждет вас там, среди звезд? Ответ найдете лишь вы 
      сами.`,
      rating: 4.5,
      genre: ['Стратегия'],
    }],
    [12, {
      images:
        [
          imgCrusaderKings1,
          imgCrusaderKings2,
          imgCrusaderKings3,
          imgCrusaderKings4,
          imgCrusaderKings5,
        ],
      name: `Crusader Kings III`,
      text: `Ваше наследие ждет. Выберите благородный род и приведите свою 
      династию к славе в средневековой истории, разворачивающейся на протяжении 
      поколений. Война — лишь один из способов утвердить свою власть. Настоящий 
      правитель применяет дипломатию, знает свои владения и умеет быть коварным. 
      Crusader Kings III — это продолжение популярной серии игр от Paradox 
      Development Studio, завоевавшей любовь игроков сочетанием глобальной 
      стратегии и ролевой игры в антураже Средневековья.`,
      rating: 4.5,
      genre: ['Стратегия', 'Ролевая'],
    }],
    [13, {
      images:
        [
          imgBaldursGate1,
          imgBaldursGate2,
          imgBaldursGate3,
          imgBaldursGate4,
          imgBaldursGate5,
        ],
      name: `Baldur's Gate 3`,
      text: `Соберите отряд и вернитесь в Забытые Королевства. Вас ждет история 
      о дружбе и предательстве, выживании и самопожертвовании, о сладком зове 
      абсолютной власти.
      Ваш мозг стал вместилищем для личинки иллитида, и она пробуждает в вас 
      таинственные, пугающие способности. Сопротивляйтесь паразиту и обратите 
      тьму против себя самой – или же безоглядно отдайтесь злу и станьте его 
      воплощением.
      Встречайте ролевую игру нового поколения от создателей 
      Divinity: Original Sin 2 в мире Dungeons and Dragons.`,
      rating: 4.5,
      genre: ['Ролевая', 'Пошаговая'],
    }],
    [14, {
      images:
        [
          imgXCOM1,
          imgXCOM2,
          imgXCOM3,
          imgXCOM4,
          imgXCOM5,
        ],
      name: `XCOM® 2`,
      text: `XCOM 2 – это продолжение полюбившейся игрокам и критикам стратегии 
      XCOM: Enemy Unknown, получившей в 2012 году титул «Игра года».
      Земля изменилась. Двадцать лет прошло, с тех пор как мировые лидеры 
      подписали акт о безоговорочной капитуляции перед пришельцами. 
      Организация XCOM, последний рубеж обороны Земли, уничтожена, а её остатки 
      рассеяны по миру. В XCOM 2 планетой правят пришельцы, застраивая её 
      сверкающими городами и обещая человечеству безоблачное будущее. 
      Однако инопланетяне втайне вынашивают зловещие планы и уничтожают всех, 
      кто отказывается жить по новым правилам.
      Только те, кто обитает на окраинах нового мира, сохранили остатки свободы. 
      Они собираются с силами, чтобы дать отпор захватчикам. Вынужденные 
      постоянно скрываться от превосходящего их по силе противника, бывшие 
      агенты XCOM пытаются возродить свою организацию, разоблачить оккупантов 
      и уничтожить их раз и навсегда.`,
      rating: 4,
      genre: ['Стратегия', 'Пошаговая'],
    }],
    [15, {
      images:
        [
          imgFallout1,
          imgFallout2,
          imgFallout3,
          imgFallout4,
          imgFallout5,
        ],
      name: `Fallout 4`,
      text: `Bethesda Game Studios, создатель популярнейших игр Fallout 3 и 
      The Elder Scrolls V: Skyrim, приглашает вас в мир Fallout 4 – своей самой 
      грандиозной игры нового поколения с открытым миром.
      Вы – единственный выживший из убежища 111, оказавшийся в мире, 
      разрушенном ядерной войной. Каждый миг вы сражаетесь за выживание, 
      каждое решение может стать последним. Но именно от вас зависит судьба 
      пустошей. Добро пожаловать домой.`,
      rating: 4,
      genre: ['Экшен', 'Ролевая'],
    }],
  ],
);