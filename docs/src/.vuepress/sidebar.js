module.exports = [
  {
    title: '👋 소개',
    path: '/introduction/',
    collapsable: false,
    children: [
      {
        title: '소개',
        path: '/introduction/',
      },
    ],
  },
  {
    title: '📒 강의 기록',
    path: '/review-note/',
    collapsable: true,
    children: [
      '/2021-09-01/',
      '/2021-09-08/',
      '/2021-09-15/',
      '/2021-09-29/',
      '/2021-10-06/',
      '/2021-10-13/',
    ].map((_) => `/review-note${_}`),
  },
  {
    title: '🌈블로그',
    path: '/blog/',
    collapsable: false,
    children: [
      {
        title: '클래스형 컴포넌트 vs 함수형 컴포넌트',
        path: '/blog/react-func-class/',
      },
      {
        title: 'Chocolatey를 이용한 실습 인스톨러',
        path: '/blog/chocolatey/',
      },
    ],
  },
];
