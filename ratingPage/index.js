const users = [
  {
    name: 'Александров Игнат Анатолиевич',
    totalGames: '24534',
    victories: '9824',
    losses: '1222',
    winsPercentage: '87%',
  },
  {
    name: 'Шевченко Рафаил Михайлович',
    totalGames: '24534',
    victories: '9824',
    losses: '1222',
    winsPercentage: '87%',
  },
  {
    name: 'Мазайло Трофим Артёмович',
    totalGames: '24534',
    victories: '9824',
    losses: '1222',
    winsPercentage: '87%',
  },
  {
    name: 'Логинов Остин Данилович',
    totalGames: '24534',
    victories: '9824',
    losses: '1222',
    winsPercentage: '87%',
  },
  {
    name: 'Борисов Йошка Васильевич',
    totalGames: '24534',
    victories: '9824',
    losses: '1222',
    winsPercentage: '87%',
  },
  {
    name: 'Соловьёв Ждан Михайлович',
    totalGames: '24534',
    victories: '9824',
    losses: '1222',
    winsPercentage: '87%',
  },
  {
    name: 'Негода Михаил Эдуардович',
    totalGames: '24534',
    victories: '9824',
    losses: '1222',
    winsPercentage: '87%',
  },
  {
    name: 'Гордеев Шамиль Леонидович',
    totalGames: '24534',
    victories: '9824',
    losses: '1222',
    winsPercentage: '87%',
  },
  {
    name: 'Многогрешный Павел Виталиевич',
    totalGames: '24534',
    victories: '9824',
    losses: '1222',
    winsPercentage: '87%',
  },
  {
    name: 'Александров Игнат Анатолиевич',
    totalGames: '24534',
    victories: '9824',
    losses: '1222',
    winsPercentage: '87%',
  },
  {
    name: 'Волков Эрик Алексеевич',
    totalGames: '24534',
    victories: '9824',
    losses: '1222',
    winsPercentage: '87%',
  },
  {
    name: 'Кузьмин Ростислав Васильевич',
    totalGames: '24534',
    victories: '9824',
    losses: '1222',
    winsPercentage: '87%',
  },
  {
    name: 'Стрелков Филипп Борисович',
    totalGames: '24534',
    victories: '9824',
    losses: '1222',
    winsPercentage: '87%',
  },
  {
    name: 'Галкин Феликс Платонович',
    totalGames: '24534',
    victories: '9824',
    losses: '1222',
    winsPercentage: '87%',
  },
];

const ratingListUsers = document.querySelector('.rating__list_users');

users.map((user) => {
  const userElement = document.createElement('div');
  userElement.classList.add('rating__list_users__user');

  userElement.innerHTML = `
    <div>${user.name}</div>
    <div>${user.totalGames}</div>
    <div>${user.victories}</div>
    <div>${user.losses}</div>
    <div>${user.winsPercentage}</div>
  `;
  ratingListUsers.append(userElement);
});
