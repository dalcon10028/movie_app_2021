module.exports = [
  {
    title: '๐ ์๊ฐ',
    path: '/introduction/',
    collapsable: false,
    children: [
      {
        title: '์๊ฐ',
        path: '/introduction/',
      },
    ],
  },
  {
    title: '๐ ๊ฐ์ ๊ธฐ๋ก',
    path: '/review-note/',
    collapsable: true,
    children: [
      '/2021-09-01/',
      '/2021-09-08/',
      '/2021-09-15/',
      '/2021-09-29/',
      '/2021-10-06/',
      '/2021-10-13/',
      '/2021-10-27/',
      '/2021-11-03/',
      '/2021-11-10/',
      '/2021-11-24/',
      '/2021-12-01/',
    ].map((_) => `/review-note${_}`),
  },
  {
    title: '๐๋ธ๋ก๊ทธ',
    path: '/blog/',
    collapsable: false,
    children: [
      {
        title: 'ํด๋์คํ ์ปดํฌ๋ํธ vs ํจ์ํ ์ปดํฌ๋ํธ',
        path: '/blog/react-func-class/',
      },
      {
        title: 'Chocolatey๋ฅผ ์ด์ฉํ ์ค์ต ์ธ์คํจ๋ฌ',
        path: '/blog/chocolatey/',
      },
    ],
  },
];
