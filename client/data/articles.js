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
      owner: 3,
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
  ],
};
