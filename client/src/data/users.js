export default {
  users: [
    {
      id: 1,
      name: 'Батуков С.',
      specialization: 'Frontend Developer',
      role: 'Наставник', // Наставник || Новый сотрудник
      courses: [1, 2],
      bal: 5,
      complite: {
        articles: [1],
        courses: [1],
        tests: [
          { id: 1, bal: 5 },
        ],
      },
      medals: ['👋', '👩‍🚀', '🦸‍♂️'],
      contacts: 'sashachepuha@gmail.com',
    },
  ],
};
