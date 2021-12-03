export default {
  articles: [
    {
      id: 1,
      title: '🤔 Почему Вика?',
      description: 'Почему мы выбрали это название',
      likes: 10,
      dislikes: 5,
      owner: 1,
      project: 1,
      tags: [],
      elements: [
        {
          type: 'p',
          content:
            'При выходе на работу новый сотрудник часто сталкивается со сделующим диалогом:',
        },
        {
          type: 'pre',
          content:
            'Новый сотрудник: \n Привет, Александр! Подскажи как мне выполнить эту задачу?',
        },
        {
          type: 'pre',
          content:
          'Александр: \n Привет! Я решал ее давно, Валерий более подкован в этом вопросе спроси его.',
        },
        {
          type: 'pre',
          content:
            'Новый сотрудник: \n Привет, Валерий! Александр сказал что ты можеш помочь.',
        },
        {
          type: 'pre',
          content:
            'Валерий: \n Привет! Только вчера делился этим решением с другим новичком! Спроси его.',
        },
        {
          type: 'span',
          content:
            'И длилось это долгие часы..',
        },
        {
          type: 'p',
          content:
            'Имя Вика асоциируется у сотрудника с Wiki (так обычно называют потобные сервисы). Вика как бы становится членом команды, который всегда готов помочь в поиске информации.',
        },
        {
          type: 'p',
          content:
            'В команде формируется устойчевое выражение: "Спроси Вику!". Что повышает популярность сервиса внутри компании.',
        },
      ],
    },
    {
      id: 2,
      title: '😱 Как этим пользоваться?',
      description: 'Описание функционала приложения',
      likes: 10,
      dislikes: 5,
      owner: 1,
      project: 1,
      elements: [
        {
          type: 'p',
          content:
            'Написать короткий гайд...',
        },
      ],
    },
    {
      id: 3,
      title: '🤖 Планы развития',
      description: 'Что планирум сделать в будущем...',
      likes: 10,
      dislikes: 5,
      owner: 1,
      project: 1,
      elements: [
        {
          type: 'p',
          content:
            'Написать короткое описание будущего функционала...',
        },
      ],
    },
    {
      id: 4,
      title: '💰 Поговорим о деньгах...',
      description: 'Стоимость разработки, экономический эффект',
      likes: 10,
      dislikes: 5,
      owner: 1,
      project: 1,
      elements: [
        {
          type: 'p',
          content:
            'Расписать денежную состовляющую...',
        },
        {
          type: 'codepen',
          content: null,
          props: {
            height: '500',
            width: '100%',
            src: 'https://codepen.io/sashachepuha/embed/preview/porzLNZ?default-tab=js&theme-id=light',
            frameborder: 'no',
          },
        },
      ],
    },
    // СТАТЬИ БАНКА
    {
      id: 10,
      title: '👋 Добро пожаловать!',
      description: 'Привет! Я Вика! Твой помощник в компании!',
      likes: 10,
      dislikes: 5,
      owner: 3,
      project: 1,
      elements: [
        {
          type: 'msg',
          content:
            'Привет! Я Вика! Твой помощник в компании! Наша команда очень рада, что с нами новый герой!⚔️',
        },
        {
          type: 'msg',
          content:
            'Самая главная ценность для нас - наши сотрудники🧍. Во время прохождения курсов не стесняйся задавать вопросы живым людям! Для этого у тебя есть наставник👨‍🏫',
        },
        {
          type: 'msg',
          content:
            'Ниже представлены пункты которые ты должен был пройти в первый день. Проверь, что все верно',
        },
        {
          type: 'msg',
          content:
            '1. Ознакомлен со своей должностной инструкцией? Если нет, обратитесь, пожалуйста, в кабинет 404 к главному специалисту по работе с сотрудниками Лидии Григорьевне для скорейшего решения данной проблемы',
        },
        {
          type: 'msg',
          content:
            '2. Получил на руки трудовой договор?🗎 Если нет, обратитесь, пожалуйста, в кабинет 404 к главному специалисту по работе с сотрудниками Лидии Григорьевне для скорейшего решения данной проблемы',
        },
        {
          type: 'msg',
          content:
            '3. Был проведен обязательный инструктаж? Если нет, обратитесь, пожалуйста, в кабинет 808 к главному специалисту службы безопасности Дмитрию Юрьевичу для скорейшего решения данного вопроса)',
        },
        {
          type: 'msg',
          content:
            '4. Вы уже знакомы со своим наставником? Наставник - человек который поможет вам в адаптации и решение рабочих моментов. Если нет, обратитесь, пожалуйста, в кабинет 708 к руководителю проекта Сергей Геннадьевичу он поможет вам и познакомит с наставником',
        },
        {
          type: 'msg',
          content:
            '5. Была ли проведена экскурсия по офису? У нас вкусные печеньки🍪 Если нет, обратитесь, пожалуйста, к вашему наставнику Игорю',
        },
        {
          type: 'msg',
          content:
            '6. Проверьте, пожалуйста, доступ к jira, Confluence,IDM.🖥️ Если нет, обратитесь, пожалуйста, к специалисту службы поддержки Дмитрию Викторовичу для скорейшего решения данной проблемы',
        },
        {
          type: 'h4',
          content:
            'Теперь  вы готовы к новым подвигам.🙌',
        },
      ],
    },
    {
      id: 11,
      title: '🤔 Что тебе доступно в банке?',
      description: 'Раскажем о бонусах',
      likes: 10,
      dislikes: 5,
      owner: 3,
      project: 1,
      elements: [
        {
          type: 'h2',
          content:
            'Социалка 🎁',
        },
        {
          type: 'h4',
          content:
            '✪ Льготы молодым родителям',
        },
        {
          type: 'h4',
          content:
            '✪ Отпуск молодоженам',
        },
        {
          type: 'h4',
          content:
            '✪ Врач офиса',
        },
        {
          type: 'h4',
          content:
            '✪ Кафетерий льгот',
        },
        {
          type: 'h4',
          content:
            '✪ Обучение и развитие',
        },
        {
          type: 'h4',
          content:
            '✪ Предложения партнеров банка',
        },
        {
          type: 'h2',
          content:
            'Материальные блага 💰',
        },
        {
          type: 'h4',
          content:
            '✪ Премирование',
        },
        {
          type: 'h4',
          content:
            '✪ Зарплата, отпускные и больничный',
        },
        {
          type: 'h4',
          content:
            '✪ Материальная помощь',
        },
        {
          type: 'h4',
          content:
            '✪ Программа благополучия',
        },
        {
          type: 'h2',
          content:
            'Продукты от банка🏦',
        },
        {
          type: 'h4',
          content:
            '✪ Зарплатная карта и другие предложения банка',
        },
        {
          type: 'h4',
          content:
            '✪ Карточные продукты ПСБ',
        },
        {
          type: 'h4',
          content:
            '✪ Кредитные продукты',
        },
        {
          type: 'h4',
          content:
            '✪ «Без формальностей»: кредит для сотрудников',
        },
        {
          type: 'h4',
          content:
            '✪ Ипотека для сотрудников',
        },
        {
          type: 'h4',
          content:
            '✪ Потребительское кредитование',
        },
        {
          type: 'h4',
          content:
            '✪ Овердрафт к зарплатной карте',
        },
        {
          type: 'h4',
          content:
            '✪ Преимущества ПСБ',
        },
        {
          type: 'h4',
          content:
            '✪ Инвестиционные продукты',
        },
        {
          type: 'h4',
          content:
            '✪ Брокерское обслуживание',
        },
      ],
    },
    {
      id: 12,
      title: '👨‍💻 Что требуется от тебя?',
      description: 'Наши требования',
      likes: 10,
      dislikes: 5,
      owner: 3,
      project: 1,
      elements: [
        {
          type: 'h4',
          content:
            '✪ Правила трудового распорядка с 10 до 19',
        },
        {
          type: 'h4',
          content:
            '✪ Испытательный срок 3 месяца⌛',
        },
        {
          type: 'h4',
          content:
            '✪ Постановка целей. Мы хотим, чтобы ты развивался🏋️‍♂️',
        },
        {
          type: 'h4',
          content:
            '✪ Нормативные документы. Отчеты вовремя и будет stonks 📈',
        },
        {
          type: 'h4',
          content:
            '✪ Правила героев ПСБ 📈',
        },
      ],
    },
    {
      id: 13,
      title: '⚔️ Правила героев ПСБ',
      description: 'Наши правила',
      likes: 10,
      dislikes: 5,
      owner: 3,
      project: 1,
      elements: [
        {
          type: 'h2',
          content:
            'Широта взглядов 👀',
        },
        {
          type: 'h3',
          content:
            'Смотрю шире на свои задачи и помогаю Банку меняться',
        },
        {
          type: 'h3',
          content:
            'Как поступаю:',
        },
        {
          type: 'h4',
          content:
            '✪ Своими действиями помогаю Банку выполнить стратегические задачи оборонной отрасли и усилить конкурентные преимущества на рынке',
        },
        {
          type: 'h4',
          content:
            '✪ Понимаю и горжусь, что работаю для поддержания экономической безопасности страны',
        },
        {
          type: 'h4',
          content:
            '✪ Расставляю приоритеты в своей работе, тщательно взвешиваю риски, оцениваю последствия',
        },
        {
          type: 'h4',
          content:
            '✪ Изучаю тренды индустрии, рынка и технологий, исследую ожидания клиентов, чтобы найти новые решения для своей работы',
        },
        {
          type: 'h2',
          content:
            'Личная ответственность ✊',
        },
        {
          type: 'h3',
          content:
            'Отвечаю за свои действия и решения',
        },
        {
          type: 'h3',
          content:
            'Как поступаю:',
        },
        {
          type: 'h4',
          content:
            '✪ Держу слово, данное коллегам и клиентам',
        },
        {
          type: 'h4',
          content:
            '✪ Оцениваю результат своей работы по тому, насколько он помогает достигать целей Банка',
        },
        {
          type: 'h4',
          content:
            '✪ Постоянно наращиваю профессиональные знания, компетенции и навыки',
        },
        {
          type: 'h4',
          content:
            '✪ Заряжаю энергией коллег и клиентов, создаю атмосферу, способствующую развитию организации',
        },
        {
          type: 'h2',
          content:
            'Единая команда🤝',
        },
        {
          type: 'h3',
          content:
            'Сотрудничаем для решения общих задач',
        },
        {
          type: 'h3',
          content:
            'Как поступаю:',
        },
        {
          type: 'h4',
          content:
            '✪ Договариваюсь с коллегами, всегда готов к открытому конструктивному диалогу и взаимопомощи',
        },
        {
          type: 'h4',
          content:
            '✪ Считаю своей командой не только свое структурное подразделение, но и весь Банк',
        },
        {
          type: 'h4',
          content:
            '✪ Вместе с коллегами отвечаю за успехи и неудачи, отмечаю вклад каждого',
        },
        {
          type: 'h4',
          content:
            '✪ Не допускаю дискриминации по признакам пола, возраста, национальности, вероисповедания, убеждений, социального положения, образования,',
        },
        {
          type: 'h4',
          content:
            '✪ трудового стажа, занимаемой должности, а также по иным признакам',
        },
      ],
    },
    {
      id: 14,
      title: '🏌 Заполни профиль о себе',
      description: '...',
      likes: 10,
      dislikes: 5,
      owner: 3,
      project: 1,
      elements: [
        {
          type: 'p',
          content:
            'Мы хотим чтобы другие сотрудники тебя тоже узнали! Расскажи про Компетенции, Увлечения,Цели. Так и найдутся люди по интересам во время кофе☕',
        },
      ],
    },
  ],
};
