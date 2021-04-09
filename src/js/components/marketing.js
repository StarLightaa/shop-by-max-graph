export default () => {
  const marketingEl = document.querySelector('.marketing');

  if(!marketingEl) {
    return;
  }

  let counter = 0;
  let delay = 10000;

  const data = [{
      title: 'Title of product 1',
      where: 'Moscow, Russia'
    },
    {
      title: 'Title of product 2',
      where: 'Kiev, Ukraine'
    },
    {
      title: 'Title of product 3',
      where: 'Rome, Italy'
    },
  ];

  const closeMarketing = () => {
    marketingEl.classList.remove('marketing--visible');
  }

  const changeMarketingData = () => {
    marketingEl.classList.remove('marketing--visible');

    setTimeout(() => {
      marketingEl.classList.add('marketing--visible');
    }, delay - 8000);

    const stringTitle = `${data[counter].title}`;
    const stringWhere = `15 minutes ago ${data[counter].where}`;

    marketingEl.querySelector('.marketing__title').textContent = stringTitle;
    marketingEl.querySelector('.marketing__when-from').textContent = stringWhere;

    counter++;

    if (counter === data.length) {
      counter = 0;
    }
  }

  changeMarketingData();

  setInterval(changeMarketingData, delay);

  marketingEl.addEventListener('click', (e) => {
    if(e.target.classList.contains('marketing__close')) {
      closeMarketing();
    }
  });
};
